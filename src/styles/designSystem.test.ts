import { readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { describe, expect, it } from 'vitest';
import cvFr from '../data/cv/basic.fr';
import { renderCv } from '../render/cv';

/** Guardrails from DESIGN.md, enforced so they cannot silently erode. */

const stylesDir = import.meta.dirname;
const sheets: Record<string, string> = Object.fromEntries(
  readdirSync(stylesDir)
    .filter((file) => file.endsWith('.css'))
    .map((file) => [file, readFileSync(join(stylesDir, file), 'utf8')])
);

const TOKENS = 'tokens.css';
const tokenSource = sheets[TOKENS] ?? '';
const consumerSheets = Object.entries(sheets).filter(([path]) => path !== TOKENS);
function stripComments(css: string): string {
  return css.replace(/\/\*[\s\S]*?\*\//g, '');
}

const allCss = stripComments(Object.values(sheets).join('\n'));

describe('design system guardrails', () => {
  it('loads the token sheet and at least one consumer sheet', () => {
    expect(tokenSource).toContain('--color-accent');
    expect(consumerSheets.length).toBeGreaterThan(0);
  });

  it('keeps raw colours inside tokens.css', () => {
    const rawColour = /#[0-9a-f]{3,8}\b|\b(?:rgb|rgba|hsl|hsla|oklch)\(/i;
    for (const [path, css] of consumerSheets) {
      const offending = stripComments(css)
        .split('\n')
        .filter((line) => rawColour.test(line));
      expect(offending, path).toEqual([]);
    }
  });

  it('only references custom properties that tokens.css declares', () => {
    const declared = new Set(
      [...stripComments(tokenSource).matchAll(/(--[\w-]+)\s*:/g)].map((match) => match[1])
    );
    const used = new Set([...allCss.matchAll(/var\((--[\w-]+)/g)].map((match) => match[1]));
    const undeclared = [...used].filter((name) => !declared.has(name));
    expect(undeclared).toEqual([]);
  });

  it('styles every class the renderer emits', () => {
    const page = renderCv(cvFr);
    const emitted = new Set(
      [...page.querySelectorAll('[class]')].flatMap((node) => [...node.classList])
    );
    const missing = [...emitted].filter((name) => !allCss.includes(`.${name}`));
    expect(missing).toEqual([]);
  });
});
