import {
    Image,
    Box,
    Heading,
    Card,
    CardBody,
    SimpleGrid,
    CardHeader
  } from "@chakra-ui/react";
  import React from "react";
  import Scrambler from "./Scrambler.js";
  
  import { motion, AnimatePresence } from "framer-motion";
  
  function MobileAbout_Me() {
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
            transition={{ duration: 2.5}}
          >
            <SimpleGrid columns={[1, null, 1]} spacing={4} margin="auto" maxWidth="90%">
              <Box>
                <Card
                  borderRadius="lg"
                  borderWidth="1px"
                  p="4"
                  maxWidth="100%"
                  maxHeight='none'
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
  
        
      </div>
    );
  }
  
  export default MobileAbout_Me;
  