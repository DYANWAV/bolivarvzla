import { Currency } from '@/types/types'
import { ChangeEvent } from 'react'
import { useFilters } from './useFilters'

export const useSelectCurrency = () => {
  const { currencySelected, setCurrencySelected } = useFilters()

  const handleChangeCurrency = (e: ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target
    setCurrencySelected(value as Currency)
  }

  return {
    currencySelected,
    handleChangeCurrency,
  }
}
