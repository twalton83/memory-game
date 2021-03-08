import React, { useEffect, useState, useRef } from 'react';
import { Header, AppWrapper, Button, PlayAgainButton } from './styledutils'
import './App.css';
import { ThemeProvider } from 'styled-components';
import { myTheme } from './my-theme'
import Scoreboard from './Scoreboard';
import CardContainer from './CardContainer'
import axios from 'axios';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import InstructionsModal from './InstructionsModal'


function App() {
  const [cards, setCards] = useState([]);
  const [displayedCards, setDisplayedCards] = useState([])
  const [previousSelections, setPreviousSelections] = useState([])
  const [score, setScore] = useState(0);
  const [isLoser, setIsLoser] = useState(false);
  const [displayModal, setDisplayModal] = useState(false);

  const isInitialMount = useRef(true)

  useEffect(() => {
    axios.get('https://api.pokemontcg.io/v2/cards?pageSize=100', {
      "x-api-key": process.env.REACT_API_KEY
    })
      .then(res => res.data.data)
      .then(data => setCards(data))
  }, [])


  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false
    } else {
      const cardsToDisplay = []
      for (let i = 0; i < 8; i++) {
        let newCard = cards[Math.floor(Math.random() * cards.length)]
        while (cardsToDisplay.some(card => card.id === newCard.id && card.name === newCard.name)) {
          newCard = cards[Math.floor(Math.random() * cards.length)]
        }
        cardsToDisplay.push(newCard)
      }
      setDisplayedCards(cardsToDisplay)
    }

  }, [cards, previousSelections])

  const handleModal = (e) => {
    setDisplayModal(!displayModal)
  }


  const handleClick = (pokemon) => {
    if (previousSelections.some(selection => pokemon.id === selection.id && pokemon.name === selection.name)) {
      setIsLoser(true)
      setPreviousSelections([])
    } else {
      setPreviousSelections([...previousSelections, pokemon])
      setScore(score + 1)
    }
  }

  const restartGame = () => {
    setIsLoser(false)
    setScore(0)
  }

  return (
    <ThemeProvider theme={myTheme}>
      <AppWrapper className="App">
        <Header>
          <Button onClick={handleModal}>Instructions</Button>
          <h1>Pokémemory!</h1>
          <Scoreboard score={score} />
        </Header>
        {!isLoser &&
          <CardContainer clickHandler={handleClick} cards={displayedCards} />
        }
        {isLoser && (
          <div>
            <h2>You lost!</h2>
            <PlayAgainButton className="play-again" type="button" onClick={restartGame}>Play Again?</PlayAgainButton>
          </div>)}
        {displayModal && <InstructionsModal toggleModal={handleModal} />}

      </AppWrapper>
    </ThemeProvider>
  );
}

export default App;
