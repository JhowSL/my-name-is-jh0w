import { create } from 'zustand'

type FormState = {
  isFormValid: boolean
  setFormValid: (isValid: boolean) => void
}

export const useFormStore = create<FormState>(set => ({
  isFormValid: false,
  setFormValid: isValid => set({ isFormValid: isValid }),
}))
