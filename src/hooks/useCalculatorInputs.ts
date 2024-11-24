import { ChangeEvent, useEffect, useState } from 'react'
import { useMonitor } from './useMonitor'

export const useCalculatorInputs = () => {
  const { monitor, currency, currentMonitor } = useMonitor()
  const [VESValue, setVESValue] = useState<string | number>('0.00')
  const [currencyValue, setCurrencyalue] = useState<string | number>('1.00')

  const handleChangeVESValue = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    setVESValue(value)
    const result = Number(value) / monitor.price
    setCurrencyalue(result.toFixed(2))
  }

  const handleChangeCurrencyValue = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    setCurrencyalue(value)
    const result = Number(value) * monitor.price
    setVESValue(result.toFixed(2))
  }

  useEffect(() => {
    setVESValue(monitor.price)
    setCurrencyalue('1.00')
  }, [currency, currentMonitor, monitor])

  return {
    VESValue,
    currencyValue,
    handleChangeVESValue,
    handleChangeCurrencyValue,
  }
}
