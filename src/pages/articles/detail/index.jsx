import React from "react";
import { Box, Image, SimpleGrid, Text } from "@chakra-ui/react";
import Header from "../../../components/header";
import { useParams } from "react-router-dom";
import { useFetchData } from "../../../hooks/useFetchData";
import { getBlogId } from "../../../services/articles";
import Loading from "../../../components/Loading";
import { converTime } from "../../../utils/convertTime";

function Detail() {
  const { id } = useParams();

  const { data, loading } = useFetchData({
    requestFunction: () => getBlogId(),
    dependecy: [id],
  });

  return (
    <>
      <Header />
      {loading ? (
        <Loading />
      ) : (
        <SimpleGrid bg="gray.50" columns={{ sm: 2 }} spacing="5" p="10">
          <Box>
            <Image boxSize="450px" src={data?.cover_url} alt={data?.title} />
          </Box>
          <Box display="flex" flexDirection="column" gap="16px">
            <Text bgClip="text" fontSize="md" fontWeight="meduim">
              {converTime(parseInt(data?.created))}
            </Text>
            <Text
              bgGradient="linear(to-l, #7928CA, #FF0080)"
              bgClip="text"
              fontSize="2xl"
              fontWeight="extrabold"
              color="black"
            ></Text>
            {data?.title}
            <Text bgClip="text" fontSize="lg" fontWeight="meduim">
              {data?.desc}
            </Text>
          </Box>
        </SimpleGrid>
      )}
    </>
  );
}

export default Detail;
