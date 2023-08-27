import React from 'react';
import { Box, Text, UnorderedList, ListItem } from '@chakra-ui/react';

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
          <Text cursor="pointer" onClick={() => scrollToSection('About')}>
            About
          </Text>
        </ListItem>
        <ListItem>
          <Text cursor="pointer" onClick={() => scrollToSection('Projects')}>
            Projects
          </Text>
        </ListItem>
        <ListItem>
          <Text cursor="pointer" onClick={() => scrollToSection('Contact')}>
            Contact
          </Text>
        </ListItem>
      </UnorderedList>
    </Box>
  );
}

export default Navbar;
