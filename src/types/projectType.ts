export interface Project {
  name: string;
  technologies: string[];
  links: string[]
  startMonth: string;
  startYear: string
  endMonth: string;
  endYear: string;
  description: string;
}

export interface ProjectSection {
  type: string;
  projects: Project[]
}