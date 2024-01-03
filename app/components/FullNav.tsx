import Link from "next/link";
import BuyNumberButton from "./BuyNumberButton";

export default function FullNav() {
  return (
    <nav className='hidden justify-between my-8 lg:flex'>
      <Link href='/'><img src='/logo.svg' /></Link>
      <ul className='flex'>
        <li className='mx-5 my-auto'><Link href='/'>Inicio</Link></li>
        <li className='mx-5 my-auto'><Link href='/#sobre'>Como funciona?</Link></li>
        <li className='mx-5 my-auto'><Link href='/#prêmio'>Prêmio</Link></li>
        <li className='mx-5 my-auto'>
          <BuyNumberButton />
        </li>
      </ul>
    </nav>
  )
}
