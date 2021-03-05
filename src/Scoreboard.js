import React from 'react'
import styled from 'styled-components'

const ScoreDisplay = styled.p`
font-size: 1.5rem;
color: ${props => props.theme.colors.main};
`
export default function Scoreboard({ score }) {
  return (
    <div>
      <ScoreDisplay>Score: {score}</ScoreDisplay>
    </div>
  )
}
