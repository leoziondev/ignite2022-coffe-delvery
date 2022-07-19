import styled from 'styled-components'
import { RegularText, TitleText } from '../../../../components/Typography'

export const CoffeCardContainer = styled.article`
  width: 100%;
  background: ${({ theme }) => theme.colors['base-card']};
  border-radius: 6px 36px;
  padding: 0 1.25rem 1.25rem;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    width: 7.5rem;
    height: 7.5rem;
    margin-top: -1.25rem;
  }
`

export const Tags = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 4px;

  margin-top: 1rem;
  margin-bottom: 1.25rem;

  span {
    background: ${({ theme }) => theme.colors['brand-yellow-light']};
    color: ${({ theme }) => theme.colors['brand-yellow-dark']};
    font-size: ${({ theme }) => theme.textSizes['components-tag']};
    text-transform: uppercase;
    padding: 0.25rem 0.5rem;
    border-radius: 50px;
    font-weight: 700;
  }
`

export const CoffeTitle = styled(TitleText).attrs({
  size: "s",
  color: "subtitle",
  weight: "700"
})`
  margin-bottom: 0.5rem;
`

export const CoffeDescription = styled(RegularText).attrs({
  size: "s",
  color: "label"
})`
  text-align: center;
  margin-bottom: 2rem;
`

export const CoffeFooter = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  > div {
    display: flex;
    align-items: center;
    gap: 3px;

    p {
      line-height: 0.75rem;
    }
  }
`

export const AddCartWrapper = styled.div`
  width: 7.5rem;

  > button {
    width: 2.375rem;
    height: 2.375rem;
    border: none;
    border-radius: 6px;

    display: flex;
    align-items: center;
    justify-content: center;

    background: ${({ theme }) => theme.colors['brand-purple-dark']};
    color: ${({ theme }) => theme.colors['base-card']};
    margin-left: 0.3rem;
    transition: 0.3s;

    &:hover {
      background: ${({ theme }) => theme.colors['brand-purple']};
    }
  }
`