import { create } from 'zustand'

type ScrollTop = {
  isPastThreshold: boolean
  setIsPastThreshold: (isPastThreshold: boolean) => void
}

export const useScrollTopStore = create<ScrollTop>(set => ({
  isPastThreshold: false,
  setIsPastThreshold: isPastThreshold => set({ isPastThreshold }),
}))
