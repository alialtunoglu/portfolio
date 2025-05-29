import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';
import { FaAward, FaCertificate, FaGraduationCap, FaLinkedin, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

// Import certificate data
import { certificates, certificateStats } from '../data/certificates';

const Achievements = () => {
  const { t } = useTranslation();

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
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

        {/* Certificates Slider */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative mb-16"
        >
          <Swiper
            modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
            spaceBetween={30}
            slidesPerView={1}
            navigation={{
              prevEl: '.swiper-button-prev-custom',
              nextEl: '.swiper-button-next-custom',
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            effect="coverflow"
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            className="certificates-swiper !pb-16"
          >
            {certificates.map((certificate, index) => (
              <SwiperSlide key={certificate.id}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group h-full"
                >
                  <div className="flex flex-col h-full p-8 bg-gradient-to-br from-gray-800/60 to-gray-900/60 rounded-2xl backdrop-blur-sm border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 hover:transform hover:scale-105 min-h-[400px]">
                    {/* Header - Fixed Height */}
                    <div className="text-center mb-6 flex-shrink-0">
                      <div className="w-20 h-20 mx-auto mb-4 bg-white rounded-2xl flex items-center justify-center p-2 group-hover:scale-110 transition-transform duration-300">
                        <img 
                          src={certificate.logo} 
                          alt={t(`achievements.certificates.${certificate.id}.title`)}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2 min-h-[3rem] flex items-center justify-center">
                        {t(`achievements.certificates.${certificate.id}.title`)}
                      </h3>
                      <p className="text-blue-400 font-medium mb-1">
                        {t(`achievements.certificates.${certificate.id}.issuer`)}
                      </p>
                      <p className="text-gray-400 text-sm">
                        {t(`achievements.certificates.${certificate.id}.date`)}
                      </p>
                    </div>

                    {/* Description - Flexible Height */}
                    <div className="flex-grow mb-6">
                      <p className="text-gray-300 text-sm leading-relaxed text-center">
                        {t(`achievements.certificates.${certificate.id}.description`)}
                      </p>
                    </div>

                    {/* Tags - Fixed Section */}
                    <div className="flex flex-wrap gap-2 mb-6 justify-center min-h-[2.5rem] items-start">
                      {t(`achievements.certificates.${certificate.id}.tags`, { returnObjects: true }).map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-blue-500/20 text-blue-400 text-xs rounded-full border border-blue-500/30"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Action Button - Fixed at Bottom */}
                    <div className="text-center flex-shrink-0">
                      <a
                        href={certificate.link}
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
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons */}
          <div className="swiper-button-prev-custom absolute left-0 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-gray-800/80 hover:bg-gray-700/80 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-110">
            <FaChevronLeft className="text-white text-lg" />
          </div>
          <div className="swiper-button-next-custom absolute right-0 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-gray-800/80 hover:bg-gray-700/80 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-110">
            <FaChevronRight className="text-white text-lg" />
          </div>
        </motion.div>

        {/* More Certificates Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mb-16"
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
          className="grid grid-cols-3 gap-3 md:gap-8"
        >
          <div className="text-center p-3 md:p-6 bg-gradient-to-br from-blue-500/10 to-purple-600/10 rounded-xl md:rounded-2xl border border-blue-500/20">
            <FaAward className="text-2xl md:text-4xl text-blue-400 mx-auto mb-2 md:mb-4" />
            <h3 className="text-lg md:text-2xl font-bold text-white mb-1 md:mb-2">{certificateStats.totalCertificates}+</h3>
            <p className="text-gray-300 text-xs md:text-base">{t('achievements.stats.certificates')}</p>
          </div>
          <div className="text-center p-3 md:p-6 bg-gradient-to-br from-purple-500/10 to-pink-600/10 rounded-xl md:rounded-2xl border border-purple-500/20">
            <FaGraduationCap className="text-2xl md:text-4xl text-purple-400 mx-auto mb-2 md:mb-4" />
            <h3 className="text-lg md:text-2xl font-bold text-white mb-1 md:mb-2">{certificateStats.totalHours}+</h3>
            <p className="text-gray-300 text-xs md:text-base">{t('achievements.stats.hours')}</p>
          </div>
          <div className="text-center p-3 md:p-6 bg-gradient-to-br from-green-500/10 to-blue-600/10 rounded-xl md:rounded-2xl border border-green-500/20">
            <FaCertificate className="text-2xl md:text-4xl text-green-400 mx-auto mb-2 md:mb-4" />
            <h3 className="text-lg md:text-2xl font-bold text-white mb-1 md:mb-2">{certificateStats.totalBootcamps}+</h3>
            <p className="text-gray-300 text-xs md:text-base">{t('achievements.stats.bootcamps')}</p>
          </div>
        </motion.div>
      </div>

      {/* Custom CSS for Swiper */}
      <style jsx>{`
        .certificates-swiper .swiper-pagination {
          bottom: 0 !important;
        }
        
        .certificates-swiper .swiper-pagination-bullet {
          background: rgba(59, 130, 246, 0.5) !important;
          opacity: 0.7 !important;
        }
        
        .certificates-swiper .swiper-pagination-bullet-active {
          background: rgb(59, 130, 246) !important;
          opacity: 1 !important;
        }
        
        .certificates-swiper .swiper-slide {
          height: auto !important;
        }
      `}</style>
    </section>
  );
};

export default Achievements; 