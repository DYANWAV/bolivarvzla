import { useFilters } from '@/hooks/useFilters'
import { useMonitors } from '@/hooks/useMonitor'
import { Monitorkey } from '@/types/types'

export const LastUpdate = () => {
  const { monitorSelected } = useFilters()
  const { monitors } = useMonitors()

  return (
    <>
      <section className="text-green-500 font-semibold text-sm py-4 sm:py-8 flex flex-col gap-2">
        <p className="text-neutral-400">Última actualización</p>
        <time dateTime={monitors?.[monitorSelected as Monitorkey]?.last_update}>
          {monitors?.[monitorSelected as Monitorkey]?.last_update ?? '...'}
        </time>
      </section>
    </>
  )
}
