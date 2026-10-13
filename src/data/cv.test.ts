import { describe, expect, it } from 'vitest';
import type { Cv, Entry } from './types';

// Every variant present on this machine, public and private.
const modules = import.meta.glob<{ default: Cv }>('./cv/**/*.ts', { eager: true });
const variants = Object.entries(modules).map(([path, module]) => ({ path, cv: module.default }));

for (const { path, cv } of variants) {
  describe(`CV entries in ${path}`, () => {
    const entries: Entry[] = [...cv.experiences, ...cv.projects];

    it('uses unique ids that are safe in DOM ids', () => {
      const ids = entries.map((entry) => entry.id);
      expect(new Set(ids).size).toBe(ids.length);
      for (const id of ids) expect(id).toMatch(/^[a-z][a-z0-9-]*$/);
    });

    it('keeps summaries short enough for the printed page', () => {
      for (const entry of entries) {
        expect(entry.summary.length, entry.id).toBeGreaterThan(0);
        expect(entry.summary.length, entry.id).toBeLessThanOrEqual(170);
      }
    });

    it('lists technologies without duplicates', () => {
      for (const entry of entries) {
        expect(new Set(entry.technologies).size, entry.id).toBe(entry.technologies.length);
      }
    });

    it('picks one to five key technologies from the full list', () => {
      for (const entry of entries) {
        expect(entry.keyTechnologies.length, entry.id).toBeGreaterThan(0);
        expect(entry.keyTechnologies.length, entry.id).toBeLessThanOrEqual(5);
        expect(new Set(entry.keyTechnologies).size, entry.id).toBe(entry.keyTechnologies.length);
        for (const tech of entry.keyTechnologies) {
          expect(entry.technologies, entry.id).toContain(tech);
        }
      }
    });
  });

  describe(`CV links in ${path}`, () => {
    it('only links to https URLs', () => {
      const urls = [
        ...(cv.url ? [cv.url] : []),
        ...cv.person.links.map((link) => link.href),
        ...cv.projects.flatMap((project) =>
          project.repo ? [project.url, project.repo] : [project.url]
        ),
      ];
      for (const url of urls) expect(url).toMatch(/^https:\/\//);
    });
  });
}

describe('CV variants', () => {
  it('include the public basic French version', () => {
    expect(variants.map(({ path }) => path)).toContain('./cv/basic.fr.ts');
  });

  it('only give a public URL to the basic version', () => {
    for (const { path, cv } of variants) {
      if (cv.url) expect(path, path).toMatch(/^\.\/cv\/basic\./);
    }
  });
});
