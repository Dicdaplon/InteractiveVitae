import { beforeEach, describe, expect, it } from 'vitest';
import { renderCv } from '../render/cv';
import { fixture } from '../test/fixture';
import { formatResult, matchesTechnology, setupTechFilter } from './techFilter';

const labels = { hint: 'hint', result: '{count} with {tech}' };

describe('matchesTechnology', () => {
  it('matches exact names only', () => {
    expect(matchesTechnology(['C++', 'Git'], 'C++')).toBe(true);
    expect(matchesTechnology(['C++17'], 'C++')).toBe(false);
  });
});

describe('formatResult', () => {
  it('fills both placeholders', () => {
    expect(formatResult('{count} with {tech}', 3, 'Git')).toBe('3 with Git');
  });
});

describe('setupTechFilter', () => {
  let main: HTMLElement;

  const entry = (id: string) => main.querySelector<HTMLElement>(`#${id}`)!;
  const chip = (id: string, tech: string) =>
    entry(id).querySelector<HTMLElement>(`[data-tech="${tech}"]`)!;
  const status = () => main.querySelector('[data-filter-status]')!.textContent;
  const clear = () => main.querySelector<HTMLElement>('[data-action="clear-filter"]')!;

  beforeEach(() => {
    main = renderCv(fixture).querySelector<HTMLElement>('.cv-main')!;
    setupTechFilter(main, labels);
  });

  it('highlights matching entries and dims the others', () => {
    chip('experience-alpha', 'PCL').click();
    expect(entry('experience-alpha').dataset.match).toBe('true');
    expect(entry('experience-beta').dataset.match).toBe('false');
    expect(status()).toBe('1 with PCL');
    expect(clear().hidden).toBe(false);
  });

  it('presses every chip of the selected technology', () => {
    chip('project-gamma', 'TypeScript').click();
    expect(chip('project-delta', 'TypeScript').getAttribute('aria-pressed')).toBe('true');
    expect(chip('experience-alpha', 'C++').getAttribute('aria-pressed')).toBe('false');
  });

  it('matches technologies hidden in collapsed details, across experiences and projects', () => {
    chip('experience-alpha', 'Git').click();
    expect(entry('experience-beta').dataset.match).toBe('true');
    expect(entry('project-gamma').dataset.match).toBe('true');
    expect(entry('project-delta').dataset.match).toBe('false');
    expect(status()).toBe('3 with Git');
  });

  it('does not open any details', () => {
    chip('experience-alpha', 'Git').click();
    expect(main.querySelectorAll('details[open]')).toHaveLength(0);
  });

  it('resets when the active chip is clicked again or from the clear button', () => {
    chip('experience-alpha', 'PCL').click();
    chip('experience-alpha', 'PCL').click();
    expect(entry('experience-beta').hasAttribute('data-match')).toBe(false);
    expect(status()).toBe('hint');
    expect(clear().hidden).toBe(true);

    chip('experience-alpha', 'PCL').click();
    clear().click();
    expect(entry('experience-alpha').hasAttribute('data-match')).toBe(false);
  });
});
