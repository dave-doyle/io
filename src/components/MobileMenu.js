import React, { useState } from "react";
import { Menu, MenuButton, MenuList, MenuItem, IconButton } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <Menu isOpen={isOpen} onClose={closeMenu}>
      <MenuButton
        as={IconButton}
        aria-label="Options"
        icon={<HamburgerIcon />}
        variant="outline"
        onClick={() => setIsOpen(!isOpen)}
        style={{
          width: "15vw",
          height: "5vh",
          top: "0vh",
          right: "0vw",
          color: "white",
          zIndex: 10,
        }}
      />
      <MenuList
        style={{
          backgroundColor: "black",
          top: "6vh", // Adjust positioning as needed
        }}
      >
        {/* Mobile-specific menu items */}
        <MenuItem onClick={closeMenu}>
          <Link to="/" className="menu-link">
            Home
          </Link>
        </MenuItem>
        <MenuItem onClick={closeMenu}>
          <Link to="/about_me" className="menu-link">
            About Me
          </Link>
        </MenuItem>
        <MenuItem onClick={closeMenu}>
          <Link to="/projects" className="menu-link">
            Projects
          </Link>
        </MenuItem>
        <MenuItem onClick={closeMenu}>
          <Link to="/contact" className="menu-link">
            Contact
          </Link>
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default MobileMenu;
