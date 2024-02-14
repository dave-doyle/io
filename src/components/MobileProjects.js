import {
    Image,
    Heading,
    Card,
    CardBody,
    SimpleGrid,
    CardFooter,
    Button,
    CardHeader,
    Text,Box
  } from "@chakra-ui/react";
  import React from "react";
  import { motion, AnimatePresence } from "framer-motion";
  import Scrambler from "./Scrambler.js";
  
  function MobileProjects() {
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
          "Web application that predicts real-time availability data for Dublin City public bikes.",
        githubLink: "https://github.com/dave-doyle/Dublin-Bikes-Project",
        imageSrc: "/DublinBikes.png",
      },
      // Add more projects similarly
    ];
  
    const initialDelay1 = 1;
    const initialDelay2 = 30;
  
    const revealDuration1 = 1;
    const revealDuration2 = 10;
  
    return (
      <div style={{ position: "relative", minHeight: "100vh" }}>
        {" "}
        {/* Parent container */}
        <SimpleGrid columns={[1, null, 1]} spacing={4} margin="auto" maxWidth="90%">
          <AnimatePresence mode="wait">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.5, delay: index === 0 ? 0 : 2 }}
              >
                <Card
                  backgroundColor={"black"}
                  borderRadius="lg"
                  p="4"
                  maxWidth="100%"
                  height="100%"
                >
                  <CardHeader>
                    <Heading size="md" textColor={"white"}>
                      <Scrambler
                        phrases={[project.title]}
                        initialDelay={initialDelay1}
                        revealDuration={revealDuration1}
                        fontSize="md"
                        fontFamily="Roboto Mono"
                        fontWeight={700}
                      />
                    </Heading>
                  </CardHeader>
                  <Image src={project.imageSrc} alt={"text"} />
                  <CardBody>
                    <Box textColor={"white"}>
                      <Scrambler
                        phrases={[project.description]}
                        initialDelay={initialDelay2}
                        revealDuration={revealDuration2}
                        fontSize="md"
                        fontFamily="Roboto Mono"
                        fontWeight={700}
                      />
                    </Box>
                  </CardBody>
                  <CardFooter>
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 1.5, delay: 2}}
                    >
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer">             
                        <Button>View here</Button>
                      </a>
                    </motion.div>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </SimpleGrid>
        
      </div>
    );
  }
  
  export default MobileProjects;
  