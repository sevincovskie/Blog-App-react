import { Box, Button, Input } from '@chakra-ui/react'
import React, { useState } from 'react'

export default function SearchBox(onSearch) {

    const [search,setSearch]= useState("")

    const handleSubmit =() =>{
       
        onSearch(search);

    }
  return (
    <Box display="flex" alignItems="center" gap={8}>
        <Input value={search}
          placeholder="search... "
          px={50}
         onChange={(e) => setSearch(e.target.value)}
        />
        <Button colorScheme="teal" onClick={handleSubmit}>Search</Button>
        </Box>
  )
}
