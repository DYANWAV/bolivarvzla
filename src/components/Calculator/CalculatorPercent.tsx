import { useMonitor } from '@/hooks/useMonitor'
import { ArrowDown, ArrowUp } from '../Icons'

export const CalculatorPercent = () => {
  const { monitor } = useMonitor()

  const color = `text-${monitor.color}-500`

  const isUp = monitor.color === 'green'

  return (
    <>
      <section className={`font-semibold flex m-auto ${color}`}>
        {monitor.color && isUp ? (
          <ArrowUp />
        ) : monitor.color === 'neutral' ? (
          ''
        ) : (
          <ArrowDown />
        )}
        <p>{monitor.percent ?? '0.00'}%</p>
      </section>
    </>
  )
}
