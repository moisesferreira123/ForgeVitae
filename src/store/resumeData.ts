import { create } from "zustand";
import type { ProfileSection } from "../pdf/types/profileTypes";
import { profileFields } from "../constants/allProfileFields";
import type { SummarySection } from "../pdf/types/summaryTypes";

type ResumeSection = 
  ProfileSection |
  SummarySection;

type sectionsResumeData = Record<string, ResumeSection>;

interface ResumeData {
  sections: sectionsResumeData;
  updateResumeData: (newSectionData: ResumeSection) => void;
}

export const useResumeData = create<ResumeData>((set) => {
  return (
    {
      sections: {
        'profile':  {
          type: 'profile',
          fields: {...profileFields}
        },
        'summary': {
          type: 'summary',
          content: ''
        }
      },
      updateResumeData: (newSectionData) => set((state) => {
        switch(newSectionData.type) {
          case 'profile': 
            return {
              sections: {
                ...state.sections,
                'profile': {...newSectionData}
              }
            }
          case 'summary':
            return {
              sections: {
                ...state.sections,
                'summary': {...newSectionData}
              }
            }
          default:
            return state;
        }
      })
    }
  )
})