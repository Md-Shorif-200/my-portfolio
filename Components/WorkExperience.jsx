import { MdWorkHistory } from "react-icons/md";
import { TfiLayoutLineSolid } from "react-icons/tfi";

const work_experience = [
  {
    id: 1,
    role: "MERN Stack Developer",
    company: "Devnasa Technology",
    companyAddress: "gaibandha,bangladesh",
    workLocation: "remote",
    employmentType: "full-time",
    StarDate: "July-2025 ",
    EndDate: "September-2025",
  },
];




export default function WorkExperience() {
  return (
  <div>
            {work_experience?.map((work, index) => {
              return (
                <div key={index} className="secondary_color flex gap-4 mb-6 ">
                  <div className="w-[50px] h-[40px] flex justify-center items-center border rounded-lg">
                    <MdWorkHistory className="text-2xl " />
                  </div>

                  <div className="secondary_color capitalize">
                    <h1 className=" text-xl font-semibold">
                      {" "}
                      {work?.role} - {" "}
                      <span className="text-gray-300"> {work?.company}</span>
                    </h1>
                    <p className="text-gray-300 text-xl mt-2">
                      {" "}
                      {work?.companyAddress}
                    </p>

                    <div className="flex items-center gap-3">
                      <p className="w-[100px] rounded-2xl py-1 text-center text-gray-300 text-base bg-[#55E6A5]/10 shadow-sm shadow-green-200 mt-4">
                        {" "}
                        {work?.employmentType}
                      </p>

                      <p className="w-[100px] rounded-2xl py-1 text-center text-gray-300 text-base bg-[#55E6A5]/10 shadow-sm shadow-green-200 mt-4">
                        {" "}
                        {work?.workLocation}
                      </p>
                    </div>

                    <p className="text-gray-300 text-lg mt-4 flex items-center  gap-1">
                      {work?.StarDate} <TfiLayoutLineSolid/> {work?.EndDate}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
  )
}
