// src/pages/ProjectDetails.jsx
import React from "react";
import { useParams, Link } from "react-router";
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
    <div className="max-w-4xl mx-auto py-16 px-6 space-y-6">
      <img
        src={project.image}
        alt={project.name}
        className="w-full h-64 object-cover rounded-lg shadow"
      />

      <h1 className="text-3xl md:text-4xl font-bold border-b-2 border-[#E63946] inline-block pb-1">
        {project.name}
      </h1>
      <p className="text-gray-700">{project.description}</p>

      {/* Tech Stack */}
      <div>
        <h4 className="flex items-center gap-2 text-lg font-semibold mb-2">
          <FaTools /> Technology Stack
        </h4>
        <ul className="flex flex-wrap gap-2">
          {project.technologies.map((tech, idx) => {
            const IconComponent = icons[tech.icon];
            return (
              <li
                key={idx}
                className="flex items-center gap-1 hover:bg-[#E63946] transition-all duration-300 group bg-gray-100 px-2 py-1 rounded text-sm text-black"
              >
                {IconComponent && (
                  <IconComponent
                    size={16}
                    className="text-[#E63946] group-hover:text-black"
                  />
                )}
                {tech.name}
              </li>
            );
          })}
        </ul>
      </div>

      {/* Links */}
      <div>
        <h4 className="flex items-center gap-2 text-lg font-semibold mb-2">
          <FaLink /> Links
        </h4>
        <div className="flex gap-4 flex-wrap">
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-[#E63946] hover:text-black"
          >
            Live Project <FaLink size={12} />
          </a>
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-gray-700 hover:text-[#E63946]"
          >
            GitHub Repo <FaGithub size={14} />
          </a>
        </div>
      </div>

      {/* Challenges */}
      <div>
        <h4 className="flex items-center gap-2 text-lg font-semibold mb-2">
          <FaBullseye /> Challenges Faced
        </h4>
        <p className="text-gray-700">{project.challenges}</p>
      </div>

      {/* Future Plan */}
      <div>
        <h4 className="flex items-center gap-2 text-lg font-semibold mb-2">
          <FaLightbulb /> Future Plan
        </h4>
        <p className="text-gray-700">{project.futurePlan}</p>
      </div>

      <Link
        to="/"
        className="inline-block mt-4 text-[#E63946] hover:text-black"
      >
        ← Back to Projects
      </Link>
    </div>
  );
}
