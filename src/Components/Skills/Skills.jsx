/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGithub,
  FaServer,
} from "react-icons/fa";
import { DiMongodb, DiVisualstudio } from "react-icons/di";
import { SiTailwindcss, SiFirebase } from "react-icons/si";
import { motion } from "framer-motion";

const skillsData = [
  // your existing skillsData (keep exactly as you have)
  {
    category: "Frontend",
    skills: [
      { name: "HTML5", icon: <FaHtml5 />, description: "Markup language for structuring web content", proficiency: 95 },
      { name: "CSS3", icon: <FaCss3Alt />, description: "Styling language to make websites beautiful", proficiency: 90 },
      { name: "JavaScript", icon: <FaJs />, description: "Programming language for interactivity and logic", proficiency: 85 },
      { name: "React.js", icon: <FaReact />, description: "JavaScript library for building UI components", proficiency: 85 },
      { name: "Tailwind CSS", icon: <SiTailwindcss />, description: "Utility-first CSS framework for rapid UI development", proficiency: 60 },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", icon: <FaNodeJs />, description: "JavaScript runtime for backend development", proficiency: 60 },
      { name: "Express.js", icon: <FaServer />, description: "Minimalist web framework for Node.js", proficiency: 75 },
      { name: "MongoDB", icon: <DiMongodb />, description: "NoSQL database for scalable data storage", proficiency: 70 },
      { name: "Firebase", icon: <SiFirebase />, description: "Backend-as-a-Service platform by Google", proficiency: 65 },
    ],
  },
  {
    category: "Tools",
    skills: [
      { name: "VS Code", icon: <DiVisualstudio />, description: "Popular source-code editor", proficiency: 90 },
      { name: "GitHub", icon: <FaGithub />, description: "Platform for version control and collaboration", proficiency: 85 },
    ],
  },
];

// Motion variants
const containerVariants = {
  hidden: { opacity: 0, y: -60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.15, ease: "easeOut", duration: 1.5 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: -60 },
  visible: { opacity: 1, y: 0, transition: { ease: "easeOut", duration: 1.5 } },
};

export default function Skills() {
  document.title = "Skills";

  return (
      <section
        id="skills"
        className="px-4 py-20 md:py-20 md:px-16 bg-transparent text-gray-900 overflow-hidden"
      >
        <motion.div
          className="max-w-6xl mx-auto text-center space-y-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          <h2 className="text-4xl font-extrabold text-red-600">My <span>Skills</span></h2>

          <div className="space-y-16">
            {skillsData.map((category, idx) => (
              <motion.div key={idx} variants={itemVariants}>
                <h3 className="text-3xl font-semibold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-pink-500">
                  {category.category}
                </h3>
                <motion.div
                  className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-12 justify-items-center"
                  variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
                >
                  {category.skills.map((skill, index) => (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      whileHover={{ scale: 1.1, rotate: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="group relative cursor-default rounded-xl p-6 flex flex-col items-center space-y-4
                        shadow-md hover:shadow-2xl transition-transform duration-300 bg-white text-gray-900 hover:ring-2 hover:ring-red-400"
                    >
                      <motion.div
                        className="text-6xl transition-colors duration-300 group-hover:text-red-500"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: index * 0.1 }}
                      >
                        {skill.icon}
                      </motion.div>
                      <p className="text-xl font-semibold">{skill.name}</p>

                      <div className="w-full h-2 rounded-full bg-gray-200">
                        <motion.div
                          className="h-2 rounded-full bg-red-500"
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.proficiency}%` }}
                          transition={{ duration: 1 }}
                        />
                      </div>

                      <div
                        className="absolute bottom-full mb-3 w-48 px-3 py-2 rounded-md text-sm text-white bg-black bg-opacity-75
                          opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-300"
                        style={{ whiteSpace: "normal" }}
                      >
                        {skill.description}
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
  );
}
