import BuyNumberButton from "../components/BuyNumberButton"
import Text from "../components/Text"
import Identifier from "../components/Identifier"

export default function Connect() {
  return (
    <div className="my-24 flex justify-between items-end">
      <div className="mb-10">
        <div className="flex-col max-w-lg">
          <Identifier>CONNECT</Identifier>
          <h1 className="text-5xl font-normal">Ajude alunos a se formar</h1>
          <Text className="my-4">Cada rifa que você adquire nos ajuda a chegar mais perto do nosso objetivo e proporciona aos nossos alunos uma celebração inesquecível.</Text>
        </div>
        <div className="flex mt-8">
          <BuyNumberButton />
          <button className="ml-10 rounded-3xl border-white border-2 py-3 px-5">Sobre a rifa</button>
        </div>
      </div>
      <img className="ml-10" src="/banner-person.png" />
    </div>
  )
}
