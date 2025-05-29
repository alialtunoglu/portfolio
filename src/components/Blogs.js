import React from 'react';
import { motion } from 'framer-motion';
import { FaCalendar, FaClock, FaEye, FaHeart } from 'react-icons/fa';

const Blogs = () => {
  const blogs = [
    {
      title: "Yapay Zeka ile Backend Geliştirmede Yeni Yaklaşımlar",
      excerpt: "Modern backend sistemlerinde AI entegrasyonu nasıl yapılır? Gerçek projelerdeki deneyimlerimle paylaşıyorum...",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400",
      date: "15 Aralık 2023",
      readTime: "8 dk okuma",
      views: 1245,
      likes: 89,
      tags: ["AI", "Backend", "Python"],
      platform: "Medium"
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
            Latest Blogs
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Teknik yazılarım ve deneyimlerimi paylaştığım blog yazıları
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
            <div className="group cursor-pointer h-full">
              <div className="overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={blogs[0].image}
                    alt={blogs[0].title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-4 mb-4 text-sm text-gray-400">
                    <div className="flex items-center gap-1">
                      <FaCalendar className="text-xs" />
                      {blogs[0].date}
                    </div>
                    <div className="flex items-center gap-1">
                      <FaClock className="text-xs" />
                      {blogs[0].readTime}
                    </div>
                    <span className="px-2 py-1 bg-blue-500/20 text-blue-400 text-xs rounded-full">
                      {blogs[0].platform}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors duration-300">
                    {blogs[0].title}
                  </h3>
                  
                  <p className="text-gray-300 leading-relaxed mb-6">
                    {blogs[0].excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex gap-2">
                      {blogs[0].tags.map((tag) => (
                        <span 
                          key={tag}
                          className="px-2 py-1 bg-gray-700/50 text-gray-300 text-xs rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center gap-4 text-sm text-gray-400">
                      <div className="flex items-center gap-1">
                        <FaEye className="text-xs" />
                        {blogs[0].views.toLocaleString()}
                      </div>
                      <div className="flex items-center gap-1">
                        <FaHeart className="text-xs" />
                        {blogs[0].likes}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Call to Action */}
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
                  Daha Fazla İçerik
                </h3>
                <p className="text-gray-300 mb-6">
                  AI, backend geliştirme ve teknoloji trendleri hakkında düzenli olarak yazılar paylaşıyorum.
                </p>
              </div>
              
              <div className="space-y-4">
                <button className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-lg font-medium transition-all duration-300 transform hover:scale-105">
                  Medium'da Takip Et
                </button>
                <button className="w-full px-6 py-3 border border-gray-600 hover:border-gray-400 rounded-lg font-medium transition-all duration-300 hover:bg-gray-800">
                  Tüm Yazıları Gör
                </button>
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
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          <div className="text-center p-4 bg-gray-800/30 rounded-xl">
            <h3 className="text-2xl font-bold text-blue-400 mb-1">25+</h3>
            <p className="text-gray-400 text-sm">Blog Yazısı</p>
          </div>
          <div className="text-center p-4 bg-gray-800/30 rounded-xl">
            <h3 className="text-2xl font-bold text-purple-400 mb-1">15K+</h3>
            <p className="text-gray-400 text-sm">Toplam Okuma</p>
          </div>
          <div className="text-center p-4 bg-gray-800/30 rounded-xl">
            <h3 className="text-2xl font-bold text-green-400 mb-1">500+</h3>
            <p className="text-gray-400 text-sm">Takipçi</p>
          </div>
          <div className="text-center p-4 bg-gray-800/30 rounded-xl">
            <h3 className="text-2xl font-bold text-orange-400 mb-1">1.2K</h3>
            <p className="text-gray-400 text-sm">Beğeni</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Blogs; 