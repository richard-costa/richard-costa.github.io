# richard-costa.github.io

[Site](https://richard-costa.github.io/) built with [Quarto](https://quarto.org/).

## Local workflow

```bash
quarto preview
quarto publish gh-pages  # after testing the current branch
```

## Repository map

- `index.qmd`, `writing.qmd`: homepage/about and aggregate writing listing.
- `essays/`, `notes/`, `posts/`: long-form writing, reference notes, chronological posts.
- `projects.qmd`, `now.qmd`, `bookmarks.qmd`, `changelog.qmd`, `404.qmd`: project status, current activities, references, Git history, custom 404.
- `files/`, `data/`: downloads and runtime data.
- `_templates/`, `_includes/`, `_scripts/`: listings, HTML includes, post-render generators.
- `theme.scss`, `_styles/`: palette and theme partials; `_scripts/generate_giscus_theme.py` generates `/giscus-theme.css` from the same palette.
- `site.js`, `_quarto.yml`: terminal commands/site JavaScript and configuration.
- `robots.txt`, `humans.txt`: crawler rules and site trivia.

## Feeds

Quarto-native: `/writing.xml`, `/essays/index.xml`, `/posts/index.xml`. The manually grouped Notes page uses a post-render script for `/notes.xml` (including updates).

## Homepage media

Originals live in the sibling `arch-setup` repository. After changing local wallpapers:

```bash
cd ../arch-setup
./scripts/sync-media.sh
cd ../richard-costa.github.io
./_scripts/update_home_media.sh
```

The wrapper discovers a nearby checkout; alternatively pass its path or set `ARCH_SETUP_ROOT`. `_scripts/prepare_home_media.py` reads `wallpapers/`, `video-wallpapers/` and `media-sources.toml`, generating `assets/home-media/` and `data/home-media.json`. Wallhaven URLs derive from `wallhaven-<id>.<ext>`; store other URLs in `arch-setup/media-sources.toml`.

Normal `quarto render` does not require the sibling checkout, Git LFS, FFmpeg or ImageMagick/Pillow.

## TODO

At six blogroll entries, add internal scrolling to avoid pushing the full-width wallpaper section down on desktop.
