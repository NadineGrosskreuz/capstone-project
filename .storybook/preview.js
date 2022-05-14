import GlobalStyle from "../src/components/UI/GlobalStyles"

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