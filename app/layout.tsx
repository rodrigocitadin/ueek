import type { Metadata } from 'next'
import { Rubik } from 'next/font/google'
import './globals.css'
import BottomNav from './components/BottomNav'
import FullNav from './components/FullNav'
import AsideNav from './components/AsideNav'

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
      <body className={`${rubik.className} min-h-screen flex flex-col justify-between bg-background text-white`}>
        <div className='w-5/6 mx-auto xl:w-2/3'>
          <AsideNav />
          <FullNav />
        </div>
        {children}
        <div className='w-5/6 mx-auto xl:w-2/3'>
          <BottomNav />
        </div>
      </body>
    </html>
  )
}
