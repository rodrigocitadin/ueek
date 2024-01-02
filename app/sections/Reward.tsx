import BuyNumberButton from "../components/BuyNumberButton"
import Text from "../components/Text"
import Identifier from "../components/Identifier"
import Title from "../components/Title"

export default function Reward() {
  return (
    <div className="my-24 flex flex-col justify-between items-end xl:flex-row">
      <img className="m-auto xl:mr-10 xl:m-0" src="/tv.png" />
      <div>
        <div className="flex flex-col xl:ml-8 xl:block">
          <Identifier>PRÊMIO</Identifier>
          <Title>Smart TV 4k 70”</Title>
          <Text className="my-4">Ao comprar um número você pode ganhar essa TV que contém uma imagem única e cheia de detalhes.</Text>
          <Text className="my-4">Este prêmio é um verdadeiro deleite para os entusiastas de tecnologia!</Text>
          <BuyNumberButton className="mt-8"/>
        </div>
      </div>
    </div>
  )
}
