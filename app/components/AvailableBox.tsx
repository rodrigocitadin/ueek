'use client';

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addSelectedNumber, removeSelectedNumber } from "../numbersReducer";

export default function AvailableBox({ children, className }: {
  children: string,
  className?: string
}) {
  const [isClicked, setIsClicked] = useState(false);
  const selectedNumbers: number[] = useSelector((state: any) => state.numbers.selectedNumbers);

  const defaultClassName = `font-medium items-center border-3 px-2 rounded-lg `
  const clickedClassName = `${defaultClassName} border-blue-light bg-blue-light text-white w-14 ${className}`;
  const notClickedClassName = `${defaultClassName} border-blue text-white w-14 ${className}`;

  const dispatch = useDispatch();

  function handleClick() {
    setIsClicked(!isClicked);

    if (!isClicked) {
      dispatch(addSelectedNumber(Number(children?.valueOf())));
    } else {
      const index = selectedNumbers.indexOf(Number(children?.valueOf()));

      dispatch(removeSelectedNumber(index));
    }
  }

  return (
    <button onClick={handleClick} className={isClicked ? clickedClassName : notClickedClassName}>
      {children}
    </button>
  )
}
