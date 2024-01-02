import BuyNumberButton from "./BuyNumberButton";

export default function FullNav() {
  return (
    <nav className='hidden justify-between my-8 lg:flex'>
      <a href='#'><img src='/logo.svg' /></a>
      <ul className='flex'>
        <li className='mx-5 my-auto'><a href='#'>Inicio</a></li>
        <li className='mx-5 my-auto'><a href='#sobre'>Como funciona?</a></li>
        <li className='mx-5 my-auto'><a href='#prêmio'>Prêmio</a></li>
        <li className='mx-5 my-auto'>
          <BuyNumberButton />
        </li>
      </ul>
    </nav>
  )
}
