import React from 'react';
import { Box, Text, UnorderedList, ListItem } from '@chakra-ui/react';
import '../App.css'; // Import your custom CSS file

function Navbar() {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Box width="200px" bg="#333" color="white" p="20px">
      <UnorderedList listStyleType="none" padding="0">
        <ListItem>
          <Text
            className="vertical-text" // Add a class for vertical text rotation
            cursor="pointer"
            onClick={() => scrollToSection('Abouttttt')}
          >
            About
          </Text>
        </ListItem>
        <ListItem>
          <Text
            className="vertical-text" // Add the same class for vertical text rotation
            cursor="pointer"
            onClick={() => scrollToSection('Projects')}
          >
            Projects
          </Text>
        </ListItem>
        <ListItem>
          <Text
            className="vertical-text" // Add the same class for vertical text rotation
            cursor="pointer"
            onClick={() => scrollToSection('Contact')}
          >
            Contact
          </Text>
        </ListItem>
      </UnorderedList>
    </Box>
  );
}

export default Navbar;
