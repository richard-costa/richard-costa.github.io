# richard-costa.github.io

Source for [richard-costa.github.io](https://richard-costa.github.io/) — my personal website for projects, technical notes, posts, bookmarks, and small web experiments.

Built with [Quarto](https://quarto.org/).

## Local preview

```bash
quarto preview
```

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
