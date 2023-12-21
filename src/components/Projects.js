import { Box, Heading } from "@chakra-ui/react";
import React from "react";

function Projects() {
  const projects = [
    {
      title: "Tourify",
      description:
        "Project built to gamify travel across Manhattan NYC. Offering route building, check-in features, and collecting unique NFT badges to commemorate your travels.",
      githubLink: "https://github.com/dave-doyle/Tourify",
      imageSrc: "/tourify.png", 
    },
    {
      title: "Dublin Bikes",
      description:
        "This is a description of your second project. ...",
      githubLink: "https://github.com/dave-doyle/Dublin-Bikes-Project",
      imageSrc: "/project2.png", 
    },
    // Add more projects similarly
  ];

  return (
    <Box id="project" color="white" marginLeft="40%">
      <Heading as="h2" fontSize="2xl">
        Projects
      </Heading>
      {projects.map((project, index) => (
        <div key={index} className="project">
          <img src={project.imageSrc} alt={project.title} style={{ width: '200px', height: 'auto' }} />
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
            View on GitHub
          </a>
        </div>
      ))}
    </Box>
  );
}

export default Projects;
