import './styles/tokens.css';
import './styles/base.css';
import './styles/components.css';
import { cvFr } from './data/cv.fr';
import { renderCv } from './render/cv';

const root = document.querySelector<HTMLElement>('#app');
if (!root) throw new Error('Missing #app root element');

document.documentElement.lang = cvFr.lang;
root.replaceChildren(renderCv(cvFr));
