export default function BuyNumberButton({ className }: { className?: string }) {
  return (
    <a href="#numbers">
      <button className={`bg-blue-light py-3 px-5 rounded-3xl ${className}`}>
        Comprar número
      </button>
    </a>
  )
}
