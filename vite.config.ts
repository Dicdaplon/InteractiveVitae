import { existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { defineConfig, runnerImport, type Plugin } from 'vite';
import type { Cv } from './src/data/types';
import { parseMode } from './src/data/variants';
import { withTypography } from './src/render/typography';

const REPO_BASE = '/InteractiveVitae/';

const dataDir = fileURLToPath(new URL('./src/data/cv/', import.meta.url));

/** Resolves the one CV file this build contains: public first, then private. */
function cvModule(mode: string): string {
  const { variant, lang } = parseMode(mode);
  const file = `${variant}.${lang}.ts`;
  for (const candidate of [dataDir + file, `${dataDir}private/${file}`]) {
    if (existsSync(candidate)) return candidate;
  }
  throw new Error(`No CV data for mode "${mode}" (looked for ${file})`);
}

function escapeHtml(text: string): string {
  return text.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
}

/** Fills the page language, title and description from the built CV, for search and link previews. */
function cvMetadata(file: string): Plugin {
  return {
    name: 'cv-metadata',
    async transformIndexHtml(html) {
      const { module } = await runnerImport<{ default: Cv }>(file);
      const cv = withTypography(module.default);
      return html
        .replace('%CV_LANG%', cv.lang)
        .replace('%CV_TITLE%', escapeHtml(`${cv.person.name} · ${cv.person.title}`))
        .replace('%CV_DESCRIPTION%', escapeHtml(cv.summary));
    },
  };
}

// GitHub Pages serves the site under /<repository>/; English lives in /en/.
export default defineConfig(({ mode }) => {
  const english = parseMode(mode).lang === 'en';
  const cvFile = cvModule(mode);
  return {
    base: english ? `${REPO_BASE}en/` : REPO_BASE,
    build: { outDir: english ? 'dist/en' : 'dist' },
    resolve: { alias: { '@cv': cvFile } },
    plugins: [cvMetadata(cvFile)],
  };
});
