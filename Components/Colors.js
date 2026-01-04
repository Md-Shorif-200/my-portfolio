/*  
--------------------- navbar ------------------
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
   
      <header className="hidden md:block fixed top-0 p-3 left-0 w-full z-50 backdrop-blur-md">
        <Container>
          <div className="relative grid grid-cols-3 bg-[#141C27]/80 items-center py-3 rounded-lg px-6">
            
           
            <Link href="/" className="flex items-center gap-2">
              <FaCode className="primary_color text-5xl" />
              <h1 className="text-2xl font-bold text-white capitalize">SHORIF</h1>
            </Link>

         
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

          </div>
        </Container>
      </header>

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



------------ baner : // bg-[#02050A]----------------------------------------------------


import { FaEye } from "react-icons/fa";
import Container from "./Container";
import { IoDocumentText } from "react-icons/io5";
import BannerAnimateText from "./BannerAnimateText";
import BannerTyped from "./BannerTyped";
import Link from "next/link";
import Footer from "./Footer";
import Topbar from "./Topbar";
import SocialLinks from "./SocialLinks";


export default function Banner() {
  return (
    <div className=" banner w-full h-[1200px] sm:h-[1100px]  md:h-[750px] xl:min-h-screen  flex items-center     overflow-hidden">
     

      <Container>
        <main className="flex flex-col md:flex-row  gap-6 items-center justify-between relative z-10">
           
          <section className="text-[#F1F5F9] w-full lg:w-[55%] space-y-5">
            <h2 className="text-lg text-[#CBD5E1] tracking-wide capitalize">
              Hi, I&apos;m
            </h2>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl  font-bold capitalize primary_color leading-tight">
              Shorif Uddin Rifat
            </h1>
            

                    <BannerAnimateText/>
           

            <p className="text-base text-[#A2A2A2] leading-relaxed max-w-[550px] text-justify">
              Passionate about building efficient, scalable, and user-friendly
              web applications. I enjoy turning ideas into real-world digital
              experiences with clean code and modern technologies.
            </p>

            <div className="flex flex-wrap gap-6 mt-6 text-sm sm:text-base">
      
              <div className="flex items-center gap-2">
                <span className="inline-block h-2.5 w-2.5 rounded-full bg-[#55E6A5] animate-pulse-small"></span>
                <p className="text-[#F1F5F9]">2+ Years Experience</p>
              </div>

          
              <div className="flex items-center gap-2">
                <span className="inline-block h-2.5 w-2.5 rounded-full bg-[#FF6B6B] animate-pulse-small"></span>
                <p className="text-[#F1F5F9]">20+ Projects</p>
              </div>

         
              <div className="flex items-center gap-2">
                <span className="inline-block h-2.5 w-2.5 rounded-full bg-[#FFD93D] animate-pulse-small"></span>
                <p className="text-[#F1F5F9]">Remote Friendly</p>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row items-center gap-4 mt-8 mb-8 xl:mb-0">
              <Link href='https://drive.google.com/file/d/1sa3l2JMPrL1D2RXmr-njdMWB252Bd64p/view?usp=sharing' className="primary_btn flex items-center gap-3">
                Download Resume
                <IoDocumentText className="text-lg" />
              </Link>
              <Link href='/projects' className="secondary_btn flex items-center gap-3">
                explore my work
                <FaEye className="text-lg" />
              </Link>
            </div>
                  <SocialLinks/>
          </section>

     


          <section className="w-full lg:w-[40%] flex justify-center md:mt-10 ">

                <BannerTyped/>

            {/* <div className="relative">
              <div className="absolute -inset-4 bg-[#55E6A5]/30 rounded-full blur-2xl"></div>
              <img
                src="/assets/profile.png"
                alt="Shorif Uddin Rifat"
                className="relative z-10 w-[250px] sm:w-[300px] lg:w-[350px] rounded-full border-4 border-[#55E6A5]/40 shadow-lg hover:scale-105 transition-all duration-500"
              />
            </div> 
          </section>
               <div className='md:hidden'>
                    <Footer />
               </div>
                  </main>
      </Container>
    </div>
  );
}




*/
