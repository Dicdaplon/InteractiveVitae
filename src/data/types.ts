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
  /** Bullets revealed on demand; printed only through `print.highlights`. */
  details: string[];
  /** Full list, most important first. Drives the technology filter. */
  technologies: string[];
  /** Shown on the card and printed. Subset of `technologies`, 1 to 5 entries. */
  keyTechnologies: string[];
  /** How the one-page print shows this entry; summary and key technologies by default. */
  print?: EntryPrint;
}

/**
 * - `hidden`: left out of the printed page.
 * - `compact`: heading line only (title, period, context).
 * - `{ highlights: n }`: also prints the first n `details` bullets.
 */
export type EntryPrint = 'hidden' | 'compact' | { highlights: number };

export interface Experience extends Entry {
  role: string;
  company: string;
  /** Sector or one-line project context. */
  context?: string;
  /** Display string, e.g. "05/2022 – 01/2025 (2 ans 9 mois)". */
  period: string;
}

export interface Project extends Entry {
  name: string;
  /** One-line nature of the project. */
  context: string;
  period: string;
  /** Live site, https only. */
  url: string;
  /** Public source repository, https only. */
  repo?: string;
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
  projects: string;
  technicalSkills: string;
  softSkills: string;
  languages: string;
  education: string;
  technologies: string;
  details: string;
  moreTechnologies: string;
  expandAll: string;
  collapseAll: string;
  print: string;
  themeToggle: string;
  filterHint: string;
  /** Template with {count} and {tech} placeholders. */
  filterResult: string;
  clearFilter: string;
  visitSite: string;
  sourceCode: string;
  onlineVersion: string;
}

export interface Cv {
  lang: string;
  /** Public URL of the interactive version, printed in the header. Omit for unpublished variants. */
  url?: string;
  /** The same CV in the other language, shown in the toolbar. */
  alternate?: ContactLink;
  person: Person;
  summary: string;
  experiences: Experience[];
  projects: Project[];
  technicalSkills: LabelledItem[];
  softSkills: LabelledItem[];
  languages: Language[];
  education: Education[];
  ui: UiLabels;
}
