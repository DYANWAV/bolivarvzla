import { Currency, Monitor, Monitorkey } from '@/types/types'
import { getPyDolarURL } from '@/utils'

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

interface Props {
  currency: Currency
  monitor: Monitorkey
}

export const fetchMonitorData = async ({ currency, monitor }: Props) => {
  if (!currency) throw new Error('invalid currency')
  if (!monitor) throw new Error('invalid monitor')

  try {
    const res = await fetch(getPyDolarURL(currency, monitor))
    if (!res.ok) throw new Error('Error fetching monitor data')
    return (await res.json()) as Monitor
  } catch (error) {
    if (error instanceof Error) throw new Error(error.message)
  }
}
