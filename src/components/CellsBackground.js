import React, { useEffect, useRef } from "react";
import "../CellsBackground.css";

import CELLS from "vanta/src/vanta.globe.js";

const CellsBackground = () => {
  const vantaRef = useRef(null);

  useEffect(() => {
    // Create the Vanta.js cells background
    CELLS({
      el: vantaRef.current,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.00,
      minWidth: 200.00,
      scale: 1.00,
      scaleMobile: 1.00,
      backgroundColor: 0x0,
      color1: 0xa46b6b,
      color2: 0x30d4d3,
      colorMode: "lerpGradient"
    });
  }, []);

  return <div ref={vantaRef} className="cells-background"></div>;
};

export default CellsBackground;
