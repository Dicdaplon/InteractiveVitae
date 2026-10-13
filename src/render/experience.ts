import type { Experience, UiLabels } from '../data/types';
import { renderEntry } from './entry';

export function renderExperience(experience: Experience, ui: UiLabels): HTMLElement {
  return renderEntry(
    experience,
    {
      domId: `experience-${experience.id}`,
      title: experience.role,
      org: experience.company,
      period: experience.period,
      context: experience.context,
    },
    ui
  );
}
