import { CurrencySymbol } from './CurrencySymbol'

interface Props {
  children: JSX.Element | JSX.Element[]
}

export const CurrencyInput = ({ children }: Props) => {
  return (
    <label
      className={`border-b border-green-900/40 [&]:has-[input:focus-within]:border-green-800`}
    >
      <CurrencySymbol />
      {children}
    </label>
  )
}
