import { describe, expect, it } from 'vitest';
import {
  effectiveTheme,
  parseTheme,
  setupThemeToggle,
  type Theme,
  type ThemeStorage,
} from './theme';

function memoryStorage(initial: string | null = null): ThemeStorage & { value: string | null } {
  return {
    value: initial,
    get() {
      return this.value;
    },
    set(next: Theme) {
      this.value = next;
    },
  };
}

describe('parseTheme', () => {
  it('accepts only known themes', () => {
    expect(parseTheme('dark')).toBe('dark');
    expect(parseTheme('light')).toBe('light');
    expect(parseTheme('blue')).toBeNull();
    expect(parseTheme(null)).toBeNull();
  });
});

describe('effectiveTheme', () => {
  it('prefers the explicit choice over the OS', () => {
    expect(effectiveTheme('light', true)).toBe('light');
    expect(effectiveTheme(null, true)).toBe('dark');
    expect(effectiveTheme(null, false)).toBe('light');
  });
});

describe('setupThemeToggle', () => {
  it('restores a stored theme', () => {
    const root = document.createElement('html');
    setupThemeToggle(root, document.createElement('button'), memoryStorage('dark'));
    expect(root.dataset.theme).toBe('dark');
  });

  it('leaves the OS in charge when nothing is stored', () => {
    const root = document.createElement('html');
    setupThemeToggle(root, document.createElement('button'), memoryStorage());
    expect(root.hasAttribute('data-theme')).toBe(false);
  });

  it('toggles and persists on click', () => {
    const root = document.createElement('html');
    const button = document.createElement('button');
    const storage = memoryStorage('light');
    setupThemeToggle(root, button, storage);

    button.click();
    expect(root.dataset.theme).toBe('dark');
    expect(storage.value).toBe('dark');

    button.click();
    expect(root.dataset.theme).toBe('light');
  });
});
