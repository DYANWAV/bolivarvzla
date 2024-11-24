import { CURRENCIES } from '@/consts'
import { useFilters } from '@/store/filters.store'
import { Currency } from '@/types/types'

export const CurrencySymbol = () => {
  const currency = useFilters(state => state.currency)

  return <span className='text-green-500 text-xl sm:text-2xl font-bold'>{CURRENCIES[currency as Currency].symbol}</span>
}
