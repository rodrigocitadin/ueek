import BuySelectedNumbersButton from "../components/BuySelectedNumbersButton";
import CannotBuyButton from "../components/CannotBuyButton"
import Title from "../components/Title"

const numbers: number[] = [1];

function NumbersButton({ className }: { className?: string }) {
  return numbers.length
    ? <BuySelectedNumbersButton className={className} />
    : <CannotBuyButton className={className} />
}

export default function Numbers() {
  return (
    <div className="my-24 flex justify-between items-end">
      <div className="flex-col">
        <Title>Compre seu número por apenas <span className="text-blue-light">R$5,00</span></Title>
        <NumbersButton className="my-12" />
      </div>
    </div>
  )
}
