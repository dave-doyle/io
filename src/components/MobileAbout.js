import React, { useState, useEffect } from "react";
import { Box, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import Scrambler from "./Scrambler.js";
import { motion} from "framer-motion";

function MobileAbout() {
  const phrase_1 = ["David Doyle"];
  const phrase_2 = ["Software Developer"]; // Array of phrases
  const phrase_3 = ["From Dublin Ireland"];

  const initialDelay = 500;
  const revealDuration = 80;

  const initialDelay2 = 1200;
  const revealDuration2 = 80;

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
    <SimpleGrid columns={[1, null, 1]} spacing={4} margin="auto" maxWidth="90%">
    <Box
      id="about"
      color="white"
      marginTop={"10vh"}
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
        

        

       

        {/* black background top*/}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "65vw" }}
          transition={{ duration: 1.2, delay: 3 }} // Adjust the duration as needed
          style={{
            height: "30vh",
            
            background: "black",
            position: "absolute",
            top: "25vw",
            left: "35vw",
            zIndex: -1,
            borderRadius: "3px",
          }}
        >

        
        
        </motion.div>
        {/* grey line top*/}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "45vw" }}
          transition={{ duration: 2.0, delay: 3 }} // Adjust the duration as needed
          style={{
            height: "1px",
            background: "black",
            position: "absolute",
            top: "35vw",
            left: "55vw",
            
            
          }}
        >
            <Scrambler
          phrases={phrase_1}
          initialDelay={initialDelay}
          revealDuration={revealDuration}
          fontSize="6em"
          fontFamily="Roboto Mono"
          fontWeight={700}
          
          
        />
        </motion.div>
      </Heading>

      

      <motion.div
          initial={{ width: 0 }}
          animate={{ width: "90vw" }}
          transition={{ duration: 1.0 }} // Adjust the duration as needed
          style={{
            height: "20vh",
            background: "black",
            position: "absolute",
            top: "50vw",
            left: "10vw",
            zIndex: -1,
            borderRadius: "3px",
          }}
        >

        {/* <div className="container" style={{ display: "flex" }}> */}
        {/* <Text
            borderRadius={"3px"}
            paddingRight={"4vw"}
            paddingLeft={"50v"}
            bg={"black"}
            fontSize="2xl"
            fontWeight={900}
            fontFamily="Font2, roboto mono"
            marginLeft={-9}
          > */}
            <Scrambler
              phrases={phrase_2}
              initialDelay={initialDelay2}
              revealDuration={revealDuration2}
              fontSize="2xl"
              fontFamily="roboto mono"
            />
          {/* </Text> */}
          
        {/* </div> */}
        {/* <div className="container" style={{ display: "flex" }}> */}
          {/* <Text
            borderRadius={"3px"}
            paddingRight={"4vw"}
            paddingLeft={"50v"}
            bg={"black"}
            fontSize="2xl"
            fontWeight={900}
            fontFamily="Font2, roboto mono"
            marginLeft={-9}
          > */}
            <Scrambler
              phrases={phrase_3}
              initialDelay={initialDelay2}
              revealDuration={revealDuration2}
              fontSize="10em"
              fontFamily="roboto mono"
            />
          {/* </Text> */}
          </motion.div>
          
        {/* </div> */}
      

      
    </Box>
    </SimpleGrid>
  );
}

export default MobileAbout;
