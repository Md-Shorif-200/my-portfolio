import React from "react";
import Container from "./Container";
import FeaturedSection from "./FeaturedSection";
import ContactInformation from "./ContactInformation";
import ContactForm from "./ContactForm";
import Link from "next/link";
import { FaFacebook, FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";

export default function Contact() {
  return (
    <main className="w-full  bg_color ">
      <Container>
        <div className="text-center py-10">
          <h1 className="text-3xl md:text-5xl font-bold primary_color">
            <span className="secondary_color"> Let’s Shape</span> Your Next Big
            Idea
          </h1>
          <p className="text-[#A2A2A2] mt-4 capitalize ">
            Your ideas deserve more than imagination — let’s build them into
            reality.
          </p>
        </div>
     

        <div className="  pt-6 pb-12 flex flex-col md:flex-row gap-10 ">
          <div className="md:w-1/2 lg:w-[35%]  bg-[#21BF73]  rounded-lg px-4 py-10">
            <ContactInformation />



             <section className=" mt-8">
      <h1 className="text-base font-semibold text-white uppercase mb-3">Let’s Connect</h1>
          <div className="flex gap-4">
             {/* Facebook */}
      <Link
        href="https://web.facebook.com/shorif.web.dev"
        target="_blank"
        rel="noopener noreferrer"
        className=" w-10 h-10 bg-[#56D598] hover:bg-black transition-all flex justify-center items-center text-lg rounded-full "
      >
        <FaFacebook className="text-white " />
      </Link>

      {/* LinkedIn */}
      <Link
        href="https://www.linkedin.com/in/md-shorif-375533275/"
        target="_blank"
        rel="noopener noreferrer"
        className=" w-10 h-10 bg-[#56D598] hover:bg-black transition-all flex justify-center items-center text-lg rounded-full "
      >
        <FaLinkedinIn className="text-white " />
      </Link>

      {/* GitHub */}
      <Link
        href="https://github.com/Md-Shorif-200"
        target="_blank"
        rel="noopener noreferrer"
        className=" w-10 h-10 bg-[#56D598] hover:bg-black transition-all  flex justify-center items-center text-lg rounded-full "
      >
        <FaGithub  className="text-white "/>
      </Link>
          </div>

  
    </section>
          </div>

          <div className="md:w-1/2 lg:w-[65%] ">
            <ContactForm />
          </div>
        </div>
      </Container>
    </main>
  );
}
