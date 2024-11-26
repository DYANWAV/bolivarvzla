import { Monitorkey } from './types'

export type FiltersState = {
  currencySelected: Currency
  monitorSelected: Monitorkey
}

export type FiltersActions = {
  setCurrencySelected: (currency: Currency) => void
  setMonitorSelected: (monitor: Monitorkey) => void
  resetFilters: () => void
}
