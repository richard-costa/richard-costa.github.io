from pathlib import Path
import json
import os
import subprocess

REPO_URL = "https://github.com/richard-costa/richard-costa.github.io"
OUTPUT_DIR = Path(os.environ.get("QUARTO_PROJECT_OUTPUT_DIR", "_site"))
SKIP_PREFIXES = ("automated update", "publish", "merge pull request")


def git(*args: str) -> str:
    try:
        result = subprocess.run(
            ["git", *args],
            check=True,
            capture_output=True,
            text=True,
        )
        return result.stdout.strip()
    except Exception:
        return ""


def changelog_entries(limit: int = 12) -> list[dict[str, str]]:
    raw = git(
        "log",
        "--no-merges",
        "-n",
        "50",
        "--date=short",
        "--pretty=format:%H%x09%ad%x09%s",
    )

    entries = []
    for line in raw.splitlines():
        parts = line.split("\t", 2)
        if len(parts) != 3:
            continue

        sha, date, subject = parts
        if subject.lower().startswith(SKIP_PREFIXES):
            continue

        entries.append(
            {
                "date": date,
                "subject": subject,
                "sha": sha,
                "short_sha": sha[:7],
                "url": f"{REPO_URL}/commit/{sha}",
            }
        )

        if len(entries) >= limit:
            break

    return entries


def main() -> None:
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    (OUTPUT_DIR / "changelog.json").write_text(
        json.dumps(changelog_entries(), ensure_ascii=False, indent=2) + "\n",
        encoding="utf-8",
    )


if __name__ == "__main__":
    main()
