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
import { Link } from "react-router-dom";
import Scrambler from "./Scrambler.js";


function Contact() {
  const phrase_1 = ["Contact Me On LinkedIn"];
  const phrase_2 = ["Contact Me On Github"];

  const initialDelay1 = 20;

  const revealDuration1 = 50;
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 2.5 }}
      >
        <SimpleGrid columns={[2, null, 2]} spacing={4} marginLeft={"400px"}>
          <Box>
            <Card
              backgroundColor={"black"}
              borderWidth="1px"
              borderRadius="lg"
              p="4"
              maxWidth="380px"
              marginRight="20px"
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
                <Link to="https://www.linkedin.com/in/david-doyle-dev/">
                  <Image
                    src={"/linkedin.png"}
                    alt={"LinkedIn"}
                    borderRadius="1g"
                  />
                </Link>
              </CardBody>
            </Card>
          </Box>

          <Box>
            <Card
              backgroundColor={"black"}
              borderWidth="1px"
              borderRadius="lg"
              p="4"
              maxWidth="380px"
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
                <Link to="https://github.com/dave-doyle">
                  <Image
                    src={"/githublogo.png"}
                    alt={"Github"}
                    borderRadius="1g"
                  />
                </Link>
              </CardBody>
            </Card>
          </Box>
        </SimpleGrid>
      </motion.div>
    </AnimatePresence>
  );
}

export default Contact;
