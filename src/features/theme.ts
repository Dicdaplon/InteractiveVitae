export type Theme = 'light' | 'dark';

const STORAGE_KEY = 'theme';

/** Minimal storage contract so tests and private browsing can swap it out. */
export interface ThemeStorage {
  get(): string | null;
  set(value: Theme): void;
}

export const localThemeStorage: ThemeStorage = {
  get() {
    try {
      return localStorage.getItem(STORAGE_KEY);
    } catch {
      return null;
    }
  },
  set(value) {
    try {
      localStorage.setItem(STORAGE_KEY, value);
    } catch {
      // Storage can be unavailable (private mode); the choice then lasts one visit.
    }
  },
};

export function parseTheme(value: string | null | undefined): Theme | null {
  return value === 'light' || value === 'dark' ? value : null;
}

/** The theme in effect: an explicit choice wins, otherwise the OS preference. */
export function effectiveTheme(explicit: Theme | null, prefersDark: boolean): Theme {
  return explicit ?? (prefersDark ? 'dark' : 'light');
}

function prefersDark(): boolean {
  return window.matchMedia?.('(prefers-color-scheme: dark)').matches ?? false;
}

/**
 * Restores a stored choice and wires the toggle button. Without a stored
 * choice no attribute is set, so tokens.css follows the OS on its own.
 */
export function setupThemeToggle(
  root: HTMLElement,
  button: HTMLElement,
  storage: ThemeStorage = localThemeStorage
): void {
  const stored = parseTheme(storage.get());
  if (stored) root.dataset.theme = stored;

  button.addEventListener('click', () => {
    const current = effectiveTheme(parseTheme(root.dataset.theme), prefersDark());
    const next: Theme = current === 'dark' ? 'light' : 'dark';
    root.dataset.theme = next;
    storage.set(next);
  });
}
