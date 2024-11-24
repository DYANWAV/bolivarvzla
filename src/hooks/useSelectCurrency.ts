import { useFilters } from '@/store/filters.store'
import { Currency } from '@/types/types'
import { ChangeEvent } from 'react'

export const useSelectCurrency = () => {
  const currency = useFilters(state => state.currency)
  const changeCurrency = useFilters(state => state.changeCurrency)

  const handleChangeCurrency = (e: ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target
    changeCurrency(value as Currency)
  }

  return {
    currency,
    handleChangeCurrency,
  }
}
