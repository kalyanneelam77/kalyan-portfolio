import React, { useState, useEffect, useRef } from 'react'; 
import Head from 'next/head';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const texts = [
  'Welcome to my portfolio!',
  "Hello, I'm Neelam Tirumala Venkata Kalyan",
  'A Fullstack Developer',
  'An AI Enthusiast',
  'Open Source Contributor',
];

const aboutMeSentences = [
  "As a web developer, my focus lies in Next.js and React.",
  "I develop user-friendly and captivating web applications.",
  "Delivering innovative solutions is something I am truly passionate about.",
  "I love discovering new technologies and actively participating in open-source projects.",
  "I am enthusiastic about learning, growing, and working together with others.",
  "I look forward to connecting and building something extraordinary!",
];

const HomeSection = () => {
  const [displayedText, setDisplayedText] = useState(texts[0]);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentSentenceIndex, setCurrentSentenceIndex] = useState(0);
  const [aboutMeText, setAboutMeText] = useState(aboutMeSentences[0]);
  const typingRef = useRef<NodeJS.Timeout | null>(null);
  const aboutMeTypingRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const typingSpeed = 100;
    const pauseDuration = 1200;

    const typeText = () => {
      let charIndex = 0;
      setDisplayedText('');

      typingRef.current = setInterval(() => {
        setDisplayedText(prev => {
          const text = texts[currentTextIndex];
          if (charIndex < text.length) {
            charIndex += 1;
            return text.slice(0, charIndex);
          } else {
            clearInterval(typingRef.current as NodeJS.Timeout);
            typingRef.current = setTimeout(() => {
              setCurrentTextIndex(prevIndex => (prevIndex + 1) % texts.length);
              typeText();
            }, pauseDuration);
            return text;
          }
        });
      }, typingSpeed);
    };

    typeText();

    return () => {
      if (typingRef.current) {
        clearInterval(typingRef.current as NodeJS.Timeout);
      }
    };
  }, [currentTextIndex]);

  useEffect(() => {
    const aboutMeTypingSpeed = 70;
    const aboutMePauseDuration = 2000;

    const typeAboutMeSentence = () => {
      let charIndex = 0;
      setAboutMeText('');

      aboutMeTypingRef.current = setInterval(() => {
        setAboutMeText(prev => {
          const sentence = aboutMeSentences[currentSentenceIndex];
          if (charIndex < sentence.length) {
            charIndex += 1;
            return sentence.slice(0, charIndex);
          } else {
            clearInterval(aboutMeTypingRef.current as NodeJS.Timeout);
            aboutMeTypingRef.current = setTimeout(() => {
              setCurrentSentenceIndex(prevIndex => (prevIndex + 1) % aboutMeSentences.length);
              typeAboutMeSentence();
            }, aboutMePauseDuration);
            return sentence;
          }
        });
      }, aboutMeTypingSpeed);
    };

    typeAboutMeSentence();

    return () => {
      if (aboutMeTypingRef.current) {
        clearInterval(aboutMeTypingRef.current as NodeJS.Timeout);
      }
    };
  }, [currentSentenceIndex]);

  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600&display=swap"
          rel="stylesheet"
        />
      </Head>

      <section id="home" className="relative h-screen flex items-center justify-between bg-gradient-to-r from-purple-400/80 to-blue-500/80">
        <div className="relative z-10 flex flex-col items-start text-left p-6 max-w-lg mx-auto">
          <motion.p
            className="text-4xl font-semibold mb-2 text-white"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            style={{ lineHeight: '1.5' }}
          >
            {displayedText}
          </motion.p>
          <div className="flex space-x-6 mt-4">
            <motion.a
              href="https://github.com/kalyanneelam77"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white transition duration-300 hover:text-gray-200"
              whileHover={{ scale: 1.1 }}
            >
              <FaGithub size={30} />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/tirumala-venkata-kalyan-neelam-1287b0231/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white transition duration-300 hover:text-gray-200"
              whileHover={{ scale: 1.1 }}
            >
              <FaLinkedin size={30} />
            </motion.a>
          </div>

          <motion.div
            className="mt-8 p-4 bg-green-100 bg-opacity-70 rounded-lg shadow-lg text-left"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <motion.h2
              className="text-2xl font-semibold mb-2 text-center text-gray-900"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              About Me
            </motion.h2>
            <motion.p
              className="text-gray-700 text-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              {aboutMeText}
            </motion.p>
          </motion.div>
        </div>

        <motion.div
          className="relative z-10 overflow-hidden"
          whileHover={{ scale: 1.05 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <Image
            src="/myphoto.jpg"
            alt="Your Photo"
            width={600}
            height={600}
            className="h-screen object-cover rounded-lg"
          />
        </motion.div>
      </section>
    </>
  );
};

export default HomeSection;
