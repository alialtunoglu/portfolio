import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FaGithub, FaStar, FaCodeBranch, FaEye } from 'react-icons/fa';

const OpenSourceProjects = () => {
  const { t } = useTranslation();

  const projects = [
    {
      name: "BrainPath Alzheimer Detection",
      description: "Teknofest yarışması için geliştirilmiş yapay zeka destekli Alzheimer hastalığı erken tanı sistemi. TypeScript ve modern web teknolojileri kullanılarak geliştirilmiştir.",
      language: "TypeScript",
      languageColor: "#2b7489",
      stars: 0,
      forks: 0,
      size: "26.3 MB",
      topics: ["alzheimer", "ai", "healthcare", "typescript", "teknofest"],
      lastUpdated: "30 Mar 2025",
      html_url: "https://github.com/alialtunoglu/BrainPathTeknofest_AlzheimerDetection"
    },
    {
      name: "MultiShop Mikroservice Project",
      description: "Mikroservis mimarisi kullanılarak geliştirilmiş modern e-ticaret platformu. C# .NET Core ile backend servisleri ve modern UI tasarımı.",
      language: "C#",
      languageColor: "#239120",
      stars: 0,
      forks: 0,
      size: "19.9 MB",
      topics: ["microservices", "ecommerce", "dotnet", "csharp", "api"],
      lastUpdated: "14 Mar 2025",
      html_url: "https://github.com/alialtunoglu/MultiShopMikroServiceProject"
    },
    {
      name: "Movie API",
      description: "Onion Architecture, CQRS ve Mediator pattern kullanılarak geliştirilmiş film değerlendirme sistemi. MongoDB veritabanı ile NoSQL deneyimi.",
      language: "C#",
      languageColor: "#239120",
      stars: 0,
      forks: 0,
      size: "16.2 MB",
      topics: ["onion-architecture", "cqrs", "mediator", "mongodb", "api"],
      lastUpdated: "14 Mar 2025",
      html_url: "https://github.com/alialtunoglu/MovieApi"
    },
    {
      name: "Course App",
      description: "Django ile geliştirilmiş online kurs platformu. Kullanıcı kimlik doğrulama, kurs yönetimi ve içerik paylaşımı özellikleri içerir.",
      language: "Python",
      languageColor: "#3572A5",
      stars: 1,
      forks: 0,
      size: "24.9 MB",
      topics: ["django", "python", "course", "education", "web-app"],
      lastUpdated: "22 Feb 2025",
      html_url: "https://github.com/alialtunoglu/courseapp"
    },
    {
      name: "Fruit & Vegetable Classification",
      description: "Makine öğrenmesi ve derin öğrenme modellerinin meyve-sebze sınıflandırmasındaki performans karşılaştırması. Jupyter Notebook ile detaylı analiz.",
      language: "Jupyter Notebook",
      languageColor: "#DA5B0B",
      stars: 4,
      forks: 0,
      size: "11.4 MB",
      topics: ["machine-learning", "deep-learning", "classification", "jupyter", "ai"],
      lastUpdated: "22 Feb 2025",
      html_url: "https://github.com/alialtunoglu/Comparison-of-Machine-Learning-and-Deep-Learning-Models-for-Fruit-and-Vegetable-Classification"
    },
    {
      name: "DealChat Social Media",
      description: "Java Spring Boot ile geliştirilmiş sosyal medya uygulaması. Modern backend mimarisi ve RESTful API tasarımı.",
      language: "Java",
      languageColor: "#b07219",
      stars: 2,
      forks: 0,
      size: "987 KB",
      topics: ["java", "spring-boot", "social-media", "rest-api", "backend"],
      lastUpdated: "22 Feb 2025",
      html_url: "https://github.com/alialtunoglu/DealChat"
    },
    {
      name: "PDF Converter",
      description: "PDF dosyalarını başka dosya formatlarına dönüştüren araç seti. Jupyter Notebook ile geliştirilmiş, dosya dönüştürme işlemlerini otomatikleştiren pratik çözüm.",
      language: "Jupyter Notebook",
      languageColor: "#DA5B0B",
      stars: 1,
      forks: 3,
      size: "38 KB",
      topics: ["pdf", "converter", "jupyter", "automation", "file-processing"],
      lastUpdated: "4 Apr 2025",
      html_url: "https://github.com/alialtunoglu/PDF_Converter"
    },
    {
      name: "Bean Leaf Disease Classification",
      description: "TensorFlow ve OpenCV kullanılarak bitki yapraklarının gerçek zamanlı tespiti ve sınıflandırması. Tarım teknolojisinde yapay zeka uygulaması.",
      language: "Jupyter Notebook", 
      languageColor: "#DA5B0B",
      stars: 1,
      forks: 0,
      size: "3.2 MB",
      topics: ["tensorflow", "opencv", "agriculture", "disease-detection", "computer-vision"],
      lastUpdated: "22 Feb 2025",
      html_url: "https://github.com/alialtunoglu/Bean-Leaf-Disease-Classification"
    }
  ];

  return (
    <section className="py-20 px-6 bg-gray-900/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            {t('openSourceProjects.title')}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {t('openSourceProjects.description')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="h-full p-6 bg-gradient-to-br from-gray-800/60 to-gray-900/60 rounded-2xl backdrop-blur-sm border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 hover:transform hover:scale-105">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <FaGithub className="text-2xl text-gray-400" />
                    <h3 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors duration-300">
                      {project.name}
                    </h3>
                  </div>
                  <a
                    href={project.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-gray-700/50 hover:bg-gray-600/50 transition-colors duration-300"
                  >
                    <FaEye className="text-sm text-gray-400 hover:text-white" />
                  </a>
                </div>

                {/* Description */}
                <p className="text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Topics */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.topics.slice(0, 3).map((topic) => (
                    <span
                      key={topic}
                      className="px-2 py-1 bg-blue-500/20 text-blue-400 text-xs rounded-full border border-blue-500/30"
                    >
                      {topic}
                    </span>
                  ))}
                  {project.topics.length > 3 && (
                    <span className="px-2 py-1 bg-gray-600/30 text-gray-400 text-xs rounded-full border border-gray-600/30">
                      +{project.topics.length - 3}
                    </span>
                  )}
                </div>

                {/* Stats */}
                <div className="flex items-center gap-4 mb-4 text-sm text-gray-400">
                  <div className="flex items-center gap-1">
                    <div 
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: project.languageColor }}
                    ></div>
                    <span>{project.language}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <FaStar className="text-xs" />
                    <span>{project.stars}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <FaCodeBranch className="text-xs" />
                    <span>{project.forks}</span>
                  </div>
                  <span className="text-xs">{project.size}</span>
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-700/50">
                  <span className="text-xs text-gray-500">
                    {t('openSourceProjects.updated')} {project.lastUpdated}
                  </span>
                  <a
                    href={project.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3 py-1 bg-gray-700/50 hover:bg-gray-600/50 rounded-lg text-sm text-gray-300 hover:text-white transition-all duration-300"
                  >
                    <FaGithub className="text-xs" />
                    View
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Projects Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/alialtunoglu"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <FaGithub className="text-lg" />
            {t('openSourceProjects.viewAllProjects')}
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default OpenSourceProjects; 