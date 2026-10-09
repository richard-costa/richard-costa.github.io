# richard-costa.github.io

Source for [richard-costa.github.io](https://richard-costa.github.io/).

Built with [Quarto](https://quarto.org/). Use `quarto preview` for local preview and `quarto publish gh-pages` to publish.

Writing is organized as essays, notes, and shorts. `writing.qmd` aggregates recent activity across all three and provides the main RSS feed. A pre-render script generates the shared writing metadata; post-render scripts generate the changelog, the separate notes feed, and the Giscus theme.

## Repository map

- `index.qmd` — homepage / about with recent writing
- `writing.qmd` — aggregate writing view and main feed
- `essays/` — longer finished writing
- `notes/` — reference material and working knowledge
- `shorts/` — lightweight posts, observations, and discoveries
- `projects.qmd` — projects and status indicators
- `now.qmd` — current work / learning / reading
- `bookmarks.qmd` — saved references
- `changelog.qmd` — recent site changes from Git history
- `404.qmd` — custom shell-style 404
- `files/` — downloadable PDFs and résumé files
- `data/` — small runtime data files; `writing.yml` is generated and ignored
- `_templates/` — custom Quarto listing templates
- `_includes/` — Quarto HTML includes
- `_scripts/` — pre/post-render generators
- `_styles/` — shared theme variables, SCSS partials, and Giscus source CSS
- `site.js` — site-wide JavaScript and terminal commands
- `theme.scss` — Quarto theme entrypoint
- `_quarto.yml` — site-wide configuration
- `robots.txt` / `humans.txt` — crawler rules and site trivia

## Feeds

- `/writing.xml` — all writing
- `/essays/index.xml` — essays
- `/notes.xml` — notes and note updates
- `/shorts/index.xml` — shorts

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

Homepage media is generated from a sibling `arch-setup` checkout. Run the
optimizer after adding or changing source wallpapers or videos:

```bash
python _scripts/prepare_home_media.py [path-to-arch-setup]
```

The default source path is `../arch-setup`. The script requires FFmpeg and
either ImageMagick or Pillow, then regenerates `assets/home-media/` and
`data/home-media.json`. It validates every original-source link before replacing
generated files. Missing mappings are recorded in the local, ignored
`data/home-media-missing-urls.txt` report; add a mapping to `SOURCE_URLS` in the
script before running it again.

## TODO

- When the homepage blogroll reaches six entries, give it an internal scroll
  area so it does not push the full-width wallpaper section down on desktop.
