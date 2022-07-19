import { AddCartWrapper, CoffeCardContainer, CoffeDescription, CoffeFooter, CoffeTitle, Tags } from './styles'

import coffeImg from  '../../../../assets/coffe-image-01.png'
import { RegularText, TitleText } from '../../../../components/Typography'
import { InfoWithIcon } from '../../../../components/InfoWithIcon'
import { ShoppingCart } from 'phosphor-react'
import { QuantityInput } from '../../../../components/QuantityInput/index';
import { formatMoney } from '../../../../utils/formatMoney'

export interface Coffe {
  id: number
  tags: string[]
  name: string
  description: string
  photo: string
  price: number
}

interface CoffeProps {
  coffe: Coffe
}

export function CoffeCard({ coffe }: CoffeProps) {
  const fomattedPrice = formatMoney(coffe.price)

  return (
    <CoffeCardContainer>
      <img src={`/coffes/${coffe.photo}`} alt="Imagem Café Tradicional" />
      <Tags>
        {coffe.tags.map(tag => (
          <span key={`${coffe.id}${tag}`}>{tag}</span>
        ))}
      </Tags>
      <CoffeTitle>{coffe.name}</CoffeTitle>
      <CoffeDescription>
        {coffe.description}
      </CoffeDescription>
      <CoffeFooter>
        <div>
          <RegularText size="s">R$</RegularText>
          <TitleText
            size="m"
            color="text"
            as="strong"
          >
            {fomattedPrice}
          </TitleText>
        </div>
        <AddCartWrapper>
          <QuantityInput />
          <button>
            <ShoppingCart size={22} weight="fill" />
          </button>
        </AddCartWrapper>
      </CoffeFooter>
    </CoffeCardContainer>
  )
}