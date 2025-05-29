import React from 'react';
import { motion } from 'framer-motion';
import { FaBrain, FaServer, FaCode } from 'react-icons/fa';

const Skills = () => {
  const skills = [
    {
      category: "Artificial Intelligence",
      icon: FaBrain,
      percentage: 90,
      color: "from-blue-500 to-cyan-500",
      description: "Machine Learning, Deep Learning, TensorFlow, PyTorch",
      details: ["Neural Networks", "Computer Vision", "NLP", "MLOps"]
    },
    {
      category: "Backend Development", 
      icon: FaServer,
      percentage: 85,
      color: "from-purple-500 to-pink-500",
      description: "Django, FastAPI, Node.js, Spring Boot, PostgreSQL",
      details: ["REST API", "Microservices", "Database Design", "Docker"]
    },
    {
      category: "Programming Languages",
      icon: FaCode,
      percentage: 88,
      color: "from-green-500 to-emerald-500",
      description: "Python, JavaScript, Java, Go, TypeScript",
      details: ["Python", "JavaScript", "Java", "Go", "TypeScript"]
    }
  ];

  return (
    <section className="py-20 px-6 bg-gray-900/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            Skills & Proficiency
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Teknik yetkinliklerim ve uzmanlık alanlarım
          </p>
        </motion.div>

        <div className="space-y-12">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.category}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="p-8 bg-gradient-to-br from-gray-800/60 to-gray-900/60 rounded-2xl backdrop-blur-sm border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300">
                {/* Header */}
                <div className="flex items-center gap-6 mb-8">
                  <div className={`w-16 h-16 bg-gradient-to-r ${skill.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <skill.icon className="text-2xl text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {skill.category}
                    </h3>
                    <p className="text-gray-300">
                      {skill.description}
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-white mb-1">
                      {skill.percentage}%
                    </div>
                    <div className="text-sm text-gray-400">
                      Yetkinlik
                    </div>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="mb-6">
                  <div className="w-full bg-gray-700/50 rounded-full h-3 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.percentage}%` }}
                      transition={{ duration: 1.5, delay: index * 0.2 + 0.5, ease: "easeOut" }}
                      viewport={{ once: true }}
                      className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative`}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
                    </motion.div>
                  </div>
                </div>

                {/* Skill Details */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {skill.details.map((detail, detailIndex) => (
                    <motion.div
                      key={detail}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.2 + detailIndex * 0.1 + 0.8 }}
                      viewport={{ once: true }}
                      className="px-3 py-2 bg-gray-700/30 rounded-lg text-center text-sm text-gray-300 hover:bg-gray-600/30 transition-colors duration-300"
                    >
                      {detail}
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Technical Skills Cloud */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h3 className="text-2xl font-bold text-center text-white mb-12">
            Teknik Yetkinlikler
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              { name: "Python", level: 95 },
              { name: "JavaScript", level: 90 },
              { name: "Django", level: 90 },
              { name: "React", level: 85 },
              { name: "TensorFlow", level: 88 },
              { name: "PostgreSQL", level: 85 },
              { name: "Docker", level: 80 },
              { name: "Kubernetes", level: 75 },
              { name: "AWS", level: 78 },
              { name: "Git", level: 92 },
              { name: "Linux", level: 85 },
              { name: "REST API", level: 90 }
            ].map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="p-4 bg-gray-800/40 hover:bg-gray-700/40 rounded-xl transition-all duration-300 text-center border border-gray-700/30 hover:border-gray-600/30">
                  <div className="text-white font-medium mb-2">{tech.name}</div>
                  <div className="w-full bg-gray-700/50 rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${tech.level}%` }}
                      transition={{ duration: 1, delay: index * 0.05 + 0.3 }}
                      viewport={{ once: true }}
                      className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                    ></motion.div>
                  </div>
                  <div className="text-xs text-gray-400 mt-1">{tech.level}%</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 