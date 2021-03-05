import styled, { createGlobalStyle, css } from 'styled-components';

export const Header = styled.div`
display: flex;
flex-direction: row;

  background-color: ${props => props.theme.backgroundColor};
  color: ${props => props.theme.colors.main};
  height: 15vh;
  font-weight: 600;
  font-size: 2rem;
  text-align: center;
  h1 {
    margin: 0 auto;
  }
`

export const AppWrapper = styled.div`
 background-color: ${props => props.theme.backgroundColor};
 min-height: 100vh;
 max-height: 100vh;
 height: 100%;
`