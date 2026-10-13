import type { Education, LabelledItem, Language } from '../data/types';
import { el, type Child } from './dom';

export function renderSection(id: string, title: string, ...content: Child[]): HTMLElement {
  const headingId = `${id}-title`;
  return el(
    'section',
    { class: 'cv-section', id, 'aria-labelledby': headingId },
    el('h2', { class: 'cv-section__title', id: headingId }, title),
    ...content
  );
}

export function renderLabelledList(items: LabelledItem[]): HTMLElement {
  return el(
    'dl',
    { class: 'labelled-list' },
    ...items.flatMap((item) => [
      el('dt', { class: 'labelled-list__label' }, item.label),
      el('dd', { class: 'labelled-list__value' }, item.value),
    ])
  );
}

export function renderLanguages(languages: Language[]): HTMLElement {
  return renderLabelledList(languages.map(({ name, level }) => ({ label: name, value: level })));
}

export function renderEducation(education: Education[]): HTMLElement {
  return el(
    'ul',
    { class: 'education' },
    ...education.map((entry) =>
      el(
        'li',
        { class: 'education__item' },
        el('p', { class: 'education__degree' }, `${entry.degree} — ${entry.field}`),
        el('p', { class: 'education__school' }, entry.school),
        el('p', { class: 'education__period' }, entry.period)
      )
    )
  );
}

export function renderInlineList(items: string[]): HTMLElement {
  return el('ul', { class: 'inline-list' }, ...items.map((item) => el('li', {}, item)));
}
