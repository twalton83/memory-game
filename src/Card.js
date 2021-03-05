import React from 'react'

export default function Card({ pokemon }) {
  return (
    <div>
      {pokemon.data[0].name}
    </div>
  )
}
