import React, { useState, useEffect } from "react";
import { Box, Heading, Text } from "@chakra-ui/react";
import Scrambler from "./Scrambler.js";
import { TypeAnimation } from "react-type-animation";
import { motion, AnimatePresence } from "framer-motion";
import RevealText from "./RevealText.js";

function About() {
  const phrase_1 = ["David Doyle"];
  const phrase_2 = ["Software Developer"]; // Array of phrases

  const initialDelay = 50;
  const revealDuration = 150;

  return (
    <Box id="about" color="white" marginBottom={"100px"}>
      <Heading
        fontWeight={"extrabold"}
        as="h2"
        fontSize="4xl"
        mb="4"
        paddingLeft={"30px"}
        color={"#a2a1a1"}
      >
        <Scrambler
          phrases={phrase_1}
          initialDelay={initialDelay}
          revealDuration={revealDuration}
          fontSize="6em"
          fontFamily="Roboto Mono"
          fontWeight={700}
          
        />
        {/* Grey line */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "16.5%" }}
          transition={{ duration: 1.6 }} // Adjust the duration as needed
          style={{
            height: "1px",
            background: "grey",
            position: "absolute",
            top: "8%",
            left: "15%",
            zIndex: 3,
          }}
        ></motion.div>
        
      </Heading>
     
         
      <br></br>

      <div className="revealed-text">
        <div className="container" style={{ display: "flex" }}>
          <Text fontSize="6xl" fontWeight={900} fontFamily="Font2, roboto mono">
            <Scrambler
              phrases={phrase_2}
              initialDelay={initialDelay}
              revealDuration={revealDuration}
              fontSize="8em"
              fontFamily="roboto mono"
            />
          </Text>
        </div>
      </div>
      <br></br>

      <RevealText />
    </Box>
  );
}

export default About;
