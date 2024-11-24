import { FiltersActions, FiltersState } from '@/types/filters.types'
import { CURRENCIES, MONITORSKEYS } from '../consts'
import { Currency, Monitorkey } from '@/types/types'
import { create } from 'zustand'

export const useFilters = create<FiltersState & FiltersActions>(set => ({
  currency: CURRENCIES.dollar.name,
  currentMonitor: MONITORSKEYS.enparalelovzla,
  changeCurrency: (currency: Currency) =>
    set({ currency, currentMonitor: MONITORSKEYS.enparalelovzla }),
  changeMonitor: (monitor: Monitorkey) => set({ currentMonitor: monitor }),
  reset: () =>
    set({
      currency: CURRENCIES.dollar.name,
      currentMonitor: MONITORSKEYS.enparalelovzla,
    }),
}))
