import BuySelectedNumbersButton from "../components/BuySelectedNumbersButton";
import CannotBuyButton from "../components/CannotBuyButton"
import SmallText from "../components/SmallText";
import Title from "../components/Title"

const numbers: number[] = [1];

function NumbersButton() {
  return numbers.length
    ? <BuySelectedNumbersButton />
    : <CannotBuyButton />
}

export default function Numbers() {
  return (
    <div className="my-24 items-end">
      <Title className="!font-medium">Compre seu número por apenas <span className="text-blue-light">R$5,00</span></Title>
      <div className="bg-gray-dark p-8 rounded-xl my-8">
        <div>
          <SmallText>Selecione os números a serem comprados*</SmallText>
          <SmallText className="!font-medium">R$ 5,00/número</SmallText>
        </div>
        <div className="flex justify-between items-center">
          <NumbersButton />
          <SmallText className="!text-gray-light">*Selecione quantos números desejar</SmallText>
        </div>
      </div>
    </div>
  )
}
