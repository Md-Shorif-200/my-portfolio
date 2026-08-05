"use client";

import { Sparkles } from "lucide-react";

const SectionTitle = ({
  badgeText,
  title,
  align = "center",
}) => {
  const alignmentClasses = {
    left: "text-left items-start",
    center: "text-center items-center",
    right: "text-right items-end",
  };

  return (
    <div className={`flex flex-col ${alignmentClasses[align]} mb-6 sm:mb-10`}>
      
   {/* ── Glassmorphic Pulse Badge ── */}
{badgeText && (
  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-gray-200/80 bg-white/80 backdrop-blur-md shadow-xs mb-3 transition-all duration-300 hover:border-gray-300">
    <span className="relative flex h-2 w-2">
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
    </span>
    <span className="text-[11px] font-medium tracking-wider text-gray-700 uppercase">
      {badgeText}
    </span>
  </div>
)}

      {/* ── Heading ── */}
      <h2 className="relative text-3xl sm:text-4xl lg:text-5xl  font-bold text-ds-primary tracking-tight leading-[1.15]">
        {title}
      </h2>

      {/* ── Decorative Rule ── */}
      <div
        className={`mt-5 flex items-center gap-2 ${
          align === "center" ? "justify-center" : align === "right" ? "justify-end" : "justify-start"
        }`}
      >
        <span className="block h-[3px] w-8 rounded-full bg-[#0A0A0A]" />
        <span className="block h-[3px] w-3 rounded-full bg-[#0A0A0A]/30" />
        <span className="block h-[3px] w-1.5 rounded-full bg-[#0A0A0A]/10" />
      </div>
    </div>
  );
};

export default SectionTitle;