/* eslint-disable no-unused-vars */
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
import {
  CardBody,
  CardContainer,
  CardItem,
} from "../../../Components/ui/3d-card";

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
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.4 }}
    >
      <CardContainer className="inter-var">
        <CardBody className="bg-base-100 h-[550px] relative group/card border dark:border-white/[0.2] border-black/[0.1] w-full rounded-xl p-6 shadow-lg flex flex-col">
          {/* Image at the top */}
          <CardItem translateZ={100} className="w-full">
            <img
              src={project.images[0]}
              height="400"
              width="600"
              className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
              alt={project.name}
            />
          </CardItem>

          {/* All Text & Info at bottom */}
          <div className="flex flex-col justify-end flex-grow">
            <CardItem
              translateZ={50}
              className="text-2xl font-bold text-[#E63946] mt-4"
            >
              {project.name}
            </CardItem>

            <CardItem
              as="p"
              translateZ={40}
              className="text-sm text-base-content/80 mt-2 line-clamp-4"
            >
              {project.description}
            </CardItem>

            <div className="flex flex-wrap gap-2 mt-4">
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

            <div className="flex justify-between items-center mt-6">
              <Link
                translateZ={20}
                as={Link}
                to={`/projects/${project.id}`}
                className="px-4 py-2 rounded-xl text-xs font-normal text-[#E63946] hover:text-white"
              >
                View Details →
              </Link>

              <CardItem
                translateZ={20}
                as="a"
                href={project.githubLink}
                target="_blank"
                className="text-gray-500 hover:text-black"
                aria-label="GitHub Repository"
              >
                <FaGithub size={20} />
              </CardItem>
            </div>
          </div>
        </CardBody>
      </CardContainer>
    </motion.div>
  );
}
