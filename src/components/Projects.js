import { Box, Heading } from '@chakra-ui/react';
import React from 'react';


function Projects() {
  return (
    <Box  id='project' color="white" marginLeft="40%">
     
      <h2>Projects</h2>
      <div className="project">
        <h3>Project Stuff here!!!!</h3>
        <p>This is a description of your first project.</p>
      </div>
      <div className="project">
        <h3>Project 2</h3>
        <p>This is a description of your second project.</p>
      </div>
      {/* Add more project divs as needed */}
    </Box>
  );
}

export default Projects;
