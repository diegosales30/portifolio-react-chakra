import { Route, Routes } from "react-router-dom";
import Home from "../pages/home";
import Landing from "../pages/landing";
import Technology from "../pages/technology";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/home" element={<Home />} />
      <Route path="/tecnologias" element={<Technology />} />
    </Routes>
  );
};
export default Routers;
