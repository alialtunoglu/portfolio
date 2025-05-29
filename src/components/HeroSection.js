import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FaGithub, FaLinkedin, FaMedium, FaStackOverflow, FaDownload, FaEnvelope } from 'react-icons/fa';

const HeroSection = () => {
  const { t } = useTranslation();
  
  const socialLinks = [
    { icon: FaGithub, href: "https://github.com/alialtunoglu", label: "GitHub" },
    { icon: FaLinkedin, href: "https://linkedin.com/in/alialtunoglu", label: "LinkedIn" },
    { icon: FaMedium, href: "https://medium.com/@alialtunoglu02", label: "Medium" },
    { icon: FaStackOverflow, href: "https://stackoverflow.com/users/21611993/ali-altuno%c4%9flu", label: "Stack Overflow" }
  ];

  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20 pt-24">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-8"
        >
          {/* Greeting */}
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex items-center gap-3"
            >
              <h1 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                {t('hero.greeting')}
              </h1>
              <motion.span
                animate={{ rotate: [0, 20, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-4xl lg:text-5xl"
              >
                👋
              </motion.span>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="text-xl text-gray-300 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: t('hero.description') }}
            />
          </div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="flex flex-wrap gap-4"
          >
            <a 
              href="mailto:alialtunoglu02@gmail.com"
              className="group flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <FaEnvelope className="text-sm group-hover:animate-bounce" />
              {t('hero.contactBtn')}
            </a>
            <a 
              href="/Ali AltunoğluResume.pdf" 
              download="Ali_Altunoglu_CV.pdf"
              className="flex items-center gap-2 border border-gray-600 hover:border-gray-400 px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 hover:bg-gray-800"
            >
              <FaDownload className="text-sm" />
              {t('hero.downloadCV')}
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
            className="flex gap-4"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1 + index * 0.1 }}
                whileHover={{ scale: 1.2, y: -5 }}
                className="p-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition-all duration-300 group"
                aria-label={social.label}
              >
                <social.icon className="text-xl text-gray-300 group-hover:text-white" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Content - Illustration */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex justify-center"
        >
          <div className="relative">
            <motion.div
              animate={{ 
                y: [0, -20, 0],
                rotate: [0, 5, 0]
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="w-80 h-80 lg:w-96 lg:h-96 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-blue-400/30"
            >
              <div className="w-64 h-64 lg:w-80 lg:h-80 bg-gradient-to-br from-blue-500/30 to-purple-600/30 rounded-full flex items-center justify-center">
                <svg
                  viewBox="0 0 200 200"
                  className="w-48 h-48 lg:w-60 lg:h-60 text-blue-400"
                  fill="currentColor"
                >
                  <circle cx="100" cy="60" r="25" />
                  <path d="M100 95 L60 120 L60 180 L100 160 L140 180 L140 120 Z" />
                  <circle cx="80" cy="110" r="8" />
                  <circle cx="120" cy="110" r="8" />
                  <path d="M70 140 Q100 155 130 140" stroke="currentColor" strokeWidth="3" fill="none" />
                </svg>
              </div>
            </motion.div>
            
            {/* Floating elements */}
            <motion.div
              animate={{ 
                y: [0, -15, 0],
                x: [0, 10, 0]
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity,
                delay: 0.5
              }}
              className="absolute -top-4 -right-4 w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center backdrop-blur-sm"
            >
              <span className="text-2xl">🚀</span>
            </motion.div>
            
            <motion.div
              animate={{ 
                y: [0, 15, 0],
                x: [0, -10, 0]
              }}
              transition={{ 
                duration: 3.5, 
                repeat: Infinity,
                delay: 1
              }}
              className="absolute -bottom-4 -left-4 w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center backdrop-blur-sm"
            >
              <span className="text-2xl">💻</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection; 