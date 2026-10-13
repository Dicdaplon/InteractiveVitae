import type { Entry, UiLabels } from '../data/types';
import { el, type Child } from './dom';

/** What differs between card kinds; the rest comes from the shared Entry. */
export interface EntryHeading {
  domId: string;
  title: string;
  /** Company or project owner, appended to the title and to the toggle's accessible name. */
  org?: string;
  period: string;
  context?: string;
  /** Extra always-visible content placed after the key technologies (e.g. links). */
  extra?: Child;
  modifier?: string;
}

/** A technology chip. It is a button so the filter is reachable by keyboard. */
export function renderTag(technology: string): HTMLButtonElement {
  return el(
    'button',
    { class: 'tag', type: 'button', 'data-tech': technology, 'aria-pressed': 'false' },
    technology
  );
}

function renderTags(technologies: string[], label: string): HTMLElement {
  return el(
    'div',
    { class: 'entry__tags', role: 'group', 'aria-label': label },
    ...technologies.map(renderTag)
  );
}

function renderDetails(entry: Entry, heading: EntryHeading, ui: UiLabels): HTMLElement | null {
  const otherTechnologies = entry.technologies.filter(
    (tech) => !entry.keyTechnologies.includes(tech)
  );
  if (entry.details.length === 0 && otherTechnologies.length === 0) return null;

  return el(
    'details',
    { class: 'entry__details' },
    el(
      'summary',
      { class: 'entry__toggle' },
      ui.details,
      el('span', { class: 'visually-hidden' }, ` — ${heading.org ?? heading.title}`)
    ),
    el(
      'div',
      { class: 'entry__body' },
      entry.details.length > 0 &&
        el(
          'ul',
          { class: 'entry__highlights' },
          ...entry.details.map((detail) => el('li', {}, detail))
        ),
      otherTechnologies.length > 0 &&
        el(
          'div',
          { class: 'entry__more' },
          el('p', { class: 'entry__more-label' }, ui.moreTechnologies),
          renderTags(otherTechnologies, ui.moreTechnologies)
        )
    )
  );
}

/**
 * A card: heading, summary and key technologies always visible; details and
 * remaining technologies inside a native <details>, so toggling needs no JS.
 */
export function renderEntry(entry: Entry, heading: EntryHeading, ui: UiLabels): HTMLElement {
  return el(
    'article',
    {
      class: heading.modifier ? `entry ${heading.modifier}` : 'entry',
      id: heading.domId,
      'data-technologies': JSON.stringify(entry.technologies),
      'data-print-hidden': entry.printHidden ? '' : undefined,
    },
    el(
      'header',
      { class: 'entry__header' },
      el(
        'h3',
        { class: 'entry__title' },
        heading.title,
        heading.org && ' ',
        heading.org && el('span', { class: 'entry__org' }, `— ${heading.org}`)
      ),
      el('p', { class: 'entry__period' }, heading.period),
      heading.context && el('p', { class: 'entry__context' }, heading.context)
    ),
    el('p', { class: 'entry__summary' }, entry.summary),
    renderTags(entry.keyTechnologies, ui.technologies),
    heading.extra,
    renderDetails(entry, heading, ui)
  );
}
