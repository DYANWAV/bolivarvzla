import { useInputsStore } from '@/store/inputs.store'

export const useInputs = () => {
  const { bolivares, currency, resetInputs, setBolivares, setCurrency } =
    useInputsStore()

  return { bolivares, currency, resetInputs, setBolivares, setCurrency }
}
