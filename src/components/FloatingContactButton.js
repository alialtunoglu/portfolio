import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaTimes, FaComment } from 'react-icons/fa';

const FloatingContactButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const contactOptions = [
    {
      icon: FaEnvelope,
      label: "Email",
      action: () => window.open('mailto:ali.altunoglu@example.com'),
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: FaPhone,
      label: "Telefon",
      action: () => window.open('tel:+905551234567'),
      color: "from-green-500 to-green-600"
    },
    {
      icon: FaLinkedin,
      label: "LinkedIn",
      action: () => window.open('https://linkedin.com/in/alialtunoglu', '_blank'),
      color: "from-blue-600 to-blue-700"
    },
    {
      icon: FaGithub,
      label: "GitHub",
      action: () => window.open('https://github.com/alialtunoglu', '_blank'),
      color: "from-gray-700 to-gray-800"
    }
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-16 right-0 space-y-3"
          >
            {contactOptions.map((option, index) => (
              <motion.button
                key={option.label}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ delay: index * 0.05, duration: 0.2 }}
                onClick={option.action}
                className={`group flex items-center gap-3 px-4 py-3 bg-gradient-to-r ${option.color} text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 whitespace-nowrap`}
              >
                <option.icon className="text-lg" />
                <span className="font-medium">{option.label}</span>
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 rounded-full shadow-lg transition-all duration-300 flex items-center justify-center ${
          isOpen 
            ? 'bg-red-500 hover:bg-red-600' 
            : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700'
        }`}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={{ rotate: isOpen ? 180 : 0 }}
        transition={{ duration: 0.3 }}
      >
        {isOpen ? (
          <FaTimes className="text-white text-xl" />
        ) : (
          <FaComment className="text-white text-xl" />
        )}
      </motion.button>

      {/* Pulse Animation */}
      {!isOpen && (
        <motion.div
          className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 opacity-30"
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
      )}
    </div>
  );
};

export default FloatingContactButton; 