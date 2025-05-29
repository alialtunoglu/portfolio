import React from 'react';
import { motion } from 'framer-motion';
import './i18n/i18n'; // Initialize i18n

import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import WhatIDo from './components/WhatIDo';
import OpenSourceProjects from './components/OpenSourceProjects';
import Achievements from './components/Achievements';
import Blogs from './components/Blogs';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';
import ScrollToTopButton from './components/ScrollToTopButton';

function App() {
  return (
    <div className="dark min-h-screen bg-gray-900 text-white">
      <div className="relative">
        {/* Background gradient */}
        <div className="fixed inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 -z-10"></div>
        
        {/* Navbar */}
        <Navbar />
        
        {/* Main content */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative z-10"
        >
          <div id="hero">
            <HeroSection />
          </div>
          <div id="whatido">
            <WhatIDo />
          </div>
          <div id="projects">
            <OpenSourceProjects />
          </div>
          <div id="achievements">
            <Achievements />
          </div>
          <div id="blogs">
            <Blogs />
          </div>
          <div id="education">
            <Education />
          </div>
          <div id="experience">
            <Experience />
          </div>
          <div id="skills">
            <Skills />
          </div>
          <div id="contact">
            <Contact />
          </div>
        </motion.div>
        
        <ScrollToTopButton />
      </div>
    </div>
  );
}

export default App;
