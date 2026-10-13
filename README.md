# InteractiveVitae

Interactive online CV of Chafik Lekouara, with a fixed A4 print version.
Built with Vite and TypeScript, no framework, deployed on GitHub Pages.

## Getting started

```sh
npm install
npm run dev        # http://localhost:5173/InteractiveVitae/
```

| Script            | Purpose                                  |
| ----------------- | ---------------------------------------- |
| `npm run dev`     | Local dev server with hot reload         |
| `npm test`        | Unit and guardrail tests (Vitest, jsdom) |
| `npm run build`   | Type-check, then build into `dist/`      |
| `npm run preview` | Serve the production build locally       |
| `npm run format`  | Format every file with Prettier          |

The screen version is concise by default: each experience and project shows
a summary and key technologies, and "Détails" reveals the rest. Links such as
`#experience-aiotrust` or `#project-lolouplive` open a card directly.

The print version is the same page reduced to one A4 sheet: use the
"Imprimer / PDF" button or the browser print dialog (A4, default margins,
scale 100%) and "Save as PDF". `npm run check:print` needs Chromium once:
`npx playwright install chromium`.

## Architecture

```
src/
  data/       CV content (cv.fr.ts) and its types — the only file to edit for content
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
- A translation is a new `cv.<lang>.ts` file implementing the `Cv` type.

The design system is documented in [DESIGN.md](DESIGN.md). Its guardrails
(no raw colours outside `tokens.css`, no undeclared tokens, no unstyled class)
are enforced by `src/styles/designSystem.test.ts`.

## Conventions

- Code, comments and commits in English; CV content in French.
- [Conventional Commits](https://www.conventionalcommits.org/), one focused change per commit.
- KISS and SOLID: small single-purpose modules, dependencies passed in where
  tests need to replace them.

## Deployment

Every push to `main` runs format check, tests, build and the one-page print
check, then publishes
`dist/` through GitHub Actions. In the repository settings, set
**Pages → Source** to **GitHub Actions** once.
