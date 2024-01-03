import Link from "next/link";
import BuyNumberButton from "./BuyNumberButton";

export default function FullNav() {
  return (
    <div className="hidden lg:block bg-gray-dark w-screen">
      <nav className='w-2/3 justify-between m-auto py-8 flex'>
        <img src='/logo.svg' />
        <ul className='flex'>
          <li className='mx-5 my-auto'><Link href='/'>Inicio</Link></li>
          <li className='mx-5 my-auto'><Link href='/#sobre'>Como funciona?</Link></li>
          <li className='mx-5 my-auto'><Link href='/#prêmio'>Prêmio</Link></li>
          <li className='mx-5 my-auto'>
            <BuyNumberButton />
          </li>
        </ul>
      </nav>
    </div>
  )
}
