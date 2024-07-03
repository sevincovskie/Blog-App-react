import React from "react";
import { Box, Input, SimpleGrid, Text } from "@chakra-ui/react";
import Header from "../../components/header";
import BlogCard from "../../components/BlogCard";
import ShowNavigate from "../../components/ShowNavigate";

function Articles() {
  return (
    <>
      <Header />
      <Box p={10}>
        <Input
          color="tomato"
          placeholder="search..."
          _placeholder={{ opacity: 0.4, color: "inherit" }}
        />
        <ShowNavigate />
      </Box>

      <SimpleGrid columns={{ sm: 2 }} spacing="5">
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </SimpleGrid>
    </>
  );
}

export default Articles;
