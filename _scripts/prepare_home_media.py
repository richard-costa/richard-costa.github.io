#!/usr/bin/env python3
"""Build optimized homepage media from a sibling arch-setup checkout."""

from __future__ import annotations

import argparse
import json
import re
import shutil
import subprocess
import sys
import tomllib
import unicodedata
from pathlib import Path


IMAGE_EXTENSIONS = {".jpg", ".jpeg", ".png"}
VIDEO_EXTENSIONS = {".mp4"}
IMAGE_QUALITY = 80
VIDEO_CRF = 29
VIDEO_MAX_BYTES = 12 * 1024 * 1024


def source_files(directory: Path, extensions: set[str]) -> list[Path]:
    return sorted(
        (path for path in directory.rglob("*") if path.suffix.lower() in extensions),
        key=lambda path: path.relative_to(directory).as_posix().casefold(),
    )


def safe_stem(path: Path, used_stems: set[str]) -> str:
    normalized = unicodedata.normalize("NFKD", path.stem).encode("ascii", "ignore").decode()
    stem = re.sub(r"[^a-z0-9]+", "-", normalized.lower()).strip("-") or "media"
    candidate = stem
    suffix = 2
    while candidate in used_stems:
        candidate = f"{stem}-{suffix}"
        suffix += 1
    used_stems.add(candidate)
    return candidate


def load_source_urls(source_root: Path) -> dict[str, str]:
    path = source_root / "media-sources.toml"
    if not path.is_file():
        raise FileNotFoundError(f"missing source metadata: {path}")

    with path.open("rb") as file:
        data = tomllib.load(file)

    sources = data.get("sources", {})
    if not isinstance(sources, dict):
        raise ValueError(f"invalid [sources] table in {path}")

    return {str(name): str(url) for name, url in sources.items()}


def original_url(source: Path, source_urls: dict[str, str]) -> str:
    if source.name in source_urls:
        return source_urls[source.name]

    match = re.fullmatch(r"wallhaven-([a-z0-9]+)\.(?:jpe?g|png)", source.name, re.IGNORECASE)
    if match:
        return f"https://wallhaven.cc/w/{match.group(1).lower()}"

    raise ValueError(f"No original URL configured for {source.name}")


def run(command: list[str]) -> None:
    subprocess.run(command, check=True, stdout=subprocess.DEVNULL, stderr=subprocess.PIPE, text=True)


def optimize_image(source: Path, destination: Path) -> None:
    magick = shutil.which("magick") or shutil.which("convert")
    if magick:
        run(
            [
                magick,
                str(source),
                "-auto-orient",
                "-resize",
                "1600x1600>",
                "-strip",
                "-quality",
                str(IMAGE_QUALITY),
                str(destination),
            ]
        )
        return

    try:
        from PIL import Image, ImageOps
    except ImportError as error:
        raise RuntimeError("ImageMagick or Pillow is required to optimize images.") from error

    with Image.open(source) as image:
        image = ImageOps.exif_transpose(image)
        image.thumbnail((1600, 1600))
        image.save(destination, "WEBP", quality=IMAGE_QUALITY, method=6)


def optimize_video(source: Path, destination: Path, *, retry: bool = False) -> None:
    width = "960" if retry else "1280"
    crf = "31" if retry else str(VIDEO_CRF)
    run(
        [
            "ffmpeg",
            "-y",
            "-i",
            str(source),
            "-map",
            "0:v:0",
            "-an",
            "-map_metadata",
            "-1",
            "-vf",
            f"fps=30,scale=w='min({width},iw)':h=-2",
            "-c:v",
            "libx264",
            "-crf",
            crf,
            "-preset",
            "medium",
            "-pix_fmt",
            "yuv420p",
            "-movflags",
            "+faststart",
            str(destination),
        ]
    )


def clean_output(directory: Path, extension: str) -> None:
    directory.mkdir(parents=True, exist_ok=True)
    for path in directory.glob(f"*{extension}"):
        path.unlink()


