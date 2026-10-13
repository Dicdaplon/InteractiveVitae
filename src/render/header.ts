import type { Person } from '../data/types';
import { el } from './dom';
import { bareUrl } from './url';

/** Link to the interactive version, shown on paper only. */
export interface OnlineVersion {
  label: string;
  url: string;
}

function contactItems(person: Person): HTMLElement[] {
  const items = [
    el('li', {}, person.location),
    el('li', {}, el('a', { href: `mailto:${person.email}` }, person.email)),
  ];
  if (person.phone) {
    const tel = person.phone.replace(/\s/g, '');
    items.push(el('li', {}, el('a', { href: `tel:${tel}` }, person.phone)));
  }
  for (const link of person.links) {
    items.push(el('li', {}, el('a', { href: link.href, rel: 'noopener' }, link.label)));
  }
  return items;
}

export function renderHeader(person: Person, online: OnlineVersion): HTMLElement {
  return el(
    'header',
    { class: 'cv-header' },
    el('h1', { class: 'cv-header__name' }, person.name),
    el('p', { class: 'cv-header__title' }, person.title),
    el('ul', { class: 'cv-header__contact' }, ...contactItems(person)),
    person.notes.length > 0 &&
      el('ul', { class: 'cv-header__notes' }, ...person.notes.map((note) => el('li', {}, note))),
    el(
      'p',
      { class: 'cv-header__online' },
      `${online.label} `,
      el('a', { href: online.url }, bareUrl(online.url))
    )
  );
}
