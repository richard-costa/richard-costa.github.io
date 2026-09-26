from pathlib import Path
import os
import re

VARIABLES = Path("_styles/_variables.scss")
SOURCE = Path("_styles/_giscus-theme.css")
OUTPUT_DIR = Path(os.environ.get("QUARTO_PROJECT_OUTPUT_DIR", "_site"))
OUTPUT = OUTPUT_DIR / "giscus-theme.css"

HEX_VARIABLE_RE = re.compile(
    r"^\$(?P<name>[a-z0-9-]+):\s*(?P<value>#[0-9a-fA-F]{6});",
    re.MULTILINE,
)

REQUIRED = {
    "bg",
    "surface",
    "text",
    "text-strong",
    "muted",
    "border",
    "accent",
    "accent-hover",
    "accent-strong",
    "code-bg",
    "code-border",
    "status-active",
    "status-draft",
    "danger",
}


def hex_to_rgb(value: str) -> str:
    value = value.removeprefix("#")
    return " ".join(str(int(value[i : i + 2], 16)) for i in (0, 2, 4))


def load_palette() -> dict[str, str]:
    source = VARIABLES.read_text(encoding="utf-8")
    palette = {
        match.group("name"): match.group("value")
        for match in HEX_VARIABLE_RE.finditer(source)
    }

    missing = REQUIRED - palette.keys()
    if missing:
        names = ", ".join(sorted(missing))
        raise RuntimeError(f"missing theme variables: {names}")

    return palette


def render_css(palette: dict[str, str]) -> str:
    declarations = []
    for name, value in palette.items():
        declarations.append(f"  --site-{name}: {value};")
        declarations.append(f"  --site-{name}-rgb: {hex_to_rgb(value)};")

    variables = "\n".join(declarations)
    source = SOURCE.read_text(encoding="utf-8").rstrip()

    return (
        "/* Generated from _styles/_variables.scss and "
        "_styles/_giscus-theme.css. */\n\n"
        f":root {{\n{variables}\n}}\n\n"
        f"{source}\n"
    )


def main() -> None:
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    OUTPUT.write_text(render_css(load_palette()), encoding="utf-8")


if __name__ == "__main__":
    main()
