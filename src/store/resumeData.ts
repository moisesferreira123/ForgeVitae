import { create } from "zustand";
import type { ProfileSection } from "../pdf/types/profileTypes";
import Email from "../assets/Email";
import Phone from "../assets/Phone";
import MapPin from "../assets/MapPin";

type ResumeSection = 
  ProfileSection;

type sectionsResumeData = Record<string, ResumeSection>;


interface ResumeData {
  sections: sectionsResumeData;
  updateResumeData: (newResumeData: sectionsResumeData) => void;
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
  }))
}))