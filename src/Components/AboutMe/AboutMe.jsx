/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";

const AboutMe = () => {
  return (
    <section id="about" className="py-16 px-6 md:px-16 bg-white">
      <motion.div
        className="max-w-4xl mx-auto text-center space-y-6"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-black mb-4"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          About Me
        </motion.h2>

        <motion.p
          className="text-gray-700 text-[17px] leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        >
          Hello! I'm{" "}
          <span className="text-[#E63946] font-semibold">Mahmudul Hasan</span>,
          a passionate MERN Stack Developer from Bangladesh with a love for
          building clean, responsive and dynamic web applications. With a focus
          on front-end technologies like{" "}
          <span className="font-medium">React.js</span> and powerful back-end
          tools like <span className="font-medium">Node.js & Express</span>, I
          enjoy turning complex ideas into user-friendly products.
        </motion.p>

        <motion.p
          className="text-gray-700 text-[17px] leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
        >
          Over the past months, I’ve worked on multiple projects — from parcel
          delivery systems to service provider platforms — sharpening my skills
          in
          <span className="font-medium">
            {" "}
            MongoDB, Firebase Authentication, and modern React libraries
          </span>
          . I’m always eager to learn new technologies and contribute to open
          source.
        </motion.p>

        <motion.p
          className="text-gray-700 text-[17px] leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
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
