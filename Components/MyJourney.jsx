import SectionTitleContainer from "./SectionTitleContainer";


import MyEducation from "./MyEducation";
import WorkExperience from "./WorkExperience";
import Container from "./Container";
import { FaCode, FaUserCircle } from "react-icons/fa";


export default function MyJourney() {
  return (
    <div className="bg_color  pt-10 ">
    
  <Container>
         <div className=" flex flex-col  items-center w-full">
                  <div
                    className="w-[140px] py-1 text-center text-md  font-semibold bg-[#21BF73]/10 rounded-full uppercase primary_color flex justify-center items-center gap-1"
                    // data-aos="fade-up"
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
        <section>
          {/* <h1 className="primary_color font-bold text-3xl capitalize mb-10">
            {" "}
            Education & Certification{" "}
          </h1> */}

          <MyEducation />
        </section>

        <section>
          {/* <h1 className="primary_color font-bold text-3xl capitalize mb-10">
            {" "}
            Work Experience{" "}
          </h1> */}

            <WorkExperience/>
         
        </section>
      </main>

  </Container>

    </div>
  );
}
