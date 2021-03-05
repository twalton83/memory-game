import React from 'react'
import styled from 'styled-components'

const ScoreDisplay = styled.p`
position: absolute;
right: 16px;
font-size: 1.5rem;
color: ${props => props.theme.colors.main};
`
export default function Scoreboard({ score }: ScoreboardProps) {
  return (
    <div>
      <ScoreDisplay>Score: {score}</ScoreDisplay>
    </div>
  )
}

type ScoreboardProps = {
  score: number
}