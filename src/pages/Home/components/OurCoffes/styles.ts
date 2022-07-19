import styled from 'styled-components'

export const OurCoffesContainer = styled.section`
  width: 100%;
  margin-top: 2rem;
`

export const CoffeList = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 2rem;
  row-gap: 2.5rem;
  margin-top: 3.5rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 460px) {
    grid-template-columns: 1fr;
  }
`