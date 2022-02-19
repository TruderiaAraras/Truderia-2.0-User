import React from "react";
import { ThemeProvider } from "styled-components";
import { NewContextProvider } from "./providers/NewContextProvider";
import Router from "./routes";
import Theme from "./styles/theme";
import { CookiesProvider } from "react-cookie";

const App = () => (
  <CookiesProvider>
    <ThemeProvider theme={Theme}>
      <NewContextProvider>
        <Router />
      </NewContextProvider>
    </ThemeProvider>
  </CookiesProvider>
);

export default App;
