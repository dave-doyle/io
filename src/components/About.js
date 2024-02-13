import React, { useState, useEffect } from "react";
import { Box, Heading, Text } from "@chakra-ui/react";
import Scrambler from "./Scrambler.js";
import { motion } from "framer-motion";
import axios from "axios";
import RevealText from "./RevealText.js";

function About() {
  const phrase_1 = ["DAVID DOYLE"];

  const initialDelay = 30;
  const revealDuration = 100;

  const [isGrayLine1Visible, setIsGrayLine1Visible] = useState(false);
  const [isGrayLine2Visible, setIsGrayLine2Visible] = useState(false);

  useEffect(() => {
    // Delay the appearance of the gray lines
    const timeout = setTimeout(() => {
      // Set state to trigger the animation
      setIsGrayLine1Visible(true);
      setIsGrayLine2Visible(true);
    }, 2800); // Adjust the delay time in milliseconds

    return () => clearTimeout(timeout); // Cleanup function
  }, []);

  return (
    <Box
      id="about"
      color="white"
      marginBottom={"10%"}
      marginTop={"9%"}
      marginLeft={"8%"}
    >
      <Heading
        fontWeight={"extrabold"}
        as="h2"
        fontSize={{ base: "3xl", md: "6xl" }} // Responsive font size
        mb="4"
        paddingLeft={"13vw"}
        paddingBottom={"10vh"}
        color={"white"}
      >
        <div style={{ position: "relative", display: "inline-block" }}>
          <Scrambler
            phrases={phrase_1}
            initialDelay={initialDelay}
            revealDuration={revealDuration}
            fontFamily="Roboto Mono"
            fontWeight={700}
          />

          {/* Grey line */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.5, delay: 1.8 }} // Adjust the duration as needed
            style={{
              height: "1px",
              background: "grey",
              position: "absolute",
              bottom: "-5px",
              left: 0,
              zIndex: 3,
            }}
          ></motion.div>
        </div>
      </Heading>

    

      <RevealText />
    </Box>
  );
}

export default About;
