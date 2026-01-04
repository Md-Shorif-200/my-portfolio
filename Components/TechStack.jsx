import React from 'react'
import {
  SiJavascript,
  SiTypescript,
  SiNextdotjs,
  SiRedux,
  SiExpress,
} from 'react-icons/si';
import { FaReact } from 'react-icons/fa';
import { DiMongodb } from 'react-icons/di';
import { PiFramerLogoFill } from 'react-icons/pi';

const techs = [
  { Icon: SiJavascript, color: '#F7DF1E' },
  { Icon: SiTypescript, color: '#3178C6' },
  { Icon: FaReact, color: '#61DAFB' },
  { Icon: SiNextdotjs, color: '#000000' },
  { Icon: SiRedux, color: '#764ABC' },
  { Icon: SiExpress, color: '#444444' },
  { Icon: DiMongodb, color: '#47A248' },
  { Icon: PiFramerLogoFill, color: '#000000' },
];

export const TechStack = () => {
  return (
    <main className="flex items-center mt-6">
      {techs.map(({ Icon, color }, index) => (
        <div
          key={index}
          className={`Techstack_Div_1 -ml-5 ${index == 0 ? "ml-0" : ""}`}
          style={{ zIndex: index * 10 }}
        >
          <div className="Techstack_Div_2">
            <Icon className="icon text-[22px]" style={{ color }} />
          </div>
        </div>
      ))}

      {/* 🔥 Last Circle (11+) */}
      <div
        className="Techstack_Div_1 -ml-6"
        style={{ zIndex: techs.length * 10 }}
      >
        <div className="Techstack_Div_2 bg-white flex items-center justify-center">
          <span className="text-black text-lg font-semibold">10+</span>
        </div>
      </div>
    </main>
  );
};
