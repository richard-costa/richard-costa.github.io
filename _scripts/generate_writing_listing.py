from datetime import datetime, timezone
from pathlib import Path
import json
import re
import subprocess

OUT = Path("data/writing.yml")

SECTIONS = {
    "essays": "essay",
    "notes": "note",
    "shorts": "short",
}


def frontmatter(source: str) -> str:
    match = re.match(r"^---\s*\n([\s\S]*?)\n---\s*\n?", source)
    return match.group(1) if match else ""


def field(meta: str, name: str) -> str:
    match = re.search(rf"^{re.escape(name)}:\s*(.+?)\s*$", meta, re.MULTILINE)
    return match.group(1).strip().strip("'\"") if match else ""


def git_modified(path: Path) -> datetime:
    try:
        value = subprocess.check_output(
            ["git", "log", "-1", "--format=%cI", "--", str(path)],
            text=True,
        ).strip()
        if value:
            return datetime.fromisoformat(value)
    except Exception:
        pass
    return datetime.fromtimestamp(path.stat().st_mtime, tz=timezone.utc)


def published_date(meta: str, path: Path) -> datetime:
    value = field(meta, "date")
    if value:
        try:
            return datetime.fromisoformat(value.replace("Z", "+00:00"))
        except ValueError:
            pass
    return git_modified(path)


def rendered_path(path: Path) -> str:
    return "/" + path.with_suffix(".html").as_posix()


def writing_items() -> list[dict[str, str]]:
    items: list[tuple[datetime, dict[str, str]]] = []

    for directory, writing_type in SECTIONS.items():
        for path in Path(directory).rglob("*.qmd"):
            if path.name == "index.qmd" or path.name.startswith("_"):
                continue

            meta = frontmatter(path.read_text(encoding="utf-8"))
            title = field(meta, "title")
            if not title:
                continue

            activity_date = (
                git_modified(path)
                if writing_type == "note"
                else published_date(meta, path)
            )

            item = {
                "title": title,
                "path": rendered_path(path),
                "date": activity_date.date().isoformat(),
                "writing_type": writing_type,
                "activity": "updated" if writing_type == "note" else "published",
            }
            items.append((activity_date, item))

    items.sort(key=lambda entry: entry[0], reverse=True)
    return [item for _, item in items]


def render_yaml(items: list[dict[str, str]]) -> str:
    lines: list[str] = []
    for item in items:
        lines.append(f"- title: {json.dumps(item['title'], ensure_ascii=False)}")
        lines.append(f"  path: {json.dumps(item['path'], ensure_ascii=False)}")
        lines.append(f"  date: {json.dumps(item['date'])}")
        lines.append(
            f"  writing_type: {json.dumps(item['writing_type'], ensure_ascii=False)}"
        )
        lines.append(f"  activity: {json.dumps(item['activity'])}")
    return "\n".join(lines) + ("\n" if lines else "")


def main() -> None:
    OUT.parent.mkdir(parents=True, exist_ok=True)
    OUT.write_text(render_yaml(writing_items()), encoding="utf-8")


if __name__ == "__main__":
    main()
