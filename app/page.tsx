import BuyNumberButton from "./components/BuyNumberButton"

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="mt-12 flex justify-between">
        <div className="mt-16 pt-12">
          <div className="flex-col max-w-3xl">
            <p className="font-light">///CONNECT</p>
            <h2 className="text-4xl">Ajude alunos a se formar</h2>
            <p className="font-light text-lg my-4">Cada rifa que você adquire nos ajuda a chegar mais perto do nosso objetivo e proporciona aos nossos alunos uma celebração inesquecível.</p>
          </div>
          <div className="flex mt-8">
            <BuyNumberButton />
            <button className="ml-10">Sobre a rifa</button>
          </div>
        </div>
        <img className="ml-10 max-w-2xl" src="/banner-person.png" />
      </div>
    </main>
  )
}
