/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from "react";
import ProjectCard from "./ProjectCard/ProjectCard";
import { motion } from "framer-motion";

// Motion variants
const containerVariants = {
  hidden: { opacity: 0, y: -60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.2,
      ease: "easeOut",
      duration: 1.5,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: -60 },
  visible: { opacity: 1, y: 0, transition: { ease: "easeOut", duration: 1.5 } },
};

const Projects = ({ projects }) => {
document.title = "Projects";
  return (
      <motion.section
        id="projects"
        className="px-4 md:px-16 py-20 md:py-20 bg-transparent overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={containerVariants}
      >
        <motion.div
          className="max-w-6xl mx-auto space-y-10"
          variants={itemVariants}
        >
          <motion.h2
            className="text-3xl md:text-4xl font-extrabold text-[#E63946] text-center"
            variants={itemVariants}
          >
            My Projects
          </motion.h2>
          <motion.div className="grid gap-6 grid-cols-1" variants={itemVariants}>
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </motion.div>
        </motion.div>
      </motion.section>
  );
};

export default Projects;
