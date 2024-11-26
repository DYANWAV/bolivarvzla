import { useFilters } from '@/hooks/useFilters'
import { useMonitors } from '@/hooks/useMonitor'
import { Monitorkey } from '@/types/types'

export const LastUpdate = () => {
  const { monitorSelected } = useFilters()
  const { monitors } = useMonitors()

  return (
    <>
      <section className="text-green-500 font-semibold text-sm p-8 flex flex-col gap-2">
        <p className="text-neutral-400">Última actualización</p>
        <p>{monitors?.[monitorSelected as Monitorkey]?.last_update ?? '...'}</p>
      </section>
    </>
  )
}
