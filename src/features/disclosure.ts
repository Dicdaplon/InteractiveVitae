export interface DisclosureLabels {
  expandAll: string;
  collapseAll: string;
}

/**
 * Wires the "expand all / collapse all" button. Its label always reflects
 * the current state, including when items are opened one by one.
 */
export function setupDisclosure(
  scope: HTMLElement,
  button: HTMLElement,
  labels: DisclosureLabels
): void {
  const items = [...scope.querySelectorAll<HTMLDetailsElement>('details')];
  const allOpen = () => items.length > 0 && items.every((item) => item.open);
  const refresh = () => {
    button.textContent = allOpen() ? labels.collapseAll : labels.expandAll;
  };

  button.addEventListener('click', () => {
    const open = !allOpen();
    for (const item of items) item.open = open;
    refresh();
  });
  // `toggle` does not bubble, so listen during the capture phase.
  scope.addEventListener('toggle', refresh, true);
  refresh();
}

/**
 * Opens the entry named by a URL hash such as "#experience-aiotrust".
 * getElementById is used instead of querySelector so a crafted hash can
 * never be interpreted as a selector. Returns the opened entry, if any.
 */
export function openFromHash(doc: Document, hash: string): HTMLElement | null {
  let id: string;
  try {
    id = decodeURIComponent(hash.replace(/^#/, ''));
  } catch {
    return null;
  }
  if (!id) return null;

  const entry = doc.getElementById(id);
  const details = entry?.classList.contains('entry')
    ? entry.querySelector<HTMLDetailsElement>('details')
    : null;
  if (!entry || !details) return null;
  details.open = true;
  return entry;
}
