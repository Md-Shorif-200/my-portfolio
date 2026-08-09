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
import Link from "next/link";
// Next.js এর হুক ইমপোর্ট করুন
import { usePathname, useRouter } from "next/navigation"; 

const navLinks = [
  { label: "Home", href: "#home", icon: House },
  { label: "About", href: "#about", icon: Info },
  { label: "Skills", href: "#skills", icon: Sparkles },
  { label: "Experience", href: "#experience", icon: Briefcase },
  { label: "Projects", href: "#featured_project", icon: Layers },
  { label: "Contact", href: "#contact", icon: Mails },
];

const NavLinks = ({ currentSection = "home", onLinkClick }) => {
  const pathname = usePathname(); // বর্তমান রাউট চেক করার জন্য
  const router = useRouter(); // অন্য পেজে পাঠানোর জন্য

  const handleClick = (e, href) => {
    e.preventDefault();
    const id = href.replace("#", "");

    if (pathname === "/") {
      // যদি হোম পেজে থাকে, তবে শুধু স্ক্রল করবে
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    } else {
      // যদি অন্য পেজে থাকে, তবে হোম পেজে রিডাইরেক্ট করবে
      router.push(`/${href}`);
    }
    
    onLinkClick?.(id);
  };

  return (
    <div className="flex flex-col lg:flex-row gap-1.5">
      {navLinks.map((link) => {
        const isActive = currentSection === link.href.replace("#", "");
        const Icon = link.icon;

        return (
        <Link
  key={link.href}
  href={pathname === "/" ? link.href : `/${link.href}`}
  onClick={(e) => handleClick(e, link.href)}
  className={`
    group relative flex items-center gap-1.5
    px-3.5 py-1.5 rounded-full text-[13px] font-medium
    transition-all duration-300 ease-out
    ${
      isActive && pathname === "/"
        ? "bg-ds-primary text-ds-primary-foreground shadow-sm"
        : "text-ds-primary"
    }
  `}
>
  <Icon
    size={14}
    className={`transition-transform duration-300 ${
      isActive && pathname === "/" ? "scale-110" : "group-hover:scale-110"
    }`}
  />
  <span
    className="transition-[letter-spacing] duration-500 ease-out tracking-normal group-hover:tracking-[0.06em]"
  >
    {link.label}
  </span>
</Link>
        );
      })}
    </div>
  );
};

export default NavLinks;