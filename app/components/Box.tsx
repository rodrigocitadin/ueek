export default function Box({ className, children, disabled }: {
  className?: string,
  children?: string,
  disabled?: boolean
}) {
  return (
    <button disabled={disabled ?? true} className={`font-medium items-center border-2 px-2 rounded-lg ${className}`}>
      {children ?? 'x'}
    </button>
  )
}
