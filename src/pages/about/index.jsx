import React from "react";
import { Box, Text } from "@chakra-ui/react";
import Header from "../../components/header";

function About() {
  return (
    <div>
      <Header />
      {/* <Box w="100%" h="200px" bgGradient="linear(to-t, green.200, pink.500)" />

      <Box
        w="100%"
        h="200px"
        bgGradient="radial(gray.300, yellow.400, pink.200)"
      /> */}

      <Text
        bgGradient="linear(to-l, #7928CA, #FF0080)"
        bgClip="text"
        fontSize="6xl"
        fontWeight="extrabold"
      >
        About
      </Text>
    </div>
  );
}

export default About;