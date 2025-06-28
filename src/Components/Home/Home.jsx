import React from "react";
import Header from "../Header/Header";
import Banner from "../Banner/Banner";
import AboutMe from "../AboutMe/AboutMe";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <section id="hero" className="min-h-screen">
        <Banner></Banner>
      </section>
      <section id="about" className="min-h-screen">
        <AboutMe></AboutMe>
      </section>
    </div>
  );
};

export default Home;
