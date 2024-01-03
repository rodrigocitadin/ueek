'use client'

import { useState } from "react";
import BuyNumberButton from "./BuyNumberButton";
import Link from "next/link";

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
        <Link href='/'><img src='/logo.svg' /></Link>
        <button onClick={showAside}>
          <img className="w-8" src="menu.svg" />
        </button>
      </div>

      <aside className={`z-10 top-0 w-screen right-0 fixed bg-gray-dark ${hide}`}>
        <nav className={`flex flex-col justify-between m-8`}>
          <div className="flex justify-between align-middle">
            <Link href='/'><img src='/logo.svg' /></Link>
            <button onClick={hideAside}>
              <img src="close.svg" />
            </button>
          </div>
          <div className='flex flex-col'>
            <Link href='/' className="my-2 mt-8">Inicio</Link>
            <Link href='#sobre' className="my-2">Como funciona?</Link>
            <Link href='#prêmio' className="my-2">Prêmio</Link>
            <BuyNumberButton className="my-2 mt-8" />
          </div>
        </nav >
      </aside>
    </>

  )
}
