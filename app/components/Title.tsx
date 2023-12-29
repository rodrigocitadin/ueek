export default function Title({ className, children }:
  {
    className?: string,
    children: React.ReactNode
  }
) {
  return (
    <h2 className={`text-4xl font-normal ${className}`}>
      {children}
    </h2>
  )
}
