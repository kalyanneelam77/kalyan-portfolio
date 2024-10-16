"use client"; // Ensure this is at the top to make it a client component

import { useState } from 'react';
import Link from 'next/link';
import Home from './components/Home'; // Ensure the path is correct
import Projects from './components/Projects';
import Internships from './components/Internships';
import Skills from './components/Skills';
import Education from './components/Education';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Certifications from './components/Certification';

// Navbar component
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(prevState => !prevState);
  };

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      width: '100%',
      zIndex: 1000,
      backgroundColor: 'rgba(0, 0, 0, 0.8)', // Optional: background for visibility
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '0.2rem', // Reduced padding for a smaller navbar
      }}>
        <button onClick={toggleMenu} style={{
          position: 'absolute',
          left: '1rem',
          backgroundColor: 'transparent',
          border: 'none',
          cursor: 'pointer',
        }}>
          <div style={{ width: '25px', height: '3px', backgroundColor: 'white', margin: '4px 0' }}></div>
          <div style={{ width: '25px', height: '3px', backgroundColor: 'white', margin: '4px 0' }}></div>
          <div style={{ width: '25px', height: '3px', backgroundColor: 'white', margin: '4px 0' }}></div>
        </button>
        <h1 style={{ color: 'white', flexGrow: 1, textAlign: 'center', fontSize: '1.5rem' }}>PORTFOLIO</h1>
      </div>
      <div style={{
        display: isOpen ? 'block' : 'none',
        position: 'absolute',
        top: '100%',
        left: 0,
        right: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.9)',
        padding: '0.5rem', // Reduced padding for dropdown
        textAlign: 'center',
      }}>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li style={{ margin: '10px 0' }}><Link href="#home" onClick={toggleMenu}>Home</Link></li>
          <li style={{ margin: '10px 0' }}><Link href="#projects" onClick={toggleMenu}>Projects</Link></li>
          <li style={{ margin: '10px 0' }}><Link href="#resume" onClick={toggleMenu}>Resume</Link></li>
          <li style={{ margin: '10px 0' }}><Link href="#internships" onClick={toggleMenu}>Internships</Link></li>
          <li style={{ margin: '10px 0' }}><Link href="#skills" onClick={toggleMenu}>Skills</Link></li>
          <li style={{ margin: '10px 0' }}><Link href="#certifications" onClick={toggleMenu}>Certifications</Link></li>
          <li style={{ margin: '10px 0' }}><Link href="#education" onClick={toggleMenu}>Education</Link></li>
          <li style={{ margin: '10px 0' }}><Link href="#contact" onClick={toggleMenu}>Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
};

// Footer component
const Footer = () => {
  const footerStyle: React.CSSProperties = {
    padding: '20px',
    textAlign: 'center' as 'center',
    background: 'linear-gradient(to right, #4CAF50, #8BC34A)',
    color: '#FFFFFF',
    borderTop: '5px solid #333333',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
  };

  const paragraphStyle: React.CSSProperties = {
    margin: '0',
    fontSize: '18px',
    transition: 'color 0.3s ease',
  };

  return (
    <footer style={footerStyle}>
      <p style={paragraphStyle}>
        © 2024 Tirumala Venkata Kalyan made with ❤️
      </p>
    </footer>
  );
};

// Main Page component
export default function Page() {
  return (
    <>
      <Navbar />
      <Home />
      <Projects />
      <Resume />
      <Internships />
      <Certifications />
      <Skills />
      <Education />
      <Contact />
      <Footer />
    </>
  );
}
