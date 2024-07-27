import React from "react";
import Header from "./Header";
import Hero from "./Hero";
import Blog from "../pages/Blog";
import FAQ from "../pages/FAQ";
import Programs from "../pages/Programs";
import About from "../pages/About";

function Home() {
  return (
    <>
      <Header />
      <div>
        <Hero />
        <About />
        <Programs />
        <FAQ />
        <Blog />
      </div>
    </>
  );
}

export default Home;
