'use client'

import { useDispatch, useSelector } from "react-redux"
import { closeAside, saveData } from "../reducers/paymentAsideReducer";
import { removeBlurBg } from "../reducers/asideReducer";
import Title from "../components/Title";
import Input from "../components/Input";
import SelectedNumbers from "../components/SelectedNumbers";
import { useState } from "react";
import { handleId } from "../utils/switchCase";

export default function PaymentAside() {
  const { hidden, data } = useSelector((state: any) => state.paymentAside);
  const { price, selectedNumbers } = useSelector((state: any) => state.numbers);

  const [selectedRadio, setSelectedRadio] = useState('');
  const [updatingValue, setUpdatingValue] = useState(data);

  const dispatch = useDispatch();

  const totalPrice = price * selectedNumbers.length;

  function handleClose() {
    dispatch(closeAside());
    dispatch(removeBlurBg());
  }

  function handleSaveData(event: React.ChangeEvent<HTMLInputElement>) {
    handleId(event, setUpdatingValue, updatingValue)
  }

  function saveDataState() {
    dispatch(saveData({ ...updatingValue, selected_numbers: selectedNumbers }));
  }

  function handleRadio(value: string) {
    setSelectedRadio(value);
  }

  return (
    <div className={`w-4/5 xl:w-1/3 fixed right-0 top-0 max-h-screen overflow-auto min-h-screen py-8 px-8 xl:px-16 z-50 bg-gray-dark ${hidden}`}>
      <div className="flex justify-between">
        <Title className="text-xl xl:text-4xl">Comprar número</Title>
        <button onClick={handleClose}>
          <img src="close.svg" />
        </button>
      </div>
      <form className="flex flex-col mt-8">
        <Input id="name" onChange={handleSaveData} value={updatingValue.name} placeholder="Insira seu nome" type="text" />
        <Input id="email" onChange={handleSaveData} value={updatingValue.email} placeholder="Insira seu email" type="email" />
        <Input id="phone" onChange={handleSaveData} value={updatingValue.phone} placeholder="Insira seu telefone" type="number" />
        <div className="flex justify-between">
          <Input id="cep" onChange={handleSaveData} value={updatingValue.address.cep} placeholder="Insira seu CEP" type="number" className="w-1/2 mr-4" />
          <Input id="district" onChange={handleSaveData} value={updatingValue.address.district} placeholder="Bairro" type="text" className="w-1/2" />
        </div>
        <div className="flex justify-between">
          <Input id="street" onChange={handleSaveData} value={updatingValue.address.street} placeholder="Insira sua rua" type="text" className="w-2/3 mr-4" />
          <Input id="number" onChange={handleSaveData} value={updatingValue.address.number} placeholder="Número" type="number" className="w-1/3" />
        </div>
        <div className="flex justify-between">
          <Input id="city" onChange={handleSaveData} value={updatingValue.address.city} placeholder="Insira sua cidade" type="text" className="w-2/3 mr-4" />
          <Input id="state" onChange={handleSaveData} value={updatingValue.address.state} placeholder="UF" type="text" className="w-1/3" />
        </div>
        <div className="flex justify-between">
          <div>
            <input
              checked={selectedRadio === 'cpf'}
              onChange={() => handleRadio('cpf')}
              value="cpf"
              type="radio"
              className="mr-2" />
            <label>PESSOAL</label>
          </div>
          <div>
            <input
              checked={selectedRadio === 'cnpj'}
              onChange={() => handleRadio('cnpj')}
              value="cnpj"
              type="radio"
              className="mr-2"
            />
            <label>EMPRESA</label>
          </div>
        </div>
        <Input id="cpf" onChange={handleSaveData} value={updatingValue.cpf} placeholder="Insira seu CPF/CNPJ" type="text" />
      </form>
      <p className="my-2">NÚMEROS SELECIONADOS</p>
      <SelectedNumbers />
      <div className="flex justify-between my-8">
        <p className="text-blue-light font-medium">VALOR</p>
        <p className="text-blue-light font-medium">{`R$ ${totalPrice.toFixed(2)}`}</p>
      </div>
      <div className="flex justify-between my-4">
        <button className="items-center border-2 py-3 px-5 rounded-3xl" onClick={handleClose}>Cancelar</button>
        <button className="items-center bg-blue-light border-2 border-blue-light py-3 px-5 rounded-3xl" onClick={saveDataState}>Concluir</button>
      </div>
    </div>
  )
}
