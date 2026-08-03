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

          {/* Screenshot */}
          <div className="relative overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className={`h-[260px] w-full object-cover object-top transition-transform duration-700 ease-out md:h-[340px] ${
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

      {/* Floating live badge – top left */}
      <div
        className={`absolute -top-4 z-10 flex items-center gap-2 rounded-full border border-white bg-white px-4 py-2 shadow-[0_8px_24px_rgba(0,0,0,0.10)] transition-all duration-500 ${
          hovered ? "-left-3" : "-left-5"
        }`}
      >
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
        </span>
        <span className="text-[11px] font-semibold text-black/60">Live</span>
      </div>
    </div>
  );
};

export default MockupBlock