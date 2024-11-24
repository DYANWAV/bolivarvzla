import { useCalculatorInputs } from '@/hooks/useCalculatorInputs'
import { BolivarInput, CopyButton, CurrencyInput } from '@components'
import { InputNumber } from '../InputNumber'

export const CalculatorInputs = () => {
  const {
    VESValue,
    currencyValue,
    handleChangeCurrencyValue,
    handleChangeVESValue,
  } = useCalculatorInputs()

  return (
    <section className="flex flex-col gap-4 text-xl sm:text-2xl font-semibold [&>label]:grid [&>label]:grid-cols-[36px_1fr_36px] [&>label]:items-center [&>label]:content-center">
      <CurrencyInput>
        <InputNumber value={currencyValue} onChange={handleChangeCurrencyValue} />
        <CopyButton value={currencyValue} />
      </CurrencyInput>

      <BolivarInput>
        <InputNumber value={VESValue} onChange={handleChangeVESValue} />
        <CopyButton value={VESValue} />
      </BolivarInput>
    </section>
  )
}
