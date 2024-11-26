import { useSelectMonitor } from '@/hooks/useSelectMonitor'
import { getMonitorsTitles } from '@/utils'

export const SelectMonitor = () => {
  const { handleChangeMonitor, currencySelected, monitorSelected } =
    useSelectMonitor()

  return (
    <select
      aria-label="Select monitor"
      className="bg-green-950 text-green-500 font-semibold uppercase p-2 rounded-md"
      value={monitorSelected}
      onChange={handleChangeMonitor}
    >
      {Object.entries(getMonitorsTitles(currencySelected)).map(([key, value]) => (
        <option className="font-semibold bg-green-900/20" value={key} key={key}>
          {value}
        </option>
      ))}
    </select>
  )
}
