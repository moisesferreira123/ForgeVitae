import { create } from "zustand";
import type { ProfileSection } from "../types/profileTypes";
import { profileFields } from "../constants/allProfileFields";
import type { SummarySection } from "../types/summaryTypes";
import type { ObjectiveSection } from "../types/objectiveTypes";
import type { SkillSection } from "../types/skillTypes";
import type { ExperienceSection } from "../types/experienceTypes";
import type { EducationSection } from "../types/educationTypes";
import type { LanguageSection } from "../types/languageTypes";
import type { ProjectSection } from "../types/projectType";

type ResumeSection = 
  ProfileSection |
  SummarySection |
  ObjectiveSection |
  SkillSection |
  ExperienceSection |
  EducationSection |
  LanguageSection |
  ProjectSection;

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
        },
        'objective': {
          type: 'objective',
          content: ''
        },
        'skills': {
          type: 'skills',
          skills: []
        },
        'experience': {
          type: 'experience',
          experiences: []
        },
        'education' : {
          type: 'education',
          education: []
        },
        'language' : {
          type: 'language',
          languages: []
        },
        'project' : {
          type: 'project',
          projects: []
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
          case 'objective':
            return {
              sections: {
                ...state.sections,
                'objective': {...newSectionData}
              }
            }
          case 'skills':
            return {
              sections: {
                ...state.sections,
                'skills': {...newSectionData}
              }
            }
          case 'experience':
            return {
              sections: {
                ...state.sections,
                'experience': {...newSectionData}
              }
            }
          case 'education':
            return {
              sections: {
                ...state.sections,
                'education': {...newSectionData}
              }
            }
          case 'language':
            return {
              sections: {
                ...state.sections,
                'language': {...newSectionData}
              }
            }
          case 'project':
            return {
              sections: {
                ...state.sections,
                'project': {...newSectionData}
              }
            }
          default:
            return state;
        }
      })
    }
  )
})