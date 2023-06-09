import React from "react";
import { Container } from "./components/Styled/Container.styled";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components/Styled/Global";
import Layout from "./components/Layout/Layout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";
import Cart from "./pages/Cart/Cart";
import Product from "./pages/Product/Product";
import { ShoppingCartProvider } from "./Context/ShoppingCartContext";
import Checkout from "./pages/Checkout/Checkout";

const theme = {
  colors: {
    header: '#ebfbff',
    body: '#c4acac',
    footer: '#ebfbff',
  },
};

export default function App() {

  return (
    <ShoppingCartProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home/>} />
              <Route path="/product/:id" element={<Product />} />
              <Route path="/contact" element={<Contact />}></Route>
              <Route path="/cart" element={<Cart />}></Route>
              <Route path="/checkout" element={<Checkout />}></Route>
            </Route>
          </Routes>
        </Router>
      </ThemeProvider>
    </ShoppingCartProvider>
  );
}