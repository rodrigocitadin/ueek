export default function SmallText({ className, children }:
  {
    className?: string,
    children: React.ReactNode
  }
) {
  return (
    <p className={`text-white text-sm font-normal ${className}`}>
      {children}
    </p>
  )
}
