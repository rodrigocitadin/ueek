import { useState } from "react";
import BuyNumberButton from "./BuyNumberButton";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { blurBg, removeBlurBg } from "../reducers/asideReducer";

export default function AsideNav() {
  const dispatch = useDispatch();

  const [hide, setHide] = useState('hidden');

  function hideAside() {
    setHide('hidden');
    dispatch(removeBlurBg());
  }

  function showAside() {
    setHide('');
    dispatch(blurBg());
  }

  return (
    <>
      <div className="bg-gray-dark w-screen items-center">
        <nav className="w-5/6 m-auto py-8 flex justify-between align-middle lg:hidden">
          <img src='/logo.svg' />
          <button onClick={showAside}>
            <img className="w-8" src="menu.svg" />
          </button>
        </nav>
      </div>

      <aside className={`z-20 top-0 w-screen fixed bg-gray-dark ${hide}`}>
        <nav className={`w-5/6 flex flex-col m-auto justify-between my-8`}>
          <div className="flex justify-between align-middle">
            <img src='/logo.svg' />
            <button onClick={hideAside}>
              <img src="close.svg" />
            </button>
          </div>
          <div className='flex flex-col'>
            <Link onClick={hideAside} href='/' className="my-2 mt-8">Inicio</Link>
            <Link onClick={hideAside}  href='#sobre' className="my-2">Como funciona?</Link>
            <Link onClick={hideAside}  href='#prêmio' className="my-2">Prêmio</Link>
            <BuyNumberButton onClick={hideAside} className="my-2 mt-8" />
          </div>
        </nav >
      </aside>
    </>

  )
}
