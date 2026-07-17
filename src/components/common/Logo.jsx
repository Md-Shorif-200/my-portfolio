// components/common/Logo.jsx
import React from "react";
import { FaCode } from "react-icons/fa";

const Logo = () => {
  return (
    <div className="flex items-center gap-2.5 cursor-pointer group">
      {/* Icon Box */}
      <div
        className="
          relative flex items-center justify-center
          w-9 h-9 rounded-xl
          bg-zinc-900 dark:bg-white
          transition-all duration-300
          group-hover:rounded-2xl
          group-hover:shadow-[0_4px_16px_rgba(0,0,0,0.18)]
          dark:group-hover:shadow-[0_4px_16px_rgba(255,255,255,0.12)]
        "
      >
        <FaCode className="text-base text-white dark:text-zinc-900" />
      </div>

      {/* Wordmark */}
      <span
        className="
          text-[15px] font-black tracking-[3px] uppercase
          text-zinc-900 dark:text-white
          transition-all duration-300
          group-hover:tracking-[4px]
        "
      >
        Shorif
      </span>
    </div>
  );
};

export default Logo;