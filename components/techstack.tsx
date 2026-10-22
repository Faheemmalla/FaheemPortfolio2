"use client";

import { useState } from "react";
import {
  FaChevronUp,
  FaChevronDown,
  FaRobot,
  FaPlug,
  FaClipboardCheck,
  FaDatabase,
  FaJava,
  FaDocker,
  FaGitAlt,
  FaGithub,
  FaAws,
  FaBrain,
  FaNetworkWired,
} from "react-icons/fa";
import { BsStars } from "react-icons/bs";
import { RiFileSearchLine } from "react-icons/ri";
import {
  SiPython,
  SiCplusplus,
  SiFastapi,
  SiTensorflow,
  SiPytorch,
  SiScikitlearn,
} from "react-icons/si";
import { IconType } from "react-icons";

interface TechCategory {
  title: string;
  skills: string[];
}

const TechStack = () => {
  const categories: TechCategory[] = [
    {
      title: "AI Engineering",
      skills: [
        "LLM Evals",
        "MCP",
        "AI Agents",
        "Generative AI",
        "RAG",
        "Vector Databases",
      ],
    },
    {
      title: "Machine Learning",
      skills: [
        "Machine Learning",
        "Deep Learning",
        "Scikit-learn",
        "TensorFlow",
        "PyTorch",
      ],
    },
    {
      title: "Programming Languages",
      skills: ["Python", "Java", "C++"],
    },
    {
      title: "Backend",
      skills: ["FastAPI", "Docker"],
    },
    {
      title: "Developer Tools",
      skills: ["Git", "GitHub"],
    },
    {
      title: "Cloud",
      skills: ["AWS"],
    },
  ];

  const icons: Record<string, IconType> = {
    "LLM Evals": FaClipboardCheck,
    MCP: FaPlug,
    "AI Agents": FaRobot,
    "Generative AI": BsStars,
    RAG: RiFileSearchLine,
    "Vector Databases": FaDatabase,
    "Machine Learning": FaBrain,
    "Scikit-learn": SiScikitlearn,
    TensorFlow: SiTensorflow,
    PyTorch: SiPytorch,
    Python: SiPython,
    Java: FaJava,
    "C++": SiCplusplus,
    FastAPI: SiFastapi,
    Docker: FaDocker,
    Git: FaGitAlt,
    GitHub: FaGithub,
    AWS: FaAws,
  };

  const [isOpen, setIsOpen] = useState(false);

  const visibleCategories = isOpen ? categories : [categories[0]];

  return (
    <div className="mx-auto w-full max-w-7xl px-4 md:px-8">
      <div className="flex items-center mb-4">
        <h3 className="text-xl md:text-4xl text-black">Tech Stack</h3>
        <button
          aria-label={isOpen ? "Collapse tech list" : "Expand tech list"}
          onClick={() => setIsOpen((s) => !s)}
          className="ml-3 px-3 py-2 border-0 text-black cursor-pointer"
        >
          {isOpen ? <FaChevronUp /> : <FaChevronDown />}
        </button>
      </div>

      <div className="space-y-6">
        {visibleCategories.map((category) => (
          <div key={category.title}>
            <h4 className="text-sm md:text-base font-semibold text-neutral-800 dark:text-neutral-200 mb-3 font-mono">
              {category.title}
            </h4>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((t) => {
                const Icon = icons[t];
                return (
                  <button
                    key={t}
                    className="inline-flex items-center gap-2 px-3 py-2 border-2 border-black text-black rounded-full hover:shadow-md transition"
                    aria-label={t}
                    title={t}
                  >
                    {Icon && <Icon className="text-lg shrink-0" />}
                    <span className="text-xs lg:text-sm font-mono">{t}</span>
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;
