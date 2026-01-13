import { MdWorkHistory, MdLocationOn } from "react-icons/md";
import { GoDash } from "react-icons/go";

const work_experience = [
  {
    id: 1,
    role: "Web Developer",
    company: "Devnasa Technology",
    companyAddress: "Rangpur, Bangladesh",
    workLocation: "Remote",
    employmentType: "Internship",
    employmentMode: "Full-time",
    StarDate: "July 2025",
    EndDate: "October 2025",
  },
];

export default function WorkExperience() {
  return (
    <div className="space-y-6">
      {work_experience.map((work) => (
        <div
          key={work.id}
          className="group relative bg-white border border-gray-200 rounded-xl p-6
          shadow-sm transition-all duration-300
          hover:-translate-y-1 hover:shadow-lg"
        >
          {/* Left Accent Line */}
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
                <MdWorkHistory className="text-xl" />
              </div>
            </div>

            {/* Content */}
            <div className="flex-1">
              {/* Role & Date */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                <h3 className="text-lg md:text-xl font-semibold text-gray-900">
                  {work.role}
                </h3>

                <p className="text-sm text-gray-600 flex items-center gap-1">
                  {work.StarDate}
                  <GoDash className="text-lg" />
                  {work.EndDate}
                </p>
              </div>

              {/* Company */}
              <p className="mt-1 flex items-center gap-1 text-gray-700 font-medium">
                <GoDash className="text-xl text-[#21BF73]" />
                {work.company}
              </p>

              {/* Address */}
              <p className="mt-1 flex items-center gap-1 text-gray-600 text-sm">
                <MdLocationOn className="text-[#21BF73]" />
                {work.companyAddress}
              </p>

              {/* Badges */}
              <div className="flex flex-wrap gap-3 mt-4">
                <span className="px-4 py-1 text-sm font-medium
                text-[#21BF73] bg-[#21BF73]/10 rounded-full">
                  {work.employmentMode}
                </span>
                <span className="px-4 py-1 text-sm font-medium
                text-[#21BF73] bg-[#21BF73]/10 rounded-full">
                  {work.employmentType}
                </span>

                <span className="px-4 py-1 text-sm font-medium
                text-[#21BF73] bg-[#21BF73]/10 rounded-full">
                  {work.workLocation}
                </span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
