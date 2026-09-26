# richard-costa.github.io

Source for [richard-costa.github.io](https://richard-costa.github.io/).

Built with [Quarto](https://quarto.org/). Use `quarto preview` for local preview and `quarto publish gh-pages` to publish.

Project scripts generate the changelog from Git history, a separate RSS feed for notes, and the Giscus theme during rendering. Posts use Quarto's native listing feed.

## Repository map

- `index.qmd` — homepage / about
- `projects.qmd` — projects and status indicators
- `now.qmd` — current work / learning / reading
- `notes/` — technical notes and shared note metadata
- `posts/` — chronological posts and post metadata
- `bookmarks.qmd` — saved references
- `changelog.qmd` — recent site changes from Git history
- `404.qmd` — custom shell-style 404
- `files/` — downloadable PDFs and résumé files
- `data/` — small runtime data files
- `_includes/` — Quarto HTML includes
- `_scripts/` — post-render generators
- `_styles/` — shared theme variables, SCSS partials, and Giscus source CSS
- `site.js` — site-wide JavaScript and terminal commands
- `theme.scss` — Quarto theme entrypoint
- `_quarto.yml` — site-wide configuration
- `robots.txt` / `humans.txt` — crawler rules and site trivia

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
