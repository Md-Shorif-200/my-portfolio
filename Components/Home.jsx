import React from "react";
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
      <Banner />
      <FocusCardsSection/>
      <About/>
      <SkillTabs/>
       <MyJourney/>
        <Projects/>
         <Contact/>
    </div>
  );
}
