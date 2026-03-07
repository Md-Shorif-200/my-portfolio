import { FaGraduationCap } from "react-icons/fa";
import Link from "next/link";
import { GoDash } from "react-icons/go";
import { HiOfficeBuilding } from "react-icons/hi";
import { BsCalendar3 } from "react-icons/bs";

const education = [
  {
    id: 1,
    education: "Diploma in Computer Science & Technology",
    institute: "Chattogram Polytechnic Institute",
    cgpa: 3.18,
    mainCgpa: 4.0,
    year: "2024",
    type: "Diploma",
    description:
      "This academic journey strengthened my technical foundation and problem-solving mindset, preparing me to tackle real-world challenges in modern software development.",
  
  },
  {
    id: 2,
    education: "Complete Web Development",
    institute: "Programming Hero",
  year: "2022 - 2025",
    description:
      "A comprehensive MERN Stack development course covering MongoDB, Express, React, and Node.js — focused on building real-world, full-stack web applications using modern best practices.",
    link: "https://drive.google.com/file/d/1Lrx87aM4Kg2fOTWanowBM0RGM-9MkwPN/view?usp=sharing",
    techStack: ["React", "Node", "Express", "MongoDB"],
  },
  {
    id: 3,
    education: "Responsive Web Design",
    institute: "Creative IT Institute",
      year: "2023",
    description:
      "A professional front-end course focused on building fully responsive websites using HTML, CSS, Bootstrap, SASS, JavaScript, jQuery, and Figma for modern UI/UX development.",
    link: "https://drive.google.com/file/d/15qCQurIpKf3G7c98Um2yeVgRGlqZKoP0/view?usp=sharing",
    techStack: ["HTML", "CSS", "Bootstrap", "JavaScript"],
  },
];

export default function MyEducation() {
  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
     

      {/* Timeline Container */}
      <div className="relative space-y-8">
        {/* Timeline Line */}
        {/* <div className="absolute left-[21px] top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#21BF73] via-[#55E6A5] to-gray-200 hidden lg:block" /> */}

        {education.map((edu, index) => (
          <div
            key={edu.id}
            className="group relative"
            style={{
              animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
            }}
          >
            {/* Card Container */}
            <div className="lg:ml-16 relative">
              {/* Timeline Dot */}
              <div
                className="absolute -left-[73px] top-6 hidden lg:flex items-center justify-center
                w-11 h-11 rounded-full bg-white border-4 border-[#21BF73] shadow-lg
                transition-all duration-300 group-hover:scale-125 group-hover:rotate-12"
              >
                <FaGraduationCap className="text-lg text-[#21BF73]" />
              </div>

              {/* Main Card */}
              <div
                className="relative bg-white rounded-2xl overflow-hidden
                border border-gray-100 shadow-md
                transition-all duration-500 ease-out
                hover:shadow-2xl hover:-translate-y-2
                before:absolute before:inset-0 before:bg-gradient-to-br before:from-[#21BF73]/5 before:to-transparent before:opacity-0 before:transition-opacity before:duration-300
                hover:before:opacity-100"
              >
                {/* Top Gradient Bar */}
                <div className="h-1.5 bg-gradient-to-r from-[#21BF73] via-[#55E6A5] to-[#21BF73] bg-size-200 animate-gradient" />

                <div className="p-6 ">
                  {/* Header Section */}
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-2">
                    <div className="flex-1">
                      {/* Education Title */}
                      <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 group-hover:text-[#21BF73] transition-colors duration-300">
                        {edu.education}
                      </h3>

                
          
                
                
                    </div>




   <div className="flex-shrink-0">
                      <div className="inline-flex items-center gap-2 px-4 py-2.5 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl border border-gray-200 shadow-sm">
                        <BsCalendar3  className="text-[#21BF73]" />
                        <div className="text-sm">
                          <p className="font-semibold text-gray-800">
                            {edu.year}
                          </p>
                     
                        </div>
                      </div>
                    </div>



                
                  </div>

                     {/* Institute */}
                      <div className="flex items-center gap-2 text-gray-700 mb-5">
                        <HiOfficeBuilding className="text-[#21BF73] text-lg" />
                        <p className="font-semibold text-base md:text-lg">
                          {edu.institute}
                        </p>
                      </div>

                  {/* Badges Section */}
                  <div className={`flex flex-wrap gap-2.5 mb-6 ${edu.type ? "" : "hidden"}`}>
                    <span
                      className="inline-flex items-center px-4 py-1.5 text-xs md:text-sm font-semibold
                      bg-gradient-to-r from-[#21BF73] to-[#55E6A5] text-white
                      rounded-full shadow-sm
                      transition-all duration-300
                      hover:shadow-lg hover:scale-105"
                    >
                      {edu.type}
                    </span>
                  </div>

                  {/* Tech Stack Section */}
                  {edu.techStack && edu.techStack.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-6">
                      {edu.techStack.map((tech, idx) => (
                        <span
                          key={idx}
                          className="inline-flex items-center px-3 py-1 text-xs  font-semibold
                      bg-blue-50 text-blue-700 border border-blue-200
                      rounded-full shadow-sm
                      transition-all duration-300
                      hover:bg-blue-100 hover:scale-105"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Description */}
                  {/* <p className="text-gray-600 text-base leading-relaxed mb-6">
                    {edu.description}
                  </p> */}

                  {/* Certificate Button */}
                  {edu.link && (
                    <Link
                      href={edu.link}
                      target="_blank"
                      className="inline-flex items-center px-6 py-2.5 text-xs md:text-sm font-semibold
                      bg-gradient-to-r from-[#21BF73] to-[#55E6A5] text-white
                      rounded-lg shadow-sm
                      transition-all duration-300
                      hover:shadow-lg hover:scale-105"
                    >
                      View Certificate
                    </Link>
                  )}
                </div>

                

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#21BF73]/5 rounded-full blur-3xl transform translate-x-16 -translate-y-16" />
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#55E6A5]/5 rounded-full blur-3xl transform -translate-x-16 translate-y-16" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
