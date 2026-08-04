// app/page.jsx (or wherever Home is)
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
      <section id="home">
        <Banner />
      </section>

      <section id="about">
        <About />
      </section>

   
        <EducationAndCertifications />
    

    
        <MyExpertise />
     

      <section id="skills">
        <MySkills />
      </section>

      <section id="experience">
        <Experience />
      </section>

      <section id="featured_project">
        <FeaturedProject />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}