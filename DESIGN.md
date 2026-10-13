# InteractiveVitae — Design system

Art direction: **"Bench instrument"**. A CV that reads like a well-labelled piece of lab equipment: neutral
cool surfaces, near-black ink, one signal-teal accent, monospace for anything measured (dates, versions,
tech names), hairlines instead of decoration. Credible first, flavoured second.

Source of truth: `src/styles/tokens.css`. This file explains it.

## 1. Inherited from MusicalBook, and what changed

The **method** is kept unchanged from `MusicalBook/docs/plan/02-direction-artistique.md`:

- semantic tokens named by **role** (`--color-ink-muted`), never by hue (`--teal-700`);
- every text/background pair's contrast **computed** (WCAG 2.1 relative luminance) and written next to the token;
- **one accent** per theme; no pure `#000`/`#fff` on screen;
- 4px spacing base, a closed scale `--sp-1 … --sp-10`;
- **two** shadows; on dark, elevation becomes a lighter border;
- explicit motion rules; light + dark, with an explicit `data-theme` beating `prefers-color-scheme`.

The **register** changes:

| MusicalBook (long-form course)                       | InteractiveVitae (CV)                                                      | Why                                                                     |
| ---------------------------------------------------- | -------------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| Warm paper `#fbf8f3`, ember accent                   | Cool lab white `#f6f8f9`, teal accent                                      | Engineering/signal register; continuity with the existing PDF CV (teal) |
| Serif body 17→19px, leading 1.7                      | Sans body 15→16px, leading 1.55                                            | Scanned in ~30 s, dense, mostly bullets                                 |
| Serif + Plex Sans + Plex Mono                        | IBM Plex Sans + IBM Plex Mono only                                         | One family; mono carries the "measured data" layer                      |
| Radii 3/6/12px                                       | 2/4/8px                                                                    | Crisper, more technical                                                 |
| Category colours, figure mat, visited links, code bg | Dropped                                                                    | No such content in a CV                                                 |
| —                                                    | `--color-highlight`, `--color-tag-bg/ink`, `--color-timeline`, `--sidebar` | Skill filter, tech chips, timeline, two-column layout                   |
| —                                                    | Full `@media print` token block                                            | The printed A4 is a first-class output                                  |

Dropped tokens: `--color-code`, `--color-figure-mat`, `--color-border-input`, `--color-link-visited`,
`--color-danger`, `--color-success`, `--color-cat-*`, `--measure-max`, `--measure-narrow`, `--gutter-lg`,
`--header-h`, `--reading-col`, `--rail`. Use `--color-sunken` where code would have used `--color-code`.

## 2. Palette

Ratios are on canvas / surface unless stated. "UI" = non-text graphics, target ≥ 3:1.

