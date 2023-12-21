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
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';



function App() {
  return (
    <ChakraProvider>
      <Router>
      <div className="App">
        <CellsBackground />
        <PageMenu />
        <SecondEmbed />
        

        <Routes>
        <Route index element={<About />} />
            <Route path="/projects" element={<Projects/>} />
            <Route path="/contact" element={<Contact/>} />
          </Routes>
      </div>
      </Router>
    </ChakraProvider>
  );
}



export default App;
