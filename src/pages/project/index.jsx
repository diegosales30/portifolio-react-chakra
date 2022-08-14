import { Box, useColorModeValue } from "@chakra-ui/react";
import SmallWithSocial from "../../components/footer";
import Header from "../../components/header";
import Projetos from "../../components/projetos";
import SwiperComponent from "../../components/swiper";

const Project = () => {
  return (
    <Box bg={useColorModeValue("white", "gray.800")}>
      <Header />
      <SwiperComponent />
      <Projetos />
      <SmallWithSocial />
    </Box>
  );
};

export default Project;
