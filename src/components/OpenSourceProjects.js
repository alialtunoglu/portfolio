import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FaGithub, FaStar, FaCodeBranch, FaEye, FaSpinner, FaExclamationTriangle } from 'react-icons/fa';
import useGitHubPinnedRepos from '../hooks/useGitHubPinnedRepos';

const OpenSourceProjects = () => {
  const { t } = useTranslation();
  const { repos, loading, error } = useGitHubPinnedRepos();

  // Fallback projeler eğer API çalışmazsa
  const fallbackProjects = [
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
    }
  ];

  const projects = error ? fallbackProjects : repos;

  if (loading) {
    return (
      <section className="py-20 px-6 bg-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              {t('openSourceProjects.title')}
            </h2>
            <div className="flex items-center justify-center gap-3 text-gray-300">
              <FaSpinner className="animate-spin text-2xl" />
              <span className="text-lg">GitHub projelerini yüklüyor...</span>
            </div>
          </motion.div>
        </div>
      </section>
    );
  }

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
          
          {error && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mt-4 p-3 bg-yellow-500/10 border border-yellow-500/30 rounded-lg inline-flex items-center gap-2 text-yellow-400"
            >
              <FaExclamationTriangle className="text-sm" />
              <span className="text-sm">GitHub API kullanılamıyor, statik projeler gösteriliyor</span>
            </motion.div>
          )}
          
          {!error && repos.length > 0 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mt-4 p-3 bg-green-500/10 border border-green-500/30 rounded-lg inline-flex items-center gap-2 text-green-400"
            >
              <FaGithub className="text-sm" />
              <span className="text-sm">GitHub'dan dinamik olarak çekilen pinlenmiş projeler</span>
            </motion.div>
          )}
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
                  <div className="flex items-center gap-2 min-w-0 flex-1">
                    <FaGithub className="text-2xl text-gray-400 flex-shrink-0" />
                    <h3 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors duration-300 truncate">
                      {project.name}
                    </h3>
                  </div>
                  <a
                    href={project.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-gray-700/50 hover:bg-gray-600/50 transition-colors duration-300 flex-shrink-0"
                  >
                    <FaEye className="text-sm text-gray-400 hover:text-white" />
                  </a>
                </div>

                {/* Description */}
                <p className="text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Topics */}
                {project.topics && project.topics.length > 0 && (
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
                )}

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
                    {t('projects.view')}
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