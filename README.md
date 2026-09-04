# richard-costa.github.io

Personal site built with [Quarto](https://quarto.org/).

## Local preview

```bash
quarto preview
```

The generated site goes to `_site/` and is ignored by Git.

To render the quantum-mechanics review in both HTML and PDF:

```bash
quarto render notes/quantum-mechanics/review.qmd
```

That produces `review.html` and, when a LaTeX installation is available, `review.pdf` under `_site/notes/quantum-mechanics/`.

## Structure

```text
.
├── _quarto.yml
├── theme.scss
├── index.qmd
├── posts.qmd
│
├── notes/
│   ├── _metadata.yml
│   ├── index.qmd
│   ├── resources.qmd
│   ├── quantum-mechanics/
│   │   ├── review.qmd
│   │   └── dirac-riesz.qmd
│   └── logic/
│       └── introduction.qmd
│
├── posts/
│   ├── _metadata.yaml
│   ├── images/
│   └── YYYYMMDD-name.qmd
│
└── files/
    ├── qubits-hilbert-spaces-pt.pdf
    └── resume/
        ├── resume_english.pdf
        └── resume_portuguese.pdf
```

## Mental model

There are only three kinds of public source content:

- `index.qmd` — homepage
- `notes/` — technical notes and curated references
- `posts/` — chronological articles

Software projects live in their own repositories and are linked from the homepage. Static downloads live under `files/`.

## Where to change things

- **Navigation / global Quarto settings:** `_quarto.yml`
- **Colors / typography / layout:** `theme.scss`
- **Homepage content:** `index.qmd`
- **Technical-note defaults:** `notes/_metadata.yml`
- **Post defaults:** `posts/_metadata.yaml`

## Notes and Obsidian

The canonical note files live inside `notes/`. Open that directory as an Obsidian vault to edit the same files Quarto renders.

Local Obsidian settings in `notes/.obsidian/` are ignored by Git. There are no external include paths or duplicated note sources.

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

## Publish

For normal updates:

```bash
quarto preview
quarto render

git add .
git commit -m "Update site"
git push

quarto publish gh-pages
```
