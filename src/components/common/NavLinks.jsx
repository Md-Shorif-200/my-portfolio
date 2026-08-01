"use client";

import {
  House,
  Info,
  GraduationCap,
  Code2,
  Layers,
  Briefcase,
  Mails,
  Sparkles,
} from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home", icon: House },
  { label: "About", href: "#about", icon: Info },
  { label: "Skills", href: "#skills", icon: Sparkles },
  { label: "Experience", href: "#experience", icon: Briefcase },
  { label: "Projects", href: "#featured_project", icon: Layers },
  // { label: "Contact", href: "#contact", icon: Mails },
];

const NavLinks = ({ currentSection = "home", onLinkClick }) => {
  const handleClick = (e, href) => {
    e.preventDefault();
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    onLinkClick?.(id);
  };

  return (
    <div className="flex flex-col lg:flex-row gap-1.5">
      {navLinks.map((link) => {
        const isActive = currentSection === link.href.replace("#", "");
        const Icon = link.icon;

        return (
          <a
            key={link.href}
            href={link.href}
            onClick={(e) => handleClick(e, link.href)}
            className={`
              relative flex items-center gap-1.5
              px-3.5 py-1.5 rounded-full text-sm font-medium
              transition-all duration-300 ease-out
              ${
                isActive
                  ? "bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 shadow-sm"
                  : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800/60"
              }
            `}
          >
            <Icon
              size={14}
              className={`transition-transform duration-300 ${
                isActive ? "scale-110" : "group-hover:scale-110"
              }`}
            />
            <span>{link.label}</span>
          </a>
        );
      })}
    </div>
  );
};

export default NavLinks;