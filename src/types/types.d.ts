import { COLOR, CURRENCIES, MONITORSKEYS } from '@/consts'

export interface PyDolarVeResponse {
  datetime: Datetime
  monitors: MonitorsRecord
}

export type MonitorsRecord = Record<Monitorkey, Monitor>
export type Color = keyof typeof COLOR

export type Monitor = {
  change: number
  color: Color
  image: string
  last_update: string
  percent: number
  price: number
  price_old: number
  symbol: string
  title: string
}

export type MappedMonitors = {
  monitors: Record<Monitorkey, Omit<Monitor, 'change' | 'symbol' | 'image'>>
}

export type Currency = keyof typeof CURRENCIES

export type Monitorkey = keyof typeof MONITORSKEYS
