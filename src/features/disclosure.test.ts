import { beforeEach, describe, expect, it } from 'vitest';
import { cvFr } from '../data/cv.fr';
import { renderCv } from '../render/cv';
import { openFromHash, setupDisclosure } from './disclosure';

const labels = { expandAll: 'expand', collapseAll: 'collapse' };

describe('setupDisclosure', () => {
  let main: HTMLElement;
  let button: HTMLElement;
  const details = () => [...main.querySelectorAll<HTMLDetailsElement>('details')];

  beforeEach(() => {
    main = renderCv(cvFr).querySelector<HTMLElement>('.cv-main')!;
    button = main.querySelector<HTMLElement>('[data-action="toggle-all"]')!;
    setupDisclosure(main, button, labels);
  });

  it('starts closed with the expand label', () => {
    expect(details().some((item) => item.open)).toBe(false);
    expect(button.textContent).toBe('expand');
  });

  it('opens then closes every item', () => {
    button.click();
    expect(details().every((item) => item.open)).toBe(true);
    expect(button.textContent).toBe('collapse');

    button.click();
    expect(details().some((item) => item.open)).toBe(false);
    expect(button.textContent).toBe('expand');
  });

  it('goes back to the expand label when one item is closed by hand', () => {
    button.click();
    const first = details()[0]!;
    first.open = false;
    first.dispatchEvent(new Event('toggle'));
    expect(button.textContent).toBe('expand');
  });
});

describe('openFromHash', () => {
  beforeEach(() => {
    document.body.replaceChildren(renderCv(cvFr));
  });

  it('opens the targeted entry', () => {
    const entry = openFromHash(document, '#project-lolouplive');
    expect(entry?.id).toBe('project-lolouplive');
    expect(entry?.querySelector('details')?.open).toBe(true);
  });

  it('ignores unknown, empty, malformed and non-entry hashes', () => {
    for (const hash of ['', '#', '#nope', '#a]b', '#%E0%A4%A', '#experience']) {
      expect(openFromHash(document, hash), hash).toBeNull();
    }
    expect(document.querySelectorAll('details[open]')).toHaveLength(0);
  });
});
