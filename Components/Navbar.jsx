"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
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
  { href: "/", label: "Home", icon: <HiHome /> },
  { href: "/about", label: "About", icon: <HiInformationCircle /> },
  { href: "/projects", label: "Projects", icon: <HiBriefcase /> },
  { href: "/contact", label: "Contact", icon: <MdAddIcCall /> },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-xs"
          : "bg-transparent"
      }`}
    >
      <Container>
        {/* Top Bar */}
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <FaCode
              className={`text-4xl transition-colors duration-300 ${
                scrolled ? "text-[#21BF73]" : "text-white"
              }`}
            />
            <h1
              className={`text-xl font-bold transition-colors duration-300 ${
                scrolled ? "text-gray-900" : "text-white"
              }`}
            >
              SHORIF
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link, index) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={index}
                  href={link.href}
                  className={`nav-link transition-colors duration-300 ${
                    scrolled ? "text-gray-700" : "text-white"
                  } ${isActive ? "active" : ""}`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`md:hidden text-3xl transition-colors duration-300 ${
              scrolled ? "text-gray-800" : "text-white"
            }`}
          >
            {menuOpen ? <HiX /> : <HiMenuAlt3 />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="bg-white rounded-xl shadow-lg p-5 space-y-4 mb-4">
            {navLinks.map((link, index) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={index}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`block font-medium transition-colors ${
                    isActive
                      ? "text-[#21BF73]"
                      : "text-gray-700 hover:text-[#21BF73]"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        </div>
      </Container>
    </header>
  );
}
