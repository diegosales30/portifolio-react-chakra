import {
  Box,
  Heading,
  Container,
  Text,
  Button,
  Stack,
  useToast,
  Image,
} from "@chakra-ui/react";

import { useNavigate } from "react-router-dom";
import imgLanding from "../../assets/person01.png";

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
            <Text as={"span"} color={"#e3386a"}>
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
              bg={"#e3386a"}
              rounded={"full"}
              px={6}
              _hover={{
                bg: "#e64c7a",
              }}
              onClick={() => handleNavigation("/home")}
              color={"white"}
            >
              Saiba mais
            </Button>
          </Stack>
          <Box>
            <Image src={imgLanding} margin={"auto"} />
          </Box>
        </Stack>
      </Container>
    </>
  );
};
export default Landing;
