import { Route, Routes } from "react-router-dom";
import Home from "../pages/home";
import Landing from "../pages/landing";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
};
export default Routers;
