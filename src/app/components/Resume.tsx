'use client';
import '../../styles/globals.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

const Resume: React.FC = () => {
  return (
    <section id="resume" className="py-12 px-6 text-center bg-[#f0f4ff] border-b-4 border-blue-300">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-extrabold text-blue-900 mb-6">Resume</h1>
        <p className="text-lg text-gray-700 mb-8">
          Interested in learning more about my experience? Download my resume using the link below.
        </p>
        <a
          href="/Kalyan_Resume.pdf"
          download="Kalyan_Resume.pdf"
          className="text-white bg-blue-600 hover:bg-blue-700 font-semibold py-3 px-5 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105"
        >
          <FontAwesomeIcon icon={faDownload} />
          Click to download my Resume
        </a>
      </div>
    </section>
  );
};

export default Resume;
