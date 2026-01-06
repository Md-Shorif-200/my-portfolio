"use client";
import { motion } from "framer-motion";
import { FaCode, FaLayerGroup, FaUserCheck, FaRocket } from "react-icons/fa";
import Container from "./Container";

const cardData = [
  {
    id: "1",
    icon: <FaCode />,
    title: "Clean Code",
    desc: "Readable, maintainable, and scalable code following best practices.",
  },
  {
    id: "2",
    icon: <FaLayerGroup />,
    title: "Scalability",
    desc: "Component-driven architecture designed to grow with the product.",
  },
  {
    id: "3",
    icon: <FaUserCheck />,
    title: "User Experience",
    desc: "Intuitive, accessible, and user-focused interface design.",
  },
  {
    id: "4",
    icon: <FaRocket />,
    title: "Real-World Delivery",
    desc: "Production-ready features built for real users and deadlines.",
  },
];

const FocusCardsSection = () => {
  return (
    <div className="bg_color">
      <Container>
        <div className="w-full  lg:pt-6 ">
          <div className="FocusCard_secton grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
            {cardData.map((data) => (
              <motion.div
                key={data.id}
                whileHover="hover"
                initial="initial"
                variants={{
                  initial: {},
                  hover: { y: -17 },
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className=" bg-white shadow-xs border-[1px] border-gray-300  relative overflow-hidden  rounded-xl text-center py-6 cursor-pointer group"
              >
                {/* 🔴 Hover Background */}
                <motion.div
                  variants={{
                    initial: { width: 0 },
                    hover: { width: "100%" },
                  }}
                  transition={{ duration: 0.45, ease: "easeInOut" }}
                  className="absolute top-0 left-0 h-full bg-[#21BF73] z-0"
                />

                {/* Card Content */}
                <div className="featurd_card relative z-10 text-black group-hover:text-white transition duration-300">
                  <div className="  icon w-[60px] h-[60px] flex justify-center items-center m-auto rounded-full bg-white text-3xl primary_color border-[1px] border-[#21BF73]">
                    {data.icon}
                  </div>

                  <h3 className="text-xl font-semibold mt-6 mb-2">
                    {data.title}
                  </h3>

                  <p className="text-sm sm:text-base leading-relaxed opacity-90 px-4">
                    {data.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default FocusCardsSection;
