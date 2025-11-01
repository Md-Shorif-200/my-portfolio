"use client";
import Link from "next/link";
import Logo from "@/components/logo";
import { useState } from "react";
import {
  HiHome,
  HiUser,
  HiInformationCircle,
  HiBriefcase,
} from "react-icons/hi";
import Container from "./Container";

const navLinks = [
  { href: "#", label: "Home", icon: <HiHome /> },
  { href: "#", label: "About", icon: <HiInformationCircle /> },
  { href: "#", label: "Projects", icon: <HiBriefcase /> },
  { href: "#", label: "Profile", icon: <HiUser /> },
];

export default function Navbar() {
  const [active, setActive] = useState(0);

  return (
    <>
      {/* Desktop Navbar */}
      <header className="hidden md:block fixed top-0  p-3 left-0 w-full z-50 backdrop-blur-md">
        <Container>
          {/* 2nd div: Navbar content */}
          <div className="relative grid grid-cols-3  bg-[#141C27]/80  items-center py-3 rounded-lg px-6 ">
            {/* Logo */}
            <Link href="/">
              <Logo />
            </Link>

            {/* Nav Links */}
            <nav className="flex gap-8">
              {navLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="text-[#F1F5F9] font-medium hover:text-[#55E6A5] uppercase transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="flex justify-end">
              <button className="primary_btn ">Services</button>
            </div>
          </div>
        </Container>
      </header>

      {/* Mobile Bottom Navbar */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full bg-[#141C27]/95 text-white border-t border-gray-800 flex justify-around items-center py-2 z-50 backdrop-blur-sm">
        {navLinks.map((link, index) => (
          <button
            key={index}
            onClick={() => setActive(index)}
            className={`flex flex-col items-center justify-center text-sm ${
              active === index ? "text-[#55E6A5]" : "text-gray-400"
            }`}
          >
            {link.icon}
            <span>{link.label}</span>
          </button>
        ))}
      </nav>
    </>
  );
}
