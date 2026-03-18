import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    margin: 0;
    padding: 0;
    min-height: 100vh;
    background: ${({ theme }) => theme.background.primary};
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
    color: ${props => props.theme.colors.text};
    font-family: 'Montserrat', sans-serif;
      
  }

  button {
    cursor: pointer;
    border: none;
    background: none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ul {
    list-style: none;
  }
`;