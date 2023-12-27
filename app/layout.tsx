import type { Metadata } from 'next'
import { Rubik } from 'next/font/google'
import './globals.css'

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
        <div className='w-3/4  m-auto'>
          <nav className='flex justify-between py-4'>
            <img src='/logo.svg' />
            <ul className='flex'>
              <li className='mx-5 my-auto'><a href='#'>Inicio</a></li>
              <li className='mx-5 my-auto'><a href='#'>Como funciona?</a></li>
              <li className='mx-5 my-auto'><a href='#'>Prêmio</a></li>
              <li className='mx-5 my-auto bg-blue-light py-3 px-5 rounded-3xl'><a href='#'>Comprar número</a></li>
            </ul>
          </nav>
          {children}
          <nav className='flex-col py-4'>
            <img className='m-auto' src='/logo.svg' />
            <ul className='flex justify-center py-4'>
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
