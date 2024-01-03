import React, { useState, useEffect } from "react";
import { Box, Heading, Text } from "@chakra-ui/react";
import Scrambler from "./Scrambler.js";
import { motion} from "framer-motion";
import RevealText from "./RevealText.js";

function MobileAbout() {
  const phrase_1 = ["David Doyle"];
  const phrase_2 = ["Software Developer"]; // Array of phrases
  const phrase_3 = ["From Dublin Ireland"];

  const initialDelay = 20;
  const revealDuration = 80;

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
    //   marginBottom={"1vh"}
      marginTop={"10vh"}
    //   marginLeft={"10vw"}
    >
      <Heading
        fontWeight={"extrabold"}
        as="h2"
        fontSize="2xl"
        mb="4"
        paddingLeft={"5vw"}
        paddingBottom={"2vh"}
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
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "51vw" }}
          transition={{ duration: 2.0 }} // Adjust the duration as needed
          style={{
            height: "1px",
            background: "grey",
            position: "absolute",
            top: "39vw",
            left: "8vw",
            
          }}
        ></motion.div>

        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "93vw" }}
          transition={{ duration: 1.0 }} // Adjust the duration as needed
          style={{
            height: "20vh",
            background: "black",
            position: "absolute",
            top: "50vw",
            left: "1vw",
            zIndex: -1,
            borderRadius: "3px",
          }}
        ></motion.div>

        {/* black background top*/}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "90vw" }}
          transition={{ duration: 2.2 }} // Adjust the duration as needed
          style={{
            height: "10vh",
            
            background: "black",
            position: "absolute",
            top: "25vw",
            left: "5vw",
            zIndex: -1,
            borderRadius: "3px",
          }}
        ></motion.div>
      </Heading>

      <br></br>

        <div className="container" style={{ display: "flex" }}>
          <Text
            borderRadius={"3px"}
            paddingRight={"4vw"}
            paddingLeft={"50v"}
            bg={"black"}
            fontSize="2xl"
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
        <div className="container" style={{ display: "flex" }}>
          <Text
            borderRadius={"3px"}
            paddingRight={"4vw"}
            paddingLeft={"50v"}
            bg={"black"}
            fontSize="2xl"
            fontWeight={900}
            fontFamily="Font2, roboto mono"
            marginLeft={-9}
          >
            <Scrambler
              phrases={phrase_3}
              initialDelay={initialDelay}
              revealDuration={revealDuration}
              fontSize="8em"
              fontFamily="roboto mono"
            />
          </Text>
          
        </div>
      <br></br>

      
    </Box>
  );
}

export default MobileAbout;
