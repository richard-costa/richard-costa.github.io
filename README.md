# richard-costa.github.io

Source for [richard-costa.github.io](https://richard-costa.github.io/).

Built with [Quarto](https://quarto.org/). Use `quarto preview` for local preview and `quarto publish gh-pages` to publish.

Project scripts generate the changelog from Git history and a separate RSS feed for notes during rendering. Posts use Quarto's native listing feed.

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
- `_styles/` — SCSS partials used by `theme.scss`
- `site.js` — site-wide JavaScript and terminal commands
- `theme.scss` — Quarto theme entrypoint and design tokens
- `giscus-theme.css` — standalone Giscus theme
- `_quarto.yml` — site-wide configuration
- `robots.txt` / `humans.txt` — crawler rules and site trivia

## Local workflow

```bash
quarto preview
```

To publish the current branch after testing:

```bash
quarto publish gh-pages
```
