/**
 * CV variants are chosen at build time, so a build contains exactly one of
 * them. Only `basic` is committed and deployed; other variants live in
 * src/data/cv/private/, which git ignores, so they never reach the public
 * repository or GitHub Pages.
 */
export const LANGS = ['fr', 'en'] as const;
export type Lang = (typeof LANGS)[number];

export const PUBLIC_VARIANT = 'basic';

/** Vite mode "<variant>-<lang>", e.g. "ai-media-en". Anything else means basic French. */
export function parseMode(mode: string): { variant: string; lang: Lang } {
  const match = /^([a-z][a-z-]*)-(fr|en)$/.exec(mode);
  if (!match) return { variant: PUBLIC_VARIANT, lang: 'fr' };
  return { variant: match[1]!, lang: match[2] as Lang };
}