| Token                   | Light     | Dark      | Print       | Role / ratio                                                          |
| ----------------------- | --------- | --------- | ----------- | --------------------------------------------------------------------- |
| `--color-canvas`        | `#f6f8f9` | `#0d1215` | `#ffffff`   | Page                                                                  |
| `--color-surface`       | `#ffffff` | `#141b1f` | `#ffffff`   | Cards, sidebar                                                        |
| `--color-sunken`        | `#edf1f3` | `#1a2227` | `#f2f4f5`   | Insets, filter bar                                                    |
| `--color-ink`           | `#121a20` | `#e2e8eb` | `#111417`   | Body. 16.51 / 15.23 / 18.48 — AAA                                     |
| `--color-ink-muted`     | `#475560` | `#a1adb5` | `#3d4851`   | Meta, secondary. 7.20 / 8.22 / 9.36                                   |
| `--color-ink-faint`     | `#7a8790` | `#6b7882` | `#87939c`   | **UI only**. 3.46 / 4.16 / 3.14                                       |
| `--color-line`          | `#dbe2e6` | `#232d33` | `#d5dbdf`   | Decorative separators                                                 |
| `--color-line-strong`   | `#bfc9cf` | `#35424a` | `#aab4ba`   | Card borders, hairlines                                               |
| `--color-accent`        | `#0d6c78` | `#5ec3ce` | `#0b5f6a`   | The accent. 5.74 / 9.13 / 7.34                                        |
| `--color-accent-on`     | `#ffffff` | `#0d1215` | `#ffffff`   | Text on accent. 6.12 / 9.13 / 7.34                                    |
| `--color-accent-subtle` | `#e0eff1` | `#11282c` | `#e4eff0`   | Tinted fill. ink 14.89 / 12.45 / 15.76                                |
| `--color-link`          | `#0b5e69` | `#86d4dc` | `#0b5f6a`   | Links. 6.99 / 11.18 / 7.34                                            |
| `--color-focus`         | `#0d6c78` | `#8fdbe3` | transparent | Focus ring. 5.74 / 12.03                                              |
| `--color-selection`     | `#c7e6ea` | `#1e3c41` | `#c7e6ea`   | ink on it 13.34 / 9.55                                                |
| `--color-highlight`     | `#cbe7eb` | `#1a4146` | transparent | Filter match. ink 13.54 / 8.99; muted 5.91 / 4.85; accent 4.71 / 5.39 |
| `--color-tag-bg`        | `#e2e8ec` | `#212c33` | `#eef1f3`   | Chip fill (decorative)                                                |
| `--color-tag-ink`       | `#2b3843` | `#c8d2d8` | `#262f36`   | Chip text. 9.71 / 9.28 / 12.00 on tag-bg                              |
| `--color-timeline`      | `#6a959c` | `#4c7a81` | `#aab4ba`   | Timeline rule. 3.08 / 3.96 (UI); decorative on paper                  |

Palette rules:

1. **Teal is the only hue.** Highlight, selection, timeline and focus are all teal tints/shades. No second accent, no traffic lights for skill levels.
2. **Highlight never stands alone.** `--color-highlight` is only 1.30:1 (light) against the surface, so a matched card also gets a 3px `--color-accent` left rule (and optionally `--shadow-1`). Non-matching cards may drop to `opacity: .55`; never below — their text must stay readable.
3. **Accent is for structure, not decoration**: section rule, active filter chip, current-role marker, links. Not for body text paragraphs.
4. Print accent `#0b5f6a` maps to ~`#565656` in greyscale: distinct from black body text, still 7.34:1.

## 3. Typography

**IBM Plex Sans** (SIL OFL 1.1, variable build) for everything, **IBM Plex Mono** for dates, periods
(`2021 — 2024`), version-like data and tech chips. Both are self-hosted as woff2 through
`@fontsource-variable/ibm-plex-sans` and `@fontsource/ibm-plex-mono` (imported in `main.ts`,
`font-display: swap`), so screen and print metrics are the same on every machine, which the one-page
print check relies on. The system stack only covers a failed font load. `--font-ui` aliases
`--font-content` so components written against either name stay consistent.

Headings use the same family; hierarchy comes from weight (600 for h1/h2, 600 for card titles, 400 body)
and size, not from a second face. Use `font-variant-numeric: tabular-nums` on dates and any column of numbers.

| Step        | Screen (360 → 1280px) | Print  | Use                         |
| ----------- | --------------------- | ------ | --------------------------- |
| `--step--2` | 12 → 12.5px           | 7.5pt  | Dates, captions, footer     |
| `--step--1` | 13.5 → 14px           | 8.5pt  | Chips, meta lines, buttons  |
| `--step-0`  | 15 → 16px             | 9.5pt  | Body, bullets               |
| `--step-1`  | 17 → 19px             | 10.5pt | Experience/project title    |
| `--step-2`  | 20 → 23px             | 12pt   | Section heading             |
| `--step-3`  | 24 → 29px             | 14pt   | Role/tagline under the name |
| `--step-4`  | 30 → 38px             | 22pt   | Name                        |

Leading: body 1.55 (print 1.38), tight 1.15, snug 1.3, UI 1.4. `--measure: 72ch` caps bullet text.
Section headings: uppercase is allowed only at `--step--1` with `letter-spacing: .06em`; otherwise sentence case.

