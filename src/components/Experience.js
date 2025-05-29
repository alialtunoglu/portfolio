import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FaBuilding, FaCalendar, FaCode } from 'react-icons/fa';

// Import company logos
import solonportLogo from '../assets/solonport.png';
import sistekLogo from '../assets/sistek.jpg';
import darphaneLogo from '../assets/Darphane_logo.png';

const Experience = () => {
  const { t } = useTranslation();

  const experiences = [
    {
      company: "SolonPort",
      position: "AI Research and Developer",
      prevPosition: "AI R&D Long Term Intern",
      period: "Ocak 2025 - " + t('experience.present'),
      prevPeriod: "Eylül 2024 - Ocak 2025",
      location: "İstanbul, Türkiye",
      description: "Deep Q-Learning ve meta-sezgisel yöntemler ile akıllı konteyner yerleştirme sistemleri tasarlıyor, bunları ölçeklenebilir servisler hâlinde geliştirip kurumsal ASP.NET Core altyapısına entegre ediyorum.",
      technologies: ["Python", "Flask", "Docker", "ASP.NET Core", "Deep Q-Learning", "Genetic Algorithms"],
      logo: solonportLogo
    },
    {
      company: "Sistek",
      position: "Makine Öğrenimi Stajyeri",
      period: "Temmuz 2024 - Eylül 2024",
      location: "İstanbul, Türkiye", 
      description: "Aylık ve yıllık malzeme ihtiyacını öngören LSTM tabanlı zaman serisi modelleri geliştirdim; Docker ile konteynerleştirip Flask tabanlı web servisi üzerinden gerçek zamanlı tahmin sağladım.",
      technologies: ["Python", "LSTM", "Flask", "Docker", "TensorFlow"],
      logo: sistekLogo
    },
    {
      company: "Darphane",
      position: "Web Geliştirici Stajyeri",
      period: "Temmuz 2023 - Ağustos 2023",
      location: "İstanbul, Türkiye",
      description: "PHP ve MySQL tabanlı web tabanlı bir belge yönetim sistemi geliştirdim; MERNİS entegrasyonu ile kimlik doğrulama sağladım ve sertifika damgalama süreçleri için talep takip altyapısı kurdum.",
      technologies: ["PHP", "MySQL", "HTML/CSS", "JavaScript"],
      logo: darphaneLogo
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            {t('experience.title')}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {t('experience.subtitle')}
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-600 rounded-full"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full border-4 border-gray-900 z-10"></div>

                {/* Content */}
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                  <div className="group">
                    <div className="p-8 bg-gradient-to-br from-gray-800/60 to-gray-900/60 rounded-2xl backdrop-blur-sm border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 hover:transform hover:scale-105">
                      {/* Header */}
                      <div className="flex items-start gap-4 mb-6">
                        <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center p-2 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                          <img 
                            src={exp.logo} 
                            alt={`${exp.company} logo`}
                            className="w-full h-full object-contain"
                          />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-white mb-1">
                            {exp.position}
                          </h3>
                          {exp.prevPosition && (
                            <div className="mb-2">
                              <div className="text-sm text-gray-400 italic">
                                Terfi edildi: {exp.prevPosition}
                              </div>
                            </div>
                          )}
                          <div className="flex items-center gap-2 text-blue-400 font-medium mb-2">
                            <FaBuilding className="text-sm" />
                            {exp.company}
                          </div>
                          <div className="flex items-center gap-4 text-sm text-gray-400">
                            <div className="flex items-center gap-1">
                              <FaCalendar className="text-xs" />
                              {exp.period}
                            </div>
                            <span>{exp.location}</span>
                          </div>
                          {exp.prevPeriod && (
                            <div className="flex items-center gap-4 text-xs text-gray-500 mt-1">
                              <div className="flex items-center gap-1">
                                <FaCalendar className="text-xs" />
                                Stajyerlik: {exp.prevPeriod}
                              </div>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-gray-300 leading-relaxed mb-6">
                        {exp.description}
                      </p>

                      {/* Technologies */}
                      <div className="space-y-3">
                        <div className="flex items-center gap-2 text-sm text-gray-400">
                          <FaCode className="text-xs" />
                          <span>{t('experience.technologies')}</span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 bg-blue-500/20 text-blue-400 text-sm rounded-full border border-blue-500/30"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Spacer for opposite side */}
                <div className="hidden md:block w-5/12"></div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Experience Summary */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div className="text-center p-6 bg-gradient-to-br from-blue-500/10 to-purple-600/10 rounded-2xl border border-blue-500/20">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500/20 to-purple-600/20 rounded-xl flex items-center justify-center mx-auto mb-4">
              <FaBuilding className="text-2xl text-blue-400" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">1+</h3>
            <p className="text-gray-300">{t('experience.stats.experience')}</p>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-purple-500/10 to-pink-600/10 rounded-2xl border border-purple-500/20">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500/20 to-pink-600/20 rounded-xl flex items-center justify-center mx-auto mb-4">
              <FaCode className="text-2xl text-purple-400" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">7+</h3>
            <p className="text-gray-300">{t('experience.stats.projects')}</p>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-green-500/10 to-blue-600/10 rounded-2xl border border-green-500/20">
            <div className="w-16 h-16 bg-gradient-to-r from-green-500/20 to-blue-600/20 rounded-xl flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🚀</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">3</h3>
            <p className="text-gray-300">{t('experience.stats.companies')}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience; 