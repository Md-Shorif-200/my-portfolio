// components/Navbar.jsx
"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Container from "./Container";
import NavLinks from "./common/NavLinks";
import Logo from "./common/Logo";
import { Moon, Sun, Menu, X } from "lucide-react";

const mobileNavLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState("/");
  const dropdownRef = useRef(null);

  /* ── Scroll Detection ── */
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* ── Current Path ── */
  useEffect(() => {
    setCurrentPath(window.location.pathname);
  }, []);

  /* ── Close on outside click ── */
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

  return (
    <header className="sticky top-0 left-0 right-0 z-50 pt-4 bg-transparent">
        {/* ── Dot Grid Background with Center Fade ── */}
 <div
  className="absolute inset-0 -z-10 pointer-events-none"
  style={{
    backgroundImage: "radial-gradient(circle, #d4d4d8 1px, transparent 1px)",
    backgroundSize: "24px 24px",
    maskImage:
      "radial-gradient(circle 200px at 50% 50%, transparent 0%, black 100%)",
    WebkitMaskImage:
      "radial-gradient(circle 200px at 50% 50%, transparent 0%, black 100%)",
  }}
/>

      <Container>
        {/* ── Nav Wrapper ── */}
        <div ref={dropdownRef} className="relative">

          {/* ── Main Navbar ── */}
          <nav
            className={`
              flex items-center justify-between gap-6
              px-4 py-3 rounded-2xl
              transition-all duration-500 ease-out
              ${
                isScrolled || mobileOpen
                  ? `
                      bg-white/80 dark:bg-zinc-950/80
                      backdrop-blur-xl backdrop-saturate-150
                      border border-zinc-200/60 dark:border-zinc-800/60
                      shadow-[0_1px_1px_rgba(0,0,0,0.02),0_2px_4px_rgba(0,0,0,0.03),0_8px_16px_rgba(0,0,0,0.05),0_24px_48px_rgba(0,0,0,0.06)]
                      dark:shadow-[0_1px_1px_rgba(0,0,0,0.1),0_2px_4px_rgba(0,0,0,0.12),0_8px_16px_rgba(0,0,0,0.2),0_24px_48px_rgba(0,0,0,0.24)]
                      ${mobileOpen ? "rounded-b-none border-b-0" : ""}
                    `
                  : `
                      bg-transparent border border-transparent shadow-none
                    `
              }
            `}
          >
            {/* Logo */}
            <Link href="/">
              <Logo />
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex flex-1 justify-center">
              <NavLinks currentPath={currentPath} />
            </div>

            {/* Right Controls */}
            <div className="flex items-center gap-2 flex-shrink-0">

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
                  size={20}
                  className="absolute transition-all duration-300 rotate-0 scale-100 dark:-rotate-90 dark:scale-0"
                />
                <Moon
                  size={20}
                  className="absolute transition-all duration-300 rotate-90 scale-0 dark:rotate-0 dark:scale-100"
                />
              </button>

              {/* Hamburger — Mobile only */}
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
                  size={20}
                  className={`
                    absolute transition-all duration-300 ease-out
                    ${mobileOpen
                      ? "opacity-0 rotate-90 scale-50"
                      : "opacity-100 rotate-0 scale-100"
                    }
                  `}
                />
                <X
                  size={20}
                  className={`
                    absolute transition-all duration-300 ease-out
                    ${mobileOpen
                      ? "opacity-100 rotate-0 scale-100"
                      : "opacity-0 -rotate-90 scale-50"
                    }
                  `}
                />
              </button>
            </div>
          </nav>

          {/* ── Mobile Dropdown (Absolute — content push করবে না) ── */}
          <div
            className={`
              lg:hidden
              absolute top-full left-0 right-0
              transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)]
              ${mobileOpen
                ? "opacity-100 pointer-events-auto"
                : "opacity-0 pointer-events-none"
              }
            `}
          >
            <div
              className="
                bg-white/80 dark:bg-zinc-950/80
                backdrop-blur-xl backdrop-saturate-150
                border border-t-0 border-zinc-200/60 dark:border-zinc-800/60
                rounded-b-2xl
                shadow-[0_8px_16px_rgba(0,0,0,0.05),0_24px_48px_rgba(0,0,0,0.06)]
                dark:shadow-[0_8px_16px_rgba(0,0,0,0.2),0_24px_48px_rgba(0,0,0,0.3)]
              "
            >
              {/* Nav Links */}
              <div className="flex flex-col p-3 gap-1">
                {mobileNavLinks.map((link, i) => {
                  const isActive = currentPath === link.href;

                  return (
                    <Link
                      key={i}
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      style={{
                        transitionDelay: mobileOpen ? `${i * 50}ms` : "0ms",
                      }}
                      className={`
                        relative flex items-center justify-between
                        px-4 py-3 rounded-xl
                        text-[14px] font-medium tracking-wide
                        transition-all duration-300 ease-out
                        group
                        ${mobileOpen
                          ? "translate-y-0 opacity-100"
                          : "-translate-y-1 opacity-0"
                        }
                        ${
                          isActive
                            ? "text-zinc-900 dark:text-white bg-zinc-100 dark:bg-zinc-800/80"
                            : "text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-50 dark:hover:bg-zinc-800/40"
                        }
                      `}
                    >
                      <span className="transition-transform duration-300 group-hover:translate-x-1">
                        {link.label}
                      </span>

                      {isActive ? (
                        <span className="w-1.5 h-1.5 rounded-full bg-zinc-900 dark:bg-white" />
                      ) : (
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 14 14"
                          fill="none"
                          className="
                            opacity-0 -translate-x-1
                            group-hover:opacity-100 group-hover:translate-x-0
                            transition-all duration-300
                            text-zinc-400 dark:text-zinc-500
                          "
                        >
                          <path
                            d="M3 7h8M7 3l4 4-4 4"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      )}
                    </Link>
                  );
                })}
              </div>

              {/* Footer Strip */}
              <div
                className="
                  flex items-center justify-between
                  px-5 py-4
                  border-t border-zinc-100 dark:border-zinc-800/60
                "
              >
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