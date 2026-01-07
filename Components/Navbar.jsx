"use client";

import { useEffect, useState } from "react";
import {
  HiHome,
  HiInformationCircle,
  HiBriefcase,
  HiMenuAlt3,
  HiX,
} from "react-icons/hi";
import { MdAddIcCall } from "react-icons/md";
import { FaCode } from "react-icons/fa";
import Container from "./Container";

const navLinks = [
  { id: "home", label: "Home", icon: <HiHome /> },
  { id: "about", label: "About", icon: <HiInformationCircle /> },
  { id: "projects", label: "Projects", icon: <HiBriefcase /> },
  { id: "contact", label: "Contact", icon: <MdAddIcCall /> },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Scroll detect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      navLinks.forEach((link) => {
        const section = document.getElementById(link.id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveSection(link.id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollTo = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-sm" : "bg-transparent"
      }`}
    >
      <Container>
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div
            onClick={() => handleScrollTo("home")}
            className="flex items-center gap-2 cursor-pointer"
          >
            <FaCode
              className={`text-4xl ${
                scrolled ? "text-[#21BF73]" : "text-black"
              }`}
            />
            <h1 className="text-xl font-bold">SHORIF</h1>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleScrollTo(link.id)}
                className={`nav-link transition-all ${
                  activeSection === link.id
                    ? "text-[#21BF73] font-semibold"
                    : scrolled
                    ? "text-gray-700"
                    : "text-black"
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Mobile Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-3xl"
          >
            {menuOpen ? <HiX /> : <HiMenuAlt3 />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-300 overflow-hidden ${
            menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="bg-white rounded-xl shadow-lg p-5 space-y-4 mb-4">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleScrollTo(link.id)}
                className={`block w-full text-left font-medium ${
                  activeSection === link.id
                    ? "text-[#21BF73]"
                    : "text-gray-700"
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      </Container>
    </header>
  );
}
