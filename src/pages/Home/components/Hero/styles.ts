import { rgba } from 'polished'
import styled from 'styled-components'

import bgHeroImg from '../../../../assets/bg-hero.svg'
import { TitleText } from '../../../../components/Typography'

export const HeroContainer = styled.section`
  width: 100%;
  height: 34rem;
  background: ${({ theme }) => `url(${bgHeroImg}) no-repeat center,
    linear-gradient(
      0deg,
      ${theme.colors["base-white"]} 0%,
      ${rgba(theme.colors["base-background"], 0.2)} 50%,
      ${theme.colors["base-background"]} 100%
    )
  `};
  background-size: cover;

  display: flex;
  align-items: center;
  justify-content: center;
`

export const HeroContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3.5rem;

  @media(max-width: 768px) {
    img {
      display: none;
    }
  }
`

export const HeroTitle = styled(TitleText)`
  margin-bottom: 1rem;
`

export const HeroFeatures = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 1.25rem;
  margin-top: 4.125rem;
`