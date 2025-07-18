/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";

const educationData = [
  {
    title: "Bachelor of Arts in English",
    institution: "Shanto-Mariam University",
    semester: "8th",
    result: "CGPA 3.40",
    year: "Expected Graduation: 2026",
  },
  // Add more if needed
];

const containerVariants = {
  hidden: { opacity: 0, y: -60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.15, ease: "easeOut", duration: 1.5 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { ease: "easeOut", duration: 0.6 } },
};

export default function Education() {
  document.title = "Education";

  return (
    <section
      id="education"
      className="px-4 py-20 md:py-20 md:px-16 bg-transparent text-black overflow-hidden"
    >
      <motion.div
        className="max-w-4xl mx-auto space-y-12 overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={containerVariants}
      >
        <motion.h2
          className="text-4xl font-extrabold text-center text-[#E63946]"
          variants={itemVariants}
        >
          Education Timeline
        </motion.h2>

        <div className="flex justify-center items-center">
          <div className="border-l-4 border-[#E63946] ml-6 space-y-10">
            {educationData.map((edu, idx) => (
              <motion.div
                key={idx}
                className="relative pl-6"
                variants={itemVariants}
              >
                {/* Dot */}
                <span className="absolute -left-[14px] top-2 w-6 h-6 rounded-full bg-[#E63946] flex items-center justify-center text-white">
                  <FaGraduationCap size={14} />
                </span>

                <h3 className="text-xl font-semibold text-[#E63946]">
                  {edu.title}
                </h3>
                <p className="text-base-content/80">
                  <span className="font-medium">Institution:</span>{" "}
                  {edu.institution}
                </p>
                <p className="text-base-content/80">
                  <span className="font-medium">Semester:</span> {edu.semester}
                </p>
                <p className="text-base-content/80">
                  <span className="font-medium">Result:</span> {edu.result}
                </p>
                <p className="text-base-content/80">
                  <span className="font-medium">Year:</span> {edu.year}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
