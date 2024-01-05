import React, { useState, useEffect } from "react";
import { Box, Heading, Text } from "@chakra-ui/react";
import Scrambler from "./Scrambler.js";
import { motion} from "framer-motion";
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
      marginBottom={"10%"}
      marginTop={"9%"}
      marginLeft={"8%"}
    >
      <Heading
        fontWeight={"extrabold"}
        as="h2"
        fontSize={{ base: "2xl", md: "5xl" }} // Responsive font size
        mb="4"
        paddingLeft={"13vw"}
        paddingBottom={"10vh"}
        color={"#a2a1a1"}
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
          transition={{ duration: 2.0 }} // Adjust the duration as needed
          style={{
            height: "1px",
            background: "grey",
            position: "absolute",
            bottom: "-5px",
            left: 0,
            zIndex: 3,
          }}
        ></motion.div></div>
       

        {/* black background top*/}
        <motion.div
          initial={{ width: 0 }}
          animate={{ minWidth: "100%" }}
          transition={{ duration: 0.8 }} // Adjust the duration as needed
          style={{
            height: "75%",
            
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
            fontSize={{ base: "2xl", md: "5xl" }}             fontWeight={900}
            fontFamily="Font2, roboto mono"
            marginLeft={-9}
          >
            <Scrambler
              phrases={phrase_2}
              initialDelay={initialDelay}
              revealDuration={revealDuration}
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
