// MobileMenu component for the hamburger menu on mobile devices
import React, { useState, useEffect, useRef } from "react";
import { Menu, MenuButton, MenuList, IconButton } from "@chakra-ui/react";
import { HamburgerIcon} from '@chakra-ui/icons'
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";import "../MobileMenu.css";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef();

  // useEffect(() => {
  //   const handleClickOutside = (event) => {
  //     if (menuRef.current && !menuRef.current.contains(event.target)) {
  //       setIsOpen(false);
  //     }
  //   };

  //   document.addEventListener("mousedown", handleClickOutside);
  //   return () => {
  //     document.removeEventListener("mousedown", handleClickOutside);
  //   };
  // }, []);

  useEffect(() => {
    console.log(isOpen, 'current isOpen state');
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div style={{ zIndex: 10 }}>
      <button
        aria-label="Options"
        variant="outline"
        onClick={toggleMenu}
        style={{
          width: '15vw',
          height: '5vh',
          top: '0vh',
          right: '0vw',
          color: 'white',
          zIndex: 10,
          backgroundColor: 'transparent',
          border: 'none',
          cursor: 'pointer',
        }}
      >
        <HamburgerIcon />
      </button>
      <div
        className="menu"
        style={{
          display: isOpen ? "block" : "none",
          zIndex: 10,
          backgroundColor: 'red',
          position: 'absolute',
          top: '5vh', // Adjust positioning as needed
          right: '0',
        }}
        ref={menuRef}
      >
        {/* Mobile-specific menu items */}
        <ul>
          <li>
            <Link to="/" className="menu-link" onClick={closeMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about_me" className="menu-link" onClick={closeMenu}>
              About Me
            </Link>
          </li>
          <li>
            <Link to="/projects" className="menu-link" onClick={closeMenu}>
              Projects
            </Link>
          </li>
          <li>
            <Link to="/contact" className="menu-link" onClick={closeMenu}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MobileMenu;
