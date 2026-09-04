# richard-costa.github.io

Personal site built with [Quarto](https://quarto.org/).

## Local preview

```bash
quarto preview
```

The generated site goes to `_site/` and is ignored by Git.

To force all formats for the quantum-mechanics note:

```bash
quarto render notes/qm_ii/qm_review.qmd
```

That produces both the HTML page and, when a LaTeX installation is available, `_site/notes/qm_ii/qm_review.pdf`.

## Structure

```text
.
├── _quarto.yml          # site-wide behavior and navigation
├── theme.scss           # all site-wide visual styling
├── index.qmd            # homepage
├── notes/
│   ├── _metadata.yml    # defaults inherited by technical notes
│   ├── .obsidian/       # local Obsidian settings; ignored by Git
│   └── ...              # canonical note sources
├── posts/
│   ├── _metadata.yaml   # defaults inherited by posts
│   └── ...              # individual posts
├── posts.qmd            # posts listing page
├── resources.qmd        # reference links
├── resume/              # downloadable résumé PDFs
└── files/               # other downloadable files
```

## Where to change things

- **Navigation / global Quarto settings:** `_quarto.yml`
- **Colors / typography / layout:** `theme.scss`
- **Homepage content:** `index.qmd`
- **Technical-note defaults:** `notes/_metadata.yml`
- **Post defaults:** `posts/_metadata.yaml`

The theme uses one SCSS file instead of a Bootswatch theme plus override files. Its small token section controls the visual system; `$accent` controls the site's blue accent.

## Notes and Obsidian

The canonical note files live inside `notes/`. Open that directory as an Obsidian vault if you want to edit the same files in Obsidian.

There are no external include paths or duplicated note sources. The local `notes/.obsidian/` directory is ignored by Git.

## Equations and cross-references

Equation numbering and references are Quarto-native. Use an `eq-` label:

```markdown
$$
E = mc^2
$$ {#eq-energy}

See @eq-energy.
```

The project-level `eq-prefix: ""` setting keeps inline equation references compact.

A note that needs a downloadable PDF should explicitly declare both formats:

```yaml
format:
  html: default
  pdf:
    documentclass: article

format-links:
  - pdf
```
