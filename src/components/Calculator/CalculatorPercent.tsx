import { useMonitors } from '@/hooks/useMonitor'
import { ArrowDown, ArrowUp } from '@/components/Icons'
import { BOLIVARES_INITIAL_VALUE as ZERO_PERCENT, COLOR } from '@/consts'

export const CalculatorPercent = () => {
  const { monitor } = useMonitors()

  const color = `text-${monitor.color}-500`

  const isUp = monitor.color === COLOR.green

  return (
    <>
      <section className={`${color} font-semibold flex m-auto`}>
        {monitor && isUp ? (
          <ArrowUp />
        ) : monitor === COLOR.neutral ? (
          ''
        ) : (
          <ArrowDown />
        )}
        <p>{monitor.percent ?? ZERO_PERCENT}%</p>
      </section>
    </>
  )
}
