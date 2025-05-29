import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { 
  FaPython, 
  FaJs, 
  FaDocker, 
  FaReact, 
  FaNodeJs, 
  FaAws,
  FaCode,
  FaMobile,
  FaCloud
} from 'react-icons/fa';
import { 
  SiDjango, 
  SiSpring, 
  SiFirebase, 
  SiKubernetes, 
  SiTensorflow, 
  SiPostgresql
} from 'react-icons/si';

const WhatIDo = () => {
  const { t } = useTranslation();
  const [hoveredTech, setHoveredTech] = useState(null);

  const technologies = [
    { icon: FaPython, name: "Python", description: "AI/ML geliştirme ve backend uygulamalar için" },
    { icon: SiDjango, name: "Django", description: "Güçlü ve ölçeklenebilir web uygulamaları" },
    { icon: FaJs, name: "JavaScript", description: "Modern web uygulamaları ve interaktif arayüzler" },
    { icon: FaReact, name: "React", description: "Dinamik ve responsive kullanıcı arayüzleri" },
    { icon: FaNodeJs, name: "Node.js", description: "Hızlı ve verimli backend servisler" },
    { icon: SiSpring, name: "Spring", description: "Enterprise Java uygulamaları" },
    { icon: FaDocker, name: "Docker", description: "Konteyner tabanlı uygulama deployment" },
    { icon: SiKubernetes, name: "Kubernetes", description: "Orkestrali konteyner yönetimi" },
    { icon: FaAws, name: "AWS", description: "Bulut altyapı ve servisleri" },
    { icon: SiFirebase, name: "Firebase", description: "Gerçek zamanlı veritabanı ve hosting" },
    { icon: SiTensorflow, name: "TensorFlow", description: "Makine öğrenmesi ve derin öğrenme" },
    { icon: SiPostgresql, name: "PostgreSQL", description: "İlişkisel veritabanı yönetimi" }
  ];

  const services = [
    {
      icon: FaCode,
      title: t('whatido.service1.title'),
      description: t('whatido.service1.description')
    },
    {
      icon: FaMobile,
      title: t('whatido.service2.title'), 
      description: t('whatido.service2.description')
    },
    {
      icon: FaCloud,
      title: t('whatido.service3.title'),
      description: t('whatido.service3.description')
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
            {t('whatido.title')}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {t('whatido.subtitle')}
          </p>
        </motion.div>

        {/* Technologies Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-2xl font-semibold mb-8 text-center text-gray-200">
            {t('whatido.technologies')}
          </h3>
          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                onMouseEnter={() => setHoveredTech(tech)}
                onMouseLeave={() => setHoveredTech(null)}
                className="relative group"
              >
                <div className="p-4 bg-gray-800/50 hover:bg-gray-700/50 rounded-xl transition-all duration-300 transform hover:scale-110 backdrop-blur-sm border border-gray-700/50 hover:border-gray-600">
                  <tech.icon className="text-3xl lg:text-4xl text-gray-300 group-hover:text-white mx-auto transition-colors duration-300" />
                </div>
                
                {/* Tooltip */}
                {hoveredTech === tech && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute -top-20 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white p-3 rounded-lg shadow-lg z-10 w-48 text-center"
                  >
                    <h4 className="font-semibold text-sm mb-1">{tech.name}</h4>
                    <p className="text-xs text-gray-300">{tech.description}</p>
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-800"></div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Services */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="p-8 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl backdrop-blur-sm border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 h-full">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500/20 to-purple-600/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="text-3xl text-blue-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {service.title}
                  </h3>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhatIDo; 