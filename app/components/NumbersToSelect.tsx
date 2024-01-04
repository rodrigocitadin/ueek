import { useSelector } from "react-redux";
import AvailableBox from "./AvailableBox";
import UnavailableBox from "./UnavailableBox";

export default function NumbersToSelect() {
  const numbers: number[] = useSelector((state: any) => state.numbers.numbers);
  const soldNumbers = [9, 17, 28, 34, 55, 62, 63, 77, 80];

  return numbers.map((v) => soldNumbers.includes(v)
    ? <UnavailableBox key={v} className="mr-2 my-1" />
    : <AvailableBox key={v} className="mr-2 my-1">{v.toString()}</AvailableBox>
  )
}
