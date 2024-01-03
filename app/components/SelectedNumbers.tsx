import { useSelector } from "react-redux"
import Box from "./Box";

export default function SelectedNumbers() {
  const selectedNumbers: number[] = useSelector((state: any) => state.numbers.selectedNumbers);

  return (
    <div>
      { selectedNumbers.map((v) => {
        return (
          <Box key={v} className="min-w-12 border-blue mr-2 my-1">{v.toString()}</Box>
        )
      })}
    </div>
  )
}
