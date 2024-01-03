import React from 'react';
import './App.css';
import About from './components/About';
import About_Me from './components/About_Me';
import Projects from './components/Projects';
import Contact from './components/Contact';
import PageMenu from './components/PageMenu';

import { ChakraProvider } from '@chakra-ui/react';
import CellsBackground from './components/CellsBackground';
import SecondEmbed from './components/SecondEmbed';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import MobileAbout from './components/MobileAbout'; // Import the MobileAbout component
import MobileAbout_Me from './components/MobileAbout_Me';
import MobileProjects from './components/MobileProjects';
import MobileContact from './components/MobileContact';

import { isMobile } from 'react-device-detect';





function App() {

  return (
    <ChakraProvider>
      <Router>
      <div className="App">
        <CellsBackground />
        <PageMenu />
        {isMobile?(
        <></>
        ) : (<><SecondEmbed /></>)}
        

        <Routes>
            {isMobile ? (
              <>
                <Route index element={<MobileAbout />} />
                <Route path="/about_me" element={<MobileAbout_Me />} />
                <Route path="/projects" element={<MobileProjects />} />
                <Route path="/contact" element={<MobileContact />} />
              </>
            ) : (
              <>
                <Route index element={<About />} />
                <Route path="/about_me" element={<About_Me />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/contact" element={<Contact />} />
              </>
            )}
          </Routes>
      </div>
      </Router>
    </ChakraProvider>
  );
}



export default App;
