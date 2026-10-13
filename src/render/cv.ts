import type { Cv, UiLabels } from '../data/types';
import { el } from './dom';
import { renderExperience } from './experience';
import { renderHeader } from './header';
import { renderProject } from './project';
import { renderEducation, renderLabelledList, renderLanguages, renderSection } from './sections';

/** Screen-only controls. Behaviour is attached by the features modules. */
function renderToolbar(ui: UiLabels): HTMLElement {
  return el(
    'nav',
    { class: 'toolbar', 'aria-label': 'Actions' },
    el(
      'button',
      { class: 'button', type: 'button', 'data-action': 'toggle-theme' },
      ui.themeToggle
    ),
    el(
      'button',
      { class: 'button button--primary', type: 'button', 'data-action': 'print' },
      ui.print
    )
  );
}

function renderFilterBar(ui: UiLabels): HTMLElement {
  return el(
    'div',
    { class: 'filter-bar' },
    el(
      'p',
      { class: 'filter-bar__status', 'aria-live': 'polite', 'data-filter-status': '' },
      ui.filterHint
    ),
    el(
      'button',
      { class: 'button button--small', type: 'button', 'data-action': 'clear-filter', hidden: '' },
      ui.clearFilter
    ),
    el(
      'button',
      { class: 'button button--small', type: 'button', 'data-action': 'toggle-all' },
      ui.expandAll
    )
  );
}

/**
 * Builds the whole document. The main column comes first in the DOM so that
 * reading order and print order match the PDF; CSS places the aside visually.
 */
export function renderCv(cv: Cv): HTMLElement {
  const { ui } = cv;
  return el(
    'div',
    { class: 'page' },
    renderToolbar(ui),
    renderHeader(cv.person),
    el(
      'div',
      { class: 'cv-layout' },
      el(
        'main',
        { class: 'cv-main' },
        renderSection('summary', ui.summary, el('p', { class: 'summary' }, cv.summary)),
        renderSection(
          'experience',
          ui.experience,
          renderFilterBar(ui),
          ...cv.experiences.map((experience) => renderExperience(experience, ui))
        ),
        renderSection(
          'projects',
          ui.projects,
          ...cv.projects.map((project) => renderProject(project, ui))
        ),
        renderSection('soft-skills', ui.softSkills, renderLabelledList(cv.softSkills))
      ),
      el(
        'aside',
        { class: 'cv-aside' },
        renderSection(
          'technical-skills',
          ui.technicalSkills,
          renderLabelledList(cv.technicalSkills)
        ),
        renderSection('languages', ui.languages, renderLanguages(cv.languages)),
        renderSection('education', ui.education, renderEducation(cv.education))
      )
    )
  );
}
