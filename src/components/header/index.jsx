import {
  Box,
  Flex,
  IconButton,
  Stack,
  Collapse,
  useColorModeValue,
  useDisclosure,
  ListItem,
  UnorderedList,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import ColorModeToggle from "../nightMode";
import { SiHomebridge } from "react-icons/si";
import { useNavigate } from "react-router-dom";

export default function WithSubnavigation() {
  const { isOpen, onToggle } = useDisclosure();

  const navigate = useNavigate();

  const handleNavigation = (path) => {
    return navigate(path);
  };

  return (
    <Box>
      <Flex
        bg={useColorModeValue("white", "gray.800")}
        color={useColorModeValue("gray.600", "white")}
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        align={"center"}
      >
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
        <Flex
          flex={{ base: 1 }}
          justify={{ base: "center", md: "start" }}
          color={"green.400"}
        >
          <SiHomebridge
            size={30}
            cursor={"pointer"}
            onClick={() => handleNavigation("/home")}
          />
          <Flex>
            <UnorderedList
              display={{ base: "none", md: "flex" }}
              ml={10}
              listStyleType={"none"}
            >
              <ListItem
                onClick={() => handleNavigation("/home")}
                cursor={"pointer"}
                _hover={{ color: "green.600" }}
              >
                Home
              </ListItem>
              <ListItem
                onClick={() => handleNavigation("/tecnologias")}
                cursor={"pointer"}
                marginLeft={"10px"}
                _hover={{ color: "green.600" }}
              >
                Tecnologias
              </ListItem>
              <ListItem
                onClick={() => handleNavigation("/projetos")}
                cursor={"pointer"}
                marginLeft={"10px"}
                _hover={{ color: "green.600" }}
              >
                Projetos
              </ListItem>
              <ListItem
                onClick={() => handleNavigation("/contato")}
                cursor={"pointer"}
                marginLeft={"10px"}
                _hover={{ color: "green.600" }}
              >
                Contato
              </ListItem>
            </UnorderedList>
          </Flex>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={"flex-end"}
          direction={"row"}
          spacing={6}
        >
          <ColorModeToggle />
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <Flex>
          <UnorderedList
            position={"absolute"}
            padding={0}
            margin={0}
            top={55}
            left={-5}
            bg={useColorModeValue("white", "gray.800")}
            p={10}
            display={{ md: "none" }}
            listStyleType={"none"}
          >
            <ListItem
              onClick={() => handleNavigation("/home")}
              marginTop={"0px"}
              cursor={"pointer"}
            >
              Home
            </ListItem>
            <ListItem
              onClick={() => handleNavigation("/tecnologias")}
              marginTop={"10px"}
              cursor={"pointer"}
            >
              Tecnologias
            </ListItem>
            <ListItem
              onClick={() => handleNavigation("/projetos")}
              marginTop={"10px"}
              cursor={"pointer"}
            >
              Projetos
            </ListItem>
            <ListItem
              onClick={() => handleNavigation("/contato")}
              marginTop={"10px"}
              cursor={"pointer"}
            >
              Contato
            </ListItem>
          </UnorderedList>
        </Flex>
      </Collapse>
    </Box>
  );
}
