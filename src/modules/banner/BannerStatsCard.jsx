


import { HiOutlineCode } from "react-icons/hi";
import { MdOutlineWorkOutline } from "react-icons/md";
import { TbWorldCheck } from "react-icons/tb";
import { BsLightningCharge } from "react-icons/bs";


const stats = [
  {
    icon: <MdOutlineWorkOutline size={22} />,
    value: "2+ Years",
    label: "Experience",
    description: "Professional web development",
  },
  {
    icon: <TbWorldCheck size={22} />,
    value: "5+ Projects",
    label: "Real World",
    description: "Production-ready applications",
  },
  {
    icon: <HiOutlineCode size={22} />,
    value: "Clean Code",
    label: "Always",
    description: "Readable & maintainable code",
  },
  // {
  //   icon: <BsLightningCharge size={22} />,
  //   value: "Remote",
  //   label: "Friendly",
  //   description: "Available globally, anytime",
  // },
];



 
const BannerStatsCard = () => {
  return (
       <div
            className="grid grid-cols-2  min-[450px]:grid-cols-3  gap-2.5 md:gap-3 w-full md:max-w-xl lg:max-w-3xl xl:max-w-4xl mt-1"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            {stats.map((stat, index) => (
              <div
                key={index}
                className={` group relative flex items-center gap-3 min-[450px]gap-2 sm:gap-3
                  p-3 min-[450px]:p-2 sm:p-3 rounded-xl cursor-default
                  border border-ds-border
                  bg-ds-primary-foreground 
                  backdrop-blur-sm
                  transition-all duration-300 ease-out
                  hover:-translate-y-1
                  hover:border-zinc-300 dark:hover:border-zinc-600
                  hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)]
                  dark:hover:shadow-[0_8px_30px_rgba(255,255,255,0.03)]
                  hover:bg-white dark:hover:bg-zinc-900
                  overflow-hidden ${stat.value === "Clean Code" ?  "hidden min-[450px]:flex" : stat.value ==="Remote" ? "hidden sm:flex" : "flex"} `}
              >
                {/* Icon (Left side) */}
                <span
                  className="
                    p-2.5  min-[450px]:p-1.5 sm:p-2.5  rounded-lg shrink-0
                    bg-zinc-100 dark:bg-zinc-800
                    text-zinc-500 dark:text-zinc-400
                    group-hover:bg-zinc-900 dark:group-hover:bg-white
                    group-hover:text-white dark:group-hover:text-zinc-900
                    transition-all duration-300 hidden min-[450px]:block
                  "
                >
                  {stat.icon}
                </span>

                {/* Main Focus: Value & Label */}
                <div className="flex flex-col text-left">
                  <span
                    className="
                      text-base sm:text-lg font-bold leading-none
                      text-zinc-800 dark:text-zinc-100
                      group-hover:text-zinc-900 dark:group-hover:text-white
                      transition-colors duration-300
                    "
                  >
                    {stat.value}
                  </span>
                  <span
                    className="
                      text-xs sm:text-sm font-medium text-zinc-500 dark:text-zinc-400 mt-0.5
                      group-hover:text-zinc-700 dark:group-hover:text-zinc-200
                      transition-colors duration-300
                    "
                  >
                    {stat.label}
                  </span>
                </div>

                {/* Bottom accent line on hover */}
                <span
                  className="
                    absolute bottom-0 left-1/2 -translate-x-1/2
                    h-[2px] w-0 rounded-full
                    bg-zinc-800 dark:bg-white
                    group-hover:w-3/4
                    transition-all duration-500 ease-out
                  "
                />
              </div>
            ))}
          </div>

  )
}

export default BannerStatsCard