import { HeroContainer, HeroContent, HeroFeatures, HeroTitle } from "./styles";

import coffeHero from '../../../../assets/coffe-hero.svg'
import { RegularText } from "../../../../components/Typography";
import { InfoWithIcon } from "../../../../components/InfoWithIcon";
import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import { useTheme } from "styled-components";

export function Hero() {
  const { colors } = useTheme()

  return (
    <HeroContainer>
      <HeroContent className="container">
        <div>
          <HeroTitle size="xl">Encontre o café perfeito para qualquer hora do dia</HeroTitle>
          <RegularText size="l" >Com o Coffe Delivery você recebe seu café onde estiver, a qualquer hora</RegularText>

          <HeroFeatures>
            <InfoWithIcon
              icon={<ShoppingCart weight="fill" />}
              text="Compra simples e segura"
              bg={colors["brand-yellow-dark"]}
            />
            <InfoWithIcon
              icon={<Package weight="fill" />}
              text="Embalagem mantém o café intacto"
              bg={colors["base-text"]}
            />
            <InfoWithIcon
              icon={<Timer weight="fill" />}
              text="Entrega rápida e rastreada"
              bg={colors["brand-yellow"]}
            />
            <InfoWithIcon
              icon={<Coffee weight="fill" />}
              text="O café chega fresquinho até você"
              bg={colors["brand-purple"]}
            />
          </HeroFeatures>
        </div>
        <img src={coffeHero} alt="Imagem de Café Delicioso by Coffe Delivery" />
      </HeroContent>
    </HeroContainer>
  )
}