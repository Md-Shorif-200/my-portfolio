// import dynamic from "next/dynamic";
import Banner from "../modules/banner/Banner";

// const FocusCardsSection = dynamic(() => import("./FocusCardsSection"), { ssr: true });
// const About = dynamic(() => import("./About"), { ssr: true });
// const SkillTabs = dynamic(() => import("./SkillTabs"), { ssr: true });
// const MyJourney = dynamic(() => import("./MyJourney"), { ssr: true });
// const Projects = dynamic(() => import("./Projects"), { ssr: true });
// const Contact = dynamic(() => import("./Contact"), { ssr: true });

export default function Home() {
  return (
    <div>
      <section id="home">
        <Banner />
      </section>

      {/* <FocusCardsSection /> */}

      {/* <section id="about" data-aos="fade-up">
        <About />
      </section>

      <section id="skills" data-aos="fade-up">
        <SkillTabs />
      </section>

      <section id="experience" data-aos="fade-up">
        <MyJourney />
      </section>

      <section id="projects" data-aos="fade-up">
        <Projects />
      </section>

      <section id="contact" data-aos="fade-up">
        <Contact />
      </section> */}
    </div>
  );
}
