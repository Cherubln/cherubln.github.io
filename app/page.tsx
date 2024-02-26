"use client";
import { useState } from "react";
import Home from "@/app/pages/Home";
import Experience from "@/app/pages/Experience";
import Skills from "@/app/pages/Skills";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/pages/Footer";
import Contact from "./pages/Contact";

function App() {
  const [activeTab, setActiveTab] = useState("");
  return (
    <div className="container mx-auto ">
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="px-8 md:px-16">
        <Home />
        <Skills />
        <Experience />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
