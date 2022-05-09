import React from "react";
import About from "./About";
import Contact from "./Contact";
import Banner from "./Banner";
import Navbar from "./Navbar";
import Skills from "./Skills";
import Work from "./Work";

const Home = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <About />
      <Skills />
      <Work />
      <Contact />
    </>
  );
};
export default Home;
