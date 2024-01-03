import { useDispatch, useSelector } from "react-redux"
import { closeAside } from "../reducers/paymentAsideReducer";
import { removeBlurBg } from "../reducers/asideReducer";
import Title from "../components/Title";
import Input from "../components/Input";

export default function PaymentAside() {
  const hidden = useSelector((state: any) => state.paymentAside.hidden);
  const dispatch = useDispatch();

  function handleClose() {
    dispatch(closeAside());
    dispatch(removeBlurBg());
  }

  return (
    <div className={`w-4/5 xl:w-1/3 fixed right-0 top-0 min-h-screen py-8 px-8 xl:px-16 z-50 bg-gray-dark ${hidden}`}>
      <div className="flex justify-between">
        <Title className="text-xl xl:text-4xl">Comprar número</Title>
        <button onClick={handleClose}>
          <img src="close.svg" />
        </button>
      </div>
      <form className="flex flex-col mt-8">
        <Input placeholder="Insira seu nome" type="text" />
        <Input placeholder="Insira seu email" type="email" />
        <Input placeholder="Insira seu telefone" type="number" />
        <div className="flex justify-between">
          <Input placeholder="Insira seu CEP" type="number" maxLength="8" className="w-1/2 mr-4" />
          <Input placeholder="Bairro" type="text" className="w-1/2" />
        </div>
        <div className="flex justify-between">
          <Input placeholder="Insira sua rua" type="text" className="w-2/3 mr-4" />
          <Input placeholder="Número" type="number" className="w-1/3" />
        </div>
        <div className="flex justify-between">
          <Input placeholder="Insira sua cidade" type="text" className="w-2/3 mr-4" />
          <Input placeholder="UF" type="text" className="w-1/3" />
        </div>
        <div className="flex justify-between">
          <div>
            <Input required={false} placeholder="" type="radio" className="mr-2" />
            <label>PESSOAL</label>
          </div>
          <div>
            <Input required={false} type="radio" className="mr-2" />
            <label>EMPRESA</label>
          </div>
        </div>
        <Input placeholder="Insira seu CPF/CNPJ" type="text" />
      </form>
    </div>
  )
}
