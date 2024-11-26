interface Props {
  children: JSX.Element | JSX.Element[]
}

export const BolivarInput = ({ children }: Props) => {
  return (
    <label
      className={`border-b border-green-900/40 [&]:has-[input:focus-within]:border-green-800`}
    >
      <span className="text-green-500 font-bold">Bs</span>

      {children}
    </label>
  )
}
