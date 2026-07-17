"use client";
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
        <div className="w-full lg:pt-6">
          <div className="FocusCard_secton grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
            {cardData.map((data, index) => (
              <div
                key={data.id}
                className="bg-surface border border-soft rounded-xl text-center py-6 cursor-pointer shadow-sm transition-all duration-300 ease-out hover:shadow-[0_20px_40px_-12px_rgba(0,0,0,0.15),0_8px_16px_-8px_rgba(33,191,115,0.2)] hover:-translate-y-1"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="featurd_card text-heading">
                  <div className="icon w-[60px] h-[60px] flex justify-center items-center m-auto rounded-full bg-surface text-3xl primary_color border border-primary">
                    {data.icon}
                  </div>

                  <h3 className="text-xl font-semibold mt-6 mb-2">
                    {data.title}
                  </h3>

                  <p className="text-sm sm:text-base leading-relaxed text-subtle px-4">
                    {data.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default FocusCardsSection;
