import { Route, Routes } from "react-router-dom";
import Contact from "../pages/contact";
import Home from "../pages/home";
import Landing from "../pages/landing";
import Project from "../pages/project";
import Technology from "../pages/technology";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/home" element={<Home />} />
      <Route path="/tecnologias" element={<Technology />} />
      <Route path="/projetos" element={<Project />} />
      <Route path="/contato" element={<Contact />} />
    </Routes>
  );
};
export default Routers;
