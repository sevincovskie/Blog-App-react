import { Box, Button, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { ROUTER } from "../../constant/router";

function Header() {
  const navigate = useNavigate();

  return (
    <Box 
      height="100px" 
      p="12px" 
      display="flex"
      justifyContent="space-between"
      alignItems="center" 
      backgroundColor="green"
    >
      <Text as="h1" fontSize="5xl" color="white">Blog</Text>
      <Stack direction="row" spacing={4} align="center" as="ul">
        <Button colorScheme="teal" variant="ghost" color="white" as="li" onClick={() => navigate(ROUTER.HOME)}>
          Home
        </Button>
        <Button colorScheme="teal" variant="ghost" color="white" as="li" onClick={() => navigate(ROUTER.ARTICLES)}>
          Articles
        </Button>
        <Button colorScheme="teal" variant="ghost" color="white" as="li" onClick={() => navigate(ROUTER.ABOUT)}>
          About
        </Button>
        <Button colorScheme="teal" variant="ghost" color="white" as="li" onClick={() => navigate(ROUTER.FAQ)}>
          FAQ
        </Button>
        <Button colorScheme="teal" variant="ghost" color="white" as="li" onClick={() => navigate(ROUTER.ARTICLES_CREATE)}>
          Create your Article
        </Button>
      </Stack>
    </Box>
  );
}

export default Header;

