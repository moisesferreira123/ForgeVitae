import { create } from "zustand";

type Modal = {
  isOpen: boolean;
  id? : string;
  updateModal: () => void;
  updateIdModal?: (id: string) => void
}

export const useAddProfileInfoModal = create<Modal>((set) => ({
  isOpen: false,
  updateModal: () => set((state) => ({
    isOpen: !state.isOpen
  }))
}))

export const useLinkModal = create<Modal>((set) => ({
  isOpen: false,
  id: '',
  updateModal: () => set((state) => ({
    isOpen: !state.isOpen
  })),
  updateIdModal: (id) => set(() => ({
    id: id
  }))
}))