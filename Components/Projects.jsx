import React from "react";
import SectionTitleContainer from "./SectionTitleContainer";
import ProjectsTab from "./ProjectsTab";
import Container from "./Container";
import Footer from "./Footer";
import { GoProjectSymlink } from "react-icons/go";

export default function Projects() {
  return (
    <main className="w-full bg_color pt-16 pb-6">
      <Container>
        <div className=" flex flex-col  items-center w-full">
          <div
            className="w-[140px] py-1 text-center text-md  font-semibold bg-[#21BF73]/10 rounded-full uppercase primary_color flex justify-center items-center gap-1"
            // data-aos="fade-up"
          >
            <GoProjectSymlink />
            Projects
          </div>

          <h1 className="text-2xl md:text-3xl  my-2  text-gray-800 font-bold text-center ">
            {" "}
            Featured Work
          </h1>

          <p className="text-md md:text-lg text-gray-800 text-center ">
            Real-world projects demonstrating practical experience and technical
            execution
          </p>
        </div>
        <ProjectsTab />
      </Container>
    </main>
  );
}
