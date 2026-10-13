/** Shape of the CV content. Rendering code depends only on these types. */

export interface ContactLink {
  label: string;
  href: string;
}

export interface Person {
  name: string;
  title: string;
  location: string;
  email: string;
  phone?: string;
  links: ContactLink[];
  /** Short practical notes shown under the contact line (remote work...). */
  notes: string[];
}

/** Fields shared by everything shown as a card (experience, project). */
export interface Entry {
  /** Stable identifier, used in DOM ids and deep links. */
  id: string;
  /** One or two lines, always visible and printed. */
  summary: string;
  /** Bullets revealed on demand. Never printed. */
  details: string[];
  /** Full list, most important first. Drives the technology filter. */
  technologies: string[];
  /** Shown on the card and printed. Subset of `technologies`, 1 to 5 entries. */
  keyTechnologies: string[];
  /** Leaves the item out of the printed page only. */
  printHidden?: boolean;
}

export interface Experience extends Entry {
  role: string;
  company: string;
  /** Sector or one-line project context. */
  context?: string;
  /** Display string, e.g. "2022 – 2025 (2 ans 9 mois)". */
  period: string;
}

export interface LabelledItem {
  label: string;
  value: string;
  /** Leaves the item out of the printed page only. */
  printHidden?: boolean;
}

export interface Language {
  name: string;
  level: string;
}

export interface Education {
  degree: string;
  field: string;
  school: string;
  period: string;
}

/** Interface strings, kept next to the content so a translation is one file. */
export interface UiLabels {
  summary: string;
  experience: string;
  technicalSkills: string;
  softSkills: string;
  sectors: string;
  languages: string;
  education: string;
  technologies: string;
  print: string;
  themeToggle: string;
  filterHint: string;
  /** Template with {count} and {tech} placeholders. */
  filterResult: string;
  clearFilter: string;
}

export interface Cv {
  lang: string;
  person: Person;
  summary: string;
  experiences: Experience[];
  technicalSkills: LabelledItem[];
  softSkills: LabelledItem[];
  sectors: string[];
  languages: Language[];
  education: Education[];
  ui: UiLabels;
}
