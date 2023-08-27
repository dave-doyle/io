import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react"; // Import Chakra UI components
import Scrambler from "./Scrambler.js";
import { TypeAnimation } from "react-type-animation";
import SmoothRevealText from "./SmoothRevealText";

function About() {
  const phrase_1 = ["David Doyle Software Developer"]; // Array of phrases

  const initialDelay = 5;
  const revealDuration = 2000;

  return (
    <Box id="about" color="white">
      <Heading as="h2" fontSize="2xl" mb="4">
        About Me
      </Heading>

      <br />

      <div className="revealed-text">
        <div className="container" style={{ display: "flex" }}>
          <Scrambler
            phrases={phrase_1}
            initialDelay={initialDelay}
            revealDuration={revealDuration}
            fontSize="1em"
          />

          <TypeAnimation
            sequence={["", 1, ""]}
            speed={20}
            style={{ whiteSpace: "pre-line", fontSize: "1em" }}
            repeat={0}
          />

          
        </div>
      </div>
    </Box>
  );
}

export default About;
