'use client';

import { useState } from "react";

export default function AvailableBox({ onClick, children, className }: {
  onClick: (children: React.ReactNode, isClicked: boolean) => void,
  children: string,
  className?: string
}) {
  const [isClicked, setIsClicked] = useState(false);

  const defaultClassName = `font-medium items-center border-3 px-2 rounded-lg `
  const clickedClassName = `${defaultClassName} border-blue-light bg-blue-light text-white w-14 ${className}`;
  const notClickedClassName = `${defaultClassName} border-blue text-white w-14 ${className}`;

  function handleClick() {
    setIsClicked(!isClicked);

    onClick && onClick(children, isClicked);
  }

  return (
    <button onClick={handleClick} className={isClicked ? clickedClassName : notClickedClassName}>
      {children}
    </button>
  )
}
