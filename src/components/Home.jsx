// app/page.jsx
import Contact from "@/modules/contact/Contact";
import About from "../modules/about/About";
import Banner from "../modules/banner/Banner";
import EducationAndCertifications from "../modules/education/EducationAndCertifications";
import Experience from "../modules/experience/Experience";
import MyExpertise from "../modules/my-expertise/MyExpertise";
import FeaturedProject from "../modules/projects/FeaturedProject";
import MySkills from "../modules/skills/MySkills";

export default function Home() {
  return (
    <div>
      <section id="home" className="scroll-mt-20">
        <Banner />
      </section>

      <section id="about" className="scroll-mt-10 sm:scroll-mt-20">
        <About />
      </section>

        <EducationAndCertifications />

        <MyExpertise />
      

      <section id="skills" className="scroll-mt-20">
        <MySkills />
      </section>

      <section id="experience" className="scroll-mt-28">
        <Experience />
      </section>

      <section id="featured_project" className="scroll-mt-28">
        <FeaturedProject />
      </section>

      <section id="contact" className="scroll-mt-20">
        <Contact />
      </section>
    </div>
  );
}