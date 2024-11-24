import { Currency, Monitor, Monitorkey, MonitorsRecord } from '@/types/types'
import { getPyDolarURL } from '@/utils'
import JSON from '@/mocks/pydolarve.json'

const monitors = JSON.monitors as MonitorsRecord

export const getMonitorsData = async (
  currency: Currency,
  monitor: Monitorkey
): Promise<Monitor | undefined> => {
  if (!currency) throw new Error('invalid currency')
  if (!monitor) throw new Error('invalid monitor')

  try {
    const res = await fetch(getPyDolarURL(currency, monitor))
    const monitorData = (await res.json()) as Monitor
    return monitorData
  } catch (error) {
    if (error instanceof Error) {
      // return new Promise(resolve => {
      //   const { price, percent, last_update } = monitors[monitor]
      //   resolve({ price, percent, last_update } as Monitor)
      // })
      throw new Error(error.message)
    }
  }
}
