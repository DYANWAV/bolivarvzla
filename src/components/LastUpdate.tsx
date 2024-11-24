import { useMonitor } from '@/hooks/useMonitor'

export const LastUpdate = () => {
  const { monitor } = useMonitor()

  return (
    <>
      <section className="text-green-500 font-semibold text-sm p-8 flex flex-col gap-2">
        <p className="text-neutral-400">Última actualización</p>
        <p>{monitor.last_update ?? '...'}</p>
      </section>
    </>
  )
}
