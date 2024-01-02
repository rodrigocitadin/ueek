'use client'

import { useState } from "react";
import BuyNumberButton from "./BuyNumberButton";

export default function AsideNav() {
  const [hide, setHide] = useState('hidden');

  function hideAside() {
    setHide('hidden');
  }

  function showAside() {
    setHide('');
  }

  return (
    <>
      <div className="flex justify-between mt-8 align-middle lg:hidden">
        <a href='/'><img src='/logo.svg' /></a>
        <button onClick={showAside}>
          <img className="w-8" src="menu.svg" />
        </button>
      </div>

      <aside className={`z-10 top-0 w-screen right-0 fixed bg-gray-dark ${hide}`}>
        <nav className={`flex flex-col justify-between m-8`}>
          <div className="flex justify-between align-middle">
            <a href='/'><img src='/logo.svg' /></a>
            <button onClick={hideAside}>
              <img src="close.svg" />
            </button>
          </div>
          <div className='flex flex-col'>
            <a href='/' className="my-2 mt-8">Inicio</a>
            <a href='#sobre' className="my-2">Como funciona?</a>
            <a href='#prêmio' className="my-2">Prêmio</a>
            <BuyNumberButton className="my-2 mt-8" />
          </div>
        </nav >
      </aside>
    </>

  )
}
