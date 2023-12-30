export default function Collapsible({ className, children, title }:
  {
    className?: string,
    children: React.ReactNode,
    title: string
  }
) {
  const isHidden = true;

  return (
    <div className={`${className} bg-gray-dark my-4 p-8 rounded-xl`}>
      <div className="flex justify-between items-center">
        <p className="text-blue-light text-2xl font-normal">{title}</p>
        <button><img src="toggle.svg" /></button>
      </div>
      <p className={`text-lg font-light mt-4 ${isHidden ? "hidden" : ""
        }`}>
        {children}
      </p>
    </div>
  )
}
