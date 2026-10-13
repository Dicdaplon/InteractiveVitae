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
  /** Short practical notes shown under the contact line (remote work, licence...). */
  notes: string[];
}

export interface Experience {
  /** Stable identifier, used for DOM ids and tests. */
  id: string;
  role: string;
  company: string;
  /** Sector or one-line project context. */
  context?: string;
  /** Display string, e.g. "2022 – 2025 (2 ans 9 mois)". */
  period: string;
  highlights: string[];
  technologies: string[];
}

export interface LabelledItem {
  label: string;
  value: string;
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
