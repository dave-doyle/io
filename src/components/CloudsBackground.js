import React, { useEffect, useRef } from 'react';
import '../CloudsBackground.css';

import CLOUDS from 'vanta/src/vanta.clouds';


const CloudsBackground = () => {
  const vantaRef = useRef(null);

  useEffect(() => {
    // Create the Vanta.js clouds background
    CLOUDS({
      el: vantaRef.current,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 600.00,
      minWidth: 600.00,
      skyColor: 0x204,
      cloudColor: 0x436190,
      sunColor: 0x396e98,
      sunGlareColor: 0x111172,
      sunlightColor: 0x32adff,
    });

  }, []);

  return <div ref={vantaRef} className="clouds-background"></div>;
};

export default CloudsBackground;
