import React from "react";
import {
  Box,
  SimpleGrid,
  Card,
  CardBody,
  Image,
  CardHeader,
  Heading,
} from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";
import Scrambler from "./Scrambler.js";

function Contact() {
  const phrase_1 = ["Contact Me On LinkedIn"];
  const phrase_2 = ["Contact Me On Github"];

  const initialDelay1 = 70;

  const revealDuration1 = 80;
  return (
    <AnimatePresence>
      <motion.div
      key="uniqueKey1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 2.5, delay: 0}}
      >
        <SimpleGrid columns={[2, null, 2]} spacing={4} marginLeft={"30vw"}>
          <Box>
            <Card
              backgroundColor={"black"}
              borderWidth="1px"
              borderRadius="lg"
              p="4"
              maxWidth={["90vw", null, "120vw"]} // Adjusted to responsive width
              marginRight={["0", null, "10vw"]}
            >
              <CardHeader>
                <Heading size="md" textColor={"white"}>
                  {" "}
                  <Scrambler
                    phrases={phrase_1}
                    initialDelay={initialDelay1}
                    revealDuration={revealDuration1}
                    fontSize="md"
                    fontFamily="Roboto Mono"
                    fontWeight={700}
                  />{" "}
                </Heading>
              </CardHeader>
              <CardBody>
              <a href="https://www.linkedin.com/in/david-doyle-dev/" target="_blank" rel="noopener noreferrer">    
                            <motion.div
                            key="uniqueKey2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5, delay: 1.9 }}
                  >
                    <Image
                      src={"/linkedin.png"}
                      alt={"LinkedIn"}
                      borderRadius="1g"
                    />
                  </motion.div>
                </a>
              </CardBody>
            </Card>
          </Box>

          <Box>
            <Card
              backgroundColor={"black"}
              borderWidth="1px"
              borderRadius="lg"
              p="4"
              maxWidth={["90vw", null, "120vw"]}
              marginRight={["0", null, "10vw"]}
            >
              <CardHeader>
                <Heading size="md" textColor={"white"}>
                  {" "}
                  <Scrambler
                    phrases={phrase_2}
                    initialDelay={initialDelay1}
                    revealDuration={revealDuration1}
                    fontSize="md"
                    fontFamily="Roboto Mono"
                    fontWeight={700}
                  />
                  {" "}
                </Heading>
              </CardHeader>

              <CardBody>
              <a href="https://github.com/dave-doyle" target="_blank" rel="noopener noreferrer">  
                              <motion.div
                              key="uniqueKey3"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5, delay: 1.9 }}
                  >
                    <Image
                      src={"/githublogo.png"}
                      alt={"Github"}
                      borderRadius="1g"
                    />
                  </motion.div>
                </a>
              </CardBody>
            </Card>
          </Box>
        </SimpleGrid>
      </motion.div>

    </AnimatePresence>
    
  );
}

export default Contact;
