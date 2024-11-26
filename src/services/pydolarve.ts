import { Currency, PyDolarVeResponse } from '@/types/types'
import { getPyDolarURL } from '@/utils'

export const fetchMonitorData = async (currency: Currency) => {
  if (!currency) throw new Error('invalid currency')

  try {
    const res = await fetch(getPyDolarURL(currency))
    if (!res.ok) throw new Error('Error fetching monitor data')
    const { monitors } = (await res.json()) as PyDolarVeResponse
    return monitors
  } catch (error) {
    if (error instanceof Error) throw new Error(error.message)
  }
}
