import Image from "next/image";

const MockupBlock = ({ project, accent, hovered }) => {
  return (
    <div className="relative">
      {/* Glow blob */}
      <div
        className={`absolute -inset-4 -z-10 rounded-3xl blur-3xl transition-opacity duration-500 ${accent.glow} ${
          hovered ? "opacity-10" : "opacity-5"
        }`}
      />

      {/* Card wrapper */}
      <div
        className={`rounded-[20px] p-[1px] ring-1 transition-all duration-500 ${accent.ring} ${
          hovered
            ? "shadow-[0_32px_80px_-16px_rgba(0,0,0,0.18)]"
            : "shadow-[0_20px_60px_-12px_rgba(0,0,0,0.12)]"
        }`}
        style={{
          background:
            "linear-gradient(135deg,rgba(255,255,255,0.9) 0%,rgba(255,255,255,0.6) 100%)",
        }}
      >
        <div className="overflow-hidden rounded-[19px] bg-white">
          {/* Browser top bar */}
          <div className="flex items-center gap-2 border-b border-black/[0.05] bg-[#f7f7f8] px-4 py-3.5">
            <div className="flex items-center gap-1.5">
              <span className="h-3 w-3 rounded-full bg-[#ff5f57] shadow-[0_0_0_0.5px_rgba(0,0,0,0.1)]" />
              <span className="h-3 w-3 rounded-full bg-[#febc2e] shadow-[0_0_0_0.5px_rgba(0,0,0,0.1)]" />
              <span className="h-3 w-3 rounded-full bg-[#28c840] shadow-[0_0_0_0.5px_rgba(0,0,0,0.1)]" />
            </div>
            <div className="mx-auto flex h-6 w-full max-w-[220px] items-center gap-2 rounded-md bg-black/[0.05] px-3">
              <div className="h-1.5 w-1.5 rounded-full bg-black/20" />
              <div className="h-1.5 flex-1 rounded-full bg-black/[0.08]" />
            </div>
            <div className="flex items-center gap-2 opacity-40">
              <div className="h-4 w-4 rounded bg-black/10" />
              <div className="h-4 w-4 rounded bg-black/10" />
            </div>
          </div>


          <div className="relative h-[260px] w-full overflow-hidden md:h-[360px]">
            <Image
              src={project.image}
              alt={project.title}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className={`object-cover object-top transition-transform duration-700 ease-out ${
                hovered ? "scale-[1.03]" : "scale-100"
              }`}
            />
            <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white/30 to-transparent" />
          </div>
        </div>
      </div>

      {/* Floating tech pill – bottom right */}
      {project.techStack?.[0] && (
        <div
          className={`absolute -bottom-4 z-10 flex items-center gap-2 rounded-full border border-white bg-white px-4 py-2 shadow-[0_8px_24px_rgba(0,0,0,0.12)] transition-all duration-500 ${
            hovered ? "-right-3" : "-right-5"
          }`}
        >
          <span className="text-sm">
            {TECH_ICON_MAP[project.techStack[0]] ?? "⚙️"}
          </span>
          <span className="text-[12px] font-semibold text-black/70">
            {project.techStack[0]}
          </span>
        </div>
      )}

  {project.isLive && (
        <div
          className={`absolute -top-3.5 z-10 flex items-center gap-1.5 rounded-full border border-emerald-100 dark:border-emerald-900/50 bg-white dark:bg-neutral-900 px-3 py-1.5 shadow-[0_4px_20px_rgba(16,185,129,0.15)] dark:shadow-[0_4px_20px_rgba(16,185,129,0.1)] backdrop-blur-sm transition-all duration-500 ease-out ${
            hovered ? "-left-2" : "-left-4"
          }`}
        >
          {/* Animated dot */}
          <span className="relative flex h-2 w-2 shrink-0">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_6px_rgba(16,185,129,0.8)]" />
          </span>

          {/* Label */}
          <span className="bg-gradient-to-r from-emerald-600 to-teal-500 dark:from-emerald-400 dark:to-teal-300 bg-clip-text text-[10px] font-bold uppercase tracking-widest text-transparent">
            Live Project
          </span>
        </div>
      )}
    </div>
  );
};

export default MockupBlock;
