import { MdWorkHistory, MdLocationOn } from "react-icons/md";
import { GoDash } from "react-icons/go";

const work_experience = [
  {
    id: 1,
    role: "Web Developer",
    company: "Devnasa Technology",
    companyAddress: "Rangpur, Bangladesh",
    workLocation: "Remote",
    employmentType: "Full-time",
    StarDate: "July 2025",
    EndDate: "October 2025",
  },
];

export default function WorkExperience() {
  return (
    <div>
      {work_experience.map((work) => (
        <div
          key={work.id}
          className="w-full bg-white shadow-xs border px-4 py-5 rounded-lg flex gap-4 mb-6"
        >
          {/* Icon */}
          <div className="w-10 h-10 bg-[#21BF73] flex justify-center items-center rounded-full text-white shrink-0">
            <MdWorkHistory className="text-2xl" />
          </div>

          {/* Content */}
          <div className="w-full capitalize">
            {/* Role & Date */}
            <div className="w-full flex justify-between items-center">
              <p className="text-xl font-semibold text-gray-900">
                {work.role}
              </p>
              <p className="text-gray-900 text-sm flex items-center gap-1">
                {work.StarDate}
                <GoDash className="text-xl" />
                {work.EndDate}
              </p>
            </div>

            {/* Company + Location */}
            <h1 className="text-gray-900 flex items-center gap-2 mt-1">
              <GoDash className="text-xl" />
              <span className="font-normal">{work.company}</span>
            
            </h1>

            {/* Address */}
            <p className="text-gray-800 text-md mt-1">
              {work.companyAddress}
            </p>

            {/* Badges */}
            <div className="flex items-center gap-3 mt-3">
              <span className="px-4 py-1 rounded-2xl text-sm text-gray-500 bg-[#55E6A5]/10 shadow-sm shadow-green-200">
                {work.employmentType}
              </span>
              <span className="px-4 py-1 rounded-2xl text-sm text-gray-500 bg-[#55E6A5]/10 shadow-sm shadow-green-200">
                {work.workLocation}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
