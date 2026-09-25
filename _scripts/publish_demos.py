#!/usr/bin/env python3
"""Publish standalone demos that live in vendored project repositories."""

from pathlib import Path
import shutil

ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT / "_vendor" / "learning-links" / "web"
DESTINATION = ROOT / "_site" / "demos" / "learning-links"


def main() -> None:
    if not SOURCE.exists():
        raise SystemExit(
            "learning-links submodule is missing. "
            "Run: git submodule update --init --recursive"
        )

    if DESTINATION.exists():
        shutil.rmtree(DESTINATION)

    DESTINATION.parent.mkdir(parents=True, exist_ok=True)
    shutil.copytree(SOURCE, DESTINATION)


if __name__ == "__main__":
    main()
