'use client';

export default function AvailableBox({ onClick, children, className }: {
  onClick: (children: React.ReactNode) => void,
  children: string
  className?: string
}) {
  function handleClick() {
    onClick && onClick(children);
  }

  return (
    <button onClick={handleClick} className={`font-medium items-center border-3 px-2 rounded-lg border-blue text-white w-14 ${className}`}>
      {children}
    </button>
  )
}
