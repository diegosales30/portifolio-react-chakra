import { Box, Heading, Link } from "@chakra-ui/react";

import { SiGithub } from "react-icons/si";

export default function Projetos() {
  return (
    <Box h={"100%"}>
      <Box>
        <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
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
