import Link from "next/link";

export default function BottomNav() {
  return (
    <nav className='flex-col my-10'>
      <Link href='/'><img className='m-auto' src='/logo.svg' /></Link>
      <ul className='flex justify-center my-4'>
        <li className='mx-5 my-auto text-center'><Link href='/'>Inicio</Link></li>
        <li className='mx-5 my-auto text-center'><Link href='/#sobre'>Como funciona?</Link></li>
        <li className='mx-5 my-auto text-center'><Link href='/#prêmio'>Prêmio</Link></li>
      </ul>
    </nav>
  )
}
