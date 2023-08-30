import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Heading } from '@chakra-ui/react';

import '../PageMenu.css'; // Import your CSS file

const PageMenu = () => {

  const [isMenuVisible, setIsMenuVisible] = useState(false);

  useEffect(() => {
    const visibilityTimeout = setTimeout(() => {
      setIsMenuVisible(true);
    }, 5000); // Set the delay time in milliseconds

    return () => clearTimeout(visibilityTimeout);
  }, []);

  useEffect(() => {
    const $menu = document.querySelector('.Menu-list');
    const $item = document.querySelectorAll('.Menu-list-item');
    const w = window.innerWidth; //window width
    const h = window.innerHeight; //window height

    const handleMouseMove = (e) => {
      const offsetX = 0.5 - e.pageX / w;
      const offsetY = 0.5 - e.pageY / h;
      const dy = e.pageY - h / 2;
      const dx = e.pageX - w / 2;
      let theta = Math.atan2(dy, dx);
      let angle = (theta * 180) / Math.PI - 90;

      if (angle < 0) {
        angle = angle + 360;
      }

      const offsetPoster = parseFloat($menu.getAttribute('data-offset'));
      const transformPoster = `translate3d(0, ${-offsetX * offsetPoster}px, 0) rotateX(${-offsetY * offsetPoster}deg) rotateY(${offsetX * (offsetPoster * 2)}deg)`;

      $menu.style.transform = transformPoster;

      $item.forEach((item) => {
        const offsetLayer = parseFloat(item.getAttribute('data-offset')) || 0;
        const transformLayer = `translate3d(${offsetX * offsetLayer}px, ${offsetY * offsetLayer}px, 20px)`;
        item.style.transform = transformLayer;
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <Heading>
    <motion.div
      className={`Menu-list ${isMenuVisible ? 'visible' : ''}`}
      initial={{ opacity: 0 }} // Initial opacity is 0
      animate={{ opacity: isMenuVisible ? 1 : 0 }} // Animate to 1 when visible
      transition={{ duration: 0.5 }} // Adjust the duration as needed
    >
      <ul  data-offset="10">
        <li className="Menu-list-item" data-offset="20" onClick={() => {}}>
          About
          <span className="Mask">
            <span>About</span>
          </span>
          <span className="Mask">
            <span>About</span>
          </span>
        </li>

        <li className="Menu-list-item" data-offset="20" onClick={() => {}}>
          Projects
          <span className="Mask">
            <span>Projects</span>
          </span>
          <span className="Mask">
            <span>Projects</span>
          </span>
        </li>

        <li className="Menu-list-item" data-offset="20" onClick={() => {}}>
          Contact
          <span className="Mask">
            <span>Contact</span>
          </span>
          <span className="Mask">
            <span>Contact</span>
          </span>
        </li>
        
      </ul>
    </motion.div>
{/* black background */}
<motion.div
  initial={{ height: 0, top: 0 }} // Set initial height to 0
  animate={{ height: "100%" }} // Animate height to cover the screen
  transition={{ duration: 3.2 }} // Adjust the duration as needed
  style={{
    width: "19%", // Set width to cover the screen horizontally
    background: "black",
    position: "absolute",
    top: 0,
    left: "0%",
    zIndex: -1,
  }}
></motion.div>


    </Heading>
    
    
  );
};

export default PageMenu;
