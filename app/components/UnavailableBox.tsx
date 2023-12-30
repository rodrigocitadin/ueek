import Box from "./Box"

export default function UnavailableBox({ className }: {
  className?: string
}) {
  return (
    <Box className={`border-gray-light text-gray-light w-14 ${className}`} />
  )
}
