import { Currency } from '@/types/types'
import { CURRENCIES, MONITORSTITLES } from './consts'

export const getPyDolarURL = (currency: Currency) =>
  `https://pydolarve.org/api/v1/${currency}?page=criptodolar`

export const getMonitorsTitles = (currency: Currency) => {
  if (currency === CURRENCIES.dollar.name) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { euro_today, cripto_euro, ...restOfMonitors } = MONITORSTITLES
    return restOfMonitors
  } else {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { cripto_dolar, dolar_today, ...restOfMonitors } = MONITORSTITLES
    return restOfMonitors
  }
}
