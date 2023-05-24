import React from "react";
import { Container } from "./components/Styled/Container.styled";
import Header from "./components/Header/Header";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components/Styled/Global";
import Footer from "./components/Footer/Footer";
import Layout from "./components/Layout/Layout";


const theme = {
  colors: {
    header:'#ebfbff',
    body: '#c4acac',
    footer: '#a6e1e1',
  },
}

export default function App () {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Layout />
        <Container>
          <h1>Hello Eni</h1>
        </Container>
      </>
    </ThemeProvider>
  )
}