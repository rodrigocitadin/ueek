import BuyNumberButton from "../components/BuyNumberButton"
import Text from "../components/Text"
import Identifier from "../components/Identifier"

export default function Connect() {
  return (
    <div className="my-24 flex justify-between items-end flex-col lg:flex-row">
      <div className="mb-10">
        <div className="flex-col max-w-lg">
          <Identifier>CONNECT</Identifier>
          <h1 className="text-5xl font-normal">Ajude alunos a se formar</h1>
          <Text className="my-4">Cada rifa que você adquire nos ajuda a chegar mais perto do nosso objetivo e proporciona aos nossos alunos uma celebração inesquecível.</Text>
        </div>
        <div className="flex justify-between mt-8 lg:flex-row">
          <BuyNumberButton className="my-2" />
          <a>
            <button className="my-2 rounded-3xl border-white border-2 py-3 px-5 lg:ml-10">
              Sobre a rifa
            </button>
          </a>
        </div>
      </div>
      <img className="lg:ml-10" src="/banner-person.png" />
    </div>
  )
}
