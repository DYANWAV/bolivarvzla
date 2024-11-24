import { useState } from 'react'
import { CopyIcon } from './Icons'

interface Props {
  value: string | number
}

export const CopyButton = ({ value }: Props) => {
  const [isCopied, setIsCopied] = useState(false)
  const buttonText = isCopied ? 'Copied' : 'Copy'

  const handleCopy = (value: string | number) => {
    navigator.clipboard.writeText(value.toString())
    setIsCopied(true)

    setTimeout(() => {
      setIsCopied(false)
    }, 2000)
  }

  return (
    <button onClick={() => handleCopy(value)} className="p-0 size-6 bg-transparent">
      <span className="tooltip bg-green-950 text-green-500">{buttonText}</span>
      <CopyIcon />
    </button>
  )
}
