import Banner from "./Banner";
import FocusCardsSection from "./FocusCardsSection";
import About from "./About";
import SkillTabs from "./SkillTabs";
import MyJourney from "./MyJourney";
import Projects from "./Projects";
import Contact from "./Contact";

export default function Home() {
  return (
    <div>
      <section id="home">
        <Banner />
      </section>

      <FocusCardsSection />

      <section id="about">
        <About />
      </section>

      <SkillTabs />

      <MyJourney />

      <section id="projects">
        <Projects />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}
