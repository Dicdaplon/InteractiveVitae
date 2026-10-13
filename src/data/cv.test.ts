import { describe, expect, it } from 'vitest';
import { cvFr } from './cv.fr';

describe('cvFr content', () => {
  it('uses unique experience ids that are safe in DOM ids', () => {
    const ids = cvFr.experiences.map((experience) => experience.id);
    expect(new Set(ids).size).toBe(ids.length);
    for (const id of ids) expect(id).toMatch(/^[a-z][a-z0-9-]*$/);
  });

  it('gives every experience at least one highlight and technology', () => {
    for (const experience of cvFr.experiences) {
      expect(experience.highlights.length, experience.id).toBeGreaterThan(0);
      expect(experience.technologies.length, experience.id).toBeGreaterThan(0);
    }
  });

  it('lists technologies without duplicates inside an experience', () => {
    for (const experience of cvFr.experiences) {
      expect(new Set(experience.technologies).size, experience.id).toBe(
        experience.technologies.length
      );
    }
  });

  it('only links to https URLs', () => {
    for (const link of cvFr.person.links) expect(link.href).toMatch(/^https:\/\//);
  });
});
