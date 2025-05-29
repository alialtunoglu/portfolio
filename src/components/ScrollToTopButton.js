import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FaChevronUp, FaRocket } from 'react-icons/fa';

const ScrollToTopButton = () => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);

  // Show button when user scrolls down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Don't render if not visible
  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Main Button */}
      <motion.button
        onClick={scrollToTop}
        className="w-14 h-14 rounded-full shadow-lg transition-all duration-300 flex items-center justify-center bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 group"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.3 }}
        title="Sayfanın başına git"
      >
        {/* Icons with transition */}
        <motion.div
          className="relative w-full h-full flex items-center justify-center"
          animate={{ rotateY: 0 }}
          whileHover={{ rotateY: 180 }}
          transition={{ duration: 0.6 }}
        >
          {/* Chevron Up Icon */}
          <FaChevronUp className="text-white text-xl absolute group-hover:opacity-0 transition-opacity duration-300" />
          
          {/* Rocket Icon */}
          <FaRocket className="text-white text-xl absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300 -rotate-45" />
        </motion.div>
      </motion.button>

      {/* Pulse Animation */}
      <motion.div
        className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 opacity-30 pointer-events-none"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0, 0.3]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </div>
  );
};

export default ScrollToTopButton; 