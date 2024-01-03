import { useDispatch, useSelector } from "react-redux"
import { closeAside } from "../paymentAsideReducer";

export default function PaymentAside() {
  const hidden = useSelector((state: any) => state.paymentAside.hidden);
  const dispatch = useDispatch();

  function handleClose() {
    dispatch(closeAside());
  }

  return (
    <div className={`w-4/5 xl:w-1/3 fixed right-0 top-0 h-screen p-8 z-50 bg-gray-dark ${hidden}`}>
      <div className="flex justify-between">
        <h2>Comprar número</h2>
        <button onClick={handleClose}>
          <img src="close.svg" />
        </button>
      </div>
    </div>
  )
}
