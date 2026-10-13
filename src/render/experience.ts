import type { Experience, UiLabels } from '../data/types';
import { el } from './dom';

/** A technology chip. It is a button so the filter is reachable by keyboard. */
export function renderTag(technology: string): HTMLButtonElement {
  return el(
    'button',
    { class: 'tag', type: 'button', 'data-tech': technology, 'aria-pressed': 'false' },
    technology
  );
}

export function renderExperience(experience: Experience, ui: UiLabels): HTMLElement {
  return el(
    'article',
    {
      class: 'experience',
      id: `experience-${experience.id}`,
      'data-technologies': JSON.stringify(experience.technologies),
    },
    el(
      'header',
      { class: 'experience__header' },
      el(
        'h3',
        { class: 'experience__role' },
        experience.role,
        ' ',
        el('span', { class: 'experience__company' }, `— ${experience.company}`)
      ),
      el('p', { class: 'experience__period' }, experience.period),
      experience.context && el('p', { class: 'experience__context' }, experience.context)
    ),
    el(
      'ul',
      { class: 'experience__highlights' },
      ...experience.details.map((detail) => el('li', {}, detail))
    ),
    el(
      'div',
      { class: 'experience__tags', role: 'group', 'aria-label': ui.technologies },
      ...experience.technologies.map(renderTag)
    )
  );
}
