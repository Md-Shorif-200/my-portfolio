"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const shorif_img = "/shorif-img.png";

const AboutImage = () => {
  return (
    <div
      className=" flex justify-center items-center py-4"
      data-aos="fade-up"
      data-aos-duration="800"
    >
      {/* Outer wrapper — Responsive width and height steps */}
      <div className="relative w-[240px] xs:w-[270px] sm:w-[320px] md:w-[350px] lg:w-[370px] h-[340px] xs:h-[380px] sm:h-[420px] md:h-[440px] lg:h-[450px]">
        
        {/* ── Ambient Glow Blobs ── */}
        <div className="absolute -top-6 -right-6 sm:-top-8 sm:-right-8 w-24 sm:w-36 h-24 sm:h-36 bg-[#0A0A0A] dark:bg-white rounded-full blur-[50px] sm:blur-[70px] opacity-10 dark:opacity-[0.08] pointer-events-none" />
        <div className="absolute -bottom-6 -left-6 sm:-bottom-8 sm:-left-8 w-24 sm:w-36 h-24 sm:h-36 bg-[#0A0A0A] dark:bg-white rounded-full blur-[50px] sm:blur-[70px] opacity-10 dark:opacity-[0.08] pointer-events-none" />

        {/* ── Rotating Dashed Rings ── */}
        <motion.div
          className="hidden min-[500px]:block absolute inset-0 m-auto w-[90%] h-[90%] rounded-full border border-dashed border-[#0A0A0A]/20 dark:border-white/20"
          style={{ top: "5%", left: "5%" }}
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="hidden min-[500px]:block absolute inset-0 m-auto w-[80%] h-[80%] rounded-full border border-dashed border-[#0A0A0A]/10 dark:border-white/10"
          style={{ top: "10%", left: "10%" }}
          animate={{ rotate: -360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        />

        {/* ── Background Card ── */}
        <div className="absolute bottom-0 w-full h-[80%] rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl shadow-gray-200/80 dark:shadow-black/40">
          {/* White gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-white dark:from-neutral-900 dark:via-neutral-800 dark:to-neutral-900 rounded-2xl sm:rounded-3xl" />

          {/* Grid pattern overlay — light mode */}
          <div
            className="absolute inset-0 opacity-[0.05] dark:hidden"
            style={{
              backgroundImage: `
                linear-gradient(rgba(10,10,10,0.8) 1px, transparent 1px),
                linear-gradient(90deg, rgba(10,10,10,0.8) 1px, transparent 1px)
              `,
              backgroundSize: "30px 30px",
            }}
          />

          {/* Grid pattern overlay — dark mode */}
          <div
            className="absolute inset-0 opacity-[0.06] hidden dark:block"
            style={{
              backgroundImage: `
                linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)
              `,
              backgroundSize: "30px 30px",
            }}
          />

          {/* Subtle dark glow at the bottom */}
          <div className="absolute bottom-0 left-0 right-0 h-[50%] bg-gradient-to-t from-[#0A0A0A]/15 via-[#0A0A0A]/05 to-transparent dark:from-white/10 dark:via-white/[0.03] dark:to-transparent" />

          {/* Corner accent lines */}
          <div className="absolute top-3 left-3 sm:top-4 sm:left-4 w-4 h-4 sm:w-5 sm:h-5 border-l-2 border-t-2 border-[#0A0A0A]/60 dark:border-white/60 rounded-tl-sm" />
          <div className="absolute top-3 right-3 sm:top-4 sm:right-4 w-4 h-4 sm:w-5 sm:h-5 border-r-2 border-t-2 border-[#0A0A0A]/60 dark:border-white/60 rounded-tr-sm" />
          <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 w-4 h-4 sm:w-5 sm:h-5 border-l-2 border-b-2 border-[#0A0A0A]/60 dark:border-white/60 rounded-bl-sm" />
          <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 w-4 h-4 sm:w-5 sm:h-5 border-r-2 border-b-2 border-[#0A0A0A]/60 dark:border-white/60 rounded-br-sm" />
        </div>

        {/* ── Person Image ── */}
        <div className="absolute bottom-0 w-full h-full">
          <Image
            src={shorif_img}
            alt="Shorif Uddin Rifat"
            fill
            sizes="(max-width: 480px) 240px, (max-width: 640px) 270px, (max-width: 768px) 320px, (max-width: 1024px) 350px, 370px"
            className="object-contain object-bottom drop-shadow-2xl dark:drop-shadow-[0_25px_25px_rgba(255,255,255,0.06)]"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default AboutImage;