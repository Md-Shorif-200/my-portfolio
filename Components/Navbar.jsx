"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  HiHome,
  HiInformationCircle,
  HiBriefcase,
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
  const pathname = usePathname(); // বর্তমান রুট

  return (
    <>
      {/* Desktop Navbar */}
      <header className="hidden md:block fixed top-0 p-3 left-0 w-full z-50 backdrop-blur-md">
        <Container>
          <div className="relative grid grid-cols-3 bg-[#141C27]/80 items-center py-3 rounded-lg px-6">
            
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <FaCode className="primary_color text-5xl" />
              <h1 className="text-2xl font-bold text-white capitalize">SHORIF</h1>
            </Link>

            {/* Nav Links */}
            <nav className="flex gap-8">
              {navLinks.map((link, index) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={index}
                    href={link.href}
                    className={`nav-link text-[18px] text-white/90 capitalize transition-colors ${
                      isActive ? "active" : ""
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            <div>{/* Future button or action */}</div>
          </div>
        </Container>
      </header>

      {/* Mobile Bottom Navbar */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full bg-[#141C27]/95 text-white border-t border-gray-800 flex justify-around items-center py-2 z-50 backdrop-blur-sm">
        {navLinks.map((link, index) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={index}
              href={link.href}
              className={`flex flex-col items-center justify-center text-sm relative nav-link ${
                isActive ? "active" : ""
              }`}
            >
              {link.icon}
              <span>{link.label}</span>
            </Link>
          );
        })}
      </nav>
    </>
  );
}
