export type MonitorStore = {
  monitors: MonitorsRecord
  monitor: Monitor
}

export type MonitorActions = {
  fetchMonitor: ({ currency }: FetchMonitorDataProps) => void
  setMonitor: (monitorSelected: Monitorkey) => void
}
