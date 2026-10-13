# InteractiveVitae — Design system

Art direction: **"Bench instrument", moss and paper**. A CV that reads like a well-labelled piece of lab
equipment, drawn by the same hand as the sibling projects (l’école du loup(é), AudioLab): warm paper
surfaces, near-black ink, one moss accent, monospace for anything measured (dates, versions, tech
names), hairlines instead of decoration. Credible first, flavoured second.

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

| MusicalBook (long-form course)                       | InteractiveVitae (CV)                                                      | Why                                                                          |
| ---------------------------------------------------- | -------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| Warm paper `#fbf8f3`, ember accent                   | Warm paper `#f7f6f2`, moss accent                                          | Same family; moss is the sibling projects' signal colour, ember stays theirs |
| Serif body 17→19px, leading 1.7                      | Sans body 15→16px, leading 1.55                                            | Scanned in ~30 s, dense, mostly bullets                                      |
| Serif + Plex Sans + Plex Mono                        | Plex Sans + Plex Mono; Source Serif 4 for the name only                    | Scannable sans body; the serif "voice" ties the name to the family           |
| Radii 3/6/12px                                       | 2/4/8px                                                                    | Crisper, more technical                                                      |
| Category colours, figure mat, visited links, code bg | Dropped                                                                    | No such content in a CV                                                      |
| —                                                    | `--color-highlight`, `--color-tag-bg/ink`, `--color-timeline`, `--sidebar` | Skill filter, tech chips, timeline, two-column layout                        |
| —                                                    | Full `@media print` token block                                            | The printed A4 is a first-class output                                       |

Dropped tokens: `--color-code`, `--color-figure-mat`, `--color-border-input`, `--color-link-visited`,
`--color-danger`, `--color-success`, `--color-cat-*`, `--measure-max`, `--measure-narrow`, `--gutter-lg`,
`--header-h`, `--reading-col`, `--rail`. Use `--color-sunken` where code would have used `--color-code`.

## 2. Palette

Ratios are on canvas unless stated, computed from `tokens.css`. "UI" = non-text graphics, target ≥ 3:1.

| Token                   | Light     | Dark      | Print         | Role / ratio (light / dark / print)              |
| ----------------------- | --------- | --------- | ------------- | ------------------------------------------------ |
| `--color-canvas`        | `#f7f6f2` | `#0d110f` | `#ffffff`     | Page (warm paper)                                |
| `--color-surface`       | `#ffffff` | `#141917` | `#ffffff`     | Cards                                            |
| `--color-sunken`        | `#eeebe4` | `#1b211e` | `#f2f4f5`     | Insets, filter bar                               |
| `--color-ink`           | `#1b1a17` | `#e4e0d6` | `#111417`     | Body. 16.09 / 14.43 / 18.48 — AAA                |
| `--color-ink-muted`     | `#55514a` | `#a8a297` | `#45413b`     | Meta, secondary. 7.29 / 7.50 / 10.13             |
| `--color-ink-faint`     | `#878175` | `#717a73` | `#87939c`     | **UI only**. 3.58 / 4.29 / 3.14                  |
| `--color-line`          | `#e2ddd2` | `#232a26` | `#d5dbdf`     | Decorative separators                            |
| `--color-line-strong`   | `#c9c2b4` | `#344039` | `#aab4ba`     | Card borders, hairlines                          |
| `--color-accent`        | `#0f5c4e` | `#7fd3b8` | `#0f5c4e`     | Moss, the only accent. 7.30 / 10.79 / 7.89       |
| `--color-accent-on`     | `#ffffff` | `#0d110f` | `#ffffff`     | Text on accent. 7.89 / 10.79 / 7.89              |
| `--color-accent-subtle` | `#e0efe9` | `#12281f` | `#e3efe9`     | Tinted fill                                      |
| `--color-link`          | `#0a4a3f` | `#a9ead3` | `#0f5c4e`     | Links. 9.41 / 13.94 / 7.89                       |
| `--color-focus`         | `#0f5c4e` | `#a9ead3` | `transparent` | Focus ring (UI)                                  |
| `--color-selection`     | `#cde7dd` | `#1c3d33` | `#cde7dd`     | Text selection                                   |
| `--color-highlight`     | `#cde7dd` | `#1c3d33` | `transparent` | Filter match, always paired with the accent rule |
| `--color-tag-bg`        | `#e8e5dd` | `#222a26` | `#eef1f3`     | Chip fill (decorative)                           |
| `--color-tag-ink`       | `#2e2b26` | `#cfcac0` | `#262f36`     | Chip text. 11.20 / 9.01 / 12.00 on tag-bg        |
| `--color-timeline`      | `#5f9585` | `#4f8a78` | `#aab4ba`     | Timeline rule (UI); decorative on paper          |

