import './styles/tokens.css';
import './styles/base.css';
import './styles/components.css';
import './styles/print.css';
import { cvFr } from './data/cv.fr';
import { setupThemeToggle } from './features/theme';
import { renderCv } from './render/cv';

const root = document.querySelector<HTMLElement>('#app');
if (!root) throw new Error('Missing #app root element');

const page = renderCv(cvFr);
document.documentElement.lang = cvFr.lang;
root.replaceChildren(page);

const themeButton = page.querySelector<HTMLElement>('[data-action="toggle-theme"]');
if (themeButton) setupThemeToggle(document.documentElement, themeButton);
