//import imgGif from "../../assets/prog.gif";

import {
  Box,
  Flex,
  Heading,
  Text,
  Stack,
  Container,
  Avatar,
  useColorModeValue,
} from "@chakra-ui/react";

const Testimonial = ({ children }) => {
  return <Box>{children}</Box>;
};

const TestimonialContent = ({ children }) => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      boxShadow={"lg"}
      p={8}
      rounded={"xl"}
      align={"center"}
      pos={"relative"}
      _after={{
        content: `""`,
        w: 0,
        h: 0,
        borderLeft: "solid transparent",
        borderLeftWidth: 16,
        borderRight: "solid transparent",
        borderRightWidth: 16,
        borderTop: "solid",
        borderTopWidth: 16,
        borderTopColor: useColorModeValue("white", "gray.800"),
        pos: "absolute",
        bottom: "-16px",
        left: "50%",
        transform: "translateX(-50%)",
      }}
    >
      {children}
    </Stack>
  );
};

const TestimonialText = ({ children }) => {
  return (
    <Text
      textAlign={"center"}
      color={useColorModeValue("gray.600", "gray.400")}
      fontSize={"sm"}
    >
      {children}
    </Text>
  );
};

const TestimonialAvatar = ({ src, name, title }) => {
  return (
    <Flex align={"center"} mt={8} direction={"column"}>
      <Avatar src={src} alt={name} mb={2} />
      <Stack spacing={-1} align={"center"}>
        <Text fontWeight={600}>{name}</Text>
        <Text fontSize={"1rem"} color={useColorModeValue("green.500")}>
          {title}
        </Text>
      </Stack>
    </Flex>
  );
};

export default function WithSpeechBubbles() {
  return (
    <Box bg={useColorModeValue("gray.100", "gray.700")} h={"100vh"}>
      <Container maxW={"7xl"} py={16} as={Stack} spacing={12}>
        <Stack spacing={0} align={"center"} marginTop={"60px"}>
          <Heading zIndex={"1"}>Sobre mim</Heading>
        </Stack>
        <Stack
          direction={{ base: "column", md: "row" }}
          spacing={{ base: 10, md: 4, lg: 10 }}
          display={"flex"}
          // flexDirection={"column"}
          // alignItems={"center"}
          // justifyContent={"center"}
        >
          <Testimonial>
            <TestimonialContent>
              <TestimonialText>
                Seja bem-vindo. Me chamo Diego Sales e sou um desenvolvedor
                Front-end. Sou natural de Manaus-AM. Sou Amante da natureza e
                entusiasta da preservação do meio ambiente. Sou apaixonado por
                tecnologia e por programação e estou sempre em busca de novas
                oportunidades para aprimorar meus conhecimentos. Gosto muito de
                aprender novas tecnologias, mas também gosto de fazer um som de
                violão com os amigos. Sou desenvolvedor Front-end React e estou
                estudando Nodejs para me tornar um desenvolvedor Full-stack.
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={"https://avatars.githubusercontent.com/u/95250284?v=4"}
              name={"Diego Sales"}
              title={"Front-end Developer Jr"}
            />
          </Testimonial>
          {/* <Image src={imgGif} alt="landing" w={"50%"}  /> */}
        </Stack>
      </Container>
    </Box>
  );
}
