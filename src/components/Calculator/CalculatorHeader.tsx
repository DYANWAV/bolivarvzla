import { ResetButton } from '@components'

export const CalculatorHeader = () => {
  return (
    <div className='text-left flex justify-between items-center'>
      <h2 className='text-xl sm:text-2xl font-bold uppercase'>DolarVzla</h2>
      <ResetButton />
    </div>
  )
}
