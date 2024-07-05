import React from "react";
import {
  Card,
  Image,
  Stack,
  Text,
  CardBody,
  Heading,
  CardFooter,
  Button,
} from "@chakra-ui/react";
import { shortText } from "../../utils/shortText";

const BlogCard =({ title, cover_url, desc, onReadMore })=> {
  

  return (
    <Card
      direction={{ base: "column", sm: "row" }}
      overflow="hidden"
      variant="outline"
    >
      <Image
        objectFit="cover"
        maxW={{ base: "100%", sm: "200px" }}
        src={cover_url}
        alt={title}
      />

      <Stack>
        <CardBody>
          <Heading size="md">{title}</Heading>

          <Text py="2">
           {shortText(desc,10)}
          </Text>
        </CardBody>

        <CardFooter>
          <Button variant="solid" colorScheme="orange" onClick={onReadMore}>
            Read More...
          </Button>
        </CardFooter>
      </Stack>
    </Card>
  );
}

export default BlogCard;
