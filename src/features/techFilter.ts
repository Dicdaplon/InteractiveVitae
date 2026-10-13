export interface TechFilterLabels {
  hint: string;
  /** Template with {count} and {tech} placeholders. */
  result: string;
}

export function matchesTechnology(technologies: readonly string[], technology: string): boolean {
  return technologies.includes(technology);
}

export function formatResult(template: string, count: number, technology: string): string {
  return template.replace('{count}', String(count)).replace('{tech}', technology);
}

function readTechnologies(card: HTMLElement): string[] {
  return JSON.parse(card.dataset.technologies ?? '[]') as string[];
}

/**
 * Highlights the entries that use the selected technology and dims the
 * others. Clicking the active chip again, or the clear button, resets it.
 * State lives in data attributes so CSS owns the visuals.
 */
export function setupTechFilter(section: HTMLElement, labels: TechFilterLabels): void {
  const cards = [...section.querySelectorAll<HTMLElement>('[data-technologies]')];
  const chips = [...section.querySelectorAll<HTMLElement>('[data-tech]')];
  const status = section.querySelector<HTMLElement>('[data-filter-status]');
  const clear = section.querySelector<HTMLElement>('[data-action="clear-filter"]');
  let active: string | null = null;

  function apply(technology: string | null): void {
    active = technology;
    for (const chip of chips) {
      chip.setAttribute('aria-pressed', String(chip.dataset.tech === technology));
    }
    let count = 0;
    for (const card of cards) {
      if (technology === null) {
        delete card.dataset.match;
        continue;
      }
      const match = matchesTechnology(readTechnologies(card), technology);
      card.dataset.match = String(match);
      if (match) count += 1;
    }
    if (status) {
      status.textContent =
        technology === null ? labels.hint : formatResult(labels.result, count, technology);
    }
    if (clear) clear.hidden = technology === null;
  }

  section.addEventListener('click', (event) => {
    const target = event.target as HTMLElement;
    if (target.closest('[data-action="clear-filter"]')) {
      apply(null);
      return;
    }
    const chip = target.closest<HTMLElement>('[data-tech]');
    if (!chip?.dataset.tech) return;
    apply(chip.dataset.tech === active ? null : chip.dataset.tech);
  });
}
