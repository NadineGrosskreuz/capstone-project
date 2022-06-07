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
  background-color: var( --secondary-color);
  height: auto;
  font-family: Arimo, sans-serif;
}

:root {
  --primary-color: #ffa375;
  --secondary-color: #342293;
  --error: #720e18

  --image-width: 28.5%; 
  --footer-header-height: 8%;
  --footer-header-width: 100%;
  --border-radius-circle: 50%;
  --input-width: 100%;
}
`;

export default GlobalStyles;
