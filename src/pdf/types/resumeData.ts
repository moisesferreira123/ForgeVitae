import type { ProfileSection } from "./profileTypes";

type ResumeSection = 
  ProfileSection;

export interface ResumeData {
  sections: Record<string, ResumeSection>;
}