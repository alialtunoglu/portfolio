import React from 'react';
import { motion } from 'framer-motion';
import HeroSection from './components/HeroSection';
import WhatIDo from './components/WhatIDo';
import OpenSourceProjects from './components/OpenSourceProjects';
import Achievements from './components/Achievements';
import Blogs from './components/Blogs';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Education from './components/Education';
import FloatingContactButton from './components/FloatingContactButton';

function App() {
  return (
    <div className="dark min-h-screen bg-gray-900 text-white">
      <div className="relative">
        {/* Background gradient */}
        <div className="fixed inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 -z-10"></div>
        
        {/* Main content */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative z-10"
        >
          <HeroSection />
          <WhatIDo />
          <OpenSourceProjects />
          <Achievements />
          <Blogs />
          <Experience />
          <Skills />
          <Education />
        </motion.div>
        
        <FloatingContactButton />
      </div>
    </div>
  );
}

export default App;
