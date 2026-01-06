import { MdWorkHistory } from "react-icons/md";
import { TfiLayoutLineSolid } from "react-icons/tfi";
import { GoDash } from "react-icons/go";

const work_experience = [
  {
    id: 1,
    role: "Web Developer",
    company: "Devnasa Technology",
    companyAddress: "Rangpur,bangladesh",
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
                <div key={index} className="w-full bg-white shadow-xs border-[1px]      px-2 py-4 rounded-lg flex gap-4 mb-6">
                  <div className="w-10 h-10  bg-[#21BF73] flex justify-center items-center rounded-full text-white ">
                    <MdWorkHistory className="text-2xl " />
                  </div>

                  <div className="secondary_color capitalize ">
                    <h1 className=" text-xl font-semibold">
              
                      {work?.role} 
                    </h1>
                      <h1 className="text-gray-700 flex gap-1 items-center"> <GoDash className="text-2xl" /> {work.company}</h1>
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
