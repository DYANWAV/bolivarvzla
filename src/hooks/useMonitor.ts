import { getMonitorsData } from '@/services/pydolarve'
import { useFilters } from '@/store/filters.store'
import { Monitor } from '@/types/types'
import { useEffect, useState } from 'react'

export const useMonitor = () => {
  const currency = useFilters(state => state.currency)
  const currentMonitor = useFilters(state => state.currentMonitor)
  const [monitor, setMonitors] = useState<Monitor>({} as Monitor)

  useEffect(() => {
    getMonitorsData(currency, currentMonitor).then(setMonitors)
  }, [currency, currentMonitor])

  return {
    monitor,
    currency,
    currentMonitor,
  }
}
