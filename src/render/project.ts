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
      el('a', { href: project.repo, rel: 'noopener', 'data-link': 'repo' }, ui.sourceCode),
    // Paper only: lets a printed CV reach the live project.
    renderQrCode(project.url, `${ui.visitSite} ${project.name}`)
  );
}

export function renderProject(project: Project, ui: UiLabels): HTMLElement {
  return renderEntry(
    project,
    {
      domId: `project-${project.id}`,
      title: project.name,
      period: project.period,
      context: project.context,
      extra: renderLinks(project, ui),
      modifier: 'entry--project',
    },
    ui
  );
}
