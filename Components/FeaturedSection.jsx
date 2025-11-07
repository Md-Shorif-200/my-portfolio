"use client"
import { motion } from 'framer-motion'
import { FaAward, FaCheckCircle, FaCode, FaDiscourse, FaStar } from 'react-icons/fa';
import { FaUserClock } from "react-icons/fa6";




const cardData = [

  {
    "id": "1",
    "icon": <FaCheckCircle />,
    "text": "20+ ",
    "desc": "Projects"
  },
  {
    "id": "3",
    "icon": <FaUserClock />,
    "text": "2+",
    "desc": "years experience"
  },
  {
    "id": "2",
    "icon": <FaDiscourse />,
    "text": "2+",
    "desc": "Professional Course Completed"
  }


]


const FeaturedSection = () => {
    return (
        <div className=' w-full mt-16'>
     
           <div className='grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 gap-6'>
              {
              cardData.map(data => {
                  return (
                     <motion.div
                      key={data.id}
  whileHover="hover"
  initial="initial"
  variants={{
    initial: {},
    hover: { y: -17 },
  }}
  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
  className="featurd_card  relative overflow-hidden border-[3px] border-[#55E6A5] rounded-xl text-center py-4 cursor-pointer group"
          data-aos="fade-up"
     
>
  {/*  Red Background Slide-in */}
  <motion.div
    variants={{
      initial: { width: 0 },
      hover: { width: '100%' },
    }}
    transition={{ duration: 0.5, ease: 'easeInOut' }}
    className="absolute top-0 left-0 h-full z-0 "
  />

  {/*  Card Content */}
  <div className="relative z-10 text-whtie group-hover:text-white transition duration-300">
    <div className="icon w-[60px] h-[60px] primary_color flex justify-center items-center m-auto rounded-full  text-4xl">
      {data.icon}
    </div>
    <div className="text text-4xl font-semibold my-2">
      <h2>{data.text}</h2>
    </div>
    <div className=" capitalize text-base text-[#A2A2A2]">
      <p>{data.desc}</p>
    </div>
  </div>
</motion.div>

                  )
              })
             }
           </div>

        
        </div>
    );
};

export default FeaturedSection;