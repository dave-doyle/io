import React from "react";
import {
  Box,
  SimpleGrid,
  Card,
  CardBody,
  CardHeader,
  Heading,
} from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";
import Scrambler from "./Scrambler.js";
import MobileEmbed from "./MobileEmbed.js";

function MobileAbout() {
  const phrase_1 = ['David Doyle'];
  const phrase_2 = ["Software Developer"];

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
                <Heading fontFamily="roboto mono" size="md" textColor={"white"} fontSize={"5xl"}>
                  {" "}
                  David Doyle
                </Heading>
              </CardHeader>
              <CardBody>
               
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
                <Heading fontFamily="roboto mono" size="md" textColor={"white"} fontSize={"5xl"}>
                  {" "}
                  Software Developer
                  
                  <MobileEmbed/>
                </Heading>
              </CardHeader>

              <CardBody>
                
                
              </CardBody>
            </Card>
          </Box>       

        </SimpleGrid>
      </motion.div>

    </AnimatePresence>
    
  );
}

export default MobileAbout;
