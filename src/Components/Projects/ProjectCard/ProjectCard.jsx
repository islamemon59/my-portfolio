/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import { FaGithub } from "react-icons/fa";
import { FaReact, FaNodeJs } from "react-icons/fa";
import {
  SiTailwindcss,
  SiFirebase,
  SiExpress,
  SiMongodb,
} from "react-icons/si";

const icons = {
  FaReact,
  FaNodeJs,
  SiTailwindcss,
  SiFirebase,
  SiExpress,
  SiMongodb,
};

const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { ease: "easeOut", duration: 0.8 } },
};

export default function ProjectCard({ project }) {
  return (
    <motion.div
      className="flex flex-col md:flex-row bg-base rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
    >
      {/* Left: Image slider */}
      <div className="md:w-1/2 w-full h-64 md:h-auto">
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          className="h-full"
          style={{ borderRadius: "1rem 0 0 1rem", overflow: "hidden" }}
        >
          {project.images.map((img, idx) => (
            <SwiperSlide key={idx}>
              <img
                src={img}
                alt={`${project.name} image ${idx + 1}`}
                className="object-cover w-full h-64 md:h-full"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Right: Project info */}
      <div className="md:w-1/2 w-full p-6 flex flex-col">
        <h3 className="text-2xl font-bold text-[#E63946] mb-3">
          {project.name}
        </h3>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 5).map((tech, idx) => {
            const IconComponent = icons[tech.icon];
            return IconComponent ? (
              <div
                key={idx}
                className="flex items-center gap-1 bg-[#E63946]/20 text-[#E63946] rounded-full px-3 py-1 text-xs font-medium select-none"
                title={tech.name}
              >
                <IconComponent size={16} />
                {tech.name}
              </div>
            ) : null;
          })}
        </div>

        <p className="text-base-content/80 flex-grow mb-6 line-clamp-5">
          {project.description}
        </p>

        <div className="flex justify-between items-center mt-auto">
          <Link
            to={`/projects/${project.id}`}
            className="text-[#E63946] hover:text-black font-semibold"
          >
            View Details
          </Link>
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-black"
            aria-label="GitHub Repository"
          >
            <FaGithub size={24} />
          </a>
        </div>
      </div>
    </motion.div>
  );
}
