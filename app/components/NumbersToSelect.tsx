import { useSelector } from "react-redux";
import AvailableBox from "./AvailableBox";
import UnavailableBox from "./UnavailableBox";

export default function NumbersToSelect() {
  const numbers: number[][] = useSelector((state: any) => state.numbers.numbers);

  const sortedNumbers = [...numbers[0], ...numbers[1]].sort((a, b) => a - b);

  return sortedNumbers.map((v) => numbers[0].includes(v)
    ? <AvailableBox key={v} className="mr-2 my-1">{v.toString()}</AvailableBox>
    : <UnavailableBox key={v} className="mr-2 my-1" />
  )
}
