import { CURRENCIES } from '@/consts'
import { useFilters } from '@/hooks/useFilters'
import { Currency } from '@/types/types'

export const CurrencySymbol = () => {
  const { currencySelected } = useFilters()

  return (
    <span className="text-green-500 text-xl sm:text-2xl font-bold">
      {CURRENCIES[currencySelected as Currency].symbol}
    </span>
  )
}
