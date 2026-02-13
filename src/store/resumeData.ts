import { create } from "zustand";
import type { ProfileField, ProfileSection } from "../pdf/types/profileTypes";
import { profileFields } from "../constants/allProfileFields";

type ResumeSection = 
  ProfileSection;

type sectionsResumeData = Record<string, ResumeSection>;


interface ResumeData {
  sections: sectionsResumeData;
  updateResumeData: (newResumeData: sectionsResumeData) => void;
  addProfileField: (newFieldName: string, newProfileField: ProfileField) => void;
}

export const useResumeData = create<ResumeData>((set) => {
  return (
    {
      sections: {
        'profile':  {
          fields: {...profileFields}
        }
      },
      updateResumeData: (newResumeData) => set(() => ({
        sections: {...newResumeData}
      })),
      addProfileField: (newFieldName, newProfileField) => set((state) => {
        const newResumeData : sectionsResumeData = {...state.sections};
        newResumeData['profile'].fields = {...state.sections['profile'].fields, [newFieldName]: newProfileField};

        return {
          sections: {...newResumeData}
        }
      })
    }
  )
})