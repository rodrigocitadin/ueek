import BuyNumberButton from "../components/BuyNumberButton"
import Text from "../components/Text"
import Identifier from "../components/Identifier"
import Link from "next/link"

export default function Connect() {
  return (
    <div className="mt-12 mb-24 flex justify-between items-end flex-col xl:flex-row xl:my-24">
      <div className="mb-10">
        <div className="xl:max-w-lg">
          <Identifier>CONNECT</Identifier>
          <h1 className="text-5xl font-normal">Ajude alunos a se formar</h1>
          <Text className="my-4">Cada rifa que você adquire nos ajuda a chegar mais perto do nosso objetivo e proporciona aos nossos alunos uma celebração inesquecível.</Text>
        </div>
        <div className="flex justify-between mt-8 xl:flex-row">
          <BuyNumberButton className="my-2" />
          <Link href="/#sobre">
            <button className="my-2 rounded-3xl border-white border-2 py-3 px-5 xl:ml-10">
              Sobre a rifa
            </button>
          </Link>
        </div>
      </div>
      <img className="m-auto xl:ml-10 xl:m-0" src="/banner-person.png" />
    </div>
  )
}