Palette rules:

1. **Moss is the only hue.** Highlight, selection, timeline and focus are moss tints/shades. No second accent; ember belongs to the `loup(…)` brands.
2. **Highlight never stands alone.** `--color-highlight` is only 1.30:1 (light) against the surface, so a matched card also gets a 3px `--color-accent` left rule (and optionally `--shadow-1`). Non-matching cards may drop to `opacity: .55`; never below — their text must stay readable.
3. **Accent is for structure, not decoration**: section rules, the header "beat" mark, active filter chip, links. Not for body text paragraphs.
4. Print accent `#0f5c4e` maps to ~`#434343` in greyscale: distinct from black body text, still 7.89:1.

## 3. Typography

**IBM Plex Sans** (SIL OFL 1.1, variable build) for everything, **IBM Plex Mono** for dates, periods
(`2021 — 2024`), version-like data and tech chips, and **Source Serif 4** (`--font-display`) for the
name only: the "voice" shared with the sibling projects' wordmarks. All are self-hosted as woff2 through
`@fontsource` packages imported in `main.ts` (`font-display: swap`), so screen and print metrics are the
same on every machine, which the one-page print check relies on. The system stack only covers a failed
font load. `--font-ui` aliases
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
- `--shadow-2`: reserved; nothing uses it yet.

Borders do the everyday work. In dark mode both shadows become a `--color-line-strong` ring. In print both are `none`.

## 6. Motion

Durations: `--dur-1` 120ms (hover, focus, chip toggle), `--dur-2` 180ms (highlight fade, accordion),
`--dur-3` 260ms (reserved). Easing: `--ease-out` for entering, `--ease-in` for leaving.

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
- **Printed**: header (with the interactive version's URL), profile, each experience's title, period,
  context, summary and key technologies, and the aside sections.
- **Per entry**, the data's `print` option adjusts this: `'compact'` prints the heading line only,
  `{ highlights: n }` also prints the first n `details` bullets, `'hidden'` leaves the entry out. Keep
  printed bullets to one line each.
- **Projects** print as a three-column strip: a clickable QR code to the live site, name, year and one
  context line. Summaries, technologies and URL text stay on screen.
- **Hidden**: toolbar, filter bar, every `.entry__details` (even when open), and list items marked
  `printHidden` (`data-print-hidden`).
- **Technologies** print as a plain mono list separated by " · ", no chip fill, so nothing depends on
  background graphics.
- **Header mark**: the "beat" (accent rule plus an offset hairline) prints with `print-color-adjust: exact`.
- **Page breaks**: `break-inside: avoid` on entries and the header, `break-after: avoid` on section
  headings, `orphans: 3; widows: 3`. On one page they only matter when content overflows.
- **Layout**: two columns, `--sidebar: 50mm` on a 186mm text block; header in two columns (identity
  left, contact right).
- **If content grows**: shorten summaries and bullets first, then use `print: 'compact'` or `'hidden'`
  on the least relevant entries. Never rely on the print dialog's scale.

## 8. Guardrails

1. **Raw colour values only in `tokens.css`.** Every other stylesheet uses `var(--…)`. No hex, `rgb()` or named colours elsewhere (`transparent` and `currentColor` excepted).
2. **One accent.** Need emphasis? Use weight, size or `--color-ink` before reaching for another colour.
3. **No off-scale spacing or type.** If a value is missing, add a token here and justify it, do not hard-code.
4. **Every new colour pair gets a computed ratio comment** (AA ≥ 4.5:1 text, ≥ 3:1 large text and UI). Mark UI-only colours explicitly.
5. **Dark blocks stay in sync**: the `[data-theme="dark"]` block and the `prefers-color-scheme` block are identical copies.
6. **Print is tested** on every layout change: Chrome print preview, A4, background graphics off and on, plus a greyscale pass.
