'use client';
import Image from 'next/image';
import { certifications } from '@/data/scripts';

const Certifications = () => {
  return (
    <section id="certifications" className="bg-gradient-to-r from-blue-500 to-green-500 py-12">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl font-extrabold text-white mb-6">Certifications</h1>
        <p className="text-lg text-gray-200 mb-8">
          Here are some of the certifications I have earned.
        </p>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {certifications.map((certification, index) => (
            <div key={index} className="relative flex flex-col items-center bg-white rounded-lg shadow-lg p-6 transition-transform duration-300 transform hover:scale-105">
              <Image
                src={certification.icon}
                alt={certification.name}
                width={120}
                height={120}
                className="rounded-md shadow-md mb-4 transition-transform duration-300 transform hover:scale-110"
              />
              <h2 className="text-xl font-semibold text-gray-800">{certification.name}</h2>
              <p className="text-gray-600">{certification.provider}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
