import React from "react";
import Header from "./Header";
import Hero from "./Hero";
import About from "../pages/About";
import Blog from "../pages/Blog";
import FAQ from "../pages/FAQ";

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
