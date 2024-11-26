import { PropsWithChildren } from 'react'

export const CalculatorContainer = ({ children }: PropsWithChildren) => {
  return (
    <article
      className="flex flex-col gap-8 min-h-[300px] min-w-[300px] sm:shadow-lg sm:shadow-black/60
      max-w-[540px] m-auto p-4 rounded-3xl border border-transparent sm:border-green-800/30"
    >
      {children}
    </article>
  )
}

// bg-stone-950/10 sm:bg-green-950 sm:backdrop-blur-sm sm:backdrop-brightness-200
