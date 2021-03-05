import React, { useEffect, useState } from 'react';
import { Header, AppWrapper } from './styledutils'
import './App.css';
import { ThemeProvider } from 'styled-components';
import { myTheme } from './my-theme'
import Scoreboard from './Scoreboard';
import Card from './Card'
import axios from 'axios';

function App() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    axios.get('https://api.pokemontcg.io/v2/cards?pageSize=10', {
      "x-api-key": process.env.REACT_API_KEY
    })
      .then(res => res.data.data)
      .then(data => setCards(data))
  }, [])
  return (
    <ThemeProvider theme={myTheme}>
      <AppWrapper className="App">
        <Header>
          <h1>Pokémemory!</h1>
          <Scoreboard score={5} />
        </Header>

      </AppWrapper>
    </ThemeProvider>
  );
}

export default App;
