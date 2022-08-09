import {
  Box,
  Flex,
  Heading,
  Image,
  Link,
  useColorModeValue,
} from "@chakra-ui/react";

import doit from "../../assets/image/do-it.png";
import easymovie from "../../assets/image/easymovie.png";
import nukenzie from "../../assets/image/nukenzie.png";
import tiao from "../../assets/image/tiao.png";
import breve from "../../assets/image/em-breve.png";
import { SiGit, SiGithub } from "react-icons/si";

export default function Projetos() {
  return (
    <Box bg={useColorModeValue("gray.100", "gray.700")}>
      <Heading
        as="h1"
        size="lg"
        textAlign="center"
        minW={"360px"}
        paddingTop={"40px"}
      >
        Meus Projetos
      </Heading>
      <Box>
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
            //alignItems={"center"}
            flexWrap={"wrap"}
            overflow={"scroll"}
            paddingTop={"40px"}
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
              <Image src={doit} alt="doit" border={"1px solid black"} />

              <Heading
                as="h4"
                size="sd"
                textAlign={"center"}
                marginTop={"20px"}
                target={"_blank"}
              >
                Do-it
              </Heading>
              <Link href={"https://do-it-react.vercel.app/"} target={"_blank"}>
                Acessar
              </Link>
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
              <Image src={easymovie} alt="doit" border={"1px solid black"} />
              <Heading
                as="h4"
                size="sd"
                textAlign={"center"}
                marginTop={"20px"}
                h
              >
                EasyMovie
              </Heading>
              <Link
                href={"https://capstone-easy-movie.vercel.app/login"}
                target={"_blank"}
              >
                Acessar
              </Link>
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
              <Image src={nukenzie} alt="doit" border={"1px solid black"} />
              <Heading
                as="h4"
                size="sd"
                textAlign={"center"}
                marginTop={"20px"}
              >
                Nukenzie
              </Heading>
              <Link
                href={
                  "https://react-entrega-s1-nu-kenzie-diegosales30.vercel.app/"
                }
                target={"_blank"}
              >
                Acessar
              </Link>
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
              <Image src={tiao} alt="doit" border={"1px solid black"} />

              <Heading
                as="h4"
                size="sd"
                textAlign={"center"}
                marginTop={"20px"}
                target={"_blank"}
              >
                Tiao Carreiro
              </Heading>
              <Link
                href={"https://tiao-carreiro.vercel.app/"}
                target={"_blank"}
              >
                Acessar
              </Link>
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
              <Image src={breve} alt="doit" border={"1px solid black"} />
              <Heading
                as="h4"
                size="sd"
                textAlign={"center"}
                marginTop={"20px"}
              >
                Em breve
              </Heading>
              <Link href={"#"} target={"_blank"}>
                Acessar
              </Link>
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
              <Image src={breve} alt="doit" border={"1px solid black"} />
              <Heading
                as="h4"
                size="sd"
                textAlign={"center"}
                marginTop={"20px"}
              >
                Em breve
              </Heading>
              <Link href={"#"} target={"_blank"}>
                Acessar
              </Link>
            </Box>
          </Flex>
        </Box>
        <Box
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          paddingTop={"30px"}
        >
          <Link href={"https://github.com/diegosales30"} target={"_blank"}>
            <SiGithub
              size={"50px"}
              textAlign={"center"}
              marginTop={"20px"}
              cursor={"pointer"}
            />
          </Link>

          <Heading as="h4" size="sd" textAlign={"center"} marginTop={"20px"}>
            Ver no Github
          </Heading>
        </Box>
      </Box>
    </Box>
  );
}
