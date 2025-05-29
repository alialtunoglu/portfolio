import React from 'react';
import { motion } from 'framer-motion';
import { FaAward, FaCertificate, FaGraduationCap } from 'react-icons/fa';

const Achievements = () => {
  const achievements = [
    {
      title: "AI Specialization",
      issuer: "DeepLearning.AI",
      date: "2023",
      description: "Yapay zeka ve makine öğrenmesi alanında derinlemesine eğitim programı",
      logo: "🤖",
      tags: ["Machine Learning", "Deep Learning", "TensorFlow"],
      link: "https://coursera.org/verify/specialization/XXXXX"
    },
    {
      title: "Docker & Kubernetes Workshop",
      issuer: "TechAcademy",
      date: "2023",
      description: "Konteyner teknolojileri ve mikroservis mimarileri üzerine yoğun eğitim",
      logo: "🐳",
      tags: ["Docker", "Kubernetes", "DevOps"],
      link: "https://techacademy.com/certificates/XXXXX"
    },
    {
      title: "Akbank Python Bootcamp",
      issuer: "Akbank & Patika.dev",
      date: "2022",
      description: "Python programlama dili ve backend geliştirme bootcamp programı",
      logo: "🐍",
      tags: ["Python", "Django", "Backend"],
      link: "https://patika.dev/certificates/XXXXX"
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
            Achievements & Certifications
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Profesyonel gelişim yolculuğumda elde ettiğim sertifikalar ve başarılar
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="h-full p-8 bg-gradient-to-br from-gray-800/60 to-gray-900/60 rounded-2xl backdrop-blur-sm border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 hover:transform hover:scale-105">
                {/* Header */}
                <div className="text-center mb-6">
                  <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-r from-blue-500/20 to-purple-600/20 rounded-2xl flex items-center justify-center text-4xl group-hover:scale-110 transition-transform duration-300">
                    {achievement.logo}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {achievement.title}
                  </h3>
                  <p className="text-blue-400 font-medium mb-1">
                    {achievement.issuer}
                  </p>
                  <p className="text-gray-400 text-sm">
                    {achievement.date}
                  </p>
                </div>

                {/* Description */}
                <p className="text-gray-300 text-sm leading-relaxed mb-6 text-center">
                  {achievement.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6 justify-center">
                  {achievement.tags.map((tag) => (
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
                    Sertifikayı Görüntüle
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div className="text-center p-6 bg-gradient-to-br from-blue-500/10 to-purple-600/10 rounded-2xl border border-blue-500/20">
            <FaAward className="text-4xl text-blue-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-2">15+</h3>
            <p className="text-gray-300">Sertifika</p>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-purple-500/10 to-pink-600/10 rounded-2xl border border-purple-500/20">
            <FaGraduationCap className="text-4xl text-purple-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-2">500+</h3>
            <p className="text-gray-300">Eğitim Saati</p>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-green-500/10 to-blue-600/10 rounded-2xl border border-green-500/20">
            <FaCertificate className="text-4xl text-green-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-2">10+</h3>
            <p className="text-gray-300">Bootcamp</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements; 