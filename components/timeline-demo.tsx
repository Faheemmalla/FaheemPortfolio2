"use client";

import React, { useState } from "react";
import { Timeline } from "@/components/ui/timeline";

function ExperienceCard({ 
  title, 
  role, 
  location,
  details, 
  isOpen, 
  onToggle 
}: { 
  title: string;
  role: string;
  location?: string;
  details: React.ReactNode;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div 
      onClick={onToggle}
      className="bg-white dark:bg-neutral-900 p-6 md:p-8 rounded-2xl shadow-sm hover:shadow-xl border border-neutral-200 dark:border-neutral-800 transition-all duration-300 hover:-translate-y-1 w-full group cursor-pointer"
    >
      <h3 className="text-2xl md:text-3xl font-bold text-neutral-800 dark:text-neutral-100 mb-2">
        {title}
      </h3>
      <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 font-medium">
        {role}
      </p>
      {location && (
        <p className="text-sm font-mono text-neutral-500 dark:text-neutral-400 mt-1">
          {location}
        </p>
      )}
      <div 
        className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100 mt-4' : 'grid-rows-[0fr] opacity-0'}`}
      >
        <div className="overflow-hidden">
          <div className="text-neutral-600 dark:text-neutral-400 text-base space-y-3 leading-relaxed">
            {details}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function TimelineDemo() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const data = [
    {
      title: "April 2026 – June 2026",
      content: (
        <ExperienceCard 
          title="Koshur Scientist Pvt. Ltd."
          role="Artificial Intelligence Intern"
          location="Srinagar, Jammu & Kashmir, India · Remote"
          details={
            <>
              <p>
                Contributed to the development of an AI-powered personalized learning system for an educational platform. The system analyzes student learning behaviour to help personalize the learning experience.
              </p>
              <ul className="list-disc list-inside space-y-1.5 pt-1">
                <li>
                  Worked on analyzing learning signals such as video pauses, time spent on content, and question-answer interactions.
                </li>
                <li>
                  Contributed to understanding student engagement and identifying potential learning difficulties from interaction patterns.
                </li>
                <li>
                  Helped develop AI-driven personalization approaches to adapt the learning experience to individual student needs.
                </li>
              </ul>
            </>
          }
          isOpen={openIndex === 0}
          onToggle={() => handleToggle(0)}
        />
      ),
    },
  ];

  return (
    <div className="relative w-full overflow-clip">
      <Timeline data={data} />
    </div>
  );
}
