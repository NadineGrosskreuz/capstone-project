import GlobalStyle from "../src/components/Basics/GlobalStyles"

export const decorators = [
  (Story) => {
    return (
      <>
        <GlobalStyle />
        <Story />
      </>
    );
  },
 ];