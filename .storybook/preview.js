import GlobalStyle from "../src/components/UI/GlobalStyles"
import { RouterContext } from "next/dist/shared/lib/router-context";

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

 export const parameters = {
  nextRouter: {
    Provider: RouterContext.Provider,
  },
}