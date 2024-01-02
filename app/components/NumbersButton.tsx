import { useSelector } from "react-redux";
import BuySelectedNumbersButton from "./BuySelectedNumbersButton";
import CannotBuyButton from "./CannotBuyButton";

export default function NumbersButton() {
  const selectedNumbers: number[] = useSelector((state: any) => state.numbers.selectedNumbers);

  return selectedNumbers.length
    ? <BuySelectedNumbersButton />
    : <CannotBuyButton />
}
