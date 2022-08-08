import {
  Box,
  Container,
  Link,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from "@chakra-ui/react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const SocialButton = ({ children, label, href }) => {
  return (
    <Link
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
      target={"_blank"}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </Link>
  );
};

export default function SmallWithSocial() {
  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        direction={{ base: "column", md: "row" }}
        spacing={4}
        justify={{ base: "center", md: "space-between" }}
        align={{ base: "center", md: "center" }}
      >
        <Text fontSize={"0.8rem"}>© 2022 Desenvolvido por Diego Sales.</Text>
        <Stack direction={"row"} spacing={6}>
          <SocialButton
            label={"GitHub"}
            href={"https://github.com/diegosales30"}
          >
            <FaGithub />
          </SocialButton>
          <SocialButton
            label={"Linkedin"}
            href={"https://www.linkedin.com/in/diego-felipe-js/"}
          >
            <FaLinkedinIn />
          </SocialButton>
          <SocialButton
            label={"Gmail"}
            href={"mailto:diegosalesdasilva23@gmail.com"}
          >
            <SiGmail />
          </SocialButton>
        </Stack>
      </Container>
    </Box>
  );
}
