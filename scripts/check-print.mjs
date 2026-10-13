// Checks that the printed CV fits on exactly one A4 page, with some headroom,
// and writes the PDF of each checked variant to dist-print/<mode>.pdf.
// Usage: npm run check:print [-- <mode>...]   e.g. -- basic-fr ai-media-en
// Without arguments, the public variant is checked in both languages.
import { mkdir, writeFile } from 'node:fs/promises';
import { chromium } from 'playwright';
import { build, preview } from 'vite';

const MM_TO_PX = 96 / 25.4;
// A4 minus the @page margins in src/styles/print.css (12mm sides, 10mm top/bottom).
const TEXT_BLOCK = { width: Math.floor(186 * MM_TO_PX), height: Math.floor(277 * MM_TO_PX) };
// Font rendering differs slightly between systems; keep a margin of safety.
const MAX_FILL = 0.95;
const OUT_DIR = 'dist-print';

const scenarios = [
  { name: 'default', prepare: async () => {} },
  {
    name: 'dark theme, open details, active filter',
    prepare: async (page) => {
      await page.evaluate(() => {
        document.documentElement.dataset.theme = 'dark';
        document.querySelector('details')?.setAttribute('open', '');
      });
      await page.click('[data-tech="C++"]');
    },
  },
];

function countPages(pdf) {
  return (pdf.toString('latin1').match(/\/Type\s*\/Page\b(?!s)/g) ?? []).length;
}

const modes = process.argv.slice(2);
if (modes.length === 0) modes.push('ai-media-fr', 'ai-media-en');

const browser = await chromium.launch();
const failures = [];
await mkdir(OUT_DIR, { recursive: true });

for (const mode of modes) {
  await build({ mode, logLevel: 'warn' });
  const server = await preview({ mode, preview: { port: 0 }, logLevel: 'warn' });
  const url = server.resolvedUrls?.local[0];
  try {
    await checkMode(mode, url);
  } finally {
    await new Promise((resolve) => server.httpServer.close(resolve));
  }
}
await browser.close();

async function checkMode(mode, url) {
  for (const [index, scenario] of scenarios.entries()) {
    const page = await browser.newPage({ viewport: TEXT_BLOCK });
    await page.goto(url);
    await page.evaluate(() => document.fonts.ready);
    await scenario.prepare(page);
    await page.emulateMedia({ media: 'print' });

    const height = await page.evaluate(() => document.querySelector('.page').scrollHeight);
    const fill = height / TEXT_BLOCK.height;
    const pdf = await page.pdf({ format: 'A4', preferCSSPageSize: true, printBackground: false });
    const pages = countPages(pdf);
    if (index === 0) await writeFile(`${OUT_DIR}/${mode}.pdf`, pdf);

    const ok = pages === 1 && fill <= MAX_FILL;
    console.log(
      `${ok ? 'ok  ' : 'FAIL'} ${mode}, ${scenario.name}: ${pages} page(s), ${Math.round(fill * 100)}% of the page used`
    );
    if (!ok) failures.push(`${mode}, ${scenario.name}`);
    await page.close();
  }
}

if (failures.length > 0) {
  console.error(`Print check failed (limit: 1 page, ${MAX_FILL * 100}% fill).`);
  process.exit(1);
}
