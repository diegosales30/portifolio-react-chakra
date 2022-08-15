import { Navigation, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Box,
  Container,
  Heading,
  Image,
  useColorModeValue,
} from "@chakra-ui/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

import doit from "../../assets/image/do-it.png";
import easymovie from "../../assets/image/easymovie.png";
import nukenzie from "../../assets/image/nukenzie.png";
import tiao from "../../assets/image/tic.png";
import breve from "../../assets/image/bv.png";
import orgneasy from "../../assets/image/organizze.png";

const DATA = [doit, easymovie, nukenzie, tiao, orgneasy, breve];

const SwiperComponent = () => {
  return (
    <Box
      bg={useColorModeValue("white", "gray.800")}
      maxWidth={"1000px"}
      height={"100vh"}
      maxHeight={"1080px"}
      display={"flex"}
      flexDirection={"column"}
      margin={" auto"}
      padding={"0"}
    >
      <Heading as="h1" size="xl" textAlign={"center"} p={"30px"}>
        {" "}
        Meus Projetos{" "}
      </Heading>
      <Swiper
        style={{
          width: "100%",
          height: "100%",
        }}
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={1}
        navigation={{
          enabled: true,
        }}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
      >
        {DATA.map((item, index) => (
          <Container>
            <SwiperSlide
              key={index}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image src={item} alt={item} fit={"cover"} />
            </SwiperSlide>
          </Container>
        ))}
      </Swiper>
    </Box>
  );
};

export default SwiperComponent;
