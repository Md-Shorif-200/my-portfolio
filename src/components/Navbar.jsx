"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Container from "./Container";
import NavLinks from "./common/NavLinks";
import Logo from "./common/Logo";
import { Moon, Sun, Menu, X } from "lucide-react";

const sections = [
  "home",
  "about",
  "skills",
  "experience",
  "featured_project",
  // "contact"
 
];

const mobileNavLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#featured_project"},
  // { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [currentSection, setCurrentSection] = useState("home");
  const dropdownRef = useRef(null);

  // Scroll detection for navbar background
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll spy – active section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setCurrentSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-40% 0px -50% 0px",
        threshold: 0,
      }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Close mobile menu on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setMobileOpen(false);
      }
    };
    if (mobileOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [mobileOpen]);

  const handleMobileClick = (href) => {
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setMobileOpen(false);
  };

  return (
    <header className="sticky top-0 left-0 right-0 z-50 pt-3">
      <Container>
        <div ref={dropdownRef} className="relative">
          <nav
            className={`
              flex items-center justify-between gap-4
              px-4 py-2.5 rounded-2xl
              transition-all duration-400 ease-out
              ${
                isScrolled || mobileOpen
                  ? "bg-white/85 dark:bg-zinc-950/85 backdrop-blur-xl border border-zinc-200/70 dark:border-zinc-800/70 shadow-lg shadow-zinc-900/5 dark:shadow-black/20"
                  : "bg-transparent border border-transparent"
              }
              ${mobileOpen ? "rounded-b-none border-b-0" : ""}
            `}
          >
            {/* Logo */}
            <Link href="/#home" className="flex-shrink-0">
              <Logo />
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex flex-1 justify-center">
              <NavLinks currentSection={currentSection} />
            </div>

            {/* Right side */}
            <div className="flex items-center gap-1.5">
              {/* Theme Toggle */}
              <button
                aria-label="Toggle theme"
                className="
                  relative flex items-center justify-center
                  w-9 h-9 rounded-xl
                  text-zinc-500 dark:text-zinc-400
                  hover:text-zinc-900 dark:hover:text-white
                  hover:bg-zinc-100 dark:hover:bg-zinc-800/70
                  transition-all duration-200 active:scale-95
                "
              >
                <Sun
                  size={18}
                  className="absolute transition-all duration-300 rotate-0 scale-100 dark:-rotate-90 dark:scale-0"
                />
                <Moon
                  size={18}
                  className="absolute transition-all duration-300 rotate-90 scale-0 dark:rotate-0 dark:scale-100"
                />
              </button>

              {/* Hamburger */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Toggle menu"
                className="
                  lg:hidden relative flex items-center justify-center
                  w-9 h-9 rounded-xl
                  text-zinc-600 dark:text-zinc-300
                  hover:bg-zinc-100 dark:hover:bg-zinc-800/70
                  transition-all duration-200 active:scale-95
                "
              >
                <Menu
                  size={18}
                  className={`absolute transition-all duration-300 ${
                    mobileOpen
                      ? "opacity-0 rotate-90 scale-50"
                      : "opacity-100 rotate-0 scale-100"
                  }`}
                />
                <X
                  size={18}
                  className={`absolute transition-all duration-300 ${
                    mobileOpen
                      ? "opacity-100 rotate-0 scale-100"
                      : "opacity-0 -rotate-90 scale-50"
                  }`}
                />
              </button>
            </div>
          </nav>

          {/* Mobile Dropdown */}
          <div
            className={`
              lg:hidden absolute top-full left-0 right-0
              transition-all duration-300 ease-out
              ${mobileOpen
                ? "opacity-100 pointer-events-auto translate-y-0"
                : "opacity-0 pointer-events-none -translate-y-2"
              }
            `}
          >
            <div className="
              bg-white/90 dark:bg-zinc-950/90 backdrop-blur-xl
              border border-t-0 border-zinc-200/70 dark:border-zinc-800/70
              rounded-b-2xl shadow-xl shadow-zinc-900/5 dark:shadow-black/30
            ">
              <div className="flex flex-col p-2.5 gap-0.5">
                {mobileNavLinks.map((link, i) => {
                  const isActive = currentSection === link.href.replace("#", "");

                  return (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        handleMobileClick(link.href);
                      }}
                      style={{
                        transitionDelay: mobileOpen ? `${i * 40}ms` : "0ms",
                      }}
                      className={`
                        flex items-center justify-between
                        px-4 py-3 rounded-xl text-sm font-medium
                        transition-all duration-300
                        ${mobileOpen
                          ? "translate-y-0 opacity-100"
                          : "translate-y-1 opacity-0"
                        }
                        ${
                          isActive
                            ? "bg-zinc-900 text-white dark:bg-white dark:text-zinc-900"
                            : "text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800/50"
                        }
                      `}
                    >
                      <span>{link.label}</span>
                      {isActive && (
                        <span className="w-1.5 h-1.5 rounded-full bg-current" />
                      )}
                    </a>
                  );
                })}
              </div>

              {/* Footer */}
              <div className="
                flex items-center justify-between
                px-5 py-3.5 border-t border-zinc-100 dark:border-zinc-800/60
              ">
                <p className="text-[11px] text-zinc-400 dark:text-zinc-600 tracking-widest uppercase font-medium">
                  Portfolio
                </p>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-[11px] text-zinc-400 dark:text-zinc-600 font-medium">
                    Available for work
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Navbar;