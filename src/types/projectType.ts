interface LinkInfo {
  value: string;
  url: string
}

export interface Project {
  name: string;
  technologies: string[];
  links: LinkInfo[]
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