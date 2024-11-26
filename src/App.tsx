import {
  CalculatorContainer,
  CalculatorHeader,
  CalculatorInputs,
  CalculatorOptions,
  CalculatorPercent,
  LastUpdate,
} from '@/components'
import { useEffect } from 'react'
import './App.css'
import { useFilters } from './hooks/useFilters'
import { useMonitors } from './hooks/useMonitor'

function App() {
  const { currencySelected } = useFilters()
  const { fetchMonitor } = useMonitors()

  useEffect(() => {
    fetchMonitor(currencySelected)
  }, [currencySelected, fetchMonitor])

  return (
    <>
      <main>
        <CalculatorContainer>
          <CalculatorHeader />
          <CalculatorOptions />
          <CalculatorInputs />
          <CalculatorPercent />
        </CalculatorContainer>
        <LastUpdate />
      </main>
    </>
  )
}

export default App
