

import { FaEye } from "react-icons/fa";
import Container from "./Container";
import { IoDocumentText } from "react-icons/io5";
import BannerAnimateText from "./BannerAnimateText";
import BannerTyped from "./BannerTyped";

export default function Banner() {
  return (
    <div className=" banner w-full h-[1100px] sm:h-[950px]  md:h-[750px] xl:min-h-screen bg-[#02050A] flex items-center     overflow-hidden mb-10 md:mb-0">
     

      <Container>
        <main className="flex flex-col md:flex-row  gap-6 items-center justify-between relative z-10">
          <section className="text-[#F1F5F9] w-full lg:w-[55%] space-y-5">
            <h2 className="text-lg text-[#CBD5E1] tracking-wide capitalize">
              Hi, I&apos;m
            </h2>

            <h1 className="text-4xl lg:text-5xl  xl:text-6xl font-bold capitalize primary_color leading-tight">
              Shorif Uddin Rifat
            </h1>

                    <BannerAnimateText/>
           

            <p className="text-base text-[#A2A2A2] leading-relaxed max-w-[550px] text-justify">
              Passionate about building efficient, scalable, and user-friendly
              web applications. I enjoy turning ideas into real-world digital
              experiences with clean code and modern technologies.
            </p>

            <div className="flex flex-wrap gap-6 mt-6 text-sm sm:text-base">
              {/* Status 1 */}
              <div className="flex items-center gap-2">
                <span className="inline-block h-2.5 w-2.5 rounded-full bg-[#55E6A5] animate-pulse-small"></span>
                <p className="text-[#F1F5F9]">3+ Years Experience</p>
              </div>

              {/* Status 2 */}
              <div className="flex items-center gap-2">
                <span className="inline-block h-2.5 w-2.5 rounded-full bg-[#FF6B6B] animate-pulse-small"></span>
                <p className="text-[#F1F5F9]">20+ Projects</p>
              </div>

              {/* Status 3 */}
              <div className="flex items-center gap-2">
                <span className="inline-block h-2.5 w-2.5 rounded-full bg-[#FFD93D] animate-pulse-small"></span>
                <p className="text-[#F1F5F9]">Remote Friendly</p>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row items-center gap-4 mt-8 mb-8 xl:mb-0">
              <button className="primary_btn flex items-center gap-3">
                Download Resume
                <IoDocumentText className="text-lg" />
              </button>
              <button className="secondary_btn flex items-center gap-3">
                explore my work
                <FaEye className="text-lg" />
              </button>
            </div>
          </section>

          <section className="w-full lg:w-[40%] flex justify-center md:mt-10 ">

                <BannerTyped/>

            {/* <div className="relative">
              <div className="absolute -inset-4 bg-[#55E6A5]/30 rounded-full blur-2xl"></div>
              <img
                src="/assets/profile.png"
                alt="Shorif Uddin Rifat"
                className="relative z-10 w-[250px] sm:w-[300px] lg:w-[350px] rounded-full border-4 border-[#55E6A5]/40 shadow-lg hover:scale-105 transition-all duration-500"
              />
            </div> */}
          </section>
        </main>
      </Container>
    </div>
  );
}
