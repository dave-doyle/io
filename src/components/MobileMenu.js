// MobileMenu component for the hamburger menu on mobile devices
import React, { useState, useEffect, useRef } from "react";
import { Menu, MenuButton, MenuList, IconButton } from "@chakra-ui/react";
import { HamburgerIcon} from '@chakra-ui/icons'
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "../MobileMenu.css";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const menuRef = useRef();

  useEffect(() => {
    const visibilityTimeout = setTimeout(() => {
      setIsMenuVisible(true);
    }, 3000); // Set the delay time in milliseconds

    return () => clearTimeout(visibilityTimeout);
  }, []);

  // when you click outside the mobile menu + close it and then try to reopen, this allows that
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Handle toggling menu visibility
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

 
  

  return (
    <Menu>
      <MenuButton
        as={IconButton}
        aria-label="Options"
        icon={<HamburgerIcon />}
        variant="outline"
        onClick={toggleMenu}
      />
      <MenuList display={isOpen ? "block" : "none"} ref={menuRef}>
        {/* Mobile-specific menu items */}
        {isMenuVisible && (
  <motion.div
    className={`MenuList ${isMenuVisible ? "visible" : ""}`}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
  >
    <ul>
      <li>
        <Link to="/" className="menu-link" >
          Home
        </Link>
      </li>
      <li>
        <Link to="/about_me" className="menu-link" >
          About Me
        </Link>
      </li>
      <li>
        <Link to="/projects" className="menu-link" >
          Projects
        </Link>
      </li>
      <li>
        <Link to="/contact" className="menu-link" >
          Contact
        </Link>
      </li>
    </ul>
  </motion.div>
)}

      </MenuList>
    </Menu>
  );
};

export default MobileMenu;
