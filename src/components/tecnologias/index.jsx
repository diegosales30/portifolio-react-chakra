import { Box, Flex, Heading, useColorModeValue } from "@chakra-ui/react";
import {
  SiChakraui,
  SiCss3,
  SiElectron,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiReact,
  SiRedux,
  SiStyledcomponents,
} from "react-icons/si";

export default function Tech() {
  return (
    <Box bg={useColorModeValue("gray.100", "gray.700")}>
      <Heading
        as="h1"
        size="lg"
        textAlign="center"
        minW={"360px"}
        paddingTop={"40px"}
      >
        O que eu conheço
      </Heading>
      <Box h={"100vh"}>
        <Box margin={"auto"} maxW={"1058px"} h={"100vh"}>
          <Flex
            margin={"auto"}
            w={"60%"}
            h={"100%"}
            display={{
              base: "flex",
              md: "flex",
            }}
            justifyContent={"space-around"}
            alignItems={"center"}
            flexWrap={"wrap"}
            overflow={"scroll"}
          >
            <Box
              w={"200px"}
              display={"flex"}
              flexDirection={"column"}
              alignItems={"center"}
              _hover={{
                cursor: "pointer",
              }}
            >
              <SiHtml5 size={"7em"} color={"#f5612d"} />
              <Heading
                as="h4"
                size="sd"
                textAlign={"center"}
                marginTop={"20px"}
              >
                HTML
              </Heading>
            </Box>
            <Box
              w={"200px"}
              display={"flex"}
              flexDirection={"column"}
              alignItems={"center"}
              _hover={{
                cursor: "pointer",
              }}
            >
              <SiCss3 size={"7em"} color={"#006bc0"} />
              <Heading
                as="h4"
                size="sd"
                textAlign={"center"}
                marginTop={"20px"}
              >
                CSS
              </Heading>
            </Box>
            <Box
              w={"200px"}
              display={"flex"}
              flexDirection={"column"}
              alignItems={"center"}
              _hover={{
                cursor: "pointer",
              }}
            >
              <SiJavascript size={"7em"} color={"#f8dc3e"} />
              <Heading
                as="h4"
                size="sd"
                textAlign={"center"}
                marginTop={"20px"}
              >
                JAVASCRIPT
              </Heading>
            </Box>
            <Box
              w={"200px"}
              display={"flex"}
              flexDirection={"column"}
              alignItems={"center"}
              _hover={{
                cursor: "pointer",
              }}
            >
              <SiReact size={"7em"} color={"#61dbf9"} />
              <Heading
                as="h4"
                size="sd"
                textAlign={"center"}
                marginTop={"20px"}
              >
                REACT
              </Heading>
            </Box>
            <Box
              w={"200px"}
              display={"flex"}
              flexDirection={"column"}
              alignItems={"center"}
              _hover={{
                cursor: "pointer",
              }}
            >
              <SiGithub size={"7em"} />
              <Heading
                as="h4"
                size="sd"
                textAlign={"center"}
                marginTop={"20px"}
              >
                GIT/GITHUB
              </Heading>
            </Box>
            <Box
              w={"200px"}
              display={"flex"}
              flexDirection={"column"}
              alignItems={"center"}
              _hover={{
                cursor: "pointer",
              }}
            >
              <SiElectron size={"7em"} color={"#61dbf9"} />
              <Heading
                as="h4"
                size="sd"
                textAlign={"center"}
                marginTop={"20px"}
              >
                CONTEXT-API
              </Heading>
            </Box>
            <Box
              w={"200px"}
              display={"flex"}
              flexDirection={"column"}
              alignItems={"center"}
              _hover={{
                cursor: "pointer",
              }}
            >
              <SiRedux size={"7em"} color={"#764abc"} />
              <Heading
                as="h4"
                size="sd"
                textAlign={"center"}
                marginTop={"20px"}
              >
                REDUX
              </Heading>
            </Box>
            <Box
              w={"200px"}
              display={"flex"}
              flexDirection={"column"}
              alignItems={"center"}
              _hover={{
                cursor: "pointer",
              }}
            >
              <SiChakraui size={"7em"} color={"#6ecacf"} />
              <Heading
                as="h4"
                size="sd"
                textAlign={"center"}
                marginTop={"20px"}
              >
                CHAKRA-UI
              </Heading>
            </Box>
            <Box
              w={"200px"}
              display={"flex"}
              flexDirection={"column"}
              alignItems={"center"}
              _hover={{
                cursor: "pointer",
              }}
            >
              <SiStyledcomponents size={"7em"} color={"#e79478"} />
              <Heading
                as="h4"
                size="sd"
                textAlign={"center"}
                marginTop={"20px"}
              >
                STD-COMPONENTS
              </Heading>
            </Box>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
}
