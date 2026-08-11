"use client";

import Container from "../../components/Container";

import BannerStatsCard from "./BannerStatsCard";
import ResumePreviewModal from "./ResumePreviewModal"; // Adjust path as needed
// import ResumeDownloadButton from "./download/ResumeDownloadButton";



export default function Banner() {
  return (
    <div
      className="banner w-full min-h-[500px] flex flex-col justify-between relative overflow-hidden select-none lg:pt-6 lg:pb-8"
      style={{
        backgroundColor: "var(--ds-background)",
        backgroundImage: "radial-gradient(circle, var(--ds-dot-color) 1px, transparent 1px)",
        backgroundSize: "28px 28px",
      }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
      background: "radial-gradient(ellipse 70% 60% at 50% 40%, var(--ds-radial-glow) 0%, transparent 100%)",
        }}
      />

      <Container>
        {/* ── Main Content ── */}
        <div className="flex flex-col items-center text-center gap-3 max-w-6xl mx-auto mt-6 min-[450px]:mt-10 lg:mt-0">
          {/* ── Heading ── */}
          <h1
            className="  text-ds-primary font-sans text-5xl min-[450px]:text-6xl sm:text-7xl lg:text-[82px] mt-6 relative font-extrabold"
            data-aos="fade-up"
          >
            <span className="block  text-ds-text name-line-1">
              SHORIF
            </span>
            <span className="block  mt-2 sm:tracking-[1.5px] text-[#858585] name-line-2">
              UDDIN RIFAT
            </span>
          </h1>

          {/* ── Role ── */}
          <p
            className="text-base sm:text-lg font-medium text-[#747474] dark:text-zinc-400 tracking-wider mt-8"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Web Developer{" "}
            <span className="text-zinc-300 dark:text-zinc-700 mx-1">|</span>{" "}
            MERN Stack Specialist{" "}
            <span className="text-zinc-300 dark:text-zinc-700 mx-1">|</span>{" "}
            Tech Enthusiast
          </p>

          <div>
            <BannerStatsCard />
          </div>

          {/* ── Resume Modal Trigger ── */}
          <div data-aos="fade-up" data-aos-delay="300" className="mt-4">
            {/* <ResumeDownloadButton /> */}
            <ResumePreviewModal />
          </div>
        </div>
      </Container>

      {/* ── Scroll Mouse Icon ── */}
      <div className="flex flex-col items-center gap-2 opacity-60   mt-10 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-ds-primary flex justify-center pt-1.5 relative">
          <span
            className="w-1 h-2 bg-ds-primary rounded-full animate-bounce"
            style={{ animationDuration: "1.5s" }}
          />
        </div>
        <p className="text-[11px] uppercase tracking-[3px] text-ds-primary font-semibold">
          Scroll
        </p>
      </div>
    </div>
  );
}