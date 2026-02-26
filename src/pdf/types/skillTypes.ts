export interface Skill {
  id: number;
  content: string;
}

export interface SkillSection {
  type: string;
  skills: Skill[]
}