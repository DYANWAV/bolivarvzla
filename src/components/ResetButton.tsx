import { useFilters } from '@/hooks/useFilters'
import { useInputs } from '@/hooks/useInputs'
import { ResetIcon } from '@components'

export const ResetButton = () => {
  const { resetFilters } = useFilters()
  const { resetInputs } = useInputs()

  const handleReset = () => {
    resetFilters()
    resetInputs()
  }

  return (
    <button
      aria-label="Copy input value"
      className="p-0 border-none size-8 bg-transparent"
      onClick={handleReset}
    >
      <ResetIcon className="size-8" />
    </button>
  )
}
