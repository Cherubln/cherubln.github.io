import Projects from "./Projects";
import Contact from "./Contact";
import Experience from "./Experience";
import Home from "./Home";
import Skills from "./Skills";
import Navbar from "../components/Navbar";
import { useState } from "react";
import Footer from "./Footer";

const Root = () => {
  const [activeTab, setActiveTab] = useState("");
  return (
    <div className="max-w-5xl mx-auto">
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="px-8 md:px-16">
        <Home />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};
export default Root;
