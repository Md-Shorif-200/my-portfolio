import { FaGraduationCap } from "react-icons/fa";
import Link from "next/link";

import { GoDash } from "react-icons/go";



const education = [
  {
    id: 1,
    education: "diploma in computer science & technology",
    institute: "chattogram polytechnic institute",
    cgpa: 3.18,
    mainCgpa: 4.00,
    description: `This academic journey strengthened my technical foundation and problem-solving mindset, preparing me to tackle real-world challenges in modern software development.`,
  },
  {
    id: 2,
    education: "Complete Web Development",
    institute: "Programming  hero",
    description: `A comprehensive MERN Stack development course covering MongoDB, Express, React, and Node.js — designed to build real-world, full-stack web applications with modern tools and best practices.`,
    link: "https://drive.google.com/file/d/1Lrx87aM4Kg2fOTWanowBM0RGM-9MkwPN/view?usp=sharing",
  },
  {
    id: 3,
    education: "responsive web design",
    institute: "creative it institute",
    description: `A professional front-end design course focused on creating fully responsive websites using HTML, CSS, Bootstrap, SASS, JavaScript, jQuery, and Figma for modern UI/UX development.`,
    link: "https://drive.google.com/file/d/15qCQurIpKf3G7c98Um2yeVgRGlqZKoP0/view?usp=sharing",
  },
];



export default function MyEducation() {
  return (
   <div>
            {education?.map((edu, index) => {
              return (
                <div key={index} className=" w-full bg-white shadow-xs border-[1px]      px-2 py-4 rounded-lg flex gap-4 mb-6"  
                // data-aos="fade-up"
                >
                <div className="w-[8%]">
                       <div className="w-10 h-10  bg-[#21BF73] flex justify-center items-center rounded-full text-white ">
                    <FaGraduationCap className="text-2xl " />
                  </div>
                </div>

                  <div className="w-[92%]  capitalize pr-8">
                    <h1 className=" text-xl font-semibold ">
                      {" "}
                      {edu?.education}{" "}
                    </h1>
                    <p className="text-gray-700 text-md mt-1 flex items-center gap-1">
                        <GoDash className="text-2xl"/>
                      {" "}
                      {edu?.institute}
                    </p>
                    {/* <p className={`${edu.cgpa && edu.mainCgpa ? "w-[160px] rounded-2xl py-1 text-center text-gray-700 font-semibold text-base bg-[#55E6A5]/10 shadow-sm shadow-green-200 mt-4" : "hidden"}`}>
                      {" "}
                      CGPA {edu?.cgpa} out of {edu?.mainCgpa}
                    </p> */}
                    <p className="text-gray-600 text-base mt-2 mb-5 text-justify">
                      {edu?.description}
                    </p>

                        <Link href={edu?.link ? edu.link : ""} className={`${edu.link ? " border-[1px] border-[#21BF73] text-[12px] text-black px-3 py-1.5 rounded-md font-semibold transition-all shadow-sm  uppercase hover:bg-[#21BF73] hover:text-white " : "hidden"}`}>
                             Certificate
                         </Link>
                  </div>
                </div>
              );
            })}
          </div>
  )
}
