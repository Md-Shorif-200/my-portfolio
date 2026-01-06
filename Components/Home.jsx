import React from "react";
import Banner from "./Banner";
import FocusCardsSection from "./FocusCardsSection";
import About from "./About";


export default function Home() {
  return (
    <div>
      <Banner />
      <FocusCardsSection/>
      <About/>
    </div>
  );
}
