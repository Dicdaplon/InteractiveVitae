/**
 * CV variants are chosen at build time, so a build contains exactly one of
 * them. Only PUBLIC_VARIANT is deployed (French at the site root, English
 * under /en/). Other committed variants are readable in the repository but
 * never published; src/data/cv/private/ is git-ignored for drafts that must
 * not reach the repository at all.
 */
export const LANGS = ['fr', 'en'] as const;
export type Lang = (typeof LANGS)[number];

export const PUBLIC_VARIANT = 'ai-media';

/** Vite's own modes, which mean the public variant in French. */
const DEFAULT_MODES = ['development', 'production', 'test'];

/** Vite mode "<variant>-<lang>", e.g. "basic-en". A malformed mode is an error, not a silent fallback. */
export function parseMode(mode: string): { variant: string; lang: Lang } {
  if (DEFAULT_MODES.includes(mode)) return { variant: PUBLIC_VARIANT, lang: 'fr' };
  const match = /^([a-z][a-z-]*)-(fr|en)$/.exec(mode);
  if (!match) throw new Error(`Unknown mode "${mode}": expected <variant>-<fr|en>`);
  return { variant: match[1]!, lang: match[2] as Lang };
}
