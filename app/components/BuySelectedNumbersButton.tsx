export default function BuySelectedNumbersButton({ className }: { className?: string }) {
  return (
    <button className={`bg-blue-light text-white py-3 px-5 rounded-3xl ${className}`}>
      Comprar números(s) selecionado(s)
    </button>
  )
}
