import styled from 'styled-components';

import React from 'react'

const Modal = styled.div`
  z-index: 10;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
  width: 100vw;
  height: 100vh;
`

const Dialog = styled.div`
  position: relative;
  z-index: 20;
  width: auto;
  max-width: 50vw;
  height: 50%;
  color: white;
  margin: 0 auto;
  margin-top: 10%;
  border-radius: 20px;
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 15% 85%;
`

export default function InstructionsModal() {
  return (
    <Modal>
      <Dialog>
        <h1>Instructions</h1>
        <p>The goal of the game is to select as many cards as you can without selecting any given card more than once. HINT: Don't just focus on the Pokemon's name! Some Pokemon have many different kinds of cards with different art or types, so be careful to remember those details! </p>
      </Dialog>
    </Modal>
  )
}
