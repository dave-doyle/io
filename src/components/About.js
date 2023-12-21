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
      marginBottom={"100px"}
      marginTop={"150px"}
      marginLeft={"101px"}
    >
      <Heading
        fontWeight={"extrabold"}
        as="h2"
        fontSize="5xl"
        mb="4"
        paddingLeft={"198px"}
        paddingBottom={"19px"}
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
          animate={{ width: "21.5%" }}
          transition={{ duration: 2.0 }} // Adjust the duration as needed
          style={{
            height: "1px",
            background: "grey",
            position: "absolute",
            top: "32.4%",
            left: "19.8%",
            zIndex: 3,
          }}
        ></motion.div>

        {/* black background */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "81.9%" }}
          transition={{ duration: 2.2 }} // Adjust the duration as needed
          style={{
            height: "210px",
            background: "black",
            position: "absolute",
            top: "22.8%",
            left: "18.1%",
            zIndex: -1,
            borderRadius: "3px",
          }}
        ></motion.div>

        {/* black background top*/}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "99.99%" }}
          transition={{ duration: 2.2 }} // Adjust the duration as needed
          style={{
            height: "260px",
            
            background: "black",
            position: "absolute",
            top: "-1%",
            left: "0%",
            zIndex: -1,
            borderRadius: "3px",
          }}
        ></motion.div>
      </Heading>

      <br></br>

      <div className="revealed-text">
        <div className="container" style={{ display: "flex" }}>
          <Text
            borderRadius={"3px"}
            paddingRight={"40px"}
            paddingLeft={"50px"}
            bg={"black"}
            fontSize="6xl"
            fontWeight={900}
            fontFamily="Font2, roboto mono"
            marginLeft={-9}
          >
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
