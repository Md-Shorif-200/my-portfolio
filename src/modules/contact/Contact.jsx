"use client";

import Link from "next/link";
import { FaFacebook, FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { motion } from "framer-motion";

import ContactInformation from "./ContactInformation";
import ContactForm from "./ContactForm";
import Container from "@/components/Container";

const socials = [
  {
    icon: FaFacebook,
    href: "https://web.facebook.com/shorif.web.dev",
    label: "Facebook",
  },
  {
    icon: FaLinkedinIn,
    href: "https://www.linkedin.com/in/md-shorif-375533275/",
    label: "LinkedIn",
  },
  {
    icon: FaGithub,
    href: "https://github.com/Md-Shorif-200",
    label: "GitHub",
  },
];

const headerVariants = {
  hidden: {
    opacity: 0,
    y: 25,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const contentContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const leftCardVariants = {
  hidden: {
    opacity: 0,
    x: -45,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const rightCardVariants = {
  hidden: {
    opacity: 0,
    x: 45,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const socialContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.25,
    },
  },
};

const socialItemVariants = {
  hidden: {
    opacity: 0,
    scale: 0.7,
    y: 8,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.35,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function Contact() {
  return (
    <main className="w-full bg-ds-background section_top_padding section_bottom_padding">
      <Container>
        {/* Header */}
        <motion.div
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          className="text-center mb-10 md:mb-16 px-2"
        >
          <span className="text-ds-primary font-semibold text-xs tracking-widest uppercase">
            Get In Touch
          </span>

          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-ds-primary tracking-tight leading-tight mt-2">
            Let&rsquo;s Shape Your Next Big Idea
          </h1>

          <p className="text-ds-primary/50 mt-4 max-w-xl mx-auto text-sm sm:text-base md:text-lg">
            Your ideas deserve more than imagination — let&rsquo;s build them
            into reality.
          </p>
        </motion.div>

        {/* Content */}
        <motion.div
          variants={contentContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.15,
          }}
          className="grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-8 items-stretch"
        >
          {/* Left: Contact Information */}
          <motion.div
            variants={leftCardVariants}
            className="md:col-span-2 flex flex-col h-full min-w-0 bg-ds-background border border-ds-border rounded-2xl px-5 py-7 sm:px-6 sm:py-8 md:p-8 shadow-[0_1px_2px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-shadow duration-300"
          >
            <ContactInformation />

            <div className="mt-8 md:mt-auto md:pt-8">
              <h2 className="text-ds-primary text-xs font-semibold uppercase tracking-widest mb-4">
                Let&rsquo;s Connect
              </h2>

              <motion.div
                variants={socialContainerVariants}
                className="flex gap-3"
              >
                {socials.map(({ icon: Icon, href, label }) => (
                  <motion.div key={label} variants={socialItemVariants}>
                    <Link
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="w-10 h-10 shrink-0 rounded-full border border-ds-primary/10 flex items-center justify-center text-ds-primary hover:bg-ds-primary hover:text-ds-secondary hover:border-ds-primary hover:-translate-y-0.5 transition-all duration-300"
                    >
                      <Icon className="text-base" />
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div
            variants={rightCardVariants}
            className="md:col-span-3 flex flex-col h-full min-w-0"
          >
            <ContactForm />
          </motion.div>
        </motion.div>
      </Container>
    </main>
  );
}