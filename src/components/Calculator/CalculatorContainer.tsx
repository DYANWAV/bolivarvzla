import { PropsWithChildren } from 'react'

export const CalculatorContainer = ({ children }: PropsWithChildren) => {
  return (
    <article
      className="flex flex-col gap-8 min-h-[300px] min-w-[300px] 
      max-w-[540px] m-auto bg-stone-950/10 sm:bg-green-950/10 sm:backdrop-blur-sm sm:backdrop-brightness-200 
      p-4 rounded-3xl border border-transparent sm:border-green-800/40"
    >
      {children}
    </article>
  )
}
