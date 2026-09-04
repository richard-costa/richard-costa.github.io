# richard-costa.github.io

Personal site built with [Quarto](https://quarto.org/).

## Local preview

```bash
quarto preview
```

The generated site goes to `_site/` and is ignored by Git.

## Structure

```text
.
├── _quarto.yml          # site-wide behavior and navigation
├── theme.scss           # all site-wide visual styling
├── index.qmd            # homepage
├── notes/
│   ├── _metadata.yml    # defaults inherited by technical notes
│   └── ...              # note content / wrappers
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

The theme deliberately uses one SCSS file instead of a Bootswatch theme plus override files. The first variables in `theme.scss` control most of the visual system.

## Equations and cross-references

Equation numbering and references are Quarto-native. Use an `eq-` label:

```markdown
$$
E = mc^2
$$ {#eq-energy}

See @eq-energy.
```

The project-level `eq-prefix: ""` setting keeps inline equation references compact.

## Obsidian note source

`notes/qm_ii/qm_review.qmd` currently includes:

```text
../../../../obsidian/00-inbox/qm-formalism.md
```

That external dependency is intentionally preserved for now so the existing local authoring workflow keeps working. A clean clone of this repository alone cannot render that note until its canonical source is moved into the repository.
