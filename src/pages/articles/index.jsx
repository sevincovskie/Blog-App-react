import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Input,
  SimpleGrid,
  Spinner,
  Text,
} from "@chakra-ui/react";
import Header from "../../components/header";
import BlogCard from "../../components/BlogCard";
import ShowNavigate from "../../components/ShowNavigate";
import { getBlogs } from "../../services/articles";
import { useNavigate } from "react-router-dom";
import { useFetchData } from "../../hooks/useFetchData";
import Loading from "../../components/Loading";
import SearchBox from "../../components/SearchBox";

function Articles() {
  const navigate = useNavigate();

  const [searchData, setSearchData] = useState();

  const { data, loading } = useFetchData({
    requestFunction: () => getBlogs(),
  });

  useEffect(() => {
    
      setSearchData(data);
    
  }, [data]);

  const handleSearch = (text) => {
    if (!text.trim()){
      setSearchData(data);
      return;
    }
    const filterData = searchData?.filter((item) =>
      item.title.toLowerCase().includes(text.toLowerCase())
      // new RegExp(text,"i").test(item.title)
    );
    setSearchData(filterData)
  };

  return (
    <>
      <Header />
      <Box px={50}>
        <ShowNavigate />
        <SearchBox onSearch={handleSearch} />
      </Box>
      {loading ? (
        <Loading />
      ) : (
        <SimpleGrid columns={{ sm: 2 }} spacing="10">
          {searchData
            ?.filter((item, index) => item.id > 90)
            ?.map((item) => (
              <BlogCard
                key={"blog-id" + item.id}
                {...item}
                onReadMore={() => navigate("/articles/" + item.id)}
              />
            ))}
          {/* <BlogCard /> */}
        </SimpleGrid>
      )}
    </>
  );
}

export default Articles;
