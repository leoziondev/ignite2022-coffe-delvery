import { TitleText } from '../../../../components/Typography'
import { coffees } from '../../../../data/coffe'
import { CoffeCard } from '../CoffeCard'
import { CoffeList, OurCoffesContainer } from './styles'

export function OurCoffes() {
  return (
    <OurCoffesContainer className="container">
      <TitleText size="l" color="subtitle"> 
        Nossos Cafés
      </TitleText>

      <CoffeList>
        {coffees.map(coffe => (
          <CoffeCard
            key={coffe.id}
            coffe={coffe}
          />
        ))}
      </CoffeList>
    </OurCoffesContainer>
  )
}