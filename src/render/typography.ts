import type { Cv } from '../data/types';

const NO_BREAK_SPACE = ' ';
const NARROW_NO_BREAK_SPACE = ' ';

/**
 * French spacing rules: a no-break space before ":" and a narrow one before
 * ";", "!" and "?", so the sign never starts a line. URLs are untouched
 * because they have no space before their colon.
 */
export function frenchSpacing(text: string): string {
  return text
    .replace(/ :/g, `${NO_BREAK_SPACE}:`)
    .replace(/ ([;!?])/g, `${NARROW_NO_BREAK_SPACE}$1`);
}

function mapStrings<T>(value: T, transform: (text: string) => string): T {
  if (typeof value === 'string') return transform(value) as T;
  if (Array.isArray(value)) return value.map((item) => mapStrings(item, transform)) as T;
  if (value && typeof value === 'object') {
    return Object.fromEntries(
      Object.entries(value).map(([key, item]) => [key, mapStrings(item, transform)])
    ) as T;
  }
  return value;
}

/** Applies the typography of the CV's language to every text it contains. */
export function withTypography(cv: Cv): Cv {
  return cv.lang === 'fr' ? mapStrings(cv, frenchSpacing) : cv;
}