## 4. Spacing and layout

`--sp-1 … --sp-10` = 4, 8, 12, 16, 24, 32, 48, 64, 96, 128px. In print the same names resolve to
2, 4, 6, 8, 12, 16, 22, 28, 36, 48pt, so components keep their proportions without print overrides.

- `--container: 1200px`, `--gutter: 1rem` (components may widen to `--sp-5` at ≥ 720px).
- `--sidebar: 19rem` (304px): left column (skills, languages, education, beyond code) from 1024px; below that it follows the main column. Print: `50mm`.
- Radii: `--r-1` 2px chips, `--r-2` 4px buttons, `--r-3` 8px cards; `--r-pill` reserved for filter toggles.

## 5. Shadows

- `--shadow-1`: card hover and highlighted (matched) card.
- `--shadow-2`: popover, project detail dialog.

Borders do the everyday work. In dark mode both shadows become a `--color-line-strong` ring. In print both are `none`.

## 6. Motion

Durations: `--dur-1` 120ms (hover, focus, chip toggle), `--dur-2` 180ms (highlight fade, accordion),
`--dur-3` 260ms (dialog). Easing: `--ease-out` for entering, `--ease-in` for leaving.

1. Content never animates in on load. The CV is fully readable without JS.
2. Only user-triggered changes animate: filter toggle, hover, expand, theme switch.
3. Animate only `opacity`, `transform`, `color`, `background-color`. Never `height` or `box-shadow` (fade a pseudo-element instead).
4. Maximum travel 4px.
5. Filtering does not reorder, move or expand cards; it highlights and dims in place (no layout shift).
6. Expanding details fades the content in with a 4px slide; closing is instant (native `<details>`).

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 1ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 1ms !important;
    scroll-behavior: auto !important;
  }
}
```

## 7. Print

The print block in `tokens.css` uses `:root:root` (specificity 0,2,0) and sits last, so it wins over
both dark-theme selectors. `@page` cannot read custom properties, so margins live in `print.css`:

```css
@page {
  size: A4;
  margin: 10mm 12mm;
}
```

- **Target: exactly one page**, enforced by `npm run check:print` (one PDF page, at most 95% of the
  text block filled). The screen is the detailed version; paper is the summary.
- **Deterministic**: theme, active filter and open details never change the printed page.
- **Printed**: header (with "Version interactive et détails :" and the CV URL), profile, each entry's
  title, period, context, summary and key technologies, project site URLs, the aside sections.
- **Hidden**: toolbar, filter bar, every `.entry__details` (even when open), repository links, and
  anything marked `printHidden` in the data (`data-print-hidden`).
- **Technologies** print as a plain mono list separated by " · ", no chip fill, so nothing depends on
  background graphics.
- **Links**: visible link text is already the bare URL, so no `::after` URL injection.
- **Page breaks**: `break-inside: avoid` on entries and the header, `break-after: avoid` on section
  headings, `orphans: 3; widows: 3`. On one page they only matter when content overflows.
- **Layout**: two columns, `--sidebar: 50mm` on a 186mm text block; header in two columns (identity
  left, contact right).
- **If content grows**: shorten summaries first, then mark the least relevant items `printHidden`.
  Never rely on the print dialog's scale.

## 8. Guardrails

1. **Raw colour values only in `tokens.css`.** Every other stylesheet uses `var(--…)`. No hex, `rgb()` or named colours elsewhere (`transparent` and `currentColor` excepted).
2. **One accent.** Need emphasis? Use weight, size or `--color-ink` before reaching for another colour.
3. **No off-scale spacing or type.** If a value is missing, add a token here and justify it, do not hard-code.
4. **Every new colour pair gets a computed ratio comment** (AA ≥ 4.5:1 text, ≥ 3:1 large text and UI). Mark UI-only colours explicitly.
5. **Dark blocks stay in sync**: the `[data-theme="dark"]` block and the `prefers-color-scheme` block are identical copies.
6. **Print is tested** on every layout change: Chrome print preview, A4, background graphics off and on, plus a greyscale pass.
