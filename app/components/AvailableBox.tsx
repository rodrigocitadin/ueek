import Box from "./Box"

export default function AvailableBox({ children, className }: {
  children: string
  className?: string
}) {
  return (
    <Box disabled={false} className={`border-blue text-white w-14 ${className}`}>
      {children}
    </Box>
  )
}
