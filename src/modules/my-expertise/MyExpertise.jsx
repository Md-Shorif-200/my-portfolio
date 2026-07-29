import React from 'react';
import {
  Code2,
  ShieldCheck,
  Users,
  GraduationCap,
  // Lightbulb,
  // ArrowUpRight,
  Blocks
} from 'lucide-react';
import Container from '@/src/components/Container';
import SectionTitle from '@/src/components/common/SectionTitle';

const MyExpertise = () => {
  return (
    <section className="pt-10 pb-20">
          <Container className="">

      <SectionTitle
  align="left"
  badgeText="What I Do"
  title="My Expertise"
/>

     
      <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[210px]">

        {/* ── Card 1: Full-Stack Web Development (2×2 Featured Card) ── */}
        <div className=" sm:col-span-2 lg:row-span-2 group relative bg-gradient-to-br from-gray-100 via-gray-50 to-white rounded-3xl p-4 sm:p-6 flex flex-col justify-between overflow-hidden shadow-sm hover:shadow-lg hover:border hover:border-ds-border hover:-translate-y-0.5 transition-all duration-300 border border-gray-100">

          {/* Watermark Icon */}
          <div className="absolute right-6 bottom-6 opacity-[0.06] pointer-events-none text-gray-900">
            <Blocks size={170} strokeWidth={1.25} />
          </div>

          {/* Header Row */}
          <div className="relative z-10 flex items-start justify-between">
            <div className="w-10  sm:w-12 h-10  sm:h-12 rounded-xl bg-white shadow-sm border border-gray-100 flex items-center justify-center text-gray-900">
              <Code2 size={22} />
            </div>
            {/* <ArrowUpRight size={18} className="text-gray-300 group-hover:text-gray-600 transition-colors duration-200" /> */}
          </div>

          {/* Body Content */}
          <div className="relative z-10 mt-3  lg:mt-12">
            <h3 className="text-2xl md:text-3xl font-bold text-ds-text leading-tight">
              Full-Stack  Development
            </h3>
            <p className=" mt-1 sm:mt-3 text-ds-muted-foreground text-sm sm:text-base font-medium md:text-base leading-relaxed max-w-sm">
              Building scalable web applications from end-to-end.
            </p>
          </div>
        </div>

        {/* ── Card 2: Performance & Quality Assurance ── */}
        <div className="group relative bg-gradient-to-br from-orange-50 via-white to-white rounded-3xl p-4 sm:p-6 flex flex-col justify-between overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-0.5 hover:border hover:border-ds-border transition-all duration-300 border border-gray-100">

          <div className="absolute right-3 bottom-3 opacity-[0.08] pointer-events-none text-orange-900">
            <ShieldCheck size={100} strokeWidth={1.5} />
          </div>

          <div className="relative z-10 flex items-start justify-between">
            <div className="w-10 h-10 rounded-xl bg-white shadow-sm border border-gray-100 flex items-center justify-center text-gray-900">
              <ShieldCheck size={18} />
            </div>
            {/* <ArrowUpRight size={14} className="text-gray-300 group-hover:text-gray-500 transition-colors duration-200" /> */}
          </div>

          <div className="relative z-10">
            <h3 className="text-xl lg:text-base xl:text-xl font-bold text-ds-text leading-snug">
              Performance & Quality Assurance
            </h3>
            <p className="mt-1 text-ds-muted-foreground text-sm sm:text-base lg:text-sm  font-medium leading-relaxed">
              Optimizing speed and ensuring bug-free, reliable code.
            </p>
          </div>
        </div>

        {/* ── Card 3: Product Mindset & Collaboration ── */}
        <div className="group  relative bg-gradient-to-br from-sky-50 via-white to-white rounded-3xl p-3 sm:p-6 flex flex-col justify-between overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-0.5 hover:border hover:border-ds-border transition-all duration-300 border border-gray-100">

          <div className="absolute right-3 bottom-3 opacity-[0.08] pointer-events-none text-sky-900">
            <Users size={100} strokeWidth={1.5} />
          </div>

          <div className="relative z-10 flex items-start justify-between">
            <div className="w-10 h-10 rounded-xl bg-white shadow-sm border border-gray-100 flex items-center justify-center text-gray-900">
              <Users size={18} />
            </div>
            {/* <ArrowUpRight size={14} className="text-gray-300 group-hover:text-gray-500 transition-colors duration-200" /> */}
          </div>

          <div className="relative z-10">
            <h3 className="text-xl lg:text-base xl:text-xl font-bold text-ds-text leading-snug">
              Product Mindset & Collaboration
            </h3>
            <p className="mt-1 text-ds-muted-foreground text-sm sm:text-base lg:text-sm  font-medium leading-relaxed">
              Working closely with teams to build user-focused products.
            </p>
          </div>
        </div>

        {/* ── Card 4: Mentorship ── */}
        <div className="group relative  sm:col-span-2 bg-gradient-to-br from-violet-50 via-white to-white rounded-3xl p-4 sm:p-6 flex flex-col justify-between overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-0.5 hover:border hover:border-ds-border transition-all duration-300 border border-gray-100">

          <div className="absolute right-3 bottom-3 opacity-[0.08] pointer-events-none text-violet-900">
            <GraduationCap size={100} strokeWidth={1.5} />
          </div>

          <div className="relative z-10 flex items-start justify-between">
            <div className="w-10 h-10 rounded-xl bg-white shadow-sm border border-gray-100 flex items-center justify-center text-gray-900">
              <GraduationCap size={18} />
            </div>
            {/* <ArrowUpRight size={14} className="text-gray-300 group-hover:text-gray-500 transition-colors duration-200" /> */}
          </div>

          <div className="relative z-10">
            <h3 className="text-xl lg:text-base xl:text-xl font-bold text-ds-text leading-snug">
              Mentorship
            </h3>
            <p className="mt-1 text-ds-muted-foreground text-sm sm:text-base lg:text-sm  font-medium leading-relaxed">
            Guiding and developing the company&apos;s new developers.
            </p>
          </div>
        </div>

        {/* ── Card 5: Innovative Solutions ── */}
        {/* <div className="group relative bg-gradient-to-br from-amber-50 via-white to-white rounded-3xl p-4 sm:p-6 flex flex-col justify-between overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-0.5 hover:border hover:border-ds-border transition-all duration-300 border border-gray-100">

          <div className="absolute right-4 bottom-4 opacity-[0.08] pointer-events-none text-amber-900">
            <Lightbulb size={90} strokeWidth={1.5} />
          </div>

          <div className="relative z-10 flex items-start justify-between">
            <div className="w-10 h-10 rounded-xl bg-white shadow-sm border border-gray-100 flex items-center justify-center text-gray-900">
              <Lightbulb size={18} />
            </div>
            // <ArrowUpRight size={14} className="text-gray-300 group-hover:text-gray-500 transition-colors duration-200" />
          </div>

          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold text-ds-text leading-snug">
              Innovative Solutions
            </h3>
            <p className="mt-1 text-ds-muted-foreground text-sm sm:text-base lg:text-sm  font-medium leading-relaxed">
              Solving complex problems with creative technology.
            </p>
          </div>
        </div> */}

      </div>
    </Container>
    </section>
  );
};

export default MyExpertise;