export default function Input({
  placeholder,
  type,
  className,
  maxLength,
  required,
  value
} : {
    placeholder?: string,
    type: string,
    className?: string,
    maxLength?: string,
    required?: boolean,
    value: string
  }) {
  return (
    <input
      className={`no-number-arrows font-light bg-transparent border-gray-light placeholder:text-gray-light border-b-3 my-4 focus:outline-none ${className}`}
      type={type}
      placeholder={placeholder ?? ''}
      maxLength={maxLength == null ? 60 : Number(maxLength)}
      required={required ?? true}
      value={value}
    />
  )
}
