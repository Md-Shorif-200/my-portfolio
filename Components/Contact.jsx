import React from "react";
import Container from "./Container";
import FeaturedSection from "./FeaturedSection";
import ContactInformation from "./ContactInformation";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <main className="w-full  bg_color ">
      <Container>
        <div className="text-center mt-10">
          <h1 className="text-3xl md:text-5xl font-bold primary_color">
            <span className="secondary_color"> Let’s Shape</span> Your Next Big
            Idea
          </h1>
          <p className="text-[#A2A2A2] mt-4 capitalize ">
            Your ideas deserve more than imagination — let’s build them into
            reality.
          </p>
        </div>
        {/* <FeaturedSection /> */}

        <section className="  py-8 md:py-20 flex flex-col md:flex-row gap-10">
          <div className="md:w-1/2">
            <ContactInformation />
          </div>

          <div className="md:w-1/2">
            <ContactForm />
          </div>
        </section>
      </Container>
    </main>
  );
}
