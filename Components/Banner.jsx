"use client"
import { FaEye } from "react-icons/fa";
import { SiNextdotjs, SiMongodb } from "react-icons/si";
import { BiLogoTypescript } from "react-icons/bi";
import { IoDocumentText } from "react-icons/io5";
import { MdWorkHistory, MdRocketLaunch } from "react-icons/md";
import { HiCode } from "react-icons/hi";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import Container from "./Container";
import BannerAnimateText from "./BannerAnimateText";
import SocialLinks from "./SocialLinks";
import { TechStack } from "./TechStack";

const shorif_img = "/shorif-img.png";

export default function Banner() {
  return (
    <div className="banner w-full min-h-[900px] md:min-h-[1050px] lg:min-h-[700px]  flex items-center overflow-hidden relative">
      {/* Background color always */}
      <div className="absolute inset-0" style={{ backgroundColor: "#FAF8F6" }} />

      {/* Background image only (responsive) */}
      <div
        className="absolute inset-0 z-0 md:hidden xl:block"
        style={{
          backgroundImage: "url('/portfolio.svg')",
          backgroundSize: "contain",
          backgroundPosition: "left top",
          backgroundRepeat: "no-repeat",
        }}
      />

      <Container>
        <main className="flex flex-col-reverse lg:flex-row items-center justify-between md:gap-6 lg:gap-12 py-10">
          
          {/* ── LEFT CONTENT ── */}
          <section className="relative w-full lg:w-[55%] py-12 rounded-2xl" data-aos="fade-right" data-aos-duration="800">
            <div className="relative z-10">
              <h2 className="text-lg font-semibold tracking-wide text-[#1AA863]" data-aos="fade-up" data-aos-delay="100">
                Hellow, I&apos;m
              </h2>

              <h1 className="text-3xl sm:text-4xl xl:text-5xl font-extrabold text-gray-900 leading-tight my-1" data-aos="fade-up" data-aos-delay="200">
                Shorif Uddin Rifat
              </h1>

              <div data-aos="fade-up" data-aos-delay="300">
                <BannerAnimateText />
              </div>

              {/* Stats */}
              {/* <div className="flex flex-wrap gap-4 mt-3 sm:mt-5">
                {["2+ Years Experience", "20+ Projects Completed"].map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#1AA863] animate-pulse"></span>
                    <p className="text-gray-700 text-sm font-medium">{item}</p>
                  </div>
                ))}
              </div> */}

              {/* Buttons */}
              <div className="banner_buttons flex flex-col sm:flex-row  gap-4 mt-6 md:mt-8" data-aos="fade-up" data-aos-delay="400">
                <Link
                  href="https://drive.google.com/file/d/18AMVdyCwxUkdzvUnS8-iGFJaLOku2Fnj/view?usp=sharing"
                  className="primary_btn flex justify-center items-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download Resume
                  <IoDocumentText className="text-lg" />
                </Link>

                <button
                  onClick={() => {
                    const section = document.getElementById("projects");
                    if (section) section.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="secondary_btn flex justify-center items-center cursor-pointer"
                >
                  Explore My Work
                  <FaEye />
                </button>
              </div>

              {/* TechStack — technology icons (left side) */}
              <TechStack />
              <SocialLinks />
            </div>
          </section>

         {/* ── RIGHT SECTION ── */}
{/* ── RIGHT SECTION ── */}
<section className="banner_img_section w-full lg:w-[45%] flex justify-center  items-center" data-aos="fade-left" data-aos-duration="800">
  {/* The main container's height is increased for a larger image and card */}
  <div className="relative w-[260px] sm:w-[300px] h-[380px] lg:w-[370px] lg:h-[450px]">

    {/* ── Ambient Glow Blobs ── */}
    <div className="absolute -top-8 -right-8 w-36 h-36 bg-[#1AA863] rounded-full blur-[70px] opacity-20 pointer-events-none" />
    <div className="absolute -bottom-8 -left-8 w-36 h-36 bg-[#1AA863] rounded-full blur-[70px] opacity-15 pointer-events-none" />

    {/* ── Rotating Rings ── */}
    <motion.div
      className="absolute inset-0 m-auto w-[90%] h-[90%] rounded-full border border-dashed border-[#1AA863]/30"
      style={{ top: "5%", left: "5%" }}
      animate={{ rotate: 360 }}
      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
    />
    <motion.div
      className="absolute inset-0 m-auto w-[80%] h-[80%] rounded-full border border-dashed border-[#1AA863]/15"
      style={{ top: "10%", left: "10%" }}
      animate={{ rotate: -360 }}
      transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
    />

    {/* ── Background Card (Made Taller) ── */}
    <div className="absolute bottom-0 w-full h-[80%] rounded-3xl overflow-hidden shadow-xl shadow-gray-200/80">
      {/* Card Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-white rounded-3xl" />

      {/* Grid Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: `linear-gradient(rgba(26,168,99,0.8) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(26,168,99,0.8) 1px, transparent 1px)`,
          backgroundSize: "30px 30px",
        }}
      />

      {/* Green gradient bottom glow */}
      <div className="absolute bottom-0 left-0 right-0 h-[50%] bg-gradient-to-t from-[#1AA863]/25 via-[#1AA863]/05 to-transparent" />

      {/* Corner accents */}
      <div className="absolute top-4 left-4 w-5 h-5 border-l-2 border-t-2 border-[#1AA863]/70 rounded-tl-sm" />
      <div className="absolute top-4 right-4 w-5 h-5 border-r-2 border-t-2 border-[#1AA863]/70 rounded-tr-sm" />
      <div className="absolute bottom-4 left-4 w-5 h-5 border-l-2 border-b-2 border-[#1AA863]/70 rounded-bl-sm" />
      <div className="absolute bottom-4 right-4 w-5 h-5 border-r-2 border-b-2 border-[#1AA863]/70 rounded-br-sm" />
    </div>

    {/* ── Person Image (Made Taller) ── */}
    <div className="absolute bottom-0 w-full h-full">
      <Image
        src={shorif_img}
        alt="Shorif Image"
        fill
        sizes="(max-width: 640px) 260px, (max-width: 1024px) 300px, 370px"
        className="object-contain object-bottom drop-shadow-2xl"
        priority
      />
    </div>

    {/* ── Floating Info Badges (Repositioned for the new layout) ── */}

    {/* Open to Remote — left top */}
    <motion.div
      className="absolute -left-14 top-[15%] z-20"
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
    >
      <div className="flex items-center gap-2 rounded-2xl bg-white/95 backdrop-blur-md border border-gray-200/80 px-3 py-2 shadow-xl shadow-gray-200/60">
        <div className="w-7 h-7 rounded-lg bg-[#1AA863]/10 flex items-center justify-center">
          <MdRocketLaunch className="text-base text-[#1AA863]" />
        </div>
        <div>
          <p className="text-[9px] text-gray-400 leading-none mb-0.5">Work Type</p>
          <p className="text-[11px] font-semibold text-gray-800 leading-none">Remote Ready</p>
        </div>
      </div>
    </motion.div>

    {/* Clean Code — right middle */}
    <motion.div
      className="absolute -right-14 top-[40%] z-20"
      animate={{ y: [0, 12, 0] }}
      transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
    >
      <div className="flex items-center gap-2 rounded-2xl bg-white/95 backdrop-blur-md border border-gray-200/80 px-3 py-2 shadow-xl shadow-gray-200/60">
        <div className="w-7 h-7 rounded-lg bg-[#1AA863]/10 flex items-center justify-center">
          <HiCode className="text-base text-[#1AA863]" />
        </div>
        <div>
          <p className="text-[9px] text-gray-400 leading-none mb-0.5">Code Style</p>
          <p className="text-[11px] font-semibold text-gray-800 leading-none">Clean Code</p>
        </div>
      </div>
    </motion.div>

    {/* Experience — left bottom */}
    <motion.div
      className="absolute -left-12 bottom-[25%] z-20"
      animate={{ y: [0, -8, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
    >
      <div className="flex items-center gap-2 rounded-2xl bg-white/95 backdrop-blur-md border border-gray-200/80 px-3 py-2 shadow-xl shadow-gray-200/60">
        <div className="w-7 h-7 rounded-lg bg-[#1AA863]/10 flex items-center justify-center">
          <MdWorkHistory className="text-base text-[#1AA863]" />
        </div>
        <div>
          <p className="text-[9px] text-gray-400 leading-none mb-0.5">Experience</p>
          <p className="text-[11px] font-semibold text-gray-800 leading-none">2+ Years</p>
        </div>
      </div>
    </motion.div>

    {/* Projects Done — bottom right */}
    <motion.div
      className="absolute -right-10 bottom-[22%] z-20"
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
    >
      <div className="rounded-2xl bg-white/95 backdrop-blur-md border border-[#1AA863]/25 px-4 py-2.5 shadow-xl shadow-[#1AA863]/10 text-center">
        <p className="text-xl font-bold text-[#1AA863] leading-none">20+</p>
        <p className="text-[9px] text-gray-400 mt-1 leading-tight">
          Projects<br />Done
        </p>
      </div>
    </motion.div>

  </div>
</section>

        </main>
      </Container>
    </div>
  );
}