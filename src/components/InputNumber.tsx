import { ChangeEvent } from 'react'

interface Props {
  value: string | number
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

export const InputNumber = ({ value, onChange }: Props) => {
  return (
    <input
      type="number"
      inputMode="numeric"
      min={0}
      value={value}
      onChange={onChange}
      step="0.01"
    />
  )
}
