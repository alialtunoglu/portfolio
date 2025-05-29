import React from 'react';
import { motion } from 'framer-motion';

const Logo = ({ className = "" }) => {
  return (
    <motion.div 
      className={`flex items-center space-x-2 ${className}`}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.2 }}
    >
      {/* Logo Icon */}
      <div className="relative w-10 h-10">
        {/* Outer Ring */}
        <motion.div 
          className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 rotate-12"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        
        {/* Inner Content */}
        <div className="absolute inset-1 bg-gray-900 rounded-lg flex items-center justify-center">
          <span className="text-lg font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            AA
          </span>
        </div>
        
        {/* Glowing Effect */}
        <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-500/30 to-purple-600/30 blur-sm -z-10" />
      </div>
      
      {/* Logo Text */}
      <div className="flex flex-col">
        <span className="text-lg font-bold text-white leading-tight">
          Ali Altunoğlu
        </span>
        <span className="text-xs text-gray-400 leading-tight">
          AI/Ml Engineer
        </span>
      </div>
    </motion.div>
  );
};

export default Logo; 