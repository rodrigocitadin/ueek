export default function Title({ children }:
  {
    children: React.ReactNode
  }
) {
  return (
    <h2 className={"text-4xl font-normal"}>
      {children}
    </h2>
  )
}
