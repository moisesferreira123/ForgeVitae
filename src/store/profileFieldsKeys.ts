import { create } from "zustand";

interface ProfileFieldKeys {
  keys: string[];
  updateProfileFieldKeys: (newKeys: string[]) => void;
  addProfileFieldKey: (newKeys: string[]) => void;
}

export const useProdileFieldKeys = create<ProfileFieldKeys>((set) => ({
  keys: ['name', 'phone', 'email', 'location'],
  updateProfileFieldKeys: (newKeys) => set(() => ({
    keys: [...newKeys]
  })),
  addProfileFieldKey: (newKeys) => set((state) => ({
    keys: [...state.keys, ...newKeys]
  }))
}))
