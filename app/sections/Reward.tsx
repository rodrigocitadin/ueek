import BuyNumberButton from "../components/BuyNumberButton"
import Text from "../components/Text"
import Identifier from "../components/Identifier"
import Title from "../components/Title"

export default function Reward() {
  return (
    <div className="my-24 flex justify-between items-end">
      <img className="mr-10" src="/tv.png" />
      <div>
        <div className="flex-col ml-8">
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
