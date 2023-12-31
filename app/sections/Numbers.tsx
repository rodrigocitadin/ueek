import Box from "../components/Box";
import NumbersButton from "../components/NumbersButton";
import NumbersToSelect from "../components/NumbersToSelect";
import SmallText from "../components/SmallText";
import Title from "../components/Title"
import Price from "../components/Price";

export default function Numbers() {
  return (
    <div id="numbers" className="my-24 items-end">
      <Title className="!font-medium">
        Compre seu número por apenas <Price />
      </Title>
      <div className="bg-gray-dark p-8 rounded-xl my-8">
        <div className="flex flex-col justify-between xl:flex-row">
          <div>
            <SmallText>Selecione os números a serem comprados*</SmallText>
            <SmallText className="!font-medium">R$ 5,00/número</SmallText>
          </div>
          <div className="flex mt-6 xl:mt-0">
            <div className="flex  items-center mr-6">
              <Box className="border-blue text-transparent mr-2" />
              <SmallText className="!font-medium">Disponíveis</SmallText>
            </div>
            <div className="flex items-center">
              <Box className="border-gray-light text-gray-light mr-2" />
              <SmallText className="!font-medium">Indisponíveis</SmallText>
            </div>
          </div>
        </div>
        <div className="my-8">
          <NumbersToSelect />
        </div>
        <div className="flex flex-col justify-between items-center xl:flex-row">
          <NumbersButton />
          <SmallText className="!text-gray-light mt-4 xl:mt-0">*Selecione quantos números desejar</SmallText>
        </div>
      </div>
    </div>
  )
}
