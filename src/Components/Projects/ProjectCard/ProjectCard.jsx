/* eslint-disable no-unused-vars */
// src/components/ProjectCard.jsx
import React from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";
import { FaGithub, FaReact, FaNodeJs } from "react-icons/fa";
import {
  SiTailwindcss,
  SiFirebase,
  SiExpress,
  SiMongodb,
} from "react-icons/si";

// Icon mapping
const icons = {
  FaReact,
  FaNodeJs,
  SiTailwindcss,
  SiFirebase,
  SiExpress,
  SiMongodb,
};

// Motion variants
const containerVariants = {
  hidden: { opacity: 0, y: -60 }, // start higher
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.1,
      ease: "easeOut",
      duration: 1.5,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: -60 }, // children also come from top
  visible: { opacity: 1, y: 0, transition: { ease: "easeOut", duration: 1.5 } },
};

export default function ProjectCard({ project }) {
  return (
    <motion.div
      className="bg-white rounded-xl shadow hover:shadow-xl border border-gray-100 overflow-hidden flex flex-col transition duration-300"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
    >
      <motion.img
        src={project.image}
        alt={project.name}
        className="h-48 object-cover w-full"
        variants={itemVariants}
      />

      <motion.div
        className="p-4 flex flex-col flex-1 space-y-3"
        variants={itemVariants}
      >
        <motion.h3 className="text-lg font-semibold" variants={itemVariants}>
          {project.name}
        </motion.h3>

        {/* Tech icons */}
        <motion.div className="flex gap-2 mb-4" variants={itemVariants}>
          {project.technologies.slice(0, 3).map((tech, idx) => {
            const IconComponent = icons[tech.icon];
            return IconComponent ? (
              <IconComponent
                key={idx}
                size={20}
                className="text-[#E63946]"
                title={tech.name}
              />
            ) : null;
          })}
        </motion.div>

        <motion.div
          className="mt-auto flex justify-between items-center"
          variants={itemVariants}
        >
          <Link
            to={`/projects/${project.id}`}
            className="inline-block text-[#E63946] hover:text-black text-sm"
          >
            View More
          </Link>
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-black"
          >
            <FaGithub size={18} />
          </a>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
