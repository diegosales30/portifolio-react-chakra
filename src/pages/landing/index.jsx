// import Head from "next/head";

import {
  Box,
  Heading,
  Container,
  Text,
  Button,
  Stack,
  useToast,
} from "@chakra-ui/react";

import { useNavigate } from "react-router-dom";

const Landing = () => {
  const toast = useToast();
  const navigation = useNavigate();
  const handleNavigation = (path) => {
    toast({
      description: `Bem-vindo!`,
      status: "success",
      duration: 2000,
      isClosable: true,
      position: "top",
    });
    return navigation(path);
  };

  return (
    <>
      <Container maxW={"3xl"}>
        <Stack
          as={Box}
          textAlign={"center"}
          spacing={{ base: 8, md: 14 }}
          py={{ base: 20, md: 36 }}
        >
          <Heading
            fontWeight={600}
            fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
            lineHeight={"110%"}
            color={"White"}
          >
            I'm Diego Sales. <br />
            <Text as={"span"} color={"green.400"}>
              Front-end Developer Jr
            </Text>
          </Heading>
          <Text color={"gray.500"}>
            Seja bem-vindo ao meu site. Aqui você poderá encontrar informações
            sobre mim e meus projetos. sou um desenvolvedor front-end, e
            atualmente estou estudando para ser um desenvolvedor full-stack.
          </Text>
          <Stack
            direction={"column"}
            spacing={3}
            align={"center"}
            alignSelf={"center"}
            position={"relative"}
          >
            <Button
              colorScheme={"green"}
              bg={"green.400"}
              rounded={"full"}
              px={6}
              _hover={{
                bg: "green.500",
              }}
              onClick={() => handleNavigation("/home")}
              color={"white"}
            >
              Saiba mais
            </Button>
          </Stack>
        </Stack>
      </Container>
    </>
  );
};
export default Landing;
