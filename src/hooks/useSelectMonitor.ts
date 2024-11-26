import { ChangeEvent } from 'react'
import { useFilters } from './useFilters'
import { Monitorkey } from '@/types/types'
import { useMonitors } from './useMonitor'

export const useSelectMonitor = () => {
  const { setMonitor } = useMonitors()
  const { setMonitorSelected, currencySelected, monitorSelected } = useFilters()

  const handleChangeMonitor = (e: ChangeEvent<HTMLSelectElement>) => {
    const monitor = e.target.value as Monitorkey
    setMonitorSelected(monitor)
    setMonitor(monitor)
  }
  return {
    currencySelected,
    monitorSelected,
    handleChangeMonitor,
  }
}
