import { FaGraduationCap } from "react-icons/fa";
import Link from "next/link";
import { GoDash } from "react-icons/go";

const education = [
  {
    id: 1,
    education: "Diploma in Computer Science & Technology",
    institute: "Chattogram Polytechnic Institute",
    cgpa: 3.18,
    mainCgpa: 4.0,
    description:
      "This academic journey strengthened my technical foundation and problem-solving mindset, preparing me to tackle real-world challenges in modern software development.",
  },
  {
    id: 2,
    education: "Complete Web Development",
    institute: "Programming Hero",
    description:
      "A comprehensive MERN Stack development course covering MongoDB, Express, React, and Node.js — focused on building real-world, full-stack web applications using modern best practices.",
    link: "https://drive.google.com/file/d/1Lrx87aM4Kg2fOTWanowBM0RGM-9MkwPN/view?usp=sharing",
  },
  {
    id: 3,
    education: "Responsive Web Design",
    institute: "Creative IT Institute",
    description:
      "A professional front-end course focused on building fully responsive websites using HTML, CSS, Bootstrap, SASS, JavaScript, jQuery, and Figma for modern UI/UX development.",
    link: "https://drive.google.com/file/d/15qCQurIpKf3G7c98Um2yeVgRGlqZKoP0/view?usp=sharing",
  },
];

export default function MyEducation() {
  return (
    <div className="space-y-6">
      {education.map((edu) => (
        <div
          key={edu.id}
          className="group relative bg-white border border-gray-200 rounded-xl p-6 
          shadow-sm transition-all duration-300 
          hover:-translate-y-1 hover:shadow-lg"
        >
          {/* Left Accent Bar */}
          <span className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-[#21BF73] to-[#55E6A5] rounded-l-xl" />

          <div className="lg:flex gap-5">
            {/* Icon */}
            <div className="flex-shrink-0">
              <div
                className="w-11 h-11 bg-[#21BF73]/10 text-[#21BF73] 
                flex items-center justify-center rounded-full 
                transition-all duration-300 
                group-hover:bg-[#21BF73] group-hover:text-white 
                group-hover:scale-110 group-hover:rotate-6"
              >
                <FaGraduationCap className="text-xl" />
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 pr-2">
              <h3 className="text-lg md:text-xl font-semibold text-gray-900">
                {edu.education}
              </h3>

              <p className="mt-1 flex items-center gap-1 text-gray-700 font-medium">
                <GoDash className="text-2xl text-[#21BF73]" />
                {edu.institute}
              </p>

              {/* CGPA (Optional) */}
              {/* {edu.cgpa && edu.mainCgpa && (
                <p className="inline-block mt-3 px-4 py-1 text-sm font-semibold 
                text-[#21BF73] bg-[#21BF73]/10 rounded-full">
                  CGPA {edu.cgpa} / {edu.mainCgpa}
                </p>
              )} */}

              <p className="mt-4 text-gray-600 text-base leading-relaxed text-justify">
                {edu.description}
              </p>

              {/* Certificate Button */}
              {edu.link && (
                <Link
                  href={edu.link}
                  target="_blank"
                  className="inline-flex items-center mt-5 px-5 py-2 
                  text-xs font-semibold tracking-wider uppercase 
                  text-[#21BF73] border border-[#21BF73] rounded-md
                  transition-all duration-300
                  hover:bg-[#21BF73] hover:text-white hover:shadow-md"
                >
                  View Certificate
                </Link>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
