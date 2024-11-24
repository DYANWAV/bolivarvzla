import { useFilters } from '@/store/filters.store'
import { ResetIcon } from '@components'

export const ResetButton = () => {
  const reset = useFilters(state => state.reset)
  return (
    <button className="p-0 border-none size-8 bg-transparent" onClick={reset}>
      <ResetIcon className="size-8" />
    </button>
  )
}
