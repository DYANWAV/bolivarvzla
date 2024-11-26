import { useMonitorStore } from '@/store/monitor.store'

export const useMonitors = () => {
  const monitors = useMonitorStore(state => state.monitors)
  const monitor = useMonitorStore(state => state.monitor)
  const fetchMonitor = useMonitorStore(state => state.fetchMonitor)
  const setMonitor = useMonitorStore(state => state.setMonitor)

  return {
    monitors,
    fetchMonitor,
    monitor,
    setMonitor,
  }
}
