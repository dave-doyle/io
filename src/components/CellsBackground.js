import React, { useEffect, useRef } from "react";
import "../CellsBackground.css";

import CELLS from "vanta/src/vanta.cells";

const CellsBackground = () => {
  const vantaRef = useRef(null);

  useEffect(() => {
    // Create the Vanta.js cells background
    CELLS({
      el: vantaRef.current,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.0,
      minWidth: 200.0,
      scale: 1.0,
      color1: 0x144040,
      color2: 0xd6172,
    });
  }, []);

  return <div ref={vantaRef} className="cells-background"></div>;
};

export default CellsBackground;
