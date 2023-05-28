import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  Box,
  Stack,
  Text,
  Image,
  Flex,
  Button,
  Heading,
  useToast,
} from "@chakra-ui/react";
import { MdOutlineLocalOffer } from "react-icons/md";
const Book_Details = () => {
  const { id } = useParams();
  const [singleData, setSingleData] = useState({});

  const toast = useToast();
  const token = localStorage.getItem("booktoken");
  const navigate = useNavigate();

  // get a single book details

  const singleBookData = async () => {
    try {
      let r = await fetch(`https://adventurous-puce-centipede.cyclic.app/book/${id}`);
      let d = await r.json();
      setSingleData(d);
    } catch (error) {
      console.log(error);
    }
  };

  // add book to the user cart
  const AddbookToThecart = async (id) => {
    try {
      let r = await fetch(`https://adventurous-puce-centipede.cyclic.app/user/cart_product/add/${id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: localStorage.getItem("booktoken"),
        },
        body: JSON.stringify(),
      });
      let d = await r.json();
      toast({
        title: `${d.msg}`,
        status: d.msg === "Product added to cart" ? "success" : "error",
        duration: 2000,
        isClosable: true,
      });
      navigate("/cart");
    } catch (error) {
      toast({
        title: `${error.message}`,
        status: "error",
        duration: 2000,
        isClosable: true,
      });
    }
  };

  useEffect(() => {
    singleBookData();
  }, []);

  return (
    <div>
      <Stack
        maxW="90%"
        direction={{ lg: "row", md: "column", base: "column" }}
        m={{ lg: "80px auto", md: "30px auto", base: "20px auto" }}
      >
        <Flex
          w={{ lg: "65%", md: "100%", base: "100%" }}
          m="auto"
          direction={{ lg: "row", md: "row", base: "column" }}
        >
          <Box w={{ lg: "50%", md: "100%", base: "100%" }}>
            <Image
              m="auto"
              src={singleData.book_image}
              height={{ lg: "300px", md: "200px", base: "150px" }}
              alt=""
            />
          </Box>
          <Box w={{ lg: "50%", md: "100%", base: "100%" }} p={""}>
            <Text
              fontSize={{ lg: "24px", md: "18px", base: "16px" }}
              mb={"10px"}
              fontWeight={700}
              lineHeight="35px"
            >
              {singleData.book_name}
            </Text>
            <Text
              fontSize={{ lg: "13px", md: "12px", base: "10px" }}
              mb={"10px"}
              color="#ff6f61"
              fontWeight={600}
            >
              by {singleData.author_name}
            </Text>

            <Text color="grey" fontSize={"18px"} mb={"10px"} fontWeight={600}>
              {singleData.published}
            </Text>
            <Text
              fontSize={{ lg: "14px", md: "12px", base: "10px" }}
              lineHeight="20px"
              fontWeight={"400"}
              textAlign={"justify"}
              pb="15px"
            >
              Description <br />• Lorem ipsum dolor sit amet consectetur
              adipisicing elit. <br />• Exercitationem at nam tempora voluptatem
              error hic vitae. <br />
              • excepturi iure nulla ducimus in. <br />• Atque minima
              accusantium quibusdam.
            </Text>
          </Box>
        </Flex>
        <Stack>
          <Stack
            boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
            borderRadius={"10px"}
            h="150px"
          >
            <Box minW={"25%"} p={"10px 20px"} borderRadius={"12px"}>
              <Heading
                fontSize={{ lg: "25px", md: "20px", base: "18px" }}
                mb={"10px"}
                fontWeight={600}
              >
                Price
              </Heading>
              <Box>
                <Flex gap={"10px"} align="center">
                  <Text
                    fontSize={{ lg: "25px", md: "20px", base: "18px" }}
                    mb={"10px"}
                    fontWeight={600}
                  >
                    $ {singleData.price}
                  </Text>
                </Flex>
              </Box>
              <Button
                onClick={() => AddbookToThecart(singleData._id)}
                w={"100%"}
                size={"md"}
                borderRadius="5px"
                bg={"#ff6f61"}
                _hover={{
                  bg: "#fd7c70",
                }}
                color="#fff"
                display={token != null ? "block" : "none"}
              >
                Add To Cart
              </Button>
              <Button
                onClick={() => navigate("/login")}
                w={"100%"}
                size={"md"}
                borderRadius="5px"
                bg={"#ff6f61"}
                _hover={{
                  bg: "#fd7c70",
                }}
                color="#fff"
                display={token == null ? "block" : "none"}
              >
                Login
              </Button>
            </Box>
          </Stack>
          <Stack boxShadow={"lg"} borderRadius={"10px"} p={5} w={"300px"}>
            <Text>Additional Offers</Text>
            <Flex>
              <MdOutlineLocalOffer size={50} style={{ color: "green" }} />
              <Text fontSize={"10px"}>
                Paytm Wallet: Pay with Paytm Wallet on bookstore for ₹799 or
                more and get up to 10% cashback. Offer ends 15 june 2023.
              </Text>
            </Flex>
          </Stack>
        </Stack>
      </Stack>
    </div>
  );
};

export default Book_Details;
