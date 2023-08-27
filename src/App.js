import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { createGlobalStyle } from 'styled-components';



// Create a global style component
const GlobalStyle = createGlobalStyle`
  @import 'https://fonts.googleapis.com/css?family=Roboto+Mono:100';
  html, body {
    font-family: 'Roboto Mono', monospace;
    background: #212121;
    height: 100%;
  }
  .container {
    height: 100%;
    width: 100%;
    justify-content: center;
    align-items: center;
    display: flex;
  }
  .text {
    font-weight: 100;
    font-size: 28px;
    color: white;
  }
  .dud {
    color: #757575;
  }
`;

function App() {
  return (
    <>
    <GlobalStyle />
      <div className="App">
        <Navbar />
        <div className="content">
          <About />
          <Projects />
          <Contact />
        </div>
      </div>
    </>
  );
}

export default App;
