import { describe, expect, it } from 'vitest';
import { cvFr } from '../data/cv.fr';
import { renderCv } from './cv';
import { el } from './dom';

describe('el', () => {
  it('treats strings as text, never as markup', () => {
    const node = el('p', {}, '<img src=x onerror=alert(1)>');
    expect(node.querySelector('img')).toBeNull();
    expect(node.textContent).toBe('<img src=x onerror=alert(1)>');
  });

  it('skips undefined attributes and falsy children', () => {
    const node = el('p', { title: undefined, class: 'a' }, false, null, 'x');
    expect(node.hasAttribute('title')).toBe(false);
    expect(node.className).toBe('a');
    expect(node.childNodes).toHaveLength(1);
  });
});

describe('renderCv', () => {
  const page = renderCv(cvFr);

  it('renders the name as the only h1', () => {
    const headings = page.querySelectorAll('h1');
    expect(headings).toHaveLength(1);
    expect(headings[0]?.textContent).toBe(cvFr.person.name);
  });

  it('renders one article per experience, in content order', () => {
    const ids = [...page.querySelectorAll('article.experience')].map((node) => node.id);
    expect(ids).toEqual(cvFr.experiences.map((experience) => `experience-${experience.id}`));
  });

  it('renders every technology of an experience as a filter button', () => {
    for (const experience of cvFr.experiences) {
      const article = page.querySelector(`#experience-${experience.id}`);
      const tags = [...(article?.querySelectorAll<HTMLElement>('[data-tech]') ?? [])];
      expect(tags.map((tag) => tag.dataset.tech)).toEqual(experience.technologies);
    }
  });

  it('labels every section with its heading', () => {
    for (const section of page.querySelectorAll('section')) {
      const heading = page.querySelector(`#${section.getAttribute('aria-labelledby')}`);
      expect(heading?.tagName).toBe('H2');
    }
  });

  it('puts the main column before the aside in reading order', () => {
    const layout = page.querySelector('.cv-layout');
    expect([...(layout?.children ?? [])].map((node) => node.tagName)).toEqual(['MAIN', 'ASIDE']);
  });
});
