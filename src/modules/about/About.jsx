"use client";

import Link from "next/link";
import { Github, Linkedin, Facebook } from "lucide-react";
import AboutImage from "./AboutImage"; // Make sure the path matches your project structure


import Container from "@/components/Container";
import SectionTitle from "@/components/common/SectionTitle";


// ── Social links data (using lucide-react) ──
const socialLinks = [
  {
    icon: <Facebook className="w-4 h-4" />,
    label: "Facebook",
    href: "https://web.facebook.com/shorif.web.dev",
  },
  {
    icon: <Github className="w-4 h-4" />,
    label: "GitHub",
    href: "https://github.com/Md-Shorif-200",
  },
  {
    icon: <Linkedin className="w-4 h-4" />,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/md-shorif-375533275/",
  },
 
];


const hightlightedText ="text-ds-primary font-semibold"

const About = () => {
  return (
    <section  className="w-full py-10  bg-ds-background">
      <Container>
 
        <div className=" w-full flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* ── LEFT — Image Component ── */}
        <div className="w-full lg:w-[45%]">
              <AboutImage />
        </div>

          {/* ── RIGHT — About Text Section ── */}
          <div
            className="w-full lg:w-[55%]"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="200"
          >
            <SectionTitle
              align="left"
              badgeText="Get To Know"
              title="About Me"
            />

            {/* ── About Paragraphs ── */}
            <div className="space-y-4 text-ds-muted-foreground text-sm sm:text-base leading-relaxed">
              <p>
                Hi, I&apos;m{" "}
                <span className={hightlightedText}>
                  Shorif Uddin Rifat
                </span>{" "}
                — a passionate web developer with over{" "}
                <span className={hightlightedText}>
                  2+ years of experience{" "}
                </span>{" "}
                crafting high-performance, full-stack web applications. I thrive
                on architecting clean code, streamlining user experiences, and
                building scalable digital solutions that drive business growth.
              </p>
              <p>
                I specialize in modern{" "}
                <span className={hightlightedText}>
                  JavaScript/TypeScript
                </span>{" "}
                ecosystems and{" "}
                <span className={hightlightedText}>
                  dynamic front-end frameworks
                </span>
                , with strong expertise in{" "}
                <span className={hightlightedText}>
                  Next.js, Redux, Zustand, and Node.js
                </span>
                . On the backend and data architecture side, I leverage{" "}
                <span  className={hightlightedText} >MongoDB, Mongoose, Redis, and Docker</span> along with{" "}
                <span className={hightlightedText}>
                  JWT authentication
                </span>{" "}
                to build secure, reliable, and containerized systems.
              </p>
              <p>
                Beyond core development, I am deeply committed to writing
                efficient, maintainable code and staying ahead of evolving web
                technologies. I enjoy solving complex architectural challenges,
                <span    className={hightlightedText}>optimizing application performance</span>, and working collaboratively
                in fast-paced engineering environments.
              </p>
              <p>
                Driven by curiosity and continuous learning, I constantly refine
                my technical craft and adopt modern industry best practices. My
                focus is always on translating complex requirements into simple,
                elegant, and impactful software solutions.
              </p>
            </div>

            {/* ── Quote ── */}
            <div className="mt-6 border-l-4 border-[#0A0A0A] pl-4 py-1">
              <p className="text-gray-500 italic text-sm sm:text-base leading-relaxed">
                &quot;To me, web development isn&apos;t just about writing code
                — it&apos;s the art of engineering seamless experiences where
                performance, security, and innovation converge.&quot;
              </p>
            </div>

            {/* ── Connect Section ── */}
            {/* <div className="mt-8">
              <p className="text-gray-700 font-semibold text-sm sm:text-base mb-4">
                Connect with me:
              </p>

          
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((social, index) => (
                  <Link
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 bg-white text-gray-700 text-sm font-medium shadow-sm hover:border-[#0A0A0A] hover:bg-[#0A0A0A] hover:text-white transition-all duration-200"
                  >
                    <span>{social.icon}</span>
                    {social.label}
                  </Link>
                ))}
              </div>
            </div> */}
          </div>
       
        </div>
   
      </Container>
    </section>
  );
};

export default About;
