import React, { Component } from 'react';
// import './App.css';
import Header from "./Header";
import Footer from "./Footer";
import styled from "@emotion/styled";

import FirstSection from "./FirstSection";
import SecondSection from "./SecondSection";

const Container = styled.div`
  box-sizing: border-box;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  -webkit-tap-highlight-color: transparent;
  -webkit-overflow-scrolling: touch;
  font-family: 'Open Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding: 0;
  margin: 0;
  width: 100%;
  overflow: hidden;
  /* padding: 18px 22px; */
  margin: 0 auto;
  font-family: 'Montserrat', sans-serif;
  /* max-width: 1440px; */
`;

class App extends Component {
  render() {
    return (
      <Container>
        <Header/>
          <FirstSection/>
          <SecondSection/>
          <Footer/>
      </Container>
    );
  }
}

export default App;
