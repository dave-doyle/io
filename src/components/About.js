import React, { useState, useEffect } from "react";
import { Box, Heading,Text } from "@chakra-ui/react";
import Scrambler from "./Scrambler.js";
import { TypeAnimation } from "react-type-animation";
import { motion, AnimatePresence } from "framer-motion";
import RevealText from "./RevealText.js";

function About() {
  const phrase_1 = ["DAVID DOYLE"];
  const phrase_2 = ["Software Developer"]; // Array of phrases
  const phrase_3 = ["From Dublin Ireland"]; // Array of phrases

  const initialDelay = 50;
  const revealDuration = 150;

 

  return (
    <Box id="about" color="white" marginBottom={"100px"} >
      <Heading fontWeight={'extrabold'} as="h2" fontSize="4xl" mb="4" paddingLeft={'30px'} color={'#a2a1a1'}>
        <Scrambler
          phrases={phrase_1}
          initialDelay={initialDelay}
          revealDuration={revealDuration}
          fontSize="6em"
          fontFamily='Roboto Mono' 
        />
      </Heading>

      <div className="revealed-text">
        <div className="container" style={{ display: "flex" }} >
          <Text fontSize="6xl" fontWeight={900} fontFamily="Font2, roboto mono">
            <Scrambler
              phrases={phrase_2}
              initialDelay={initialDelay}
              revealDuration={revealDuration}
              fontSize="8em"
              fontFamily='roboto mono' 
              
            />
          </Text>
        </div>
      </div>
<br></br>
      {/* <div className="revealed-text">
        <div className="container" style={{ display: "flex" }}>
          <Text fontSize="6xl" fontWeight={900} fontFamily="Font2, roboto mono">
            <Scrambler
              phrases={phrase_3}
              initialDelay={initialDelay}
              revealDuration={revealDuration}
              fontSize="8em"
              fontFamily='roboto mono'
            />
          </Text>
          <TypeAnimation
            sequence={["", 1, ""]}
            speed={20}
            style={{ whiteSpace: "pre-line", fontSize: "3.1em" }}
            repeat={0}
          />
        </div>
      </div> */}

      {/* <RevealText/> */}

    </Box>
  );
}

export default About;
