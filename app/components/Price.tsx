import { useSelector } from "react-redux";

export default function Price({
  className
}: {
  className?: string
}) {
  const price: number = useSelector((state: any) => state.numbers.price);

  return (
    <span className={`text-blue-light ${className}`}>{`R$${price.toFixed(2)}`}</span>
  )
}
