import React, { useEffect, useState, useRef } from 'react';
import { Header, AppWrapper, Button } from './styledutils'
import './App.css';
import { ThemeProvider } from 'styled-components';
import { myTheme } from './my-theme'
import Scoreboard from './Scoreboard';
import CardContainer from './CardContainer'
import axios from 'axios';

function App() {
  const [cards, setCards] = useState([]);
  const [displayedCards, setDisplayedCards] = useState([])
  const [previousSelections, setPreviousSelections] = useState([])

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
        cardsToDisplay.push(cards[Math.floor(Math.random() * cards.length)])
      }
      setDisplayedCards(cardsToDisplay)
    }

  }, [cards, previousSelections])

  const handleClick = (pokemon) => {
    setPreviousSelections([...previousSelections, pokemon])
  }

  return (
    <ThemeProvider theme={myTheme}>
      <AppWrapper className="App">
        <Header>
          <Button>Instructions</Button>
          <h1>Pokémemory!</h1>
          <Scoreboard score={5} />
        </Header>
        <CardContainer clickHandler={handleClick} cards={displayedCards} />
      </AppWrapper>
    </ThemeProvider>
  );
}

export default App;
