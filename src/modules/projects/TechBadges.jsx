const TechBadges = ({ techStack }) => {
  return (
    <div className="flex flex-wrap gap-2">
      {techStack.map((tech, i) => (
        <span
          key={tech}
          className="inline-flex items-center px-2.5  py-1 sm:py-1.5 rounded-xl text-[11px]  font-medium tracking-wide
                            bg-white/80 dark:bg-neutral-800/80 text-neutral-700 dark:text-neutral-300 border border-gray-100 dark:border-neutral-700
                            shadow-[0_1px_2px_rgba(0,0,0,0.04)] dark:shadow-none
                            hover:bg-white dark:hover:bg-neutral-800 hover:text-neutral-900 dark:hover:text-white hover:border-neutral-300 dark:hover:border-neutral-600
                            hover:shadow-[0_4px_12px_-2px_rgba(0,0,0,0.08)] dark:hover:shadow-[0_4px_12px_-2px_rgba(0,0,0,0.3)]
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