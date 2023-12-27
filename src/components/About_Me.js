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
import { motion, AnimatePresence } from "framer-motion";

function About_Me() {
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
              borderWidth="1px"
              borderRadius="lg"
              p="4"
              maxWidth="350px"
              backgroundColor={"black"}
            >
              <CardHeader>
                <Heading size="md" textColor={"white"}>
                  {" "}
                  About Me
                </Heading>
              </CardHeader>

              <Image src={"/profile_pic.jpg"} alt={"profile picture"} borderRadius="lg" />
              <CardBody>
                <Text fontSize={"md"} textColor={"white"}>
                  Hi Im David, a software developer from Dublin Ireland. I have
                  a masters in computer science from UCD and enjoy making full
                  stack applications with React. In my free time I like training
                  jiu jitsu and learning Japanese.
                  UCDでコンピューターサイエンスの修士課程に在籍しています。
                </Text>
              </CardBody>

            </Card>
          </Box>
        </SimpleGrid>
      </motion.div>
    </AnimatePresence>
  );
}

export default About_Me;
