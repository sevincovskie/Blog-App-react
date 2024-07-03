import React from "react";
import { Box, Text, Button, Image, SimpleGrid } from "@chakra-ui/react";
import Header from "../../components/header";
import { useNavigate } from "react-router-dom";
import { ROUTER } from "../../constant/router";

function Home() {

  const navigate= useNavigate()
  return (
    <>
      <Header />
      <SimpleGrid bg="gray.50" columns={{ sm: 2 }} spacing="5" p="10">
        <Box display="flex" flexDirection="column" gap="16px">
          <Text
            bgGradient="linear(to-l, #7928CA, #FF0080)"
            bgClip="text"
            fontSize="6xl"
            fontWeight="extrabold"
            color="black"
          >
            Welcome...
          </Text>
          <Text
            bgGradient="linear(to-l, #7928CA, #FF0080)"
            bgClip="text"
            fontSize="2xl"
            fontWeight="meduim"
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error
            eveniet quo dolorem voluptas, dolores illo eligendi placeat nihil
            dolorum? Porro quidem odit voluptatum. Architecto illo neque animi
            iusto reiciendis quod.
          </Text>
          <Button size="lg" colorScheme="green" alignSelf="flex-start" onClick={()=>navigate(ROUTER.ARTICLES_CREATE)}>
            Get started
          </Button>
        </Box>
        <Image
          boxSize="350px"
          src="https://img.freepik.com/premium-vector/illustration-vector-graphic-cartoon-character-blogging_516790-1481.jpg"
        />
      </SimpleGrid>
    </>
  );
}

export default Home;
