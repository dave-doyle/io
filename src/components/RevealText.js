import React, { useState, useEffect } from "react";
import { Box, Heading, Text } from "@chakra-ui/react";
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
      <div style={{ position: "relative", height: "80px", paddingTop:'200px' }}>
        <AnimatePresence>
          {isAnimating && (
            <motion.div
              initial={{ width: 0, left: "60%" }}
              animate={{ width: "53%", left: "14%" }}
              exit={{ width: 0, left: "14%", duration: 0.05 }}
              transition={{
                // Use easeInOut for smoother transition
                duration: 0.9, // Increase the duration
              }}
              style={{
                height: "85px",
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
    opacity: isRectReceding ? 1 : 0, // Show background when rect is receding
  }}
  transition={{ ease: "easeInOut", duration: 0.9 }}
  style={{
    background: "black", // Set the background color
    padding: "60px 400px", // Adjust padding as needed
    borderRadius: "5px", // Adjust border radius as needed
    position: "absolute",
    width: "fit-content", // Make the width fit the content
    top: "-5%", // Adjust top position as needed
    left: "12.7%", // Adjust left position as needed
    zIndex: 2, // Set zIndex to be behind the text
  }}
></motion.div>
        <motion.div
          initial={{ opacity: 0, zIndex: 3 }}
          animate={{
            opacity: isRectReceding ? 1 : 0, // Show text when rect is receding
          }}
          transition={{ ease: "easeInOut", duration: 0.9 }} // Use easeInOut
          style={{
            color: "rgba(255, 255, 255, 0.988)",
            marginTop: "20px",
            textAlign: "center",
            fontSize: "3.8em",
            whiteSpace: "pre-line",
            position: "absolute",
            width: "100%",
            top: "-5%",
            left: "-9.7%",
            zIndex: isRectReceding ? 0 : 3, // Show behind rectangle when rect is receding
            fontFamily: "Roboto Mono",
            
          }}
        >
          From Dublin Ireland
        </motion.div>
         {/* Grey line */}
         <motion.div
          initial={{ width: 0 }}
          animate={{ width: "53.5%" }}
          transition={{ duration: 1.5 }} // Adjust the duration as needed
          style={{
            height: "1px",
            background: "grey",
            position: "absolute",
            top: "48.5%",
            left: "13.5%",
            zIndex: 3,
          }}
        ></motion.div>
      </div>
    </Box>
  );
}
export default RevealText;
