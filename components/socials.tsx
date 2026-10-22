"use client";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import { SiLeetcode } from "react-icons/si";
import { IconType } from "react-icons";

interface SocialItem {
  name: string;
  icon: IconType;
  link: string;
  target?: string;
  rel?: string;
  ariaLabel: string;
}

const Socials = () => {
  const socials: SocialItem[] = [
    {
      name: "GitHub",
      icon: FaGithub,
      link: "https://github.com/Faheemmalla",
      target: "_blank",
      rel: "noopener noreferrer",
      ariaLabel: "GitHub Profile",
    },
    {
      name: "LinkedIn",
      icon: FaLinkedin,
      link: "https://www.linkedin.com/in/faheemyousufmalla/",
      target: "_blank",
      rel: "noopener noreferrer",
      ariaLabel: "LinkedIn Profile",
    },
    {
      name: "Email",
      icon: CgMail,
      link: "mailto:faheemyousufmalla@gmail.com",
      ariaLabel: "Send Email",
    },
    {
      name: "LeetCode",
      icon: SiLeetcode,
      link: "https://leetcode.com/u/kanyewest69/",
      target: "_blank",
      rel: "noopener noreferrer",
      ariaLabel: "LeetCode Profile",
    },
  ];

  return (
    <div className="mt-1">
      <div className="flex items-center gap-5">
        {socials.map((social) => {
          const Icon = social.icon;

          return (
            <a
              key={social.name}
              href={social.link}
              target={social.target}
              rel={social.rel}
              aria-label={social.ariaLabel}
              title={social.name}
              className="text-black text-3xl hover:opacity-75 transition-opacity"
            >
              <Icon />
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Socials;