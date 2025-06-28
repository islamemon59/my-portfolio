/* eslint-disable no-unused-vars */
import { FaFacebookF, FaTwitter, FaGithub } from "react-icons/fa";
import { ReactTyped } from "react-typed";
import { motion } from "framer-motion";

export default function Banner() {
  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:pt-0 pt-16 bg-white max-w-6xl mx-auto">
      {/* Left */}
      <motion.div
        className="flex-1 text-center md:text-left space-y-6 md:space-y-8 mt-12 md:mt-0"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className="text-4xl md:text-6xl font-bold text-black">
          Emon Hossain
        </h1>

        <h2 className="text-3xl md:text-5xl font-bold text-[#E63946]">
          <ReactTyped
            strings={[
              "MERN Developer",
              "Front-End Developer",
              "React.js Developer",
            ]}
            typeSpeed={80}
            backSpeed={40}
            loop
          />
        </h2>

        <div className="flex justify-center md:justify-start space-x-4">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#3b5998] text-2xl hover:scale-110 transition"
          >
            <FaFacebookF size={30} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#00acee] text-2xl hover:scale-110 transition"
          >
            <FaTwitter size={30} />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black text-2xl hover:scale-110 transition"
          >
            <FaGithub size={30} />
          </a>
        </div>

        <a
          href="/resume.pdf"
          download
          className="inline-block mt-4 bg-[#E63946] text-white px-6 py-2 rounded hover:bg-black transition"
        >
          Download Resume
        </a>
      </motion.div>

      {/* Right */}
      <motion.div
        className="flex-1 mt-10 md:mt-0 flex justify-center md:justify-end"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
      >
        <div className="w-52 h-52 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-[#E63946] shadow-lg">
          <img
            src="/myphoto.jpg" // replace with actual path
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
      </motion.div>
    </section>
  );
}
