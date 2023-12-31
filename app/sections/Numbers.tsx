'use client';

import { useState } from "react";
import AvailableBox from "../components/AvailableBox";
import Box from "../components/Box";
import BuySelectedNumbersButton from "../components/BuySelectedNumbersButton";
import CannotBuyButton from "../components/CannotBuyButton"
import SmallText from "../components/SmallText";
import Title from "../components/Title"
import UnavailableBox from "../components/UnavailableBox";

export default function Numbers() {
  const numbers: number[] = [...Array(80)].map((_, i) => 1 + i++);
  const selectedNumbers: number[] = new Array();

  function SelectNumbers() {
    return numbers.map((v) => v % 5 || v % 2
      ? <AvailableBox onClick={selectNumber} className="mr-2 my-1">{v.toString()}</AvailableBox>
      : <UnavailableBox className="mr-2 my-1" />
    )
  }

  function selectNumber(children: React.ReactNode, isClicked: boolean) {
    console.log(selectedNumbers.length);

    if (!isClicked) {
      selectedNumbers.push(Number(children?.valueOf()));
    } else {
      const index = selectedNumbers.indexOf(Number(children?.valueOf()));

      selectedNumbers.splice(index, 1);
    }

    console.log(selectedNumbers);
    console.log(selectedNumbers.length);
  }

  function NumbersButton() {
    return selectedNumbers.length
      ? <BuySelectedNumbersButton />
      : <CannotBuyButton />
  }

  return (
    <div className="my-24 items-end">
      <Title className="!font-medium">Compre seu número por apenas <span className="text-blue-light">R$5,00</span></Title>
      <div className="bg-gray-dark p-8 rounded-xl my-8">
        <div className="flex justify-between">
          <div>
            <SmallText>Selecione os números a serem comprados*</SmallText>
            <SmallText className="!font-medium">R$ 5,00/número</SmallText>
          </div>
          <div className="flex">
            <div className="flex items-center mr-2">
              <Box className="border-blue text-transparent mx-2" />
              <SmallText className="!font-medium">Disponíveis</SmallText>
            </div>
            <div className="flex items-center">
              <Box className="border-gray-light text-gray-light mx-2" />
              <SmallText className="!font-medium">Indisponíveis</SmallText>
            </div>
          </div>
        </div>
        <div className="my-8">
          <SelectNumbers />
        </div>
        <div className="flex justify-between items-center">
          <NumbersButton />
          <SmallText className="!text-gray-light">*Selecione quantos números desejar</SmallText>
        </div>
      </div>
    </div>
  )
}
