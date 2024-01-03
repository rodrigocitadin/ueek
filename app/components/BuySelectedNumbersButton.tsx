'use client';

import Link from "next/link";

export default function BuySelectedNumbersButton({ className }: { className?: string }) {
  return (
    <Link href="/payment">
      <button className={`bg-blue-light text-white py-3 px-5 rounded-3xl ${className}`}>
        Comprar números(s) selecionado(s)
      </button>
    </Link>
  )
}
