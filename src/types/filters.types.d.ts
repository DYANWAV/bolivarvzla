export type FiltersState = {
  currency: Currency
  currentMonitor: Monitorkey
}

export type FiltersActions = {
  changeCurrency: (currency: Currency) => void
  changeMonitor: (monitor: Monitorkey) => void
  reset: () => void
}
