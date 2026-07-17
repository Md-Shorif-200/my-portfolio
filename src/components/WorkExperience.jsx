import { MdWorkHistory, MdLocationOn } from "react-icons/md";
import { GoDash } from "react-icons/go";
import { HiOfficeBuilding } from "react-icons/hi";
import { BsCalendar3 } from "react-icons/bs";

const work_experience = [
  {
    id: 1,
    role: "Frontend Developer",
    company: "Bigmod Technologies",
    companyAddress: "Dhaka, Bangladesh",
    workLocation: "Remote",
    employmentMode: "Full-time",
    StarDate: "January 2026",
    EndDate: "Present",
  },
  {
    id: 2,
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
    <div className="max-w-4xl mx-auto py-8 px-4">
   

      {/* Timeline Container */}
      <div className="relative space-y-8">
        {/* Timeline Line */}
        {/* <div className="absolute left-[21px] top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#21BF73] via-[#55E6A5] to-gray-200 hidden lg:block" /> */}

        {work_experience.map((work, index) => (
          <div
            key={work.id}
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
                w-11 h-11 rounded-full bg-surface border-4 border-primary shadow-lg
                transition-all duration-300 group-hover:scale-125 group-hover:rotate-12"
              >
                <MdWorkHistory className="text-lg text-[#21BF73]" />
              </div>

              {/* Main Card */}
              <div
                className="relative bg-surface rounded-2xl overflow-hidden
                border border-soft shadow-md
                transition-all duration-500 ease-out
                hover:shadow-2xl hover:-translate-y-2
                before:absolute before:inset-0 before:bg-gradient-to-br before:from-[#21BF73]/5 before:to-transparent before:opacity-0 before:transition-opacity before:duration-300
                hover:before:opacity-100"
              >
                {/* Top Gradient Bar */}
                <div className="h-1.5 bg-gradient-to-r from-[#21BF73] via-[#55E6A5] to-[#21BF73] bg-size-200 animate-gradient" />

                <div className="p-6 md:p-8">
                  {/* Header Section */}
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-5">
                    <div className="flex-1">
                      {/* Role */}
                      <h3 className="text-xl md:text-2xl font-bold text-heading mb-2 group-hover:text-primary transition-colors duration-300">
                        {work.role}
                      </h3>

                      {/* Company */}
                      <div className="flex items-center gap-2 text-subtle mb-2">
                        <HiOfficeBuilding className="text-[#21BF73] text-lg flex-shrink-0" />
                        <p className="font-semibold text-base md:text-lg">
                          {work.company}
                        </p>
                      </div>

                      {/* Location */}
                      <div className="flex items-center gap-2 text-soft">
                        <MdLocationOn className="text-[#21BF73] text-lg flex-shrink-0" />
                        <p className="text-sm md:text-base">
                          {work.companyAddress}
                        </p>
                      </div>
                    </div>

                    {/* Date Badge */}
                    <div className="flex-shrink-0">
                      <div className="inline-flex items-center gap-2 px-4 py-2.5 bg-surface-muted rounded-xl border border-soft shadow-sm">
                        <BsCalendar3 className="text-[#21BF73]" />
                        <div className="text-sm">
                          <p className="font-semibold text-heading">
                            {work.StarDate}
                          </p>
                          <div className="flex items-center gap-1 text-subtle">
                            <span className="text-xs">to</span>
                            <span className={`font-medium ${work.EndDate === 'Present' ? 'text-[#21BF73]' : ''}`}>
                              {work.EndDate}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Badges Section */}
                  <div className="flex flex-wrap gap-2.5">
                    <span
                      className="inline-flex items-center px-4 py-1.5 text-xs md:text-sm font-semibold
                      bg-gradient-to-r from-[#21BF73] to-[#55E6A5] text-white
                      rounded-full shadow-sm
                      transition-all duration-300
                      hover:shadow-lg hover:scale-105"
                    >
                      {work.employmentMode}
                    </span>

                    {work.employmentType && (
                      <span
                        className="inline-flex items-center px-4 py-1.5 text-xs md:text-sm font-semibold
                        bg-primary-soft text-primary border border-primary/20
                        rounded-full shadow-sm
                        transition-all duration-300
                        hover:bg-amber-100 hover:scale-105"
                      >
                        {work.employmentType}
                      </span>
                    )}

                    <span
                      className="inline-flex items-center px-4 py-1.5 text-xs md:text-sm font-semibold
                      bg-surface-muted text-subtle border border-soft
                      rounded-full shadow-sm
                      transition-all duration-300
                      hover:bg-blue-100 hover:scale-105"
                    >
                      {work.workLocation}
                    </span>
                  </div>
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