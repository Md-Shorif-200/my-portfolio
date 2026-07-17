"use client";

import Link from "next/link";
import {
  House,
  Info,
  FileText,
  Users,
} from "lucide-react";

// ── Flattened Navigation Links ─────────────────────────────────
const navLinks = [
  { label: "Home", href: "/", icon: House },
  { label: "About", href: "/about", icon: Info },
  { label: "RFQs", href: "/rfqs", icon: FileText },
  { label: "Suppliers", href: "/suppliers", icon: Users },
];

// ───────────────────────────────────────────────────────────────
const NavLinks = ({ currentPath = "/" }) => {

  const renderNavLink = (
    link,
    index
  ) => {
    const isActive = currentPath === link.href;
    const Icon = link.icon;

    return (
      <Link
        key={index}
        href={link.href}
        className={`
          relative px-4 py-1.5 rounded-3xl text-sm font-medium
          transition-all duration-300 ease-out group
          flex flex-col items-start
          ${
            isActive
              ? "text-black bg-[#E7E7E7] border border-black/10 tracking-widest font-semibold"
              : "text-black  hover:-translate-y-0.5 hover:tracking-[1.5px]"
          }
        `}
      >
        {/* Content Wrapper */}
        <span className="flex items-center gap-1.5">
          <Icon
            size={13}
            className={`transition-all duration-300 ${
              isActive ? "scale-110" : "group-hover:scale-110"
            }`}
          />
          <span>{link.label}</span>
        </span>
      </Link>
    );
  };

  return (
    <div className="flex flex-col lg:flex-row gap-2">
      {navLinks.map(renderNavLink)}
    </div>
  );
};

export default NavLinks;