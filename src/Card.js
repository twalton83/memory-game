import React from 'react'
import styled from 'styled-components';

const CardWrapper = styled.div`
flex-grow: 1;
height: fit-content;
width: fit-content;
margin: 0 auto;
padding: 0;
  img {
    max-height: 300px;
    &:hover {
    transform: scale(1.1);
    transition: all .5s;
    margin: 0;
    padding: 0;
  }
}
`

export default function Card({ clickHandler, pokemon }) {
  return (
    <CardWrapper>
      <img onClick={() => clickHandler(pokemon)} src={pokemon.images.small} alt="" />
    </CardWrapper>
  )
}
