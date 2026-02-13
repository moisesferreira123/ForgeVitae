import { create } from "zustand";

type Modal = {
  isOpen: boolean;
  updateModal: () => void;
}

export const useAddProfileInfoModal = create<Modal>((set) => ({
  isOpen: false,
  updateModal: () => set((state) => ({
    isOpen: !state.isOpen
  }))
}))