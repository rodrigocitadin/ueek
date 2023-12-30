import type { Metadata } from 'next'
import { Rubik } from 'next/font/google'
import './globals.css'
import BuyNumberButton from './components/BuyNumberButton'

const rubik = Rubik({
  subsets: ['latin'],
  display: 'swap'
})

export const metadata: Metadata = {
  title: 'UEEK',
  description: 'Software for UEEK :)',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${rubik.className} bg-background text-white`}>
        <div className='w-2/3  m-auto'>
          <nav className='flex justify-between my-8'>
            <a href='/'><img src='/logo.svg' /></a>
            <ul className='flex'>
              <li className='mx-5 my-auto'><a href='#'>Inicio</a></li>
              <li className='mx-5 my-auto'><a href='#'>Como funciona?</a></li>
              <li className='mx-5 my-auto'><a href='#'>Prêmio</a></li>
              <li className='mx-5 my-auto'><a href='#'>
                <BuyNumberButton />
              </a></li>
            </ul>
          </nav>
        </div>
        {children}
        <div className='w-2/3 m-auto'>
          <nav className='flex-col my-10'>
            <a href='/'><img className='m-auto' src='/logo.svg' /></a>
            <ul className='flex justify-center my-4'>
              <li className='mx-5 my-auto'><a href='#'>Inicio</a></li>
              <li className='mx-5 my-auto'><a href='#'>Como funciona?</a></li>
              <li className='mx-5 my-auto'><a href='#'>Prêmio</a></li>
            </ul>
          </nav>
        </div>
      </body>
    </html>
  )
}
