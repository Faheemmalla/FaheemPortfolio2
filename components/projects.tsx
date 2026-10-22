import React from "react";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

type Project = {
  title: string;
  description: string;
  technologies: string[];
  highlight?: string;
  features?: string[];
  github?: string;
  live?: string;
};

const projects: Project[] = [
  {
    title: "DocAI — Agentic Medical AI Assistant",
    description:
      "An agentic medical AI assistant that combines retrieval-augmented generation (RAG), web search, and conversation memory to provide context-aware responses to medical queries.",
    technologies: [
      "Python",
      "LangGraph",
      "OpenAI",
      "Pinecone",
      "Tavily",
      "FastAPI",
      "DeepEval",
    ],
    highlight:
      "Improved evaluation pass rate from 80% to 88% across 25 medical QA test cases through prompt refinement and better evidence grounding. Average GEval score increased from 0.78 to 0.83.",
    github: "https://github.com/Faheemmalla/DocAI",
    live: "https://lnkd.in/gsCju4uj",
  },
  {
    title: "RoadVision",
    description:
      "A deep learning-based road scene segmentation system that performs pixel-level scene understanding using the India Driving Dataset (IDD).",
    technologies: ["Python", "Deep Learning", "ResNet50", "DeepLabV3+"],
    github: "https://github.com/Faheemmalla/RoadVision",
  },
  {
    title: "Intrusion Detection System (IDS)",
    description:
      "A machine learning-based intrusion detection system that classifies network traffic as normal or anomalous using the NSL-KDD dataset.",
    technologies: ["Python", "Random Forest", "FastAPI", "Docker", "Render"],
    features: [
      "Network traffic preprocessing and feature engineering",
      "Random Forest model training and evaluation",
      "FastAPI backend integration",
      "Docker containerization",
      "Cloud deployment using Render",
    ],
    github: "https://github.com/Faheemmalla/IDS-KDD-NSL",
  },
];

function ProjectEntry({
  project,
  isLast,
}: {
  project: Project;
  isLast: boolean;
}) {
  return (
    <div>
      <article className="bg-white dark:bg-neutral-900 p-6 md:p-8 rounded-2xl shadow-sm hover:shadow-xl border border-neutral-200 dark:border-neutral-800 transition-all duration-300 w-full">
        {/* Title */}
        <h3 className="text-2xl md:text-3xl font-bold text-neutral-800 dark:text-neutral-100">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-neutral-600 dark:text-neutral-400 mt-3 leading-relaxed">
          {project.description}
        </p>

        {/* Evaluation highlight */}
        {project.highlight && (
          <p className="mt-3 text-sm text-neutral-500 dark:text-neutral-400 italic border-l-2 border-neutral-300 dark:border-neutral-600 pl-3">
            {project.highlight}
          </p>
        )}

        {/* Features */}
        {project.features && project.features.length > 0 && (
          <ul className="mt-3 list-disc list-inside text-sm text-neutral-600 dark:text-neutral-400 space-y-1">
            {project.features.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>
        )}

        {/* Technology badges */}
        <div className="mt-4 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-xs font-medium rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-700"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="mt-5 flex items-center gap-3">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} GitHub repository`}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-neutral-100 dark:bg-neutral-800 text-sm font-medium text-neutral-800 dark:text-neutral-200 hover:bg-neutral-200 dark:hover:bg-neutral-700 border border-neutral-200 dark:border-neutral-700 transition-colors duration-200"
            >
              <FaGithub className="text-base" />
              GitHub
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} live demo`}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-black text-white text-sm font-medium hover:bg-neutral-800 transition-colors duration-200"
            >
              <FiExternalLink className="text-base" />
              Live Demo
            </a>
          )}
        </div>
      </article>

      {/* Horizontal divider between projects */}
      {!isLast && (
        <hr className="border-t border-neutral-200 dark:border-neutral-800 my-6" />
      )}
    </div>
  );
}

export default function Projects() {
  return (
    <div className="w-full bg-white dark:bg-neutral-950 font-sans px-4 md:px-8">
      <div className="max-w-7xl mx-auto py-12 pb-0">
        <h2 className="text-xl md:text-4xl text-black">Selected Works</h2>
      </div>
      <div className="max-w-7xl mx-auto py-10 pb-20">
        <div className="flex flex-col gap-6">
          {projects.map((p, i) => (
            <ProjectEntry
              key={p.title}
              project={p}
              isLast={i === projects.length - 1}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

