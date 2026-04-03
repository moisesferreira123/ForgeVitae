import { create } from "zustand";

interface SectionsStore {
  ids: number[];
  updateSections: (updatedIds: number[]) => void;
  addSections: (newIds: number[]) => void;
  removeSection: (id: number) => void;
}

export const useSectionsStore = create<SectionsStore>((set) => ({
  ids: [0,1,2,3,4,5],
  updateSections: (updatedIds) => set(() => ({
    ids: updatedIds
  })),
  addSections: (newIds) =>  set((state) => ({
    ids: [...state.ids, ...newIds]
  })),
  removeSection: (id) => set((state) => ({
    ids: state.ids.filter(item => item !== id)
  })),
}))