import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FaBrain, FaServer, FaDatabase, FaCloud } from 'react-icons/fa';

const Skills = () => {
  const { t } = useTranslation();

  const skills = [
    {
      category: "AI/ML",
      icon: FaBrain,
      percentage: 90,
      color: "from-blue-500 to-cyan-500",
      description: "Makine öğrenmesi modelleri geliştirme ve yapay zeka sistemleri tasarlama",
      details: ["MLOps","Computer Vision", "NLP","Machine/Deep Learning", "Data Science/Analysis", "Reinforcement Learning"]
    },
    {
      category: "Backend Development", 
      icon: FaServer,
      percentage: 85,
      color: "from-purple-500 to-pink-500",
      description: "Ölçeklenebilir ve güvenli backend sistemleri geliştirme",
      details: ["Django", "Flask", "ASP.NET", "Spring Boot", "RESTful APIs", "Microservices"]
    },
    {
      category: "Database Systems",
      icon: FaDatabase,
      percentage: 82,
      color: "from-orange-500 to-red-500",
      description: "Veritabanı tasarımı ve optimizasyonu",
      details: ["MySQL", "MongoDB", "PostgreSQL", "MsSQL", "Redis", "Database Design"]
    },
    {
      category: "Cloud & DevOps",
      icon: FaCloud,
      percentage: 78,
      color: "from-indigo-500 to-blue-500",
      description: "Bulut teknolojileri ve sürekli entegrasyon",
      details: ["Azure", "Docker", "Kubernetes", "CI/CD", "Git", "Linux"]
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
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent leading-relaxed py-2">
            {t('skills.title')}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {t('skills.subtitle')}
          </p>
        </motion.div>

        {/* Technical Skills - 2x2 Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.category}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="p-8 bg-gradient-to-br from-gray-800/60 to-gray-900/60 rounded-2xl backdrop-blur-sm border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 h-full">
                {/* Header */}
                <div className="flex items-center gap-6 mb-8">
                  <div className={`w-16 h-16 bg-gradient-to-r ${skill.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <skill.icon className="text-2xl text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {skill.category}
                    </h3>
                    <p className="text-gray-300 text-sm">
                      {skill.description}
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-white mb-1">
                      {skill.percentage}%
                    </div>
                    <div className="text-sm text-gray-400">
                      {t('skills.proficiency')}
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
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
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

        {/* Language Skills */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-center text-white mb-8">
            {t('skills.languageSkills')}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <div className="p-6 bg-gray-800/40 rounded-xl border border-gray-700/30">
              <div className="flex justify-between items-center mb-4">
                <span className="text-white font-medium">{t('skills.languages.turkish')}</span>
                <span className="text-gray-400">{t('skills.languages.native')}</span>
              </div>
              <div className="w-full bg-gray-700/50 rounded-full h-2">
                <div className="w-full h-full bg-gradient-to-r from-green-500 to-emerald-500 rounded-full"></div>
              </div>
            </div>
            <div className="p-6 bg-gray-800/40 rounded-xl border border-gray-700/30">
              <div className="flex justify-between items-center mb-4">
                <span className="text-white font-medium">{t('skills.languages.english')}</span>
                <span className="text-gray-400">{t('skills.languages.intermediate')}</span>
              </div>
              <div className="w-full bg-gray-700/50 rounded-full h-2">
                <div className="w-3/4 h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"></div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 