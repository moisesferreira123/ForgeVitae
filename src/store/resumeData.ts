import { create } from "zustand";
import type { ProfileSection } from "../pdf/types/profileTypes";
import { profileFields } from "../constants/allProfileFields";

type ResumeSection = 
  ProfileSection;

type sectionsResumeData = Record<string, ResumeSection>;


interface ResumeData {
  sections: sectionsResumeData;
  updateResumeData: (newResumeData: sectionsResumeData) => void;
}

export const useResumeData = create<ResumeData>((set) => {
  return (
    {
      sections: {
        'profile':  {
          fields: {...profileFields}
        },
        
      },
      updateResumeData: (newResumeData) => set(() => ({
        sections: {...newResumeData}
      }))
    }
  )
})