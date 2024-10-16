'use client';
import Image from 'next/image';
import { skills } from '@/data/scripts';

const SkillsSection = () => {
  return (
    <section id="skills" className="bg-gradient-to-r from-purple-500 to-orange-500 py-12">
      <div className="container mx-auto text-center max-w-4xl">
        <h1 className="mb-6 text-5xl font-extrabold text-white">Skills</h1>
        <p className="mb-8 text-lg text-gray-200">
          Discover the skills and technologies I excel in.
        </p>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill, index) => (
            <div 
              key={index} 
              className="relative flex flex-col items-center p-6 bg-white rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105"
            >
              <Image
                src={skill.icon}
                alt={skill.name}
                width={120}
                height={120}
                className="mb-4 rounded-full shadow-md transition-transform duration-300 transform hover:scale-110"
              />
              <h2 className="text-xl font-semibold text-gray-800">{skill.name}</h2>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
