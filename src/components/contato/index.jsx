import {
  Box,
  Flex,
  Heading,
  Image,
  Link,
  useColorModeValue,
} from "@chakra-ui/react";
import { SiInstagram, SiLinkedin, SiGmail, SiWhatsapp } from "react-icons/si";
import contatoImg from "../../assets/contato.png";

const Contato = () => {
  return (
    <Box bg={useColorModeValue("gray.100", "gray.700")}>
      <Heading
        as="h1"
        size="lg"
        textAlign="center"
        minW={"360px"}
        paddingTop={"30px"}
      >
        Fale comigo
      </Heading>
      <Box margin={"auto"}>
        <Box margin={"auto"} maxW={"1058px"}>
          <Flex
            margin={"auto"}
            w={"60%"}
            //h={"100%"}
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
              h={"200px"}
              display={"flex"}
              flexDirection={"column"}
              alignItems={"center"}
              _hover={{
                cursor: "pointer",
              }}
            >
              <Link
                href="https://www.linkedin.com/in/diego-felipe-js/"
                isExternal
                target={"_blank"}
              >
                <SiLinkedin size={"3em"} color={"#0e76a8"} />
              </Link>

              <Heading
                as="h4"
                size="sd"
                textAlign={"center"}
                marginTop={"20px"}
              >
                Linkedin
              </Heading>
            </Box>
            <Box
              w={"200px"}
              h={"200px"}
              display={"flex"}
              flexDirection={"column"}
              alignItems={"center"}
              _hover={{
                cursor: "pointer",
              }}
            >
              <Link
                href="mailto:diegofelipesales23@gmail.com"
                isExternal
                target={"_blank"}
              >
                <SiGmail size={"3em"} color={"#f14336"} />
              </Link>

              <Heading
                as="h4"
                size="sd"
                textAlign={"center"}
                marginTop={"20px"}
              >
                Gmail
              </Heading>
            </Box>
            <Box
              w={"200px"}
              h={"200px"}
              display={"flex"}
              flexDirection={"column"}
              alignItems={"center"}
              _hover={{
                cursor: "pointer",
              }}
            >
              <Link
                href="https://www.instagram.com/dihcode/"
                isExternal
                target={"_blank"}
              >
                <SiInstagram size={"3em"} color={"#db316d"} />
              </Link>

              <Heading
                as="h4"
                size="sd"
                textAlign={"center"}
                marginTop={"20px"}
              >
                Instagram
              </Heading>
            </Box>
            <Box
              w={"200px"}
              h={"200px"}
              display={"flex"}
              flexDirection={"column"}
              alignItems={"center"}
              _hover={{
                cursor: "pointer",
              }}
            >
              <Link
                href="https://wa.me/5592994748629"
                isExternal
                target={"_blank"}
              >
                <SiWhatsapp size={"3em"} color={"#34af23"} />
              </Link>

              <Heading
                as="h4"
                size="sd"
                textAlign={"center"}
                marginTop={"20px"}
              >
                Whatsapp
              </Heading>
            </Box>
          </Flex>
        </Box>
      </Box>
      <Box
        padding={0}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Image src={contatoImg} alt="logoimg" />
      </Box>
    </Box>
  );
};

export default Contato;
