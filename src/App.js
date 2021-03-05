import React, { useEffect, useReducer } from 'react';
import { Header, AppWrapper } from './styledutils'
import './App.css';
import { ThemeProvider } from 'styled-components';
import { myTheme } from './my-theme'
import Scoreboard from './Scoreboard';
import Card from './Card'
import { init, reducer } from './reducer'

function App() {

  const [state, dispatch] = useReducer(reducer, init)

  useEffect(() => {

    return () => {
    }
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
