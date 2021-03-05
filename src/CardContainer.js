import React from 'react'
import styled from 'styled-components';
import Card from './Card';

const Container = styled.section`
display: grid;
grid-template-columns: repeat(4, 1fr);
grid-gap: 24px;
width: 100vw;
height: 100%;

@media(max-width:375px){
  grid-template-columns: repeat(2, 1fr)
}
`

export default function CardContainer({ clickHandler, cards }) {
  return (
    <Container>
      {cards.map(card => <Card clickHandler={clickHandler} key={`${card.name}-${card.id}`} pokemon={card} />)}
    </Container>
  )
}
