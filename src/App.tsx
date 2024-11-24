import {
  CalculatorContainer,
  CalculatorHeader,
  CalculatorInputs,
  CalculatorOptions,
  CalculatorPercent,
  LastUpdate,
} from '@/components'
import './App.css'

function App() {
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
