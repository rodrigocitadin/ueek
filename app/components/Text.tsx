export default function Text({ className, children }:
  {
    className?: string,
    children: React.ReactNode
  }
) {
  return (
    <p className={`font-light text-lg ${className}`}>
      {children}
    </p>
  )
}
