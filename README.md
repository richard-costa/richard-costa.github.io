# richard-costa.github.io

Source for [richard-costa.github.io](https://richard-costa.github.io/).

Built with [Quarto](https://quarto.org/). Use `quarto preview` for local preview and `quarto publish gh-pages` to publish.

Writing is organized as essays, notes, and posts. `writing.qmd` and the homepage use Quarto's native listings to aggregate recent activity across all three.

## Repository map

- `index.qmd` — homepage / about with recent writing
- `writing.qmd` — aggregate writing view and main feed
- `essays/` — longer finished writing
- `notes/` — reference material and working knowledge
- `posts/` — shorter chronological writing
- `projects.qmd` — projects and status indicators
- `now.qmd` — current work / learning / reading
- `bookmarks.qmd` — saved references
- `changelog.qmd` — recent site changes from Git history
- `404.qmd` — custom shell-style 404
- `files/` — downloadable PDFs and résumé files
- `data/` — small runtime data files
- `_templates/` — custom Quarto listing presentation
- `_includes/` — Quarto HTML includes
- `_scripts/` — post-render generators
- `_styles/` — shared theme variables, SCSS partials, and Giscus source CSS
- `site.js` — site-wide JavaScript and terminal commands
- `theme.scss` — Quarto theme entrypoint
- `_quarto.yml` — site-wide configuration
- `robots.txt` / `humans.txt` — crawler rules and site trivia

## Feeds

- `/writing.xml` — all writing
- `/essays/index.xml` — essays
- `/notes.xml` — notes and note updates
- `/posts/index.xml` — posts

The aggregate, essay, and post feeds are Quarto-native. The notes feed remains a small post-render script because the Notes page is manually grouped by topic and status instead of being a listing.

## Theme structure

Site colors live in `_styles/_variables.scss`. The main theme imports partials from `_styles/`, and `_scripts/generate_giscus_theme.py` uses the same palette to generate `/giscus-theme.css` in the rendered site.

## Local workflow

```bash
quarto preview
```

To publish the current branch after testing:

```bash
quarto publish gh-pages
```

## Homepage media

Wallpaper originals live in the sibling `arch-setup` repository. After changing
your local wallpaper folders, update the two repositories in this order:

```bash
cd ../arch-setup
./scripts/sync-media.sh

cd ../richard-costa.github.io
./_scripts/update_home_media.sh
```

The site wrapper defaults to `../arch-setup`; pass another checkout path as its
first argument when needed.

`_scripts/prepare_home_media.py` reads `wallpapers/`,
`video-wallpapers/`, and `media-sources.toml` from `arch-setup`, then
regenerates optimized files under `assets/home-media/` and the
`data/home-media.json` manifest.

Wallhaven URLs are derived automatically from filenames matching
`wallhaven-<id>.<ext>`. Original URLs for other media belong in
`arch-setup/media-sources.toml`.

This media preparation is intentionally separate from `quarto render`: normal
site rendering does not require a sibling `arch-setup` checkout, Git LFS,
FFmpeg, or ImageMagick/Pillow.

## TODO

- When the homepage blogroll reaches six entries, give it an internal scroll
  area so it does not push the full-width wallpaper section down on desktop.
