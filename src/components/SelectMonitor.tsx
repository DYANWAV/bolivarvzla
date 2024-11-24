import { useFilters } from '@/store/filters.store'
import { Monitorkey } from '@/types/types'
import { getMonitorsTitles } from '@/utils'
import { ChangeEvent } from 'react'

export const SelectMonitor = () => {
  const currentMonitor = useFilters(state => state.currentMonitor)
  const currency = useFilters(state => state.currency)
  const changeMonitor = useFilters(state => state.changeMonitor)

  const handleChangeMonitor = (e: ChangeEvent<HTMLSelectElement>) => {
    const monitor = e.target.value as Monitorkey
    changeMonitor(monitor)
  }

  return (
    <select
      aria-label="Select monitor"
      className="bg-green-950 text-green-500 font-semibold uppercase px-2 py-2 rounded-md"
      value={currentMonitor}
      onChange={handleChangeMonitor}
    >
      {Object.entries(getMonitorsTitles(currency)).map(([key, value]) => (
        <option className="font-semibold bg-green-900/20" value={key} key={key}>
          {value}
        </option>
      ))}
    </select>
  )
}
