export interface Education {
  educationalInstitution: string;
  degree: string;
  startMonth: string;
  startYear: string
  endMonth: string;
  endYear: string;
  location: string;
  description: string;
}

export interface EducationSection {
  type: string;
  education: Education[]
}