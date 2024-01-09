import React, { useState, useEffect } from "react";
import { Box } from "@chakra-ui/react";
import { TypeAnimation } from "react-type-animation";
import { motion, AnimatePresence } from "framer-motion";

function RevealText() {
  const [isAnimating, setIsAnimating] = useState(false);
  const [isRectReceding, setIsRectReceding] = useState(false);

  const startAnimation = () => {
    setIsAnimating(true);

    setTimeout(() => {
      setIsAnimating(false);
      setIsRectReceding(true); // Set to true after the rectangle expands
    }, 2000); // Adjust the time for the animation to complete
  };

  useEffect(() => {
    // Start the animation on page load
    startAnimation();
  }, []);

  return (
    <Box>
      <div
        style={{ position: "relative", height: "10vh", paddingTop: "20vh" }}
      >
        <AnimatePresence>
          {isAnimating && (
            <motion.div
              initial={{ width: 0, left: "60vh" }}
              animate={{ width: "50vw", left: "11.5vw" }}
              exit={{ width: 0, left: "11.5vw", duration: 0.05 }}
              transition={{
                // Use easeInOut for smoother transition
                duration: 0.9, // Increase the duration
              }}
              style={{
                height: "12vh",
                borderRadius: "1px",
                background: "rgba(30, 243, 207, 0.988)",
                position: "absolute",
                top: 0,
                zIndex: 4,
              }}
            ></motion.div>
          )}
        </AnimatePresence>
        <motion.div
          initial={{ opacity: 0, zIndex: 2 }} // Set zIndex to 2 to be behind the text
          animate={{
            opacity: isRectReceding ? 1 : 0,
            width: "fit-content", // Update width to fit the content
            maxWidth: "60vw", // Set a maximum width for the red box
            fontSize: "clamp(1.5vw, 3.5vw, 5vw)", // Dynamic font size based on viewport size
          }}
          transition={{ ease: "easeInOut", duration: 0.9 }}
          style={{
            backgroundColor: "black", // Set the background color
            padding: "6vh 26vw", // Adjust padding as needed
            borderRadius: "3px", // Adjust border radius as needed
            position: "absolute",
             // Make the width fit the content
            top: "1vh", // Adjust top position as needed
            left: "10vw", // Adjust left position as needed
            zIndex: 2,
          }}
        ></motion.div>
        <motion.div
          initial={{ opacity: 0, zIndex: 3 }}
          animate={{
            opacity: isRectReceding ? 1 : 0,
            fontSize: "clamp(1.5vw, 3.5vw, 5vw)", // Dynamic font size based on viewport size // Show text when rect is receding
          }}
          transition={{ ease: "easeInOut", duration: 0.9 }} // Use easeInOut
          style={{
            color: "rgba(255, 255, 255, 0.988)",
            marginTop: "2vh",
            textAlign: "center",
            fontSize: "3.8vw",
            whiteSpace: "pre-line",
            position: "absolute",
            width: "100%",
            top: "-5%",
            left: "-13%",
            zIndex: isRectReceding ? 0 : 3, // Show behind rectangle when rect is receding
            fontFamily: "Roboto Mono",
          }}
        >From Dublin Ireland
        </motion.div>
        {/* Container for the TypeAnimation */}
        <motion.div
          initial={{ opacity: 0, zIndex: 3 }}
          animate={{
            opacity: isRectReceding ? 1 : 0, // Show TypeAnimation when rect is receding
          }}
          transition={{ ease: "easeInOut", duration: 0.9 }} // Use easeInOut
          style={{
            position: "absolute",
            top: "1vh", // Adjust top position as needed
            left: "55vw", // Adjust left position as needed
            zIndex: isRectReceding ? 0 : 5, // Show behind rectangle when rect is receding
            fontFamily: "Roboto Mono",
          }}
        >
          {/* TypeAnimation */}
          <TypeAnimation
            sequence={["", 1, ""]}
            speed={20}
            style={{ whiteSpace: "pre-line", fontSize: "3.5vw" }}
            repeat={0}
          />
        </motion.div>
        {/* Grey line */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "40.5vw" }}
          transition={{ duration: 1.5, delay:2.88 }} // Adjust the duration as needed
          style={{
            height: "1px",
            background: "grey",
            position: "absolute",
            top: "60%",
            left: "15%",
            zIndex: 3,
          }}
        ></motion.div>
      </div>
    </Box>
  );
}
export default RevealText;
