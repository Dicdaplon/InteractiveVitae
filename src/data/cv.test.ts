import { describe, expect, it } from 'vitest';
import { cvFr } from './cv.fr';
import type { Entry } from './types';

const entries: Entry[] = [...cvFr.experiences, ...cvFr.projects];

describe('cvFr entries', () => {
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

describe('cvFr links', () => {
  it('only links to https URLs', () => {
    const urls = [
      cvFr.url,
      ...cvFr.person.links.map((link) => link.href),
      ...cvFr.projects.flatMap((project) =>
        project.repo ? [project.url, project.repo] : [project.url]
      ),
    ];
    for (const url of urls) expect(url).toMatch(/^https:\/\//);
  });
});
