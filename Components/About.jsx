"use client";
import Container from "./Container";
import { IoDocumentText } from "react-icons/io5";
import { FaEye } from "react-icons/fa";
import SectionTitleContainer from "./SectionTitleContainer";
import SkillTabs from "./SkillTabs";

import lotteImg_2 from "../public/Animation - 1751123195695.json";
import Lottie from "lottie-react";
import { SiNextdotjs, SiPostgresql, SiTypescript } from "react-icons/si";
import { FaAws } from "react-icons/fa";

export default function About() {
  return (
    <div className="w-full min-h-screen bg-[#02050A] py-10 md:pt-28 xl:pt-28">
      <Container>
        {/* <div className="mb-20">
                         <SectionTitleContainer title='about me' paragrap='loremjfkdjfjdslkfjdkjflkdjfkdjfkdkfjkfjlkdfjdkfjlkdfkldfkldjflkdjfkjdfkdkfkdfjkdfjkdfjkf' btn_1='explore my project' btn_2='my service' />
                  </div> */}

        {/* about section */}
        <section>
          <div className=" about_section w-full xl:h-[400px] flex flex-col-reverse lg:flex-row items-center      gap-x-6 px-4  ">
            <div
              className="about_img  w-full lg:w-[50%] flex justify-center items-center mt-6 "
              data-aos="fade-right"
            >
              <Lottie animationData={lotteImg_2} className="w-full"></Lottie>
            </div>

            <div className="about_cnt w-full lg:w-[50%] px-2 sm:px-4  md:px-6 lg:px-8">
              <h2
                className="text-4xl  lg:text-5xl capitalize primary_color "
                data-aos="fade-up"
              >
                about me
              </h2>

              <p
                className="text-base text-[#A2A2A2] mt-3 "
                data-aos="fade-up"
                data-aos-delay="200"
              >
                I’m a passionate developer committed to creating efficient,
                scalable solutions using modern technologies, with a focus on
                clean code and seamless user experiences.
              </p>

              <div
                className="about_btn flex flex-col  items-center gap-4 mt-6 "
              >
                <button className=" w-[250px] primary_btn flex items-center gap-3">
                    explore my projects
                </button>
                <button className=" w-[250px] secondary_btn flex items-center gap-3">
                  my services
                </button>
              </div>

              {/* <hr className="text-gray-700 my-1" /> */}

              <div
                className="my_goals my-4"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                {/* <h2 className="text-xl  lg:text-2xl capitalize primary_color ">
                  {" "}
                  My goals{" "}
                </h2> */}
                <p className="text-base text-[#A2A2A2] mt-3  ">
                  My goal is to master TypeScript and Next.js to build robust,
                  scalable web applications.{" "}
                </p>

                <div className="icons flex gap-x-6 mt-6">
                  <div className="text-2xl icon_bg_color p-3">
                    <SiTypescript></SiTypescript>
                  </div>

                  <div className="text-2xl icon_bg_color p-3">
                    <SiNextdotjs></SiNextdotjs>
                  </div>

                  <div className="text-2xl icon_bg_color p-3">
                    <SiPostgresql></SiPostgresql>
                  </div>

                  <div className="text-2xl icon_bg_color p-3">
                    <FaAws></FaAws>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* skill section */}
        <section className="lg:mt-10">
          <SectionTitleContainer
            title="my skills"
            paragrap="Constantly evolving and mastering new technologies to deliver cutting-edge solutions"
          />

          <SkillTabs />
        </section>
      </Container>
    </div>
  );
}
