export interface Language {
  language: string;
  level: string;
  description: string;
}

export interface LanguageSection {
  type: string;
  languages: Language[];
}