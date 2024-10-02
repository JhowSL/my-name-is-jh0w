import { create } from 'zustand'

type DialogState = {
  isConfirmationDialogOpen: boolean
  setConfirmationDialogOpen: (isOpen: boolean) => void
  isDialogOpen: boolean
  setDialogOpen: (isOpen: boolean) => void
  closeAllDialogs: () => void
}

export const useDialogStore = create<DialogState>(set => ({
  isConfirmationDialogOpen: false,
  setConfirmationDialogOpen: isOpen =>
    set({ isConfirmationDialogOpen: isOpen }),
  isDialogOpen: false,
  setDialogOpen: isOpen => set({ isDialogOpen: isOpen }),
  closeAllDialogs: () =>
    set({ isConfirmationDialogOpen: false, isDialogOpen: false }),
}))
