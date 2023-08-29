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
              animate={{ width: "50%", left: "2.5%" }}
              exit={{ width: 0, left: "1%", duration: 0.05 }}
              transition={{
                // Use easeInOut for smoother transition
                duration: 0.9, // Increase the duration
              }}
              style={{
                height: "80px",
                borderRadius: "1px",
                background: "#2cedff",
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
          transition={{ ease: "easeInOut", duration: 0.9 }} // Use easeInOut
          style={{
            color: "rgba(255, 255, 255, 0.796)",
            marginTop: "20px",
            textAlign: "center",
            fontSize: "3.8em",
            whiteSpace: "pre-line",
            position: "absolute",
            width: "100%",
            top: "-5%",
            left: "-20.8%",
            zIndex: isRectReceding ? 0 : 3, // Show behind rectangle when rect is receding
            fontFamily: "Roboto Mono",
          }}
        >
          From Dublin Ireland
        </motion.div>
         {/* Grey line */}
         <motion.div
          initial={{ width: 0 }}
          animate={{ width: "55%" }}
          transition={{ duration: 3 }} // Adjust the duration as needed
          style={{
            height: "1px",
            background: "grey",
            position: "absolute",
            top: "50%",
            left: "2%",
            zIndex: 3,
          }}
        ></motion.div>
      </div>
    </Box>
  );
}
export default RevealText;
