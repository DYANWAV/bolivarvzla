import { create } from 'zustand'
import { InputsActions, InputsState } from '@/types/inputs.types'
import { BOLIVARES_INITIAL_VALUE, CURRENCY_INITIAL_VALUE } from '@/consts'

export const useInputsStore = create<InputsState & InputsActions>(set => ({
  bolivares: BOLIVARES_INITIAL_VALUE,
  currency: CURRENCY_INITIAL_VALUE,

  setBolivares: (value: string) => set({ bolivares: value }),
  setCurrency: (value: string) => set({ currency: value }),

  resetInputs: (bolivarValue: string) => {
    set({
      currency: CURRENCY_INITIAL_VALUE,
      bolivares: bolivarValue,
    })
  },
}))
