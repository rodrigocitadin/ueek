import { useSelector } from "react-redux";
import AvailableBox from "./AvailableBox";
import UnavailableBox from "./UnavailableBox";

export default function NumbersToSelect() {
  const numbers: number[] = useSelector((state: any) => state.numbers.numbers);

  return numbers.map((v) => v % 5 || v % 2
    ? <AvailableBox key={v} className="mr-2 my-1">{v.toString()}</AvailableBox>
    : <UnavailableBox key={v} className="mr-2 my-1" />
  )
}
