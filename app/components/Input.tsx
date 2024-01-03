export default function Input({
  placeholder,
  type,
  className,
  value,
  onChange,
  id
}: {
  placeholder?: string,
  type: string,
  className?: string,
  value: string,
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
  id: string
}) {
  return (
    <input
      id={id}
      className={`no-number-arrows font-light bg-transparent border-gray-light placeholder:text-gray-light border-b-3 my-4 focus:outline-none ${className}`}
      type={type}
      placeholder={placeholder ?? ''}
      required
      onChange={onChange}
      value={value}
    />
  )
}
