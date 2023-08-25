import React from "react";

import { ThemeProvider } from 'styled-components';

// styles
import GlobalStyles from "../../assets/styles/globalStyles";
import ThemeDefault from '../../assets/styles/themeDefault.js';
import { Container } from './styles';

import Header from "../Header";

import Routes from '../../Routes.js';

function App() {
  return (
    <ThemeProvider theme={ThemeDefault}>
      <Container>
        <GlobalStyles />
        <Header />
        <Routes />
      </ Container>
    </ThemeProvider>

  );
}

export default App;
