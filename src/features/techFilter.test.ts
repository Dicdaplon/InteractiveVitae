import { beforeEach, describe, expect, it } from 'vitest';
import cvFr from '../data/cv/ai-media.fr';
import { renderCv } from '../render/cv';
import { formatResult, matchesTechnology, setupTechFilter } from './techFilter';

const labels = { hint: 'hint', result: '{count} avec {tech}' };

describe('matchesTechnology', () => {
  it('matches exact names only', () => {
    expect(matchesTechnology(['C++', 'Git'], 'C++')).toBe(true);
    expect(matchesTechnology(['C++17'], 'C++')).toBe(false);
  });
});

describe('formatResult', () => {
  it('fills both placeholders', () => {
    expect(formatResult('{count} avec {tech}', 3, 'Git')).toBe('3 avec Git');
  });
});

describe('setupTechFilter', () => {
  let section: HTMLElement;

  const card = (id: string) => section.querySelector<HTMLElement>(`#experience-${id}`)!;
  const chip = (id: string, tech: string) =>
    card(id).querySelector<HTMLElement>(`[data-tech="${tech}"]`)!;
  const status = () => section.querySelector('[data-filter-status]')!.textContent;
  const clear = () => section.querySelector<HTMLElement>('[data-action="clear-filter"]')!;

  beforeEach(() => {
    section = renderCv(cvFr).querySelector<HTMLElement>('.cv-main')!;
    setupTechFilter(section, labels);
  });

  it('highlights matching experiences and dims the others', () => {
    chip('augmenta', 'PCL').click();
    expect(card('augmenta').dataset.match).toBe('true');
    expect(card('aiotrust').dataset.match).toBe('false');
    expect(status()).toBe('1 avec PCL');
    expect(clear().hidden).toBe(false);
  });

  it('presses every chip of the selected technology', () => {
    chip('aiotrust', 'Git').click();
    expect(chip('augmenta', 'Git').getAttribute('aria-pressed')).toBe('true');
    expect(chip('augmenta', 'PCL').getAttribute('aria-pressed')).toBe('false');
  });

  it('resets when the active chip is clicked again', () => {
    chip('augmenta', 'PCL').click();
    chip('augmenta', 'PCL').click();
    expect(card('aiotrust').hasAttribute('data-match')).toBe(false);
    expect(status()).toBe('hint');
    expect(clear().hidden).toBe(true);
  });

  it('includes projects and technologies hidden in collapsed details', () => {
    chip('aiotrust', 'Git').click();
    expect(card('mylight').dataset.match).toBe('true');
    expect(section.querySelector('#project-lolouplive')?.getAttribute('data-match')).toBe('false');

    section.querySelector<HTMLElement>('#project-lolouplive [data-tech="TypeScript"]')!.click();
    expect(section.querySelector('#project-ecole-du-loup')?.getAttribute('data-match')).toBe(
      'true'
    );
    expect(card('aiotrust').dataset.match).toBe('false');
  });

  it('does not open any details', () => {
    chip('aiotrust', 'Git').click();
    expect(section.querySelectorAll('details[open]')).toHaveLength(0);
  });

  it('resets from the clear button', () => {
    chip('augmenta', 'PCL').click();
    clear().click();
    expect(card('augmenta').hasAttribute('data-match')).toBe(false);
  });
});
