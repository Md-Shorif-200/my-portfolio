import { FaEye } from "react-icons/fa";
import { IoDocumentText } from "react-icons/io5";
import Image from "next/image";
import Link from "next/link";

import Container from "./Container";
import BannerAnimateText from "./BannerAnimateText";
import SocialLinks from "./SocialLinks";
import { TechStack } from "./TechStack";
// import TechStack from "./TechStack";

const shorif_img = "/shorif-image-removebg-preview.png";

export default function Banner() {
  return (
    <div
      className="w-full min-h-screen flex items-center overflow-hidden"
      style={{ backgroundColor: "#FAF8F6" }}
    >
      <Container>
        <main className="flex flex-col lg:flex-row items-center justify-between gap-12 py-10 ">
          {/* LEFT CONTENT */}
          <section className="relative w-full lg:w-[55%] py-12 rounded-2xl">
            <div className="z-10">
              <h2 className="text-lg font-semibold tracking-wide text-[#21BF73]">
                Hi, I&apos;m
              </h2>
              <h1 className="text-3xl sm:text-4xl xl:text-5xl font-extrabold text-gray-900 leading-tight my-1">
                Shorif Uddin Rifat
              </h1>
              <BannerAnimateText />

              <div className="flex flex-wrap gap-4 mt-5">
                {[
                  "2+ Years Experience",
                  "20+ Projects Completed",
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 "
                  >
                    <span className="h-2.5 w-2.5 rounded-full bg-[#21BF73] animate-pulse"></span>
                    <p className="text-gray-700 text-sm font-medium">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Link
                  href="https://drive.google.com/file/d/1sa3l2JMPrL1D2RXmr-njdMWB252Bd64p/view?usp=sharing"
                  className="primary_btn"
                >
                  Download Resume
                  <IoDocumentText className="text-lg" />
                </Link>
                <Link
                  href="/projects"
                  className="secondary_btn"
                >
                  Explore My Work
                  <FaEye />
                </Link>

              </div>
                  <TechStack/>
              <SocialLinks />
            </div>
          </section>

  
          <section className="w-full lg:w-[45%] flex justify-end items-center">
        
            <div className="relative w-[300px] sm:w-[340px] lg:w-[400px] aspect-[3/4]">
     
            <div 
  className="absolute bottom-0 w-full h-[75%] bg-gradient-to-t from-[#21BF73]/30 via-[#21BF73]/20 to-[#21BF73]/10 rounded-sm shadow-xl shadow-[#21BF73]/20"
>
</div>

              {/* 2. Wrapper for the image to control its position */}
              <div className="relative h-full w-full ">
                <Image
                  src={shorif_img}
                  alt="Shorif Uddin Rifat"
                  fill
                  className="object-contain scale-110 drop-shadow-xl "
                  priority
                />
              </div>
            </div>
          </section>
        </main>
      </Container>
    </div>
  );
}