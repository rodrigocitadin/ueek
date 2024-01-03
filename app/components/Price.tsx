import { useSelector } from "react-redux";

export default function Price() {
  const price: number = useSelector((state: any) => state.numbers.price);

  return (
    <span className="text-blue-light">{`R$${price.toFixed(2)}`}</span>
  )
}
