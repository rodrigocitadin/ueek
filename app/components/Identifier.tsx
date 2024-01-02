export default function Identifier({ children }:
  {
    children: React.ReactNode
  }
) {
  return (
    <p id={children?.toString().toLowerCase()} className="font-light my-4">
      {`///${children}`}
    </p>
  )
}
