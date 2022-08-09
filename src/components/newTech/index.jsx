import { Box, Flex, Heading, useColorModeValue } from "@chakra-ui/react";
import { SiMaterialui, SiNodedotjs, SiTypescript } from "react-icons/si";

//

const NewTech = () => {
  return (
    <Box bg={useColorModeValue("gray.100", "gray.700")}>
      <Heading
        as="h1"
        size="lg"
        textAlign="center"
        minW={"360px"}
        paddingTop={"30px"}
      >
        O que estou aprendendo
      </Heading>
      <Box paddingTop={"30px"} paddingBottom={"30px"}>
        <Box margin={"auto"} maxW={"1058px"}>
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
              <SiNodedotjs size={"7em"} color={"#539e43"} />
              <Heading
                as="h4"
                size="sd"
                textAlign={"center"}
                marginTop={"20px"}
              >
                NODE-JS
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
              <SiTypescript size={"7em"} color={"#017acb"} />
              <Heading
                as="h4"
                size="sd"
                textAlign={"center"}
                marginTop={"20px"}
              >
                TYPESCRIPT
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
              <SiMaterialui size={"7em"} color={"#29b6f6"} />
              <Heading
                as="h4"
                size="sd"
                textAlign={"center"}
                marginTop={"20px"}
              >
                MATERIAL-UI
              </Heading>
            </Box>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};

export default NewTech;
