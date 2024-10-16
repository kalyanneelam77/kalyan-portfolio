'use client';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="text-gray-900 py-20">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-5xl font-extrabold text-center mb-10"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          About Me
        </motion.h2>
        <motion.p 
          className="text-lg leading-relaxed text-center max-w-3xl mx-auto text-gray-700"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Hi, I'm <span className="text-blue-600 font-semibold">Emily Smith</span>!
          I'm a data scientist specializing in <span className="text-blue-600 font-semibold">Machine Learning</span> and <span className="text-blue-600 font-semibold">Python</span>. I am dedicated to leveraging data to solve complex problems and drive informed decision-making.
          <br /><br />
          My expertise spans across building predictive models, analyzing large datasets, and developing algorithms that unlock insights from data. I'm particularly passionate about exploring the intersection of <span className="text-blue-600 font-semibold">AI</span> and <span className="text-blue-600 font-semibold">sustainable development</span>.
          <br /><br />
          I thrive in collaborative environments where I can apply my skills to contribute to impactful projects. Let's connect and explore how we can harness the power of data to create innovative solutions!
        </motion.p>
      </div>
    </section>
  );
};

export default About;
