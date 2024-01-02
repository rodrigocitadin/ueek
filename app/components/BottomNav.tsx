export default function BottomNav() {
  return (
    <nav className='flex-col my-10'>
      <a href='#'><img className='m-auto' src='/logo.svg' /></a>
      <ul className='flex justify-center my-4'>
        <li className='mx-5 my-auto text-center'><a href='#'>Inicio</a></li>
        <li className='mx-5 my-auto text-center'><a href='#sobre'>Como funciona?</a></li>
        <li className='mx-5 my-auto text-center'><a href='#prêmio'>Prêmio</a></li>
      </ul>
    </nav>
  )
}
