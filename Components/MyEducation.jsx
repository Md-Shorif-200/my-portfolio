import { FaGraduationCap } from "react-icons/fa";
import Link from "next/link";




const education = [
  {
    id: 1,
    education: "diploma in computer science & technology",
    institute: "chattogram polytechnic institute",
    cgpa: 3.18,
    mainCgpa: 4.00,
    description: `I completed my Diploma in Engineering in Computer Science and Technology from Chattogram Polytechnic Institute. This journey deepened my technical foundation and strengthened my problem-solving mindset, preparing me for real-world challenges in the field of technology.`,
  },
  {
    id: 2,
    education: "Complete Web Development",
    institute: "Programming  hero",
    description: `I completed my Diploma in Engineering in Computer Science and Technology from Chattogram Polytechnic Institute. This journey deepened my technical foundation and strengthened my problem-solving mindset, preparing me for real-world challenges in the field of technology.`,
    link: "fdfds",
  },
  {
    id: 3,
    education: "responsive web design",
    institute: "creative it institute",
    description: `I completed my Diploma in Engineering in Computer Science and Technology from Chattogram Polytechnic Institute. This journey deepened my technical foundation and strengthened my problem-solving mindset, preparing me for real-world challenges in the field of technology.`,
    link: "fdsfs",
  },
];



export default function MyEducation() {
  return (
   <div>
            {education?.map((edu, index) => {
              return (
                <div key={index} className="secondary_color flex gap-4 mb-6 ">
                  <div className="w-[200px] h-[40px] flex justify-center items-center border rounded-lg">
                    <FaGraduationCap className="text-2xl " />
                  </div>

                  <div className="secondary_color capitalize">
                    <h1 className=" text-xl font-semibold">
                      {" "}
                      {edu?.education}{" "}
                    </h1>
                    <p className="text-gray-300 text-xl mt-2">
                      {" "}
                      {edu?.institute}
                    </p>
                    <p className={`${edu.cgpa && edu.mainCgpa ? "w-[200px] rounded-2xl py-1 text-center text-gray-300 text-base bg-[#55E6A5]/10 shadow-sm shadow-green-200 mt-4" : "hidden"}`}>
                      {" "}
                      CGPA {edu?.cgpa} out of {edu?.mainCgpa}
                    </p>
                    <p className="text-gray-400 text-base mt-4 mb-5 text-justify">
                      {edu?.description}
                    </p>

                        <Link href={edu?.link ? edu.link : ""} className={`${edu.link ? "capitalize  cursor-pointer bg-[#55E6A5]/10 shadow-sm shadow-green-200 px-4 py-1" : "hidden"}`}>
                             Certificate
                         </Link>
                  </div>
                </div>
              );
            })}
          </div>
  )
}
