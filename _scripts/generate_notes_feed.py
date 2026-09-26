from datetime import datetime, timezone
from email.utils import format_datetime
from pathlib import Path
import html
import os
import re
import subprocess

SITE = "https://richard-costa.github.io"
OUTPUT_DIR = Path(os.environ.get("QUARTO_PROJECT_OUTPUT_DIR", "_site"))
OUT = OUTPUT_DIR / "notes.xml"


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


def field(frontmatter: str, name: str) -> str:
    match = re.search(rf"^{name}:\s*(.+?)\s*$", frontmatter, re.MULTILINE)
    return match.group(1).strip().strip("'\"") if match else ""


def note_items() -> list[tuple[datetime, str, str, str, str]]:
    items = []

    for path in Path("notes").rglob("*.qmd"):
        if path.name == "index.qmd" or path.name.startswith("_"):
            continue

        source = path.read_text(encoding="utf-8")
        match = re.match(r"^---\s*\n([\s\S]*?)\n---\s*\n?", source)
        if not match:
            continue

        meta = match.group(1)
        title = field(meta, "title")
        if not title or field(meta, "feed").lower() == "false":
            continue

        status = field(meta, "status")
        modified = git_modified(path)
        url = f"{SITE}/{path.with_suffix('.html').as_posix()}"
        description = f"Technical note · {status}" if status else "Technical note"

        items.append((modified, title, url, description, status))

    return sorted(items, reverse=True, key=lambda item: item[0])


def render_feed(items: list[tuple[datetime, str, str, str, str]]) -> str:
    xml_items = []
    for modified, title, url, description, status in items:
        category = f"\n      <category>{html.escape(status)}</category>" if status else ""
        xml_items.append(
            f"""    <item>
      <title>{html.escape(title)}</title>
      <link>{html.escape(url)}</link>
      <guid isPermaLink="true">{html.escape(url)}</guid>
      <pubDate>{format_datetime(modified)}</pubDate>
      <description>{html.escape(description)}</description>{category}
    </item>"""
        )

    last_build = items[0][0] if items else datetime.now(timezone.utc)

    return f"""<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Richard Costa — notes</title>
    <link>{SITE}/notes/</link>
    <description>Technical notes and working material by Richard Costa.</description>
    <language>en</language>
    <lastBuildDate>{format_datetime(last_build)}</lastBuildDate>
    <atom:link href="{SITE}/notes.xml" rel="self" type="application/rss+xml" />
{chr(10).join(xml_items)}
  </channel>
</rss>
"""


def main() -> None:
    OUT.parent.mkdir(parents=True, exist_ok=True)
    OUT.write_text(render_feed(note_items()), encoding="utf-8")


if __name__ == "__main__":
    main()
