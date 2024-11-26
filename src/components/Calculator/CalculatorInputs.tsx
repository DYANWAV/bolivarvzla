import { useCalculatorInputs } from '@/hooks/useCalculatorInputs'
import { BolivarInput, CopyButton, CurrencyInput } from '@components'
import { InputNumber } from '../InputNumber'

export const CalculatorInputs = () => {
  const { bolivares, currency, handleChangeCurrency, handleChangeBolivares } =
    useCalculatorInputs()

  return (
    <section className="flex flex-col gap-4 text-xl sm:text-2xl font-semibold [&>label]:grid [&>label]:grid-cols-[36px_1fr_36px] [&>label]:items-center [&>label]:content-center">
      <CurrencyInput>
        <InputNumber value={currency} onChange={handleChangeCurrency} />
        <CopyButton value={currency} />
      </CurrencyInput>

      <BolivarInput>
        <InputNumber value={bolivares} onChange={handleChangeBolivares} />
        <CopyButton value={bolivares} />
      </BolivarInput>
    </section>
  )
}
