import { useRef, useState } from "react";
import ContentBlock from "./ContentBlock";
import MockupBlock from "./MockupBlock";
import { ACCENTS } from "./FeaturedProject";

const ProjectCard = ({ project, index }) => {
  const isReversed = index % 2 === 1;
  const accent = ACCENTS[index % ACCENTS.length];
  const cardRef = useRef(null);
  const [hovered, setHovered] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 10;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -10;
    setTilt({ x, y });
  };

  const handleMouseLeave = () => {
    setHovered(false);
    setTilt({ x: 0, y: 0 });
  };

  return (
    <div
      className={`flex flex-col gap-14 lg:items-center lg:gap-20 ${
        isReversed ? "lg:flex-row-reverse" : "lg:flex-row"
      }`}
    >
      {/* Content */}
      <div className="w-full lg:w-[45%]">
        <ContentBlock project={project} accent={accent} index={index} />
      </div>

      {/* Mockup with tilt */}
      <div className="w-full lg:w-[55%]">
        <div
          ref={cardRef}
          onMouseEnter={() => setHovered(true)}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{
            transform: `perspective(1000px) rotateX(${tilt.y}deg) rotateY(${tilt.x}deg)`,
            transition: hovered
              ? "transform 0.1s ease-out"
              : "transform 0.5s ease-out",
          }}
        >
          <MockupBlock project={project} accent={accent} hovered={hovered} />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard