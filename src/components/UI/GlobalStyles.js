import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

html {
  font-size: 62.5%;
 }

body {
  background-color: #342293;
  height: auto;
  font-family: Roboto Mono, sans-serif;
}

`;

export default GlobalStyles;
