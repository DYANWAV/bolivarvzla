import { useRef, useState } from 'react'

export const useCopyButton = () => {
  const [isCopied, setIsCopied] = useState(false)
  const buttonText = isCopied ? 'Copied' : 'Copy'
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  const handleCopy = async (value: string | number) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)

    await navigator.clipboard.writeText(value.toString())
    setIsCopied(true)

    timeoutRef.current = setTimeout(() => {
      setIsCopied(false)
    }, 2000)
  }

  return { isCopied, buttonText, handleCopy }
}
