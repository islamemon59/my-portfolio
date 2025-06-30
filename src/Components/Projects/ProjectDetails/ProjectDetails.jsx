/* eslint-disable no-unused-vars */
import React from "react";
import { useParams, Link } from "react-router"; // fixed import
import {
  FaReact,
  FaNodeJs,
  FaGithub,
  FaLink,
  FaTools,
  FaLightbulb,
  FaBullseye,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiFirebase,
  SiExpress,
  SiMongodb,
} from "react-icons/si";
import { useLoaderData } from "react-router";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

const icons = {
  FaReact,
  FaNodeJs,
  SiTailwindcss,
  SiFirebase,
  SiExpress,
  SiMongodb,
};

export default function ProjectDetails() {
  const { id } = useParams();
  const projects = useLoaderData();
  const project = projects?.find((p) => p.id === id);

  if (!project) return <p className="text-center py-16">Project not found.</p>;

  return (
    <div className="max-w-4xl mx-auto py-16 px-6 space-y-8 bg-white rounded-xl shadow-md">
      {/* Swiper slider */}
      <div className="overflow-hidden rounded-xl shadow">
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          loop={true}
          className="h-64"
        >
          {project.images.map((img, idx) => (
            <SwiperSlide key={idx}>
              <img
                src={img}
                alt={`${project.name} ${idx}`}
                className="w-full h-64 object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Title & description */}
      <div className="space-y-4">
        <h1 className="text-3xl md:text-4xl font-bold text-[#E63946] border-b-2 border-[#E63946] inline-block pb-1">
          {project.name}
        </h1>
        <p className="text-gray-700 leading-relaxed">{project.description}</p>
      </div>

      {/* Technology Stack */}
      <div>
        <h4 className="flex items-center gap-2 text-lg font-semibold mb-3 text-[#E63946]">
          <FaTools /> Technology Stack
        </h4>
        <ul className="flex flex-wrap gap-3">
          {project.technologies.map((tech, idx) => {
            const IconComponent = icons[tech.icon];
            return (
              <li
                key={idx}
                className="flex items-center gap-1 px-3 py-1 bg-[#E63946]/10 text-[#E63946] rounded-full text-xs hover:bg-[#E63946]/20 transition"
              >
                {IconComponent && <IconComponent size={14} />}
                {tech.name}
              </li>
            );
          })}
        </ul>
      </div>

      {/* Links */}
      <div>
        <h4 className="flex items-center gap-2 text-lg font-semibold mb-3 text-[#E63946]">
          <FaLink /> Links
        </h4>
        <div className="flex flex-wrap gap-4">
          {project.liveLink && (
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-[#E63946] hover:text-black text-sm"
            >
              Live Project <FaLink size={12} />
            </a>
          )}
          {project.githubLink && (
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-gray-700 hover:text-[#E63946] text-sm"
            >
              GitHub Repo <FaGithub size={14} />
            </a>
          )}
        </div>
      </div>

      {/* Challenges */}
      {project.challenges && (
        <div>
          <h4 className="flex items-center gap-2 text-lg font-semibold mb-2 text-[#E63946]">
            <FaBullseye /> Challenges Faced
          </h4>
          <p className="text-gray-700 leading-relaxed">{project.challenges}</p>
        </div>
      )}

      {/* Future Plan */}
      {project.futurePlan && (
        <div>
          <h4 className="flex items-center gap-2 text-lg font-semibold mb-2 text-[#E63946]">
            <FaLightbulb /> Future Plan
          </h4>
          <p className="text-gray-700 leading-relaxed">{project.futurePlan}</p>
        </div>
      )}

      {/* Back button */}
      <div>
        <Link
          to="/#projects"
          className="inline-block mt-4 text-[#E63946] hover:text-black text-sm"
        >
          ← Back to Projects
        </Link>
      </div>
    </div>
  );
}
