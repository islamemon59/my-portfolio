import React from "react";
import Header from "../Header/Header";
import Banner from "../Banner/Banner";
import AboutMe from "../AboutMe/AboutMe";
import Skills from "../Skills/Skills";
import Education from "../Education/Education";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";

const Home = () => {
  return (
    <div>
      <Header />

      <section id="hero">
        <Banner />
      </section>

      <section id="about" className="md:py-10">
        <AboutMe />
      </section>

      <section id="skills" className="py-6 md:py-10">
        <Skills />
      </section>
      <section id="education" className="py-6 md:py-10">
        <Education/>
      </section>
      <section id="contact" className="py-6 md:py-10">
        <Contact/>
      </section>
      <section id="footer">
        <Footer/>
      </section>
    </div>
  );
};

export default Home;
