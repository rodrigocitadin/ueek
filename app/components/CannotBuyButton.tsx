export default function CannotBuyButton({ className }: { className?: string }) {
  return (
    <button disabled className={`bg-gray-light text-gray py-3 px-5 rounded-3xl ${className}`}>
      Nenhum número(s) selecionado(s)
    </button>
  )
}
