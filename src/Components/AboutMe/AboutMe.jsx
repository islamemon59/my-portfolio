/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";

const slideDownVariants = {
  hidden: { opacity: 0, y: -80 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: "easeOut" },
  },
};

const AboutMe = () => {
  return (
    <section id="about" className="py-20 px-6 md:px-16 bg-white overflow-hidden">
      <motion.div
        className="max-w-4xl mx-auto text-center space-y-10 p-8 rounded-lg"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={slideDownVariants}
      >
        <motion.h2
          className="text-4xl font-extrabold text-[#E63946] mb-6 relative inline-block"
          variants={slideDownVariants}
        >
          About Me
        </motion.h2>

        <motion.p
          className="text-gray-800 text-lg leading-relaxed"
          variants={slideDownVariants}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        >
          Hello! I'm{" "}
          <span className="text-[#E63946] font-semibold">Emon Hossain</span>, a
          passionate MERN Stack Developer from Bangladesh with a love for
          building clean, responsive, and dynamic web applications. With a focus
          on front-end technologies like{" "}
          <span className="font-medium text-[#E63946]">React.js</span> and
          powerful back-end tools like{" "}
          <span className="font-medium text-[#E63946]">Node.js & Express</span>,
          I enjoy turning complex ideas into user-friendly products.
        </motion.p>

        <motion.p
          className="text-gray-800 text-lg leading-relaxed"
          variants={slideDownVariants}
          transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
        >
          Over the past months, I’ve worked on multiple projects — from parcel
          delivery systems to service provider platforms — sharpening my skills
          in{" "}
          <span className="font-medium text-[#E63946]">
            MongoDB, Firebase Authentication, and modern React libraries
          </span>
          . I’m always eager to learn new technologies and contribute to open
          source.
        </motion.p>

        <motion.p
          className="text-gray-800 text-lg leading-relaxed"
          variants={slideDownVariants}
          transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
        >
          Beyond coding, I love exploring new tech trends and collaborating with
          creative teams to bring ideas to life. Let's build something amazing
          together!
        </motion.p>
      </motion.div>
    </section>
  );
};

export default AboutMe;
