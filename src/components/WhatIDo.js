import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { 
  FaDocker, 
  FaCode,
  FaMobile,
  FaCloud,
  FaMicrosoft,
  FaChevronDown,
  FaChevronUp
} from 'react-icons/fa';
import { 
  SiDjango, 
  SiFlask,
  SiSpringboot, 
  SiKubernetes, 
  SiTensorflow, 
  SiPytorch,
  SiScikitlearn,
  SiPandas,
  SiNumpy,
  SiOpencv,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiKeras,
  SiApachespark,
  SiDotnet,
  SiMlflow,
} from 'react-icons/si';

const WhatIDo = () => {
  const { t } = useTranslation();
  const [hoveredTech, setHoveredTech] = useState(null);
  const [expandedCategories, setExpandedCategories] = useState({});
  const [isMobile, setIsMobile] = useState(false);

  // Check if mobile and set first category expanded
  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 1024;
      setIsMobile(mobile);
      
      // Set first category expanded by default on mobile
      if (mobile && Object.keys(expandedCategories).length === 0) {
        setExpandedCategories({ 'AI/ML': true });
      }
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, [expandedCategories]);

  const technologies = [
    // AI/ML Technologies
    { 
      icon: SiTensorflow, 
      name: "TensorFlow", 
      description: "Makine öğrenmesi ve derin öğrenme framework'ü",
      url: "https://tensorflow.org",
      category: "AI/ML"
    },
    { 
      icon: SiPytorch, 
      name: "PyTorch", 
      description: "Derin öğrenme ve neural network framework'ü",
      url: "https://pytorch.org",
      category: "AI/ML"
    },
    { 
      icon: SiKeras, 
      name: "Keras", 
      description: "Yüksek seviyeli neural network API",
      url: "https://keras.io",
      category: "AI/ML"
    },
    { 
      icon: SiScikitlearn, 
      name: "Scikit-Learn", 
      description: "Python makine öğrenmesi kütüphanesi",
      url: "https://scikit-learn.org",
      category: "AI/ML"
    },
    { 
      icon: SiPandas, 
      name: "Pandas", 
      description: "Veri analizi ve manipülasyon kütüphanesi",
      url: "https://pandas.pydata.org",
      category: "AI/ML"
    },
    { 
      icon: SiNumpy, 
      name: "NumPy", 
      description: "Bilimsel hesaplama kütüphanesi",
      url: "https://numpy.org",
      category: "AI/ML"
    },
    { 
      icon: SiOpencv, 
      name: "OpenCV", 
      description: "Bilgisayar görme kütüphanesi",
      url: "https://opencv.org",
      category: "AI/ML"
    },
    { 
      icon: SiApachespark, 
      name: "Apache Spark", 
      description: "Büyük veri işleme framework'ü",
      url: "https://spark.apache.org",
      category: "AI/ML"
    },
    { 
      icon: SiMlflow, 
      name: "MLflow", 
      description: "ML lifecycle yönetim platformu",
      url: "https://mlflow.org",
      category: "AI/ML"
    },

    // Web Frameworks
    { 
      icon: SiDjango, 
      name: "Django", 
      description: "Python web framework'ü",
      url: "https://djangoproject.com",
      category: "Web"
    },
    { 
      icon: SiFlask, 
      name: "Flask", 
      description: "Hafif Python web framework'ü",
      url: "https://flask.palletsprojects.com",
      category: "Web"
    },
    { 
      icon: SiDotnet, 
      name: "ASP.NET", 
      description: "Microsoft web framework'ü",
      url: "https://dotnet.microsoft.com/apps/aspnet",
      category: "Web"
    },
    { 
      icon: SiSpringboot, 
      name: "Spring Boot", 
      description: "Java web framework'ü",
      url: "https://spring.io/projects/spring-boot",
      category: "Web"
    },

    // Databases
    { 
      icon: SiMysql, 
      name: "MySQL", 
      description: "İlişkisel veritabanı yönetim sistemi",
      url: "https://mysql.com",
      category: "Database"
    },
    { 
      icon: SiMongodb, 
      name: "MongoDB", 
      description: "NoSQL doküman veritabanı",
      url: "https://mongodb.com",
      category: "Database"
    },
    { 
      icon: SiPostgresql, 
      name: "PostgreSQL", 
      description: "Gelişmiş açık kaynak veritabanı",
      url: "https://postgresql.org",
      category: "Database"
    },
    { 
      icon: FaMicrosoft, 
      name: "MS SQL", 
      description: "Microsoft SQL Server",
      url: "https://microsoft.com/en-us/sql-server",
      category: "Database"
    },

    // Cloud & DevOps
    { 
      icon: FaCloud, 
      name: "Azure", 
      description: "Microsoft bulut platformu",
      url: "https://azure.microsoft.com",
      category: "Cloud & DevOps"
    },
    { 
      icon: FaDocker, 
      name: "Docker", 
      description: "Konteyner teknolojisi",
      url: "https://docker.com",
      category: "Cloud & DevOps"
    },
    { 
      icon: SiKubernetes, 
      name: "Kubernetes", 
      description: "Konteyner teknolojisi",
      url: "https://kubernetes.io/",
      category: "Cloud & DevOps"
    }
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

  // Group technologies by category
  const groupedTechnologies = technologies.reduce((acc, tech) => {
    if (!acc[tech.category]) {
      acc[tech.category] = [];
    }
    acc[tech.category].push(tech);
    return acc;
  }, {});

  const categoryColors = {
    'AI/ML': 'from-blue-500 to-cyan-500',
    'Web': 'from-purple-500 to-pink-500',
    'Database': 'from-orange-500 to-red-500',
    'Cloud & DevOps': 'from-indigo-500 to-blue-500',
  };

  // Toggle category expansion on mobile
  const toggleCategory = (category) => {
    if (isMobile) {
      setExpandedCategories(prev => ({
        ...prev,
        [category]: !prev[category]
      }));
    }
  };

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
            {t('whatido.title')}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {t('whatido.subtitle')}
          </p>
        </motion.div>

        {/* Technologies in 2x2 Grid */}
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
          
          {/* Mobile hint */}
          {isMobile && (
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center text-gray-400 text-sm mb-6"
            >
              Kategorilere dokunarak teknolojileri görün
            </motion.p>
          )}
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {Object.entries(groupedTechnologies).map(([category, techs], categoryIndex) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
                className="p-6 bg-gradient-to-br from-gray-800/60 to-gray-900/60 rounded-2xl backdrop-blur-sm border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300"
              >
                {/* Category Header - Clickable on mobile */}
                <div 
                  className="flex items-center gap-3 mb-6 lg:cursor-default cursor-pointer lg:pointer-events-none"
                  onClick={() => toggleCategory(category)}
                >
                  <div className={`h-1 w-8 bg-gradient-to-r ${categoryColors[category]} rounded-full`}></div>
                  <h4 className="text-lg font-semibold text-gray-200 flex-none">{category}</h4>
                  <div className={`h-1 flex-1 bg-gradient-to-r ${categoryColors[category]} rounded-full opacity-30 hidden lg:block`}></div>
                  
                  {/* Mobile toggle icon */}
                  <div className="lg:hidden">
                    {expandedCategories[category] ? (
                      <FaChevronUp className="text-gray-400 text-sm" />
                    ) : (
                      <FaChevronDown className="text-gray-400 text-sm" />
                    )}
                  </div>
                </div>
                
                {/* Technology Icons Grid - Collapsible on mobile */}
                <motion.div
                  className="overflow-hidden"
                  initial={false}
                  animate={{
                    height: !isMobile ? 'auto' : (expandedCategories[category] ? 'auto' : 0),
                    opacity: !isMobile ? 1 : (expandedCategories[category] ? 1 : 0)
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 pt-2 lg:pt-0">
                    {techs.map((tech, index) => (
                      <motion.a
                        key={tech.name}
                        href={tech.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.05 }}
                        viewport={{ once: true }}
                        onMouseEnter={() => setHoveredTech(tech)}
                        onMouseLeave={() => setHoveredTech(null)}
                        className="relative group cursor-pointer"
                      >
                        <div className={`w-16 h-16 bg-gray-800/50 hover:bg-gradient-to-r hover:${categoryColors[category]} hover:bg-opacity-20 rounded-xl transition-all duration-300 transform hover:scale-110 backdrop-blur-sm border border-gray-700/50 hover:border-gray-600 flex flex-col items-center justify-center p-2`}>
                          <tech.icon className="text-xl text-gray-300 group-hover:text-white transition-colors duration-300" />
                          <p className="text-xs text-gray-400 group-hover:text-gray-200 mt-1 transition-colors duration-300 text-center line-clamp-1 truncate w-full">
                            {tech.name}
                          </p>
                        </div>
                        
                        {/* Tooltip */}
                        {hoveredTech === tech && (
                          <motion.div
                            initial={{ opacity: 0, y: 10, scale: 0.9 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 10, scale: 0.9 }}
                            className="absolute -top-24 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white p-3 rounded-lg shadow-lg z-20 w-48 text-center border border-gray-600"
                          >
                            <h4 className="font-semibold text-sm mb-1">{tech.name}</h4>
                            <p className="text-xs text-gray-300">{tech.description}</p>
                            <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-800"></div>
                          </motion.div>
                        )}
                      </motion.a>
                    ))}
                  </div>
                </motion.div>
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
              <div className="p-8 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl backdrop-blur-sm border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 h-full text-center">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500/20 to-purple-600/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 mx-auto">
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