import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FaCalendar, FaMapMarker, FaGraduationCap } from 'react-icons/fa';

// Import university logo
import ktuLogo from '../assets/karadeniz.png';

const Education = () => {
  const { t } = useTranslation();

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
            {t('education.title')}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {t('education.subtitle')}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="group">
            <div className="p-8 lg:p-12 bg-gradient-to-br from-gray-800/60 to-gray-900/60 rounded-3xl backdrop-blur-sm border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 hover:transform hover:scale-[1.02]">
              {/* University Header */}
              <div className="flex flex-col lg:flex-row items-center gap-8 mb-8">
                {/* University Logo */}
                <div className="w-24 h-24 lg:w-32 lg:h-32 bg-white rounded-2xl flex items-center justify-center p-3 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <img 
                    src={ktuLogo} 
                    alt="Karadeniz Teknik Üniversitesi logo"
                    className="w-full h-full object-contain"
                  />
                </div>
                
                {/* University Info */}
                <div className="flex-1 text-center lg:text-left">
                  <h3 className="text-2xl lg:text-3xl font-bold text-white mb-3">
                    Karadeniz Teknik Üniversitesi
                  </h3>
                  <div className="space-y-2">
                    <div className="flex items-center justify-center lg:justify-start gap-2 text-blue-400 font-medium text-lg">
                      <FaGraduationCap className="text-sm" />
                      <span>{t('education.major')}</span>
                    </div>
                    <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 text-gray-300">
                      <div className="flex items-center gap-2">
                        <FaCalendar className="text-sm" />
                        <span>2021 - Günümüz</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <FaMapMarker className="text-sm" />
                        <span>Trabzon, Türkiye</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* GPA Badge */}
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-green-500/20 to-emerald-600/20 rounded-2xl flex flex-col items-center justify-center border border-green-500/30">
                    <div className="text-2xl font-bold text-green-400">3.52</div>
                    <div className="text-xs text-gray-400">GPA</div>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="mb-8">
                <p className="text-gray-300 leading-relaxed text-center lg:text-left">
                  {t('education.description')}
                </p>
              </div>

              {/* Key Courses */}
              <div className="mb-8">
                <h4 className="text-lg font-semibold text-white mb-4 text-center lg:text-left">
                  {t('education.courses')}
                </h4>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                  {[
                    "Veri Yapıları",
                    "Algoritma Analizi", 
                    "Makine Öğrenmesi",
                    "Veritabanı Sistemleri",
                    "Web Programlama",
                    "Nesne Yönelimli Programlama",
                    "Yazılım Mühendisliği",
                    "Bilgisayar Ağları"
                  ].map((course) => (
                    <div
                      key={course}
                      className="px-3 py-2 bg-blue-500/20 text-blue-400 text-sm rounded-lg text-center border border-blue-500/30 hover:bg-blue-500/30 transition-colors duration-300"
                    >
                      {course}
                    </div>
                  ))}
                </div>
              </div>

              {/* Activities */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 bg-gradient-to-br from-purple-500/10 to-pink-600/10 rounded-xl border border-purple-500/20">
                  <h4 className="text-lg font-semibold text-white mb-3">{t('education.projects.title')}</h4>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    {t('education.projects.projects', { returnObjects: true }).map((project, index) => (
                      <li key={index}>• {project}</li>
                    ))}
                  </ul>
                </div>
                <div className="p-6 bg-gradient-to-br from-blue-500/10 to-cyan-600/10 rounded-xl border border-blue-500/20">
                  <h4 className="text-lg font-semibold text-white mb-3">{t('education.activities.title')}</h4>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    {t('education.activities.activities', { returnObjects: true }).map((activity, index) => (
                      <li key={index}>• {activity}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Education Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-6"
        >
          <div className="text-center p-6 bg-gray-800/30 rounded-xl">
            <div className="text-3xl font-bold text-blue-400 mb-2">4+</div>
            <div className="text-gray-400 text-sm">{t('education.stats.education')}</div>
          </div>
          <div className="text-center p-6 bg-gray-800/30 rounded-xl">
            <div className="text-3xl font-bold text-purple-400 mb-2">3.52</div>
            <div className="text-gray-400 text-sm">{t('education.stats.gpa')}</div>
          </div>
          <div className="text-center p-6 bg-gray-800/30 rounded-xl">
            <div className="text-3xl font-bold text-green-400 mb-2">15+</div>
            <div className="text-gray-400 text-sm">{t('education.stats.projects')}</div>
          </div>
          <div className="text-center p-6 bg-gray-800/30 rounded-xl">
            <div className="text-3xl font-bold text-orange-400 mb-2">8+</div>
            <div className="text-gray-400 text-sm">{t('education.stats.certificates')}</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education; 