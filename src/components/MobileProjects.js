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
  
    const initialDelay1 = 30;
    const initialDelay2 = 1;
  
    const revealDuration1 = 1;
    const revealDuration2 = 10;
  
    return (
      <div style={{ position: "relative", minHeight: "100vh" }}>
        {" "}
        {/* Parent container */}
        <SimpleGrid columns={[1, null, 1]} spacing={4} margin="auto" maxWidth="90%">
          <AnimatePresence>
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.5}}
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
                      transition={{ duration: 1.5, delay: 2}}
                    >
                      <Link to={project.githubLink}>
                        <Button>View here</Button>
                      </Link>
                    </motion.div>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </SimpleGrid>
        {/* black background right to left
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "99.99%" }}
          transition={{ duration: 1.6 }} // Adjust the duration as needed
          style={{
            height: "548px",
  
            background: "black",
            position: "absolute",
            top: "-1%",
            left: "0%",
            zIndex: -1,
            borderRadius: "3px",
          }}
        ></motion.div> */}
        {/* Black background motion div bottom up
        <motion.div
          initial={{ height: 0, width: "100%", bottom: 0 }}
          animate={{
            height: ["0%", "50%", "50%"], // Extend to 50% height
            width: ["100%", "100%", "0%"], // Decrease width to 0%
            transition: {
              duration: 3.8, delay: 1.4 // Total animation duration
            },
          }}
          style={{
            background: "black",
            position: "absolute",
            zIndex: -1,
            borderRadius: "3px",
          }}
        /> */}
      </div>
    );
  }
  
  export default MobileProjects;
  