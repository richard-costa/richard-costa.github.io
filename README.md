# richard-costa.github.io

[Site](https://richard-costa.github.io/) built with [Quarto](https://quarto.org/).

## Local workflow

```bash
quarto preview
quarto publish gh-pages  # after testing the current branch
```

## Structure

- `index.qmd`, `writing.qmd`: homepage and aggregate writing listing.
- `notes/`, `posts/`: reference notes and chronological posts.
- `bookmarks.qmd`, `now.qmd`, `changelog.qmd`, `404.qmd`: supporting pages.
- `files/`, `data/`: downloads and runtime data.
- `_templates/`, `_includes/`, `_scripts/`: listings, HTML includes and generators.
- `theme.scss`, `_styles/`, `site.js`, `_quarto.yml`: presentation and site configuration.

Feeds: `/writing.xml`, `/posts/index.xml`, and the generated `/notes.xml`.

## Homepage media

Originals live in the sibling `arch-setup` repository:

```bash
cd ../arch-setup
./scripts/sync-media.sh
cd ../richard-costa.github.io
./_scripts/update_home_media.sh
```

Pass the `arch-setup` path or set `ARCH_SETUP_ROOT` if it is not nearby. The generator reads `wallpapers/`, `video-wallpapers/`, and `media-sources.toml`, then rebuilds `assets/home-media/` and `data/home-media.json`.

Normal `quarto render` does not require the sibling checkout or media tools.
