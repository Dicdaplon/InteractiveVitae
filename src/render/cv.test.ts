import { describe, expect, it } from 'vitest';
import cvFr from '../data/cv/basic.fr';
import { renderCv } from './cv';
import { el } from './dom';
import { renderEntry } from './entry';
import { bareUrl } from './url';

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

  it('renders one article per experience then per project, in content order', () => {
    const ids = [...page.querySelectorAll('article.entry')].map((node) => node.id);
    expect(ids).toEqual([
      ...cvFr.experiences.map((experience) => `experience-${experience.id}`),
      ...cvFr.projects.map((project) => `project-${project.id}`),
    ]);
  });

  it('links each project to its site with a bare URL as text', () => {
    for (const project of cvFr.projects) {
      const link = page.querySelector<HTMLAnchorElement>(
        `#project-${project.id} [data-link="site"]`
      )!;
      expect(link.getAttribute('href')).toBe(project.url);
      expect(link.textContent).toBe(bareUrl(project.url));
      expect(link.rel).toBe('noopener');
    }
  });

  it('shows summary and key technologies outside the collapsed details', () => {
    for (const experience of cvFr.experiences) {
      const article = page.querySelector(`#experience-${experience.id}`)!;
      const visible = [
        ...article.querySelectorAll<HTMLElement>(':scope > .entry__tags [data-tech]'),
      ];
      expect(visible.map((tag) => tag.dataset.tech)).toEqual(experience.keyTechnologies);
      expect(article.querySelector(':scope > .entry__summary')?.textContent).toBe(
        experience.summary
      );
      expect(article.querySelector('details')?.open).toBe(false);
    }
  });

  it('renders every technology exactly once per card', () => {
    for (const experience of cvFr.experiences) {
      const article = page.querySelector(`#experience-${experience.id}`)!;
      const tags = [...article.querySelectorAll<HTMLElement>('[data-tech]')];
      expect(tags.map((tag) => tag.dataset.tech).sort()).toEqual(
        [...experience.technologies].sort()
      );
    }
  });

  it('gives each details toggle a distinct accessible name', () => {
    const names = [...page.querySelectorAll('summary')].map((node) => node.textContent);
    expect(new Set(names).size).toBe(names.length);
  });

  it('points printed copies to the interactive version', () => {
    const link = page.querySelector<HTMLAnchorElement>('.cv-header__online a')!;
    expect(link.getAttribute('href')).toBe(cvFr.url);
  });

  it('marks print-hidden list items on both term and description', () => {
    const hidden = cvFr.softSkills.filter((item) => item.printHidden).length;
    expect(page.querySelectorAll('#soft-skills [data-print-hidden]')).toHaveLength(hidden * 2);
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

describe('renderEntry', () => {
  it('omits details when there is nothing more to reveal', () => {
    const node = renderEntry(
      { id: 'x', summary: 's', details: [], technologies: ['C'], keyTechnologies: ['C'] },
      { domId: 'x', title: 't', period: 'p' },
      cvFr.ui
    );
    expect(node.querySelector('details')).toBeNull();
  });
});

describe('bareUrl', () => {
  it('drops the scheme and the trailing slash', () => {
    expect(bareUrl('https://dicdaplon.github.io/LoloupLive/')).toBe(
      'dicdaplon.github.io/LoloupLive'
    );
    expect(bareUrl('https://ecoleduloup.fr')).toBe('ecoleduloup.fr');
  });
});
