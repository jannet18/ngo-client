import React from "react";
import Header from "./Header";
import Hero from "./Hero";
import Blog from "../pages/Blog";
import FAQ from "../pages/FAQ";
import About from "../pages/About";

function Home() {
  return (
    <>
      <Header />
      <div>
        <Hero />
        <About />
        <FAQ />
        <Blog />
      </div>
    </>
  );
}

export default Home;
