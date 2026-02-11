import { create } from "zustand";
import type { ProfileField, ProfileSection } from "../pdf/types/profileTypes";
import Email from "../assets/Email";
import Phone from "../assets/Phone";
import MapPin from "../assets/MapPin";

type ResumeSection = 
  ProfileSection;

type sectionsResumeData = Record<string, ResumeSection>;


interface ResumeData {
  sections: sectionsResumeData;
  updateResumeData: (newResumeData: sectionsResumeData) => void;
  addProfileField: (newFieldName: string, newProfileField: ProfileField) => void;
}

interface ProfileFieldKeys {
  keys: string[];
  updateProfileFieldKeys: (newKeys: string[]) => void;
  addProfileFieldKey: (newKey: string) => void;
}

export const useResumeData = create<ResumeData>((set) => ({
  sections: {
    'profile':  {
      fields: {
        'name' : {
          value: '',
        },
        'email': {
          value: '',
          icon: Email
        },
        'phone': {
          value: '',
          icon: Phone
        },
        'location': {
          value: '',
          icon: MapPin
        }
      }
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
}))

export const useProdileFieldKeys = create<ProfileFieldKeys>((set) => ({
  keys: ['name', 'phone', 'email', 'location'],
  updateProfileFieldKeys: (newKeys) => set(() => ({
    keys: [...newKeys]
  })),
  addProfileFieldKey: (newKey) => set((state) => ({
    keys: [...state.keys, newKey]
  }))
}))