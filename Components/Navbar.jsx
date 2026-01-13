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
  { id: "experience", label: "Experience", icon: <HiBriefcase /> },
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
        <div className="flex items-center justify-between py-4 ">
          {/* Logo */}
          <div
            onClick={() => handleScrollTo("home")}
            className="flex items-center gap-2 cursor-pointer bg-black/90 px-2 py-1 rounded-tr-2xl rounded-bl-2xl"
          >
            <FaCode
              className='text-4xl text-[#21BF73] font-semibold'
            />
            
            <h1 className="text-xl font-bold text-white"> SHOR<span className="text-[#21BF73]">IF</span> </h1>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleScrollTo(link.id)}
                className={`nav-link transition-all cursor-pointer ${
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
            onClick={() => setMenuOpen(true)}
            className="md:hidden text-3xl cursor-pointer"
          >
            <HiMenuAlt3 />
          </button>
        </div>
      </Container>

      {/* ================= Mobile Slide Menu ================= */}
      <div
        className={`fixed inset-0 z-[999] md:hidden transition-all duration-300 ${
          menuOpen ? "visible" : "invisible"
        }`}
      >
        {/* Background Overlay (20%) */}
        <div
          onClick={() => setMenuOpen(false)}
          className={`absolute inset-0 bg-black/40 transition-opacity duration-300 ${
            menuOpen ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* Drawer (80%) */}
        <div
          className={`absolute top-0 left-0 h-full w-[80%] bg-white shadow-xl
          transform transition-transform duration-300 ${
            menuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {/* Drawer Header */}
          <div className="flex items-center justify-between px-5 py-4 border-b">
            <div className="flex items-center gap-2">
              <FaCode className="text-3xl text-[#21BF73]" />
              <h2 className="text-lg font-bold">SHORIF</h2>
            </div>
            <button
              onClick={() => setMenuOpen(false)}
              className="text-2xl cursor-pointer"
            >
              <HiX />
            </button>
          </div>

          {/* Nav Links */}
          <div className="p-5 space-y-5">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleScrollTo(link.id)}
                className={`flex items-center gap-3 w-full text-left text-lg font-medium transition cursor-pointer  hover:text-[#21BF73] transition-all ${
                  activeSection === link.id
                    ? "text-[#21BF73]"
                    : "text-gray-700"
                }`}
              >
                <span className="text-xl">{link.icon}</span>
                {link.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
