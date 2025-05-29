import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FaAward, FaCertificate, FaGraduationCap, FaLinkedin } from 'react-icons/fa';

// Import certificate logos
import sanayiLogo from '../assets/sanayi.png';
import techcareerLogo from '../assets/techcareer.png';
import globalaihubLogo from '../assets/globalaihub.png';

const Achievements = () => {
  const { t } = useTranslation();

  const achievements = [
    {
      id: 'ai-specialization',
      logo: sanayiLogo,
      link: "https://drdogrulama.sanayi.gov.tr/tr/verify/06255633266403/?ref=email"
    },
    {
      id: 'docker-workshop',
      logo: techcareerLogo,
      link: "https://certificates.techcareer.net/tr/verify/27736101661623"
    },
    {
      id: 'akbank-bootcamp',
      logo: globalaihubLogo,
      link: "https://courses.10million.ai/saas-certificate/12D0849A0-12D0849A2-2F3B396/"
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
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent leading-relaxed py-2">
            {t('achievements.title')}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {t('achievements.subtitle')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="h-full p-8 bg-gradient-to-br from-gray-800/60 to-gray-900/60 rounded-2xl backdrop-blur-sm border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 hover:transform hover:scale-105">
                {/* Header */}
                <div className="text-center mb-6">
                  <div className="w-20 h-20 mx-auto mb-4 bg-white rounded-2xl flex items-center justify-center p-2 group-hover:scale-110 transition-transform duration-300">
                    <img 
                      src={achievement.logo} 
                      alt={t(`achievements.certificates.${achievement.id}.title`)}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {t(`achievements.certificates.${achievement.id}.title`)}
                  </h3>
                  <p className="text-blue-400 font-medium mb-1">
                    {t(`achievements.certificates.${achievement.id}.issuer`)}
                  </p>
                  <p className="text-gray-400 text-sm">
                    {t(`achievements.certificates.${achievement.id}.date`)}
                  </p>
                </div>

                {/* Description */}
                <p className="text-gray-300 text-sm leading-relaxed mb-6 text-center">
                  {t(`achievements.certificates.${achievement.id}.description`)}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6 justify-center">
                  {t(`achievements.certificates.${achievement.id}.tags`, { returnObjects: true }).map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-blue-500/20 text-blue-400 text-xs rounded-full border border-blue-500/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Button */}
                <div className="text-center">
                  <a
                    href={achievement.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-gray-700/50 hover:bg-gray-600/50 rounded-lg text-sm text-gray-300 hover:text-white transition-all duration-300"
                  >
                    <FaCertificate className="text-xs" />
                    {t('achievements.viewCertificate')}
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* More Certificates Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="https://www.linkedin.com/in/alialtunoglu/details/certifications/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-lg font-medium transition-all duration-300 transform hover:scale-105"
          >
            <FaLinkedin className="text-lg" />
            {t('achievements.viewMore')}
          </a>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-3 gap-3 md:gap-8"
        >
          <div className="text-center p-3 md:p-6 bg-gradient-to-br from-blue-500/10 to-purple-600/10 rounded-xl md:rounded-2xl border border-blue-500/20">
            <FaAward className="text-2xl md:text-4xl text-blue-400 mx-auto mb-2 md:mb-4" />
            <h3 className="text-lg md:text-2xl font-bold text-white mb-1 md:mb-2">15+</h3>
            <p className="text-gray-300 text-xs md:text-base">{t('achievements.stats.certificates')}</p>
          </div>
          <div className="text-center p-3 md:p-6 bg-gradient-to-br from-purple-500/10 to-pink-600/10 rounded-xl md:rounded-2xl border border-purple-500/20">
            <FaGraduationCap className="text-2xl md:text-4xl text-purple-400 mx-auto mb-2 md:mb-4" />
            <h3 className="text-lg md:text-2xl font-bold text-white mb-1 md:mb-2">500+</h3>
            <p className="text-gray-300 text-xs md:text-base">{t('achievements.stats.hours')}</p>
          </div>
          <div className="text-center p-3 md:p-6 bg-gradient-to-br from-green-500/10 to-blue-600/10 rounded-xl md:rounded-2xl border border-green-500/20">
            <FaCertificate className="text-2xl md:text-4xl text-green-400 mx-auto mb-2 md:mb-4" />
            <h3 className="text-lg md:text-2xl font-bold text-white mb-1 md:mb-2">10+</h3>
            <p className="text-gray-300 text-xs md:text-base">{t('achievements.stats.bootcamps')}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements; 