import { existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';
import { parseMode } from './src/data/variants';

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

// GitHub Pages serves the site under /<repository>/.
export default defineConfig(({ mode }) => ({
  base: '/InteractiveVitae/',
  resolve: { alias: { '@cv': cvModule(mode) } },
}));
