import styled from 'styled-components';

export const Header = styled.div`
display: flex;
flex-direction: row;
align-items: center;

  background-color: ${props => props.theme.backgroundColor};
  color: ${props => props.theme.colors.main};
  height: 15vh;
  font-weight: 600;
  font-size: 1.5rem;
  text-align: center;
  padding: 16px;
  h1 {
    margin: 0 auto;
  }
`

export const AppWrapper = styled.div`
 background-color: ${props => props.theme.backgroundColor};
 min-height: 100vh;
 max-height: 85vh;
 width: 100vw;
`

export const Button = styled.button`
display: flex;
flex-direction: column;
align-items: center;
height: 16px;
justify-content: center;
background-color: ${props => props.theme.backgroundColor};
border: none;
color: ${props => props.theme.colors.main};
font-size: 1.5rem;
text-align: center;
`

export const PlayAgainButton = styled.button`
display: flex;
flex-direction: column;
align-items: center;
height: 32px;
justify-content: center;
background-color: grey;
border: none;
border-radius: 5px;
color: ${props => props.theme.colors.main};
font-size: 1.5rem;
text-align: center;
margin: 0 auto;
`