"use client";

import { useRef } from "react";
import {
  motion,
  MotionConfig,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
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

const EASE = [0.22, 1, 0.36, 1];

// Image: soft slide-in with a blur-to-sharp reveal
const imageVariants = {
  hidden: { opacity: 0, x: -32, scale: 0.97, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 0.9, ease: EASE },
  },
};

// Parent only staggers its children
const contentVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

// Shared item reveal: fade + rise + slight blur
const itemVariants = {
  hidden: { opacity: 0, y: 18, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.65, ease: EASE },
  },
};

// Tech chips: nested stagger
const chipsContainerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.05 } },
};

const chipVariants = {
  hidden: { opacity: 0, y: 10, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.4, ease: EASE },
  },
};

// Quote: the vertical line draws down, then the text fades in
const quoteLineVariants = {
  hidden: { scaleY: 0 },
  visible: {
    scaleY: 1,
    transition: { duration: 0.8, ease: EASE },
  },
};

const quoteTextVariants = {
  hidden: { opacity: 0, x: 16 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, delay: 0.25, ease: EASE },
  },
};

const About = () => {
  const sectionRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();

  // Subtle parallax on the image while scrolling
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(
    scrollYProgress,
    [0, 1],
    shouldReduceMotion ? [0, 0] : [24, -24]
  );

  return (
    <MotionConfig reducedMotion="user">
      <section ref={sectionRef} className="w-full bg-ds-background">
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
              <motion.div style={{ y: imageY }}>
                <AboutImage />
              </motion.div>
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
                  Full Stack Developer with{" "}
                  <HighlightText>2 years</HighlightText> of hands-on experience
                  building real-world SaaS products and admin dashboards using{" "}
                  <HighlightText>TypeScript</HighlightText>,{" "}
                  <HighlightText>Next.js</HighlightText>,{" "}
                  <HighlightText>Express.js</HighlightText> and{" "}
                  <HighlightText>MongoDB</HighlightText>. I have experience
                  with state management using{" "}
                  <HighlightText>Redux Toolkit</HighlightText> and{" "}
                  <HighlightText>Zustand</HighlightText>, along with reusable
                  components, modular architecture, server-side pagination and
                  image optimization.
                </motion.p>

                <motion.p variants={itemVariants}>
                  I also use AI-powered development tools like{" "}
                  <HighlightText>Cursor</HighlightText>,{" "}
                  <HighlightText>GitHub Copilot</HighlightText> and{" "}
                  <HighlightText>Claude</HighlightText> to solve technical
                  challenges, improve code quality and speed up development. My
                  practical backend experience includes building APIs with{" "}
                  <HighlightText>Node.js</HighlightText> and{" "}
                  <HighlightText>Express.js</HighlightText>, managing data with{" "}
                  <HighlightText>MongoDB</HighlightText> and{" "}
                  <HighlightText>Mongoose</HighlightText>, and implementing{" "}
                  <HighlightText>JWT</HighlightText> authentication and
                  protected routes. This experience helps me contribute to both
                  frontend and backend tasks.
                </motion.p>
              </div>

              {/* Tech groups */}
              <motion.div
                variants={itemVariants}
                className="mt-6 space-y-3"
              >
                {techGroups.map((group) => (
                  <div
                    key={group.label}
                    className="flex flex-wrap items-center gap-2"
                  >
                    <span className="w-20 shrink-0 text-xs font-medium uppercase tracking-wider text-ds-muted-foreground">
                      {group.label}
                    </span>
                    <motion.ul
                      className="flex flex-wrap gap-2"
                      variants={chipsContainerVariants}
                    >
                      {group.items.map((item) => (
                        <motion.li
                          key={item}
                          variants={chipVariants}
                          whileHover={{ y: -2 }}
                          transition={{ type: "spring", stiffness: 400, damping: 20 }}
                          className="rounded-full border border-ds-primary/20 bg-ds-primary/[0.04] px-3 py-1 text-xs font-medium text-ds-primary"
                        >
                          {item}
                        </motion.li>
                      ))}
                    </motion.ul>
                  </div>
                ))}
              </motion.div>

              {/* Quote */}
              <motion.blockquote
                variants={itemVariants}
                className="relative mt-8 rounded-r-xl bg-ds-primary/[0.04] py-4 pl-6 pr-4"
              >
                <motion.span
                  variants={quoteLineVariants}
                  style={{ originY: 0 }}
                  className="absolute inset-y-0 left-0 w-1 rounded-full bg-ds-primary"
                />
                <motion.p
                  variants={quoteTextVariants}
                  className="text-sm italic leading-relaxed text-ds-muted-foreground sm:text-base"
                >
                  &quot;To me, web development isn&apos;t just about writing
                  code — it&apos;s the art of engineering seamless experiences
                  where performance, security, and innovation converge.&quot;
                </motion.p>
              </motion.blockquote>
            </motion.div>
          </div>
        </Container>
      </section>
    </MotionConfig>
  );
};

export default About;