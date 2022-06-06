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
  background-color: var(--blue);
  height: auto;
  font-family: Arial, Helvetica, sans-serif;
}

:root {
  --orange: #ffa375;
  --blue: #342293;
  --error-red: #720e18
}
`;

export default GlobalStyles;
