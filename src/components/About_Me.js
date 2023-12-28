import {
  Image,
  Box,
  Heading,
  Card,
  CardBody,
  SimpleGrid,
  CardHeader,
  Text,
} from "@chakra-ui/react";
import React from "react";
import Scrambler from "./Scrambler.js";

import { motion, AnimatePresence } from "framer-motion";

function About_Me() {
  const phrase_1 = ["About Me"];
  const phrase_2 = [
    "Hi Im David, a software developer from Dublin Ireland. I have a masters in computer science from UCD and enjoy making full stack applications with React. In my free time I like training jiu jitsu and learning Japanese. UCDでコンピューターサイエンスの修士課程に在籍しています。",
  ];

  const initialDelay1 = 50;
  const initialDelay2 = 2;

  const revealDuration1 = 150;
  const revealDuration2 = 10;

  return (
    <div style={{ position: "relative", minHeight: "100vh" }}>
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 3.5, delay: 1.0 }}
        >
          <SimpleGrid columns={[2, null, 2]} spacing={4} marginLeft={"400px"}>
            <Box>
              <Card
                borderRadius="lg"
                borderWidth="1px"
                p="4"
                maxWidth="350px"
                maxHeight={"5000px"}
                backgroundColor={"black"}
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
                    />
                  </Heading>
                </CardHeader>

                <Image
                  src={"/profile_pic.jpg"}
                  alt={"profile picture"}
                  borderRadius="lg"
                />
                <CardBody size="md" textColor={"white"}>
                  <Scrambler
                    phrases={phrase_2}
                    initialDelay={initialDelay2}
                    revealDuration={revealDuration2}
                    fontSize="md"
                    fontFamily="Roboto Mono"
                    fontWeight={700}
                  />
                </CardBody>
              </Card>
            </Box>
          </SimpleGrid>
        </motion.div>
      </AnimatePresence>

      {/* black background sideways*/}
      <motion.div
        initial={{ width: "100%", height: 0, top: 0 }}
        animate={{
          width: ["0%", "50%", "50%"],
          height: ["100%", "100%"], // Extend to 50% height

          transition: { duration: 2.2, delay:0.5 }, // Adjust the duration as needed
        }}
        style={{
          height: "73%",

          background: "black",
          position: "absolute",
          top: "-1%",
          left: "0%",
          zIndex: -1,
          borderRadius: "3px",
        }}
      ></motion.div>

      <motion.div
        initial={{ width: "100%", height: 0, top: 0 }}
        animate={{
          width: ["0%", "100%", "100%"],
          height: ["100%", "100%","0%"], // Extend to 50% height

          transition: { duration: 3.2, delay: 0 }, // Adjust the duration as needed
        }}
        style={{
          height: "73%",

          background: "black",
          position: "absolute",
          top: "-1%",
          left: "0%",
          zIndex: -1,
          borderRadius: "3px",
        }}
      ></motion.div>
    </div>
  );
}

export default About_Me;