def format_size(size: int) -> str:
    return f"{size / (1024 * 1024):.2f} MB"


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("source", nargs="?", type=Path, default=Path("../arch-setup"))
    args = parser.parse_args()

    source_root = args.source.resolve()
    wallpaper_root = source_root / "wallpapers"
    video_root = source_root / "video-wallpapers"
    if not wallpaper_root.is_dir() or not video_root.is_dir():
        parser.error("source must contain wallpapers/ and video-wallpapers/ directories")
    if not shutil.which("ffmpeg"):
        parser.error("FFmpeg is required to optimize videos")
    if not (shutil.which("magick") or shutil.which("convert")):
        try:
            import PIL  # noqa: F401
        except ImportError:
            parser.error("ImageMagick or Pillow is required to optimize images")

    project_root = Path(__file__).resolve().parents[1]
    image_output = project_root / "assets" / "home-media" / "images"
    video_output = project_root / "assets" / "home-media" / "videos"
    manifest_path = project_root / "data" / "home-media.json"
    missing_urls_path = project_root / "data" / "home-media-missing-urls.txt"
    images = source_files(wallpaper_root, IMAGE_EXTENSIONS)
    videos = source_files(video_root, VIDEO_EXTENSIONS)
    try:
        configured_source_urls = load_source_urls(source_root)
    except (FileNotFoundError, ValueError, tomllib.TOMLDecodeError) as error:
        parser.error(str(error))

    source_urls: dict[Path, str] = {}
    missing_urls: list[str] = []

    for source in [*images, *videos]:
        try:
            source_urls[source] = original_url(source, configured_source_urls)
        except ValueError:
            missing_urls.append(source.relative_to(source_root).as_posix())

    missing_urls_path.parent.mkdir(parents=True, exist_ok=True)
    missing_urls_path.write_text(
        "\n".join(missing_urls) + ("\n" if missing_urls else ""),
        encoding="utf-8",
    )
    if missing_urls:
        parser.error(f"missing original URLs; see {missing_urls_path.relative_to(project_root)}")

    clean_output(image_output, ".webp")
    clean_output(video_output, ".mp4")

    manifest: list[dict[str, str]] = []
    failures: list[Path] = []
    used_image_stems: set[str] = set()
    used_video_stems: set[str] = set()

    for source in images:
        destination = image_output / f"{safe_stem(source, used_image_stems)}.webp"
        try:
            optimize_image(source, destination)
        except (RuntimeError, subprocess.CalledProcessError) as error:
            destination.unlink(missing_ok=True)
            failures.append(source)
            print(f"Could not convert image: {source} ({error})", file=sys.stderr)
            continue
        manifest.append(
            {
                "type": "image",
                "src": f"/assets/home-media/images/{destination.name}",
                "original": source_urls[source],
            }
        )

    for source in videos:
        destination = video_output / f"{safe_stem(source, used_video_stems)}.mp4"
        try:
            optimize_video(source, destination)
            if destination.stat().st_size > VIDEO_MAX_BYTES:
                optimize_video(source, destination, retry=True)
        except subprocess.CalledProcessError as error:
            destination.unlink(missing_ok=True)
            failures.append(source)
            print(f"Could not convert video: {source} ({error})", file=sys.stderr)
            continue
        manifest.append(
            {
                "type": "video",
                "src": f"/assets/home-media/videos/{destination.name}",
                "original": source_urls[source],
            }
        )

    manifest_path.parent.mkdir(parents=True, exist_ok=True)
    manifest_path.write_text(json.dumps(manifest, indent=2) + "\n", encoding="utf-8")

    source_size = sum(path.stat().st_size for path in [*images, *videos])
    optimized_paths = [*image_output.glob("*.webp"), *video_output.glob("*.mp4")]
    optimized_size = sum(path.stat().st_size for path in optimized_paths)
    optimized_images = list(image_output.glob("*.webp"))
    optimized_videos = list(video_output.glob("*.mp4"))
    largest_image = max(optimized_images, key=lambda path: path.stat().st_size, default=None)
    largest_video = max(optimized_videos, key=lambda path: path.stat().st_size, default=None)

    print(f"Source images: {len(images)}")
    print(f"Source videos: {len(videos)}")
    print(f"Total original size: {format_size(source_size)}")
    print(f"Total optimized size: {format_size(optimized_size)}")
    if largest_image:
        print(f"Largest optimized image: {largest_image.name} ({format_size(largest_image.stat().st_size)})")
    if largest_video:
        print(f"Largest optimized video: {largest_video.name} ({format_size(largest_video.stat().st_size)})")
    if failures:
        print(f"Failed conversions: {len(failures)}", file=sys.stderr)
        return 1
    return 0


if __name__ == "__main__":
    raise SystemExit(main())