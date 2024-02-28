import { useState } from "react";
import Home from "./pages/Home";
import Experience from "./pages/Experience";
import Skills from "./pages/Skills";
import Navbar from "./components/Navbar";
import Footer from "./pages/Footer";
import Contact from "./pages/Contact";
import Project from "./pages/Projects";

function App() {
  const [activeTab, setActiveTab] = useState("");
  return (
    <div className="container mx-auto ">
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="px-8 md:px-16">
        <Home />
        <Skills />
        <Project />
        <Experience />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
