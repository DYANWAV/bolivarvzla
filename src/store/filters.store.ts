import { CURRENCIES, MONITORSKEYS } from '@/consts'
import { FiltersActions, FiltersState } from '@/types/filters.types'
import { Currency, Monitorkey } from '@/types/types'
import { create } from 'zustand'

export const useFiltersStore = create<FiltersState & FiltersActions>(set => ({
  currencySelected: CURRENCIES.dollar.name,
  monitorSelected: MONITORSKEYS.enparalelovzla,

  setCurrencySelected: (currencySelected: Currency) =>
    set({ currencySelected, monitorSelected: MONITORSKEYS.enparalelovzla }),

  setMonitorSelected: (monitor: Monitorkey) => set({ monitorSelected: monitor }),

  resetFilters: () =>
    set({
      currencySelected: CURRENCIES.dollar.name,
      monitorSelected: MONITORSKEYS.enparalelovzla,
    }),
}))
