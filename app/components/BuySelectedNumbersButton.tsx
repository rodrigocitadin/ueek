import { useDispatch } from "react-redux";
import { openAside } from "../reducers/paymentAsideReducer";
import { blurBgInPayment } from "../reducers/asideReducer";

export default function BuySelectedNumbersButton({ className }: { className?: string }) {
  const dispatch = useDispatch();

  function openPaymentAside() {
    dispatch(openAside());
    dispatch(blurBgInPayment());
  }

  return (
    <button onClick={openPaymentAside} className={`bg-blue-light text-white py-3 px-5 rounded-3xl ${className}`}>
      Comprar números(s) selecionado(s)
    </button>
  )
}
