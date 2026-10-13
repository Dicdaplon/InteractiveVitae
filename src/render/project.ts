import type { Project, UiLabels } from '../data/types';
import { el } from './dom';
import { renderEntry } from './entry';
import { renderQrCode } from './qr';
import { bareUrl } from './url';

function renderLinks(project: Project, ui: UiLabels): HTMLElement {
  return el(
    'p',
    { class: 'entry__links' },
    el(
      'a',
      {
        href: project.url,
        rel: 'noopener',
        'data-link': 'site',
        title: `${ui.visitSite} ${project.name}`,
      },
      bareUrl(project.url)
    ),
    project.repo &&
      el('a', { href: project.repo, rel: 'noopener', 'data-link': 'repo' }, ui.sourceCode)
  );
}

/** Links, plus a clickable QR code that only prints, as direct children of the card. */
function renderExtras(project: Project, ui: UiLabels): DocumentFragment {
  const extras = document.createDocumentFragment();
  extras.append(
    renderLinks(project, ui),
    el(
      'a',
      { class: 'entry__qr', href: project.url, rel: 'noopener' },
      renderQrCode(project.url, `${ui.visitSite} ${project.name}`)
    )
  );
  return extras;
}

export function renderProject(project: Project, ui: UiLabels): HTMLElement {
  return renderEntry(
    project,
    {
      domId: `project-${project.id}`,
      title: project.name,
      period: project.period,
      context: project.context,
      extra: renderExtras(project, ui),
      modifier: 'entry--project',
    },
    ui
  );
}
