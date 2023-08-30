import React from 'react';
import './App.css';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import PageMenu from './components/PageMenu';
import { ChakraProvider, CSSReset } from '@chakra-ui/react';
import CloudsBackground from './components/CloudsBackground';
import CellsBackground from './components/CellsBackground';
import SketchfabEmbed from './components/SketchfabEmbed'; // Import the new component
import SecondEmbed from './components/SecondEmbed';



function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <CellsBackground />
        <PageMenu />
        <SecondEmbed />

        <div className="content">
          <About />
          <div className="grid">
            <div className="project">
              <Projects />
            </div>
            <div className="contact">
              <Contact />
            </div>
          </div>
        </div>
      </div>
    </ChakraProvider>
  );
}



export default App;
