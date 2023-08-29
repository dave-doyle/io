import React from 'react';
import './App.css';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import PageMenu from './components/PageMenu';
import { ChakraProvider, CSSReset } from '@chakra-ui/react';
import CloudsBackground from './components/CloudsBackground';


function App() {
  return (
    <ChakraProvider>
      <div className="App">
       <CloudsBackground/>
        <PageMenu/>
        <div className="content">
          <About />
          
          <br></br>
          <Projects />
          <Contact />
        </div>
      </div>
    </ChakraProvider>
  );
}


export default App;
