import {
  Image,
  Heading,
  Card,
  CardBody,
  SimpleGrid,
  CardFooter,
  Button,
  CardHeader,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Scrambler from "./Scrambler.js";

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
        "Web application that predicts real-time availability data for Dublin City public bikes.",
      githubLink: "https://github.com/dave-doyle/Dublin-Bikes-Project",
      imageSrc: "/DublinBikes.png",
    },
    // Add more projects similarly
  ];

  const initialDelay1 = 70;
  const initialDelay2 = 20;

  const revealDuration1 = 350;
  const revealDuration2 = 30;

  return (
    <div style={{ position: "relative", minHeight: "100vh" }}>
      {" "}
      {/* Parent container */}
      <SimpleGrid columns={[2, null, 2]} spacing={4} marginLeft={"21%"}>
        <AnimatePresence>
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 2.5, delay: 1.5}}
            >
              <Card
                backgroundColor={"black"}
                borderRadius="lg"
                p="4"
                maxWidth="40vw"
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
                  <Text textColor={"white"}>
                    <Scrambler
                      phrases={[project.description]}
                      initialDelay={initialDelay2}
                      revealDuration={revealDuration2}
                      fontSize="md"
                      fontFamily="Roboto Mono"
                      fontWeight={700}
                    />
                  </Text>
                </CardBody>
                <CardFooter>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5, delay: 3.2 }}
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

         {/* black background right to left*/}
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: "99.99%" }}
        transition={{ duration: 1.6 }} // Adjust the duration as needed
        style={{
          height: "100vh",

          background: "black",
          position: "absolute",
          top: "-1%",
          left: "0%",
          zIndex: -1,
          borderRadius: "3px",
        }}
      ></motion.div>
      </SimpleGrid>
     
     
    </div>
  );
}

export default Projects;
