import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaStar, FaCodeBranch, FaEye } from 'react-icons/fa';

const OpenSourceProjects = () => {
  const projects = [
    {
      name: "AI Chat Assistant",
      description: "OpenAI GPT entegrasyonlu modern chat uygulaması. React ve Node.js ile geliştirilmiş, gerçek zamanlı mesajlaşma desteği.",
      language: "JavaScript",
      languageColor: "#f1e05a",
      stars: 124,
      forks: 23,
      size: "2.4 MB",
      topics: ["react", "nodejs", "openai", "chat", "websocket"],
      lastUpdated: "2 days ago"
    },
    {
      name: "ML Model Pipeline",
      description: "Makine öğrenmesi modelleri için otomatik deployment pipeline. Docker ve Kubernetes ile konteyner destekli.",
      language: "Python",
      languageColor: "#3572A5",
      stars: 89,
      forks: 15,
      size: "5.1 MB",
      topics: ["python", "machine-learning", "docker", "kubernetes", "mlops"],
      lastUpdated: "5 days ago"
    },
    {
      name: "E-Commerce API",
      description: "Django REST Framework ile geliştirilmiş mikroservis mimarili e-ticaret backend API. PostgreSQL ve Redis destekli.",
      language: "Python",
      languageColor: "#3572A5",
      stars: 156,
      forks: 32,
      size: "3.8 MB",
      topics: ["django", "rest-api", "postgresql", "redis", "microservices"],
      lastUpdated: "1 week ago"
    },
    {
      name: "React Native Finance App",
      description: "Kişisel finans yönetimi için React Native mobil uygulaması. Firebase backend ve real-time sync özellikli.",
      language: "TypeScript",
      languageColor: "#2b7489",
      stars: 67,
      forks: 12,
      size: "4.2 MB",
      topics: ["react-native", "typescript", "firebase", "finance", "mobile"],
      lastUpdated: "3 days ago"
    },
    {
      name: "Data Visualization Dashboard",
      description: "D3.js ve React ile geliştirilmiş interaktif veri görselleştirme dashboard'u. Real-time data processing.",
      language: "JavaScript",
      languageColor: "#f1e05a",
      stars: 78,
      forks: 18,
      size: "6.7 MB",
      topics: ["d3js", "react", "dashboard", "visualization", "analytics"],
      lastUpdated: "4 days ago"
    },
    {
      name: "Cloud Infrastructure Tools",
      description: "AWS ve Terraform ile infrastructure as code araçları. Otomatik deployment ve monitoring çözümleri.",
      language: "Go",
      languageColor: "#00ADD8",
      stars: 45,
      forks: 8,
      size: "1.9 MB",
      topics: ["golang", "aws", "terraform", "infrastructure", "devops"],
      lastUpdated: "1 week ago"
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
            Open Source Projects
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Toplulukla paylaştığım açık kaynak projelerim ve katkılarım
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
                  <button className="p-2 rounded-lg bg-gray-700/50 hover:bg-gray-600/50 transition-colors duration-300">
                    <FaEye className="text-sm text-gray-400 hover:text-white" />
                  </button>
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
                    Updated {project.lastUpdated}
                  </span>
                  <button className="flex items-center gap-2 px-3 py-1 bg-gray-700/50 hover:bg-gray-600/50 rounded-lg text-sm text-gray-300 hover:text-white transition-all duration-300">
                    <FaGithub className="text-xs" />
                    View
                  </button>
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
          <button className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            <FaGithub className="text-lg" />
            Tüm Projelerimi Gör
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default OpenSourceProjects; 