import { useCopyButton } from '@/hooks/useCopyButton'
import { CopyIcon, CheckIcon } from './Icons'

interface Props {
  value: string | number
}

export const CopyButton = ({ value }: Props) => {
  const { buttonText, handleCopy, isCopied } = useCopyButton()

  return (
    <button
      aria-label="Copy"
      onClick={() => handleCopy(value)}
      className="p-0 size-6 bg-transparent"
    >
      <span className="tooltip bg-green-950 text-green-500">{buttonText}</span>
      {!isCopied ? <CopyIcon /> : <CheckIcon />}
    </button>
  )
}
