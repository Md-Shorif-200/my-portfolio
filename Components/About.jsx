import React from "react";
import Container from "./Container";
import { IoDocumentText } from "react-icons/io5";
import { FaEye } from "react-icons/fa";
import SectionTitleContainer from "./SectionTitleContainer";
import SkillTabs from "./SkillTabs";

export default function About() {
  return (
    <div className="w-full min-h-screen bg-[#02050A] pt-28">
      <Container>
                  <div className="mb-20">
                         <SectionTitleContainer title='about me' paragrap='loremjfkdjfjdslkfjdkjflkdjfkdjfkdkfjkfjlkdfjdkfjlkdfkldfkldjflkdjfkjdfkdkfkdfjkdfjkdfjkf' btn_1='explore my project' btn_2='my service' />
                  </div>

            {/* skill section */}
              <section>
                   <SectionTitleContainer title='my skills' paragrap='Constantly evolving and mastering new technologies to deliver cutting-edge solutions' />

        
                        <SkillTabs/>
                    
              </section>
      </Container>
    </div>
  );
}
