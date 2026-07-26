"use client";

import { GraduationCap, BookOpen, Award, Calendar, Building2, CheckCircle2 } from 'lucide-react';
import Container from '@/src/components/Container';
import SectionTitle from '@/src/components/common/SectionTitle';

// Education Data
const educationData = [
  {
    year: '2019 - 2023',
    title: 'Diploma In Computer Science & Technology',
    institution: 'Chattogram Polytechnic Institute',
    description: 'Focused on core science and mathematics with an emphasis on introductory computer science.',
    icon: GraduationCap,
  },
  {
    year: '2014 - 2019',
    title: "SSC(Science)",
    institution: 'A M High School',
    description: 'Specialized in Software Engineering, algorithms, data structures, and web development.',
    icon: BookOpen,
  },

];

// Certification Data (Replaced Experience)
const certificationData = [
   {
    year: '2024',
    title: 'Complete Web Development',
    institution: 'Programming Hero',
    description: 'Advanced React patterns, state management, and responsive web design practices.',
    icon: CheckCircle2,
  },
  {
    year: '2023',
    title: 'Responsive Web Design',
    institution: 'Creative It Institute',
    description: 'Validated expertise in designing distributed systems and cloud infrastructure.',
    icon: CheckCircle2,
  },
 

];

const TimelineItem = ({ item, isLast }) => {
  const Icon = item.icon;

  return (
    <div className="group relative flex gap-4 pb-8 h-full">
      {/* Icon Node & Vertical Connector Line */}
      <div className="flex flex-col items-center">
        <div className="relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-neutral-100 text-neutral-600 transition-colors duration-300 group-hover:bg-neutral-900 group-hover:text-white">
          <Icon size={16} />
        </div>

        {!isLast && (
          <div className="mt-2 w-px flex-1 bg-neutral-200 transition-colors duration-300 group-hover:bg-neutral-400" />
        )}
      </div>

      {/* Minimalist Light Gray Content Card - Flex-col & h-full added */}
      <div className="flex flex-1 flex-col justify-between rounded-xl bg-gray-50 p-5 border border-gray-100 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:bg-neutral-100/90 group-hover:shadow-sm">
        <div>
          <div className="mb-2 flex flex-wrap items-center gap-2 text-xs font-medium text-neutral-500">
            <span className="flex items-center gap-1">
              <Calendar size={12} />
              {item.year}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Building2 size={12} />
              {item.institution}
            </span>
          </div>

          <h3 className="text-base font-semibold text-neutral-900 transition-colors duration-300">
            {item.title}
          </h3>

          <p className="mt-1.5 text-xs leading-relaxed text-neutral-600">
            {item.description}
          </p>
        </div>
      </div>
    </div>
  );
};

// Main Layout Component
const EducationAndCertifications = () => {
  return (
    <section className="pt-10 lg:pt-20 pb-10">
      <Container>
        <SectionTitle
          align="left"
          badgeText="My Journey"
          title="Education & Certification"
        />

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Education Column */}
          <div className="flex flex-col justify-between">
            {educationData.map((item, index) => (
              <TimelineItem
                key={index}
                item={item}
                isLast={index === educationData.length - 1}
              />
            ))}
          </div>

          {/* Certifications Column */}
          <div className="flex flex-col justify-between">
            {certificationData.map((item, index) => (
              <TimelineItem
                key={index}
                item={item}
                isLast={index === certificationData.length - 1}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default EducationAndCertifications;