"use client";

import { motion } from "framer-motion";

import Container from "../../components/Container";
import BannerStatsCard from "./BannerStatsCard";
import ResumePreviewModal from "./ResumePreviewModal";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
};

const fadeUpVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 1,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const nameVariants = {
  hidden: {
    opacity: 0,
    y: 45,
    filter: "blur(8px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function Banner() {
  return (
    <div
      className="banner w-full min-h-[500px] flex flex-col justify-between relative overflow-hidden select-none lg:pt-6 lg:pb-8"
      style={{
        backgroundColor: "var(--ds-background)",
        backgroundImage:
          "radial-gradient(circle, var(--ds-dot-color) 1px, transparent 1px)",
        backgroundSize: "28px 28px",
      }}
    >
      {/* ── Background Glow ── */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 1.5,
          ease: "easeOut",
        }}
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 40%, var(--ds-radial-glow) 0%, transparent 100%)",
        }}
      />

      <Container>
        {/* ── Main Content ── */}
        <motion.div
          className="flex flex-col items-center text-center gap-3 max-w-6xl mx-auto mt-6 min-[450px]:mt-10 lg:mt-0"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* ── Heading ── */}
          <motion.h1
            className="text-ds-primary font-sans text-5xl min-[450px]:text-6xl sm:text-7xl lg:text-[82px] mt-6 relative font-extrabold"
            variants={fadeUpVariants}
          >
            <motion.span
              className="block text-ds-text name-line-1"
              variants={nameVariants}
            >
              SHORIF
            </motion.span>

            <motion.span
              className="block mt-2 sm:tracking-[1.5px] text-[#858585] name-line-2"
              variants={nameVariants}
            >
              UDDIN RIFAT
            </motion.span>
          </motion.h1>

          {/* ── Role ── */}
          <motion.p
            className="text-base sm:text-lg font-medium text-ds-primary/80 tracking-wider mt-8"
            variants={fadeUpVariants}
          >
            Web Developer{" "}
            <span className=" mx-1">|</span>{" "}
            MERN Stack Specialist{" "}
            <span className=" mx-1">|</span>{" "}
            Tech Enthusiast
          </motion.p>
          
         
          <div>
            <BannerStatsCard />

          </div>
   

          {/* ── Resume Modal Trigger ── */}
          <motion.div
            variants={fadeUpVariants}
            className="mt-4"
            whileHover={{
              scale: 1.03,
              transition: {
                duration: 0.2,
                ease: "easeOut",
              },
            }}
            whileTap={{
              scale: 0.97,
            }}
          >
            <ResumePreviewModal />
          </motion.div>
        </motion.div>
      </Container>

      {/* ── Scroll Mouse Icon ── */}
      <motion.div
        className="flex flex-col items-center gap-2 opacity-60 mt-10"
        initial={{
          opacity: 0,
          y: 15,
        }}
        animate={{
          opacity: 0.6,
          y: 0,
        }}
        transition={{
          delay: 1.2,
          duration: 0.7,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <motion.div
          className="w-6 h-10 rounded-full border-2 border-ds-primary flex justify-center pt-1.5 relative"
          animate={{
            y: [0, 5, 0],
          }}
          transition={{
            duration: 2.2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <motion.span
            className="w-1 h-2 bg-ds-primary rounded-full"
            animate={{
              y: [0, 4, 0],
              opacity: [1, 0.5, 1],
            }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>

        <motion.p
          className="text-[11px] uppercase tracking-[3px] text-ds-primary font-semibold"
          animate={{
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 2.2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          Scroll
        </motion.p>
      </motion.div>
    </div>
  );
}