import React from 'react';
import { Box } from '@chakra-ui/react';
function Contact() {


  // Style for the images
  const imageStyle = {
    width: '140px', // Adjust the width as needed
    height: 'auto', // This will maintain the aspect ratio
    marginRight: '10px', // Space between images
    marginBottom: '20px', // Add space below the heading
  };

  const divStyle ={
    display: 'flex',
    alignItems: 'center'
  }
  const headingStyle ={
    fontSize: '50px', // Adjust the font size as needed
    color: 'white', // Change the text color if desired
    marginBottom: '20px', // Add space below the heading

  }

  return (
    <Box id="contact" marginLeft="40%" position='absolute'>
      <h2 style={headingStyle}>Contact Me</h2>
      <div style={divStyle}>
      <a href="https://www.linkedin.com/in/david-doyle-dev/" target="_blank" rel="noopener noreferrer">
      <img src="/linkedin.png" alt="LinkedIn" style={imageStyle}/>      </a>
      <a href="https://github.com/dave-doyle" target="_blank" rel="noopener noreferrer">
      <img src="/githublogo.png" alt="GitHub" style={imageStyle} />     </a>
    </div>
    </Box>
  );
}

export default Contact;
