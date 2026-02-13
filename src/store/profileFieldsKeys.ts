import { create } from "zustand";

interface ProfileFieldKeys {
  keys: string[];
  updateProfileFieldKeys: (newKeys: string[]) => void;
  addProfileFieldKeys: (newKeys: string[]) => void;
  removeProfileFieldKey: (key: string) => void;
}

export const useProdileFieldKeys = create<ProfileFieldKeys>((set) => ({
  keys: ['name', 'phone', 'email', 'location'],
  updateProfileFieldKeys: (newKeys) => set(() => ({
    keys: [...newKeys]
  })),
  addProfileFieldKeys: (newKeys) => set((state) => ({
    keys: [...state.keys, ...newKeys]
  })),
  removeProfileFieldKey: (key) => set((state) => ({
    keys: state.keys.filter(k => k !== key)
  }))
}))
