import Link from "next/link";

export default function BuyNumberButton({ className, onClick }:
  { 
    className?: string, 
    onClick?: () => void
  }) {
  return (
    <Link href="/#numbers">
      <button onClick={onClick} className={`bg-blue-light py-3 px-5 rounded-3xl ${className}`}>
        Comprar número
      </button>
    </Link>
  )
}
