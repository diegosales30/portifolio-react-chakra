import { Box } from "@chakra-ui/react";
import WithSpeechBubbles from "../../components/about";
import SmallWithSocial from "../../components/footer";
import Header from "../../components/header";

const Home = () => {
  return (
    <Box>
      <Header />
      <WithSpeechBubbles />
      <SmallWithSocial />
    </Box>
  );
};

export default Home;
