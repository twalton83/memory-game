import styled from 'styled-components';

export const Header = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
max-width: 100%;

background-color: ${props => props.theme.backgroundColor};
color: ${props => props.theme.colors.main};
height: 15vh;
font-weight: 600;
font-size: 1.5rem;
text-align: center;
padding: 16px;
@media(max-width:375px){
  flex-direction: column;
  justify-content: space-around;
  div {
    order: 1;
  }
  h1 {
    font-size: 24px;
    margin: 0;
  }
  button {
    order: 2
  }


}
`

export const AppWrapper = styled.div`
 background-color: ${props => props.theme.backgroundColor};
 min-height: 100vh;
 max-height: 85vh;
 width: 100vw;

 @media(max-width: 375px){
   display: grid;
   grid-template-rows: auto auto;
   max-height: none;
 }
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