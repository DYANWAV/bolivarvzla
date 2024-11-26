import { CURRENCIES } from '@/consts'
import { useSelectCurrency } from '@/hooks/useSelectCurrency'

export const SelectCurrency = () => {
  const { currencySelected, handleChangeCurrency } = useSelectCurrency()

  return (
    <select
      aria-label="Select monitor"
      className="bg-green-950 text-green-500 font-semibold uppercase px-4 py-2 rounded-full"
      value={currencySelected}
      onChange={handleChangeCurrency}
    >
      {Object.entries(CURRENCIES).map(([key, { code }]) => {
        return (
          <option className="font-semibold" value={key} key={key}>
            {code}
          </option>
        )
      })}
    </select>
  )
}
