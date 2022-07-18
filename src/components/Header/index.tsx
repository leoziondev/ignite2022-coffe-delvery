import { MapPin, ShoppingCart } from 'phosphor-react'
import Logo from '../../assets/coffe-delivery-logo.svg'
import { ButtonIcon, ButtonsContainer, HeaderContainer } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <div className="container">
        <img src={Logo} alt="" />

        <ButtonsContainer>
          <ButtonIcon variant="purple">
            <MapPin size={20} weight="fill" />
            Porto Alegre-RS
          </ButtonIcon>
          <ButtonIcon variant="yellow">
            <ShoppingCart size={20} weight="fill" />
          </ButtonIcon>
        </ButtonsContainer>
      </div>
    </HeaderContainer>
  )
}