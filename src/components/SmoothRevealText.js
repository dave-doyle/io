import React from "react";
import { motion } from "framer-motion";

const SmoothRevealText = ({ text }) => {
  return (
    <motion.div
      style={{
        position: "relative",
        overflow: "hidden",
        width: "fit-content",
        height: "30px",
      }}
    >
      <motion.div
        initial={{ width: "0%" }}
        animate={{ width: "100%" }}
        transition={{ duration: 3, ease: "linear" }}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "blue",
        }}
      />
      <motion.div
        style={{
          position: "relative",
          fontSize: "18px",
          color: "white",
          zIndex: 2,
          display: "inline-block",
          overflow: "hidden",
        }}
      >
        {text}
      </motion.div>
    </motion.div>
  );
};

export default SmoothRevealText;
