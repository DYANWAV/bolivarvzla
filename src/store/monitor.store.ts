import { fetchMonitorData } from '@/services/pydolarve'
import { MonitorActions, MonitorStore } from '@/types/monitors.types'
import { Currency, Monitor, Monitorkey, MonitorsRecord } from '@/types/types'
import { create } from 'zustand'

export const useMonitorStore = create<MonitorStore & MonitorActions>((set, get) => ({
  monitors: {} as MonitorsRecord,
  monitor: {} as Monitor,

  fetchMonitor: async (currency: Currency) => {
    const monitors = await fetchMonitorData(currency)
    if (monitors) set({ monitors, monitor: monitors.enparalelovzla })
  },

  setMonitor: (monitorSelected: Monitorkey) => {
    set({ monitor: get().monitors?.[monitorSelected] })
  },
}))
