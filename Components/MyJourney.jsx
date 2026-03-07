import SectionTitleContainer from "./SectionTitleContainer";


import MyEducation from "./MyEducation";
import WorkExperience from "./WorkExperience";
import Container from "./Container";
import { FaUserCircle, FaGraduationCap } from "react-icons/fa";
import { MdWorkHistory } from "react-icons/md";


export default function MyJourney() {
  return (
    <div className="bg_color  pt-10 ">
    
  <Container>
         <div className=" flex flex-col  items-center w-full" data-aos="fade-up">
                  <div
                    className="w-[140px] py-1 text-center text-md  font-semibold bg-[#21BF73]/10 rounded-full uppercase primary_color flex justify-center items-center gap-1"
                  >
                    <FaUserCircle />
                     Profile
                  </div>
        
                  <h1 className="text-2xl md:text-3xl  my-2  text-gray-800 font-bold text-center ">
                    {" "}
                  Education & Experience
                  </h1>
        
                  <p className="text-md md:text-lg text-gray-800 mb-4 text-center ">
                    Progress, learning, and real-world contributions
                  </p>
                </div>
      

      <main className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
        <section data-aos="fade-right" data-aos-delay="200">
          <h2 className="text-xl font-bold text-gray-800 mb-4 md:hidden flex items-center gap-2">
            <FaGraduationCap className="text-[#21BF73]" />
            Education
          </h2>
          <MyEducation />
        </section>

        <section data-aos="fade-left" data-aos-delay="300">
          <h2 className="text-xl font-bold text-gray-800 mb-4 md:hidden flex items-center gap-2">
            <MdWorkHistory className="text-[#21BF73]" />
            Work Experience
          </h2>
          <WorkExperience/>
        </section>
      </main>

  </Container>

    </div>
  );
}
