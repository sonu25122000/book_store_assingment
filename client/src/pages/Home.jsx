import React, { useEffect, useState } from "react";
import {
  Box,
  Heading,
  Text,
  Stack,
  Image,
  Grid,
  Button,
  InputGroup,
  Input,
  Icon,
  InputLeftAddon,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
const Home = () => {
  const [book, setBook] = useState([]);

  //   get all book
  const getAllBook = async () => {
    try {
      let r = await fetch(`https://adventurous-puce-centipede.cyclic.app/book`);
      let d = await r.json();
      setBook(d);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getAllBook();
  }, []);

  // search function
  const handleSearch = async (e) => {
    const query = e.target.value;
    try {
      let r = await fetch(
        `https://adventurous-puce-centipede.cyclic.app/book/search?q=${query}`
      );
      let d = await r.json();
      setBook(d);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Box w={"40%"} m={"auto"} mt={"2%"}>
        <InputGroup>
          <InputLeftAddon children={<Icon as={SearchIcon} />} />
          <Input
            onChange={handleSearch}
            type="text"
            placeholder="Search Book"
          />
        </InputGroup>
      </Box>
      <Grid
        templateColumns={{
          xl: "repeat(3, 1fr)",
          lg: "repeat(3, 1fr)",
          md: "repeat(2, 1fr)",
          base: "repeat(1, 1fr)",
        }}
        w={"90%"}
        m={"auto"}
        mt={"2%"}
      >
        {book.length === 0 ? (
          <Text
            textAlign={"center"}
            fontSize={"lg"}
            fontWeight={"bold"}
            color={"darkgray"}
          >
            Results not found related to your search
          </Text>
        ) : (
          book?.map((item, index) => {
            return (
              <Link to={`/bookdetails/${item._id}`}>
                <Box
                  key={index}
                  role={"group"}
                  p={4}
                  maxW={"330px"}
                  w={"full"}
                  boxShadow={"2xl"}
                  rounded={"lg"}
                  pos={"relative"}
                  zIndex={1}
                >
                  <Box
                    rounded={"lg"}
                    pos={"relative"}
                    _after={{
                      transition: "all .3s ease",
                      content: '""',
                      w: "full",
                      h: "full",
                      pos: "absolute",
                      top: 5,
                      left: 0,
                      filter: "blur(15px)",
                      zIndex: -1,
                    }}
                    _groupHover={{
                      _after: {
                        filter: "blur(20px)",
                      },
                    }}
                  >
                    <Image
                      rounded={"lg"}
                      height={230}
                      pl={"45px"}
                      objectFit={"cover"}
                      src={item.book_image}
                    />
                  </Box>
                  <Stack pt={10}>
                    <Heading
                      fontSize={"2xl"}
                      fontFamily={"body"}
                      fontWeight={500}
                    >
                      {item.book_name}
                    </Heading>
                    <Text color={"gray.600"} fontSize={"sm"}>
                      <span style={{ fontWeight: "bold" }}>Written by </span>
                      {item.author_name}
                    </Text>
                    <Stack>
                      <Text color={"gray.600"}>
                        <span style={{ fontWeight: "bold" }}>
                          Published in{" "}
                        </span>
                        {item.published}
                      </Text>
                      <Text fontWeight={800} fontSize={"xl"}>
                        ${item.price}
                      </Text>
                    </Stack>
                  </Stack>
                  <Link to={`/bookdetails/${item._id}`}>
                    <Button
                      w={"100%"}
                      size={"md"}
                      borderRadius="5px"
                      bg={"#ff6f61"}
                      _hover={{
                        bg: "#fd7c70",
                      }}
                      color="#fff"
                    >
                      See more details
                    </Button>
                  </Link>
                </Box>
              </Link>
            );
          })
        )}
      </Grid>
    </>
  );
};

export default Home;
