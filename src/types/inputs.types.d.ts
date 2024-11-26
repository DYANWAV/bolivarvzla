export type InputsState = {
  bolivares: string
  currency: string
}

export type InputsActions = {
  setBolivares: (value: string) => void
  setCurrency: (value: string) => void
  resetInputs: () => void
}
