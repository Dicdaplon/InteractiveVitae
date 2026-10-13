# InteractiveVitae

Interactive online CV of Chafik Lekouara, with a fixed A4 print version.
Built with Vite and TypeScript, no framework, deployed on GitHub Pages.

## Getting started

```sh
npm install
npm run dev        # http://localhost:5173/InteractiveVitae/
```

| Script                | Purpose                                  |
| --------------------- | ---------------------------------------- |
| `npm run dev`         | Local dev server with hot reload         |
| `npm test`            | Unit and guardrail tests (Vitest, jsdom) |
| `npm run build`       | Type-check, then build into `dist/`      |
| `npm run preview`     | Serve the production build locally       |
| `npm run check:print` | Check the printed CV fits one A4 page    |
| `npm run format`      | Format every file with Prettier          |

The screen version is concise by default: each experience and project shows
a summary and key technologies, and "Détails" reveals the rest. Links such as
`#experience-aiotrust` or `#project-lolouplive` open a card directly.

The print version is the same page reduced to one A4 sheet: use the
"Imprimer / PDF" button or the browser print dialog (A4, default margins,
scale 100%) and "Save as PDF". `npm run check:print` needs Chromium once:
`npx playwright install chromium`.

## Variants

Each CV variant exists in French and English and is chosen at build time
with a Vite mode `<variant>-<lang>`, so a build contains exactly one of them.

| Variant    | Focus                          | Published                                   |
| ---------- | ------------------------------ | ------------------------------------------- |
| `ai-media` | Machine learning, audio, image | Yes: French at the root, English in `/en/`  |
| `basic`    | Embedded C/C++                 | No: committed, built locally on demand only |

```sh
npm run dev -- --mode basic-en              # browse a variant locally
npm run check:print -- basic-fr ai-media-en # check them and write dist-print/<mode>.pdf
```

- `npm run build` builds the public variant in both languages; the toolbar
  links each language to the other.
- The public variant files are standalone: importing another variant would
  ship its text in the deployed bundle, and a test forbids it.
- `src/data/cv/private/` is git-ignored, for drafts that must not reach the
  repository at all.

## Architecture

```
src/
  data/       CV variants (cv/<variant>.<lang>.ts) and their types — edit content here
  render/     Pure functions turning data into DOM nodes, one module per section
  features/   Behaviour attached to rendered nodes: theme, filter, details, print
  styles/     tokens.css (design tokens), base, components, print
  main.ts     Composition root: render, then wire features
scripts/      check-print.mjs, the one-page print check (Playwright)
```

- Data, rendering and behaviour are separate layers; each depends only on the
  one before it.
- Rendering never uses `innerHTML`: strings always become text nodes.
- Features keep their state in `data-*` and ARIA attributes; CSS owns visuals.
- A language or variant is a new `cv/<variant>.<lang>.ts` file implementing the `Cv` type.
- French typography (no-break spaces) is applied at render time, not in the data.

The design system is documented in [DESIGN.md](DESIGN.md). Its guardrails
(no raw colours outside `tokens.css`, no undeclared tokens, no unstyled class)
are enforced by `src/styles/designSystem.test.ts`.

## Conventions

- Code, comments and commits in English; CV content in French and English.
- [Conventional Commits](https://www.conventionalcommits.org/), one focused change per commit.
- KISS and SOLID: small single-purpose modules, dependencies passed in where
  tests need to replace them.

## Deployment

Every push to `main` runs format check, tests, build and the one-page print
check, then publishes
`dist/` through GitHub Actions. In the repository settings, set
**Pages → Source** to **GitHub Actions** once.
