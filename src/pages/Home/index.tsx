import { Hero } from './components/Hero'
import { OurCoffes } from './components/OurCoffes';
import { HomeContainer } from "./styles";

export function HomePage() {
  return (
    <HomeContainer>
      <Hero />
      <OurCoffes />
    </HomeContainer>
  )
}