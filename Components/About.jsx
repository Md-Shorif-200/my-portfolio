"use client";
import Container from "./Container";
import SectionTitleContainer from "./SectionTitleContainer";
import SkillTabs from "./SkillTabs";

import Lottie from "lottie-react";
import {
  SiNestjs,
  SiPostgresql,
  SiTypescript,
  SiMysql,
  SiPrisma,
} from "react-icons/si";

import { GrMysql } from "react-icons/gr";

import { FaAws } from "react-icons/fa";
import MyJourney from "./MyJourney";
import Link from "next/link";
import Footer from "./Footer";
import lotteImg_2 from "../public/Manager.json";
import { BsStars } from "react-icons/bs";

export default function About() {
  return (
    <div className="w-full  bg_color pt-20 pb-6">
      <Container>
        {/* about section */}
        <section   >
          <div className=" about_section w-full  flex flex-col lg:flex-row       gap-x-6   ">
            <div
              className="about_img  w-full lg:w-[50%] flex justify-center md:justify-start items-center  "
              // data-aos="fade-right"
              //   data-aos-delay="300"
            >
              <Lottie
                animationData={lotteImg_2}
                className=" lottie_img w-full sm:w-[70%] sm:h-[400px] lg:w-[75%] lg:h-full  border-[1px] "
              ></Lottie>
            </div>

            <div className="about_cnt w-full lg:w-[50%] mt-8 lg:mt-0 " 
                  // data-aos="fade-left"
                  // data-aos-delay="300"
            >
              <h2
                className="w-[130px] py-1 text-center text-md  font-semibold bg-[#21BF73]/10 rounded-full uppercase primary_color flex justify-center items-center gap-1"
                // data-aos="fade-up"
              >
                <BsStars />
                Who I Am
              </h2>

              <p
                className="text-base text-gray-700 mt-3 text-justify "
                // data-aos="fade-up"
                // data-aos-delay="200"
              >
                I’m a passionate web developer with over 2+ years of hands-on
                experience, focused on building reliable and user-friendly
                applications. I add value to teams by delivering clean, scalable
                solutions, understanding requirements clearly, and collaborating
                effectively in professional environments.
              </p>
              <p
                className="text-base text-gray-700 mt-3  "
                // data-aos="fade-up"
                // data-aos-delay="200"
              >
                As a{" "}
                <span className="text-[#21BF73] font-semibold capitalize">
                  web Developer
                </span>{" "}
                at{" "}
                <span className="text-[#21BF73] font-semibold capitalize">
                  Devnasa Technology
                </span>
                , i contributing to production-level applications and team-based
                development workflows.
              </p>

              <div className="banner_buttons flex flex-col sm:flex-row   lg:flex-row gap-4 my-6 md:my-8 ">
                {/* <Link
                  href="#experience"
                  scroll={true}
                  className=" "
                  // data-aos="fade-up"
                  // data-aos-delay="300"
                >
                  my Journey
                </Link> */}

                <button
                  onClick={() => {
                    const section = document.getElementById("experience");
                    if (section) {
                      section.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  className="w-[200px] primary_btn flex justify-center items-center capitalize cursor-pointer"
                >
                  My Journey
                </button>

                
                <button
                  onClick={() => {
                    const section = document.getElementById("contact");
                    if (section) {
                      section.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  className="w-[200px] secondary_btn flex justify-center items-center cursor-pointer"
                >
                  Get In Touch
                </button>


              </div>

              {/* <hr className="text-gray-700 my-1" /> */}

              <div
                className="my_goals my-4"
                // data-aos="fade-up"
                // data-aos-delay="500"
              >
                <p className="text-base text-gray-700 mt-3  ">
                  My goal is to master TypeScript, Nest.js and other high-demand
                  technologies to build robust and scalable web applications,
                  while continuously growing into a skilled software engineer
                  and a capable technical leader.
                </p>

                <div className="icons flex flex-wrap gap-3 mt-6">
                  <div className=" icon_bg_color text-2xl  p-3">
                    <SiTypescript className="text-[#3178C6]"></SiTypescript>
                  </div>

                  <div className=" icon_bg_color text-2xl  p-3">
                    <SiNestjs className="text-[#E0234E]"></SiNestjs>
                  </div>

                  <div className=" icon_bg_color text-2xl  p-3">
                    <GrMysql className="text-[#4479A1]"></GrMysql>
                  </div>

                  <div className=" icon_bg_color text-2xl  p-3">
                    <SiPostgresql className="text-[#336791]"></SiPostgresql>
                  </div>

                  <div className=" icon_bg_color text-2xl  p-3">
                    <SiPrisma className="text-[#0C344B]"></SiPrisma>
                  </div>

                  <div className=" icon_bg_color text-2xl  p-3">
                    <FaAws className="text-[#FF9900]"></FaAws>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

     

      </Container>
    </div>
  );
}
