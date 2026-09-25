# richard-costa.github.io

Source for [richard-costa.github.io](https://richard-costa.github.io/)

Built with [Quarto](https://quarto.org/). Use `quarto preview` for local preview.

Project scripts generate the changelog from Git history and a separate RSS feed for notes during rendering. Posts use Quarto's native listing feed.

## Repository map

- `index.qmd` — homepage / about
- `projects.qmd` — projects and status indicators
- `now.qmd` — current work / learning / reading
- `notes/` — technical notes
- `posts/` — chronological posts
- `bookmarks.qmd` — saved references
- `blogroll.qmd` — sites worth returning to
- `changelog.qmd` — recent site changes from Git history
- `404.qmd` — custom shell-style 404
- `robots.txt` / `humans.txt` — crawler rules and site trivia
- `_scripts/` — changelog and notes-RSS generators
- `site.js` — tiny terminal commands
- `theme.scss` — site styling
- `_quarto.yml` — site-wide configuration


## Vendored demos

Standalone project demos are kept in their project repositories and included here as Git submodules under `_vendor/`.

Initialize them after cloning:

```bash
git submodule update --init --recursive
```

Before publishing, update a demo to the desired project revision and commit the changed submodule pointer. `_scripts/publish_demos.py` copies the learning-links web demo into `_site/demos/learning-links/` during Quarto post-render.
