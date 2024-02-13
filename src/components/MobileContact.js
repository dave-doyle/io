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

function MobileContact() {
  const phrase_1 = ["Contact Me On LinkedIn"];
  const phrase_2 = ["Contact Me On Github"];

  const initialDelay1 = 700;

  const revealDuration1 = 50;
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 3.5, delay: 0.6}}
      >
        <SimpleGrid columns={[1, null, 1]} spacing={4} margin="auto" maxWidth="90%">
          <Box>
            <Card
              backgroundColor={"black"}
              borderWidth="1px"
              borderRadius="lg"
              p="4"
              maxWidth="100vw"
              maxHeight="80vh"
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
              maxWidth="100vw"
              maxHeight="80vh"

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
                </Heading>
              </CardHeader>

              <CardBody>
              <a href="https://github.com/dave-doyle" target="_blank" rel="noopener noreferrer">  
                  <motion.div
                  key="uniqueKey1"
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

      {/* black background top*/}
      <motion.div
      key="uniqueKey2"
          initial={{ width: 0 }}
          animate={{ width: "100vw" }}
          transition={{ duration: 1.2 }} // Adjust the duration as needed
          style={{
            height: "132vh",
            
            background: "black",
            position: "absolute",
            top: "-1%",
            left: "0%",
            zIndex: -1,
            borderRadius: "3px",
          }}
        ></motion.div>
    </AnimatePresence>
    
  );
}

export default MobileContact;
