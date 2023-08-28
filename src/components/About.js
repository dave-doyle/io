import React, { useState } from "react";
import { Box, Heading } from "@chakra-ui/react";
import Scrambler from "./Scrambler.js";
import { TypeAnimation } from "react-type-animation";
import { motion, AnimatePresence } from "framer-motion";

function About() {
  const phrase_1 = ["About Me"];
  const phrase_2 = ["David Doyle"]; // Array of phrases

  const initialDelay = 5;
  const revealDuration = 200;

  const [isAnimating, setIsAnimating] = useState(false);
  const [isRectReceding, setIsRectReceding] = useState(false);

  const startAnimation = () => {
    setIsAnimating(true);

    setTimeout(() => {
      setIsAnimating(false);
      setIsRectReceding(true); // Set to true after the rectangle expands
    }, 2000); // Adjust the time for the animation to complete
  };

  return (
    <Box id="about" color="white" marginBottom={"100px"}>
      <Heading as="h2" fontSize="3xl" mb="4">
        <Scrambler
          phrases={phrase_1}
          initialDelay={initialDelay}
          revealDuration={revealDuration}
          fontSize="4em"
        />
      </Heading>

      <br />

      <div className="revealed-text">
        <div className="container" style={{ display: "flex" }}>
        <Heading as="h2" fontSize="3xl" mb="4">
          <Scrambler
            phrases={phrase_2}
            initialDelay={initialDelay}
            revealDuration={revealDuration}
            fontSize="4em"
          />

          
          </Heading>
          <TypeAnimation
            sequence={["", 1, ""]}
            speed={20}
            style={{ whiteSpace: "pre-line", fontSize: "1.4em" }}
            repeat={0}
          />
        </div>
      </div>

      <button onClick={startAnimation}>Start Animation</button>
      <div style={{ position: "relative", height: "50px" }}>
        <AnimatePresence>
          {isAnimating && (
            <motion.div
              initial={{ width: 0, left: "50%" }}
              animate={{ width: "50%", left: "15%", }}
              exit={{ width: 0, left: "5%", duration:0.05}}
              transition={{
                 // Use easeInOut for smoother transition
                duration: 0.5, // Increase the duration
                
              }}
              style={{
                height: "60px",
                borderRadius:'5px',
                background: "turquoise",
                position: "absolute",
                top: 0,
                zIndex: 4,
              }}
            ></motion.div>
          )}
        </AnimatePresence>
        <motion.div
          initial={{ opacity: 0, zIndex: 3 }}
          animate={{
            opacity: isRectReceding ? 1 : 0, // Show text when rect is receding
          }}
          transition={{ ease: "easeInOut", duration: 0.5 }} // Use easeInOut
          style={{
            color: "white",
            marginTop: "20px",
            textAlign: "center",
            fontSize: "2em",
            whiteSpace: "pre-line",
            position: "absolute",
            width: "100%",
            top: "-5%",
            left: "-10%",
            zIndex: isRectReceding ? 0 : 3, // Show behind rectangle when rect is receding
            fontFamily: "Roboto Mono",
          }}
        >
          Sofware Developer From Dublin
        </motion.div>
      </div>
    </Box>
  );
}

export default About;
