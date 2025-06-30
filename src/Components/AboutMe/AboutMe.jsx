/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const slideDownVariants = {
  hidden: { opacity: 0, y: -60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.2, ease: "easeOut" },
  },
};

const AboutMe = () => {

  document.title = "About";

  return (
      <section
        id="about"
        className="px-4 py-20 md:py-24 md:px-16 text-black w-full bg-transparent"
      >
        <motion.div
          className="max-w-4xl mx-auto text-center space-y-8 bg-white/70 backdrop-blur-sm rounded-lg p-6 md:p-10 shadow-lg"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={slideDownVariants}
        >
          <motion.h2
            className="text-4xl font-extrabold text-[#E63946] mb-4"
            variants={slideDownVariants}
          >
            About Me
          </motion.h2>

          <motion.p
            className="text-gray-700 text-lg leading-relaxed"
            variants={slideDownVariants}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          >
            Hi! I'm{" "}
            <span className="text-[#E63946] font-semibold">Emon Hossain</span>, a
            passionate MERN Stack Developer from Bangladesh. I love crafting clean,
            responsive, and dynamic web applications with{" "}
            <span className="font-medium text-[#E63946]">React.js</span> on the
            frontend and{" "}
            <span className="font-medium text-[#E63946]">Node.js & Express</span> on
            the backend.
          </motion.p>

          <motion.p
            className="text-gray-700 text-lg leading-relaxed"
            variants={slideDownVariants}
            transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
          >
            Over the months, I’ve built projects from parcel delivery systems to
            service provider platforms, mastering{" "}
            <span className="font-medium text-[#E63946]">
              MongoDB, Firebase Auth, and modern React libraries
            </span>. I love learning and exploring new tech every day.
          </motion.p>

          <motion.p
            className="text-gray-700 text-lg leading-relaxed"
            variants={slideDownVariants}
            transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
          >
            Beyond code, I'm into tech trends, open source, and building ideas with
            creative teams. Let's make something awesome together!
          </motion.p>
        </motion.div>
      </section>
  );
};

export default AboutMe;
