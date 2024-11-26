import { ChangeEvent, useEffect } from 'react'
import { useInputs } from './useInputs'
import { useMonitors } from './useMonitor'

export const useCalculatorInputs = () => {
  const { monitor } = useMonitors()
  const { bolivares, currency, setBolivares, setCurrency } = useInputs()

  const handleChangeBolivares = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    setBolivares(value)
    const result = Number(value) / monitor.price
    setCurrency(result.toFixed(2))
  }

  const handleChangeCurrency = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    setCurrency(value)
    const result = Number(value) * monitor.price
    setBolivares(result.toFixed(2))
  }

  useEffect(() => {
    setBolivares(monitor.price?.toFixed(2))
  }, [monitor, setBolivares, setCurrency])

  return {
    bolivares,
    currency,
    handleChangeBolivares,
    handleChangeCurrency,
  }
}
