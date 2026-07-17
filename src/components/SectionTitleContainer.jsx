import React from "react";

export default function SectionTitleContainer({
  title,
  paragrap,
  btn_1,
  btn_2,
}) {
  return (
    <div className="w-full  max-w-2xl mx-auto text-center flex flex-col items-center justify-center ">
      <h1 className="text-3xl  lg:text-4xl capitalize primary_color">
        {" "}
        {title}{" "}
      </h1>
      <p className="text-base text-[#A2A2A2] mt-3 ">{paragrap}</p>

      <div
        className={`${
          btn_1 && btn_2
            ? "flex flex-col lg:flex-row items-center gap-4 mt-8 mb-8 xl:mb-0"
            : "hidden opacity-0"
        }`}
      >
        <button className="primary_btn flex items-center gap-3">{btn_1}</button>
        <button className="secondary_btn flex items-center gap-3">
          {btn_2}
        </button>
      </div>
    </div>
  );
}
