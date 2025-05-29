import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FaCalendar, FaClock, FaChevronLeft, FaChevronRight, FaSpinner } from 'react-icons/fa';
import useMediumBlogs from '../hooks/useMediumBlogs';

const Blogs = () => {
  const { t } = useTranslation();
  
  const {
    blogs,
    loading,
    error,
    currentPage,
    totalPages,
    nextPage,
    prevPage,
    canGoNext,
    canGoPrev,
    totalBlogs
  } = useMediumBlogs('alialtunoglu02', 3);

  if (loading) {
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
              {t('blogs.title')}
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {t('blogs.subtitle')}
            </p>
          </motion.div>
          
          <div className="flex items-center justify-center py-20">
            <div className="flex items-center gap-3 text-gray-300">
              <FaSpinner className="animate-spin text-2xl text-blue-400" />
              <span className="text-lg">Medium yazıları yükleniyor...</span>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
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
              {t('blogs.title')}
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {t('blogs.subtitle')}
            </p>
          </motion.div>
          
          <div className="text-center py-20">
            <div className="p-8 bg-red-500/10 border border-red-500/20 rounded-2xl max-w-md mx-auto">
              <p className="text-red-400 mb-4">Medium yazıları yüklenirken hata oluştu</p>
              <p className="text-gray-400 text-sm">{error}</p>
            </div>
          </div>
        </div>
      </section>
    );
  }

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
            {t('blogs.title')}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {t('blogs.subtitle')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Featured Blog */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <a
              href={blogs.length > 0 ? blogs[0].link : "https://medium.com/@alialtunoglu02"}
              target="_blank"
              rel="noopener noreferrer"
              className="group cursor-pointer h-full block"
            >
              <div className="overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={blogs.length > 0 ? blogs[0].image : "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400"}
                    alt={blogs.length > 0 ? blogs[0].title : "Blog yazısı"}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-4 mb-4 text-sm text-gray-400">
                    <div className="flex items-center gap-1">
                      <FaCalendar className="text-xs" />
                      {blogs.length > 0 ? blogs[0].date : "15 Aralık 2023"}
                    </div>
                    <div className="flex items-center gap-1">
                      <FaClock className="text-xs" />
                      {blogs.length > 0 ? blogs[0].readTime : "8 dk okuma"}
                    </div>
                    <span className="px-2 py-1 bg-blue-500/20 text-blue-400 text-xs rounded-full">
                      Medium
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors duration-300">
                    {blogs.length > 0 ? blogs[0].title : "Yapay Zeka ile Backend Geliştirmede Yeni Yaklaşımlar"}
                  </h3>
                  
                  <p className="text-gray-300 leading-relaxed mb-6">
                    {blogs.length > 0 ? blogs[0].excerpt : "Modern backend sistemlerinde AI entegrasyonu nasıl yapılır? Gerçek projelerdeki deneyimlerimle paylaşıyorum..."}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex gap-2">
                      {blogs.length > 0 && blogs[0].categories ? blogs[0].categories.slice(0, 3).map((tag) => (
                        <span 
                          key={tag}
                          className="px-2 py-1 bg-gray-700/50 text-gray-300 text-xs rounded-full"
                        >
                          {tag}
                        </span>
                      )) : (
                        <>
                          <span className="px-2 py-1 bg-gray-700/50 text-gray-300 text-xs rounded-full">AI</span>
                          <span className="px-2 py-1 bg-gray-700/50 text-gray-300 text-xs rounded-full">Backend</span>
                          <span className="px-2 py-1 bg-gray-700/50 text-gray-300 text-xs rounded-full">Python</span>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </motion.div>

          {/* Call to Action with Pagination */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <div className="p-8 bg-gradient-to-br from-blue-500/10 to-purple-600/10 rounded-2xl border border-blue-500/20 text-center h-full flex flex-col justify-center">
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500/20 to-purple-600/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">✍️</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  {t('blogs.moreContent')}
                </h3>
                <p className="text-gray-300 mb-6">
                  {t('blogs.description')}
                </p>
              </div>
              
              {/* Pagination Controls */}
              {totalPages > 1 && (
                <div className="flex items-center justify-center gap-4 mb-6">
                  <button
                    onClick={prevPage}
                    disabled={!canGoPrev}
                    className={`p-2 rounded-lg border transition-all duration-300 ${
                      canGoPrev 
                        ? 'border-gray-600 hover:border-gray-400 text-gray-300 hover:text-white hover:bg-gray-800' 
                        : 'border-gray-800 text-gray-600 cursor-not-allowed'
                    }`}
                  >
                    <FaChevronLeft className="text-sm" />
                  </button>
                  
                  <div className="px-4 py-2 bg-gray-800/50 rounded-lg border border-gray-700/50">
                    <span className="text-gray-300 text-sm">
                      {currentPage} / {totalPages}
                    </span>
                  </div>
                  
                  <button
                    onClick={nextPage}
                    disabled={!canGoNext}
                    className={`p-2 rounded-lg border transition-all duration-300 ${
                      canGoNext 
                        ? 'border-gray-600 hover:border-gray-400 text-gray-300 hover:text-white hover:bg-gray-800' 
                        : 'border-gray-800 text-gray-600 cursor-not-allowed'
                    }`}
                  >
                    <FaChevronRight className="text-sm" />
                  </button>
                </div>
              )}
              
              <div className="space-y-4">
                <a 
                  href="https://medium.com/@alialtunoglu02" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-lg font-medium transition-all duration-300 transform hover:scale-105"
                >
                  {t('blogs.followMedium')}
                </a>
                <a 
                  href="https://medium.com/@alialtunoglu02" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block w-full px-6 py-3 border border-gray-600 hover:border-gray-400 rounded-lg font-medium transition-all duration-300 hover:bg-gray-800"
                >
                  {t('blogs.viewAll')}
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Blog Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
        >
          <div className="text-center p-3 md:p-4 bg-gray-800/30 rounded-xl">
            <h3 className="text-xl md:text-2xl font-bold text-blue-400 mb-1">{totalBlogs || 25}+</h3>
            <p className="text-gray-400 text-xs md:text-sm">{t('blogs.stats.posts')}</p>
          </div>
          <div className="text-center p-3 md:p-4 bg-gray-800/30 rounded-xl">
            <h3 className="text-xl md:text-2xl font-bold text-purple-400 mb-1">15K+</h3>
            <p className="text-gray-400 text-xs md:text-sm">{t('blogs.stats.reads')}</p>
          </div>
          <div className="text-center p-3 md:p-4 bg-gray-800/30 rounded-xl">
            <h3 className="text-xl md:text-2xl font-bold text-green-400 mb-1">500+</h3>
            <p className="text-gray-400 text-xs md:text-sm">{t('blogs.stats.followers')}</p>
          </div>
          <div className="text-center p-3 md:p-4 bg-gray-800/30 rounded-xl">
            <h3 className="text-xl md:text-2xl font-bold text-orange-400 mb-1">1.2K</h3>
            <p className="text-gray-400 text-xs md:text-sm">{t('blogs.stats.likes')}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Blogs; 