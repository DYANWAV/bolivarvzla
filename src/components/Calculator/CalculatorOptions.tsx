import { SelectCurrency, SelectMonitor } from '@components'

export const CalculatorOptions = () => {
  return (
    <section className="flex justify-between items-center text-base">
      <SelectMonitor />
      <SelectCurrency />
    </section>
  )
}
