import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
  font-size: 62.5%;
  font-family: Roboto Mono, sans-serif;
}

body {
  background-color: #573BE9;
  height: auto;
  color: black;
}
`;

export default GlobalStyle;
