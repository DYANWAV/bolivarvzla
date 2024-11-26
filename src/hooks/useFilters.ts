import { useFiltersStore } from '@/store/filters.store'

export const useFilters = () => {
  const setCurrencySelected = useFiltersStore(state => state.setCurrencySelected)
  const setMonitorSelected = useFiltersStore(state => state.setMonitorSelected)
  const currencySelected = useFiltersStore(state => state.currencySelected)
  const monitorSelected = useFiltersStore(state => state.monitorSelected)
  const resetFilters = useFiltersStore(state => state.resetFilters)

  return {
    monitorSelected,
    currencySelected,
    setCurrencySelected,
    setMonitorSelected,
    resetFilters,
  }
}
