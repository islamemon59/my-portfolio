import React from "react";
import Header from "../Header/Header";
import Banner from "../Banner/Banner";
import AboutMe from "../AboutMe/AboutMe";
import Skills from "../Skills/Skills";
import Education from "../Education/Education";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import useActiveSectionTitle from "../../Hooks/useActiveSectionTitle";
import Projects from "../Projects/Projects";
import { useLoaderData } from "react-router";

const Home = () => {
  useActiveSectionTitle();
  const projects = useLoaderData()
  return (
    <div>
      <Header />

      <section id="hero">
        <Banner />
      </section>

      <section id="about">
        <AboutMe />
      </section>

      <section id="skills">
        <Skills />
      </section>
      <section id="education">
        <Education />
      </section>
      <section id="projects">
        <Projects projects={projects} />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <section id="footer">
        <Footer />
      </section>
    </div>
  );
};

export default Home;
