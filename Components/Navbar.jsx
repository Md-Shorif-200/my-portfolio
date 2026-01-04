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
  const pathname = usePathname(); 

  return (
    <>
      {/* Desktop Navbar */}
      <header className="hidden md:block fixed top-0 px-3 py-1  left-0 w-full z-50 ">
        <Container>
          <div className="relative flex justify-between items-center py-3 rounded-lg px-0">
            
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <FaCode className="primary_color text-5xl" />
              <h1 className="text-2xl font-bold text-white capitalize">SHORIF</h1>
            </Link>

               <div className="flex items-center gap-x-28">
                  {/* Nav Links */}
            <nav className="flex gap-8">
              {navLinks.map((link, index) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={index}
                    href={link.href}
                    className={`nav-link  ${
                      isActive ? "active" : ""
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

              <div>
                <button type="button">Dark Mode</button>
              </div>
               </div>
          </div>
        </Container>
      </header>

      {/* Mobile Bottom Navbar */}
      {/* <nav className="md:hidden fixed bottom-0 left-0 w-full text-white border-t flex justify-around items-center py-2 z-50 backdrop-blur-sm">
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
      </nav> */}
    </>
  );
}
