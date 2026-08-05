const TechBadges = ({ techStack }) => {
  return (
    <div className="flex flex-wrap gap-2">
      {techStack.map((tech, i) => (
        <span
          key={tech}
          className="inline-flex items-center px-2.5  py-1 sm:py-1.5 rounded-xl text-[11px]  font-medium tracking-wide
                            bg-white/80 text-neutral-700 border border-gray-100
                            shadow-[0_1px_2px_rgba(0,0,0,0.04)]
                            hover:bg-white hover:text-neutral-900 hover:border-neutral-300
                            hover:shadow-[0_4px_12px_-2px_rgba(0,0,0,0.08)]
                            hover:-translate-y-0.5
                            transition-all duration-300 ease-out"
        >
          {tech}
        </span>
      ))}
    </div>
  );
};

export default TechBadges;
