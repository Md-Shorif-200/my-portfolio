"use client";

import { motion } from "framer-motion";
import AboutImage from "./AboutImage";

import Container from "@/components/Container";
import HighlightText from "@/components/common/HighlightText";
import SectionTitle from "@/components/common/SectionTitle";

const techGroups = [
  {
    label: "Frontend",
    items: ["TypeScript", "Next.js", "Zustand"],
  },
  {
    label: "Backend",
    items: ["Node.js", "Express.js", "MongoDB", "Mongoose", "JWT"],
  },
];

const imageVariants = {
  hidden: { opacity: 0, x: -28, scale: 0.98 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const contentVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const About = () => {
  return (
    <section className="w-full bg-ds-background pt-8">
      <Container>
        <div className="flex w-full flex-col items-center gap-12 lg:flex-row lg:gap-16">
          {/* Image */}
          <motion.div
            className="w-full lg:w-[45%]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={imageVariants}
          >
            <AboutImage />
          </motion.div>

          {/* About text */}
          <motion.div
            className="w-full lg:w-[55%]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={contentVariants}
          >
            <motion.div variants={itemVariants}>
              <SectionTitle
                align="left"
                badgeText="Get To Know"
                title="About Me"
              />
            </motion.div>

            <div className="mt-6 space-y-4 text-sm leading-7 text-ds-muted-foreground sm:text-base">
              <motion.p variants={itemVariants}>
                Full Stack Developer with <HighlightText>2 years</HighlightText>{" "}
                of hands-on experience building real-world SaaS products and
                admin dashboards using <HighlightText>TypeScript</HighlightText>
                ,<HighlightText>Next.js</HighlightText>,
                <HighlightText>Express.js</HighlightText> and 
                 <HighlightText> MongoDB</HighlightText>. I have experience with
                state management using{" "}
                <HighlightText>Redux Toolkit</HighlightText> and{" "}
                <HighlightText>Zustand</HighlightText>, along with reusable
                components, modular architecture, server-side pagination and
                image optimization.
              </motion.p>

              <motion.p variants={itemVariants}>
                I also use AI-powered development tools like
                <HighlightText>Cursor</HighlightText>,
                <HighlightText>GitHub Copilot</HighlightText> and
                <HighlightText>Claude</HighlightText> to solve technical
                challenges, improve code quality and speed up development. My
                practical backend experience includes building APIs with{" "}
                <HighlightText>Node.js</HighlightText> and
                <HighlightText>Express.js</HighlightText>, managing data with
                <HighlightText>MongoDB</HighlightText> and
                <HighlightText>Mongoose</HighlightText>, and implementing
                <HighlightText>JWT</HighlightText> authentication and protected
                routes. This experience helps me contribute to both frontend and
                backend tasks.
              </motion.p>
            </div>

            {/* Quote */}
            <motion.blockquote
              variants={itemVariants}
              className="mt-6 rounded-r-xl bg-ds-primary/[0.04] py-4 pl-5 pr-4"
            >
              <p className="text-sm italic leading-relaxed text-ds-muted-foreground sm:text-base">
                &quot;To me, web development isn&apos;t just about writing code
                — it&apos;s the art of engineering seamless experiences where
                performance, security, and innovation converge.&quot;
              </p>
            </motion.blockquote>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default About;
