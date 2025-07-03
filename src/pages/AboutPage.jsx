import React, { useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  ABOUT_TEXT, 
  CONTACT, 
  ProfilePhoto, 
  SOCIAL_LINKS, 
  ABOUT_STATS, 
  ANIMATION_CONFIG, 
  PERSONAL_INFO, 
  PAGE_CONTENT, 
  BUTTON_LABELS 
} from '../constants';
import { 
  FaMapMarkerAlt, 
  FaPhone, 
  FaEnvelope, 
  FaInstagram, 
  FaLinkedin, 
  FaGithub,
  FaCode,
  FaGraduationCap,
  FaLaptopCode,
  FaArrowLeft,
  FaDownload,
  FaEye
} from 'react-icons/fa';

const AboutPage = ({ isDarkMode }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [stats, setStats] = useState({ 
    projects: 0, 
    experience: 0, 
    technologies: 0 
  });

  // Social media handlers - using constants
  const handleInstagram = () => {
    window.open(SOCIAL_LINKS.instagram);
  };
  
  const handleLinkedin = () => {
    window.open(SOCIAL_LINKS.linkedin);
  };
  
  const handleGithub = () => {
    window.open(SOCIAL_LINKS.github);
  };

  // Animated counter effect using constants
  useEffect(() => {
    if (isInView) {
      const counters = [
        { key: 'projects', target: ABOUT_STATS.projects, duration: ANIMATION_CONFIG.counterDurations.projects },
        { key: 'experience', target: ABOUT_STATS.experience, duration: ANIMATION_CONFIG.counterDurations.experience },
        { key: 'technologies', target: ABOUT_STATS.technologies, duration: ANIMATION_CONFIG.counterDurations.technologies },
      ];

      counters.forEach(({ key, target, duration }) => {
        let current = 0;
        const increment = target / (duration / ANIMATION_CONFIG.counterUpdateInterval);
        const timer = setInterval(() => {
          current += increment;
          if (current >= target) {
            current = target;
            clearInterval(timer);
          }
          setStats(prev => ({ ...prev, [key]: Math.floor(current) }));
        }, ANIMATION_CONFIG.counterUpdateInterval);
      });
    }
  }, [isInView]);

  // Quick stats configuration using real data from constants
  const quickStats = [
    { icon: FaCode, label: 'Projects Built', value: stats.projects, suffix: '+' },
    { icon: FaGraduationCap, label: 'Years Experience', value: stats.experience, suffix: '+' },
    { icon: FaLaptopCode, label: 'Technologies', value: stats.technologies, suffix: '+' },
  ];

  // Social links configuration using constants
  const socialLinks = [
    { icon: FaInstagram, handler: handleInstagram, color: 'text-pink-500', bg: 'bg-pink-500/10' },
    { icon: FaLinkedin, handler: handleLinkedin, color: 'text-blue-500', bg: 'bg-blue-500/10' },
    { icon: FaGithub, handler: handleGithub, color: 'text-gray-400', bg: 'bg-gray-500/10' },
  ];

  return (
    <div className={`min-h-screen pt-24 pb-12 ${isDarkMode ? 'text-neutral-300' : 'text-neutral-800'}`}>
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12"
        >
          <div>
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              {PAGE_CONTENT.about.title.split(' ')[0]} <span className="gradient-text">{PAGE_CONTENT.about.title.split(' ')[1]}</span>
            </h1>
            <p className={`text-lg ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              {PAGE_CONTENT.about.description}
            </p>
          </div>
          <Link 
            to="/" 
            className="btn btn-primary inline-flex items-center gap-2 mt-6 md:mt-0 group"
          >
            <FaArrowLeft className="group-hover:-translate-x-1 transition-transform duration-300" />
            {PAGE_CONTENT.about.backButtonText}
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2"
          >
            {/* Profile Section */}
            <div className="card p-8 mb-8">
              <div className="flex flex-col md:flex-row gap-8 mb-8">
                <div className="w-full md:w-1/3 flex justify-center">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="relative group"
                  >
                    <div className="w-48 h-48 rounded-2xl overflow-hidden shadow-2xl border-4 border-blue-500/30 relative">
                      <img 
                        src={ProfilePhoto} 
                        alt={PERSONAL_INFO.name} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-blue-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    {/* Floating elements */}
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500 rounded-full opacity-20"
                    />
                    <motion.div
                      animate={{ rotate: -360 }}
                      transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                      className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-500 rounded-full opacity-20"
                    />
                  </motion.div>
                </div>
                
                <div className="w-full md:w-2/3">
                  <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-3xl font-bold mb-2"
                  >
                    <span className="gradient-text">{PERSONAL_INFO.name}</span>
                  </motion.h2>
                  <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="text-xl mb-6 text-blue-500 font-medium"
                  >
                    {PERSONAL_INFO.fullTitle}
                  </motion.h3>
                  
                  {/* Social Links */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="flex gap-4 mb-6"
                  >
                    {socialLinks.map((social, index) => (
                      <motion.button
                        key={index}
                        onClick={social.handler}
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className={`p-3 rounded-xl transition-all duration-300 ${social.bg} ${social.color} hover:shadow-lg`}
                      >
                        <social.icon className="text-xl" />
                      </motion.button>
                    ))}
                  </motion.div>

                  {/* Quick Actions */}
                  <div className="flex flex-wrap gap-3">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      className="btn btn-primary text-sm"
                    >
                      <FaDownload className="mr-2" />
                      {BUTTON_LABELS.downloadCV}
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      className="btn btn-secondary text-sm"
                    >
                      <FaEye className="mr-2" />
                      {BUTTON_LABELS.viewPortfolio}
                    </motion.button>
                  </div>
                </div>
              </div>
              
              {/* Bio Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3">
                  <span className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                    <FaCode className="text-white text-sm" />
                  </span>
                  My Journey
                </h3>
                <div className="space-y-4 text-lg leading-relaxed">
                  <p>{ABOUT_TEXT}</p>
                  <p>
                    I am currently pursuing my B.Tech in Computer Science and Engineering at the 
                    <span className="font-semibold text-blue-500"> {PERSONAL_INFO.institution}</span>. 
                    My academic journey has equipped me with a strong foundation in algorithms, data structures, and software engineering principles.
                  </p>
                  <p>
                    Beyond coding, I enjoy exploring new technologies, contributing to open-source projects, and staying updated with the latest trends in the tech industry.
                    I believe in continuous learning and am always looking for opportunities to expand my skill set and take on new challenges.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Stats Section */}
            <motion.div
              ref={ref}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-4"
            >
              {quickStats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className="card p-6 text-center group hover:scale-105 transition-all duration-300"
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mx-auto mb-3"
                  >
                    <stat.icon className="text-white text-xl" />
                  </motion.div>
                  <div className="text-3xl font-bold gradient-text mb-1">
                    {stat.value}{stat.suffix}
                  </div>
                  <div className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Contact Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-1"
          >
            <div className="card p-8 sticky top-24">
              <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3">
                <span className="w-8 h-8 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center">
                  <FaEnvelope className="text-white text-sm" />
                </span>
                Get In Touch
              </h3>
              
              <div className="space-y-6">
                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-start space-x-4 p-4 rounded-xl hover:bg-blue-500/5 transition-all duration-300"
                >
                  <div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center">
                    <FaMapMarkerAlt className="text-blue-500" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Location</h4>
                    <p className={`text-sm ${isDarkMode ? 'text-neutral-400' : 'text-neutral-600'}`}>
                      {CONTACT.address}
                    </p>
                  </div>
                </motion.div>
                
                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-start space-x-4 p-4 rounded-xl hover:bg-green-500/5 transition-all duration-300"
                >
                  <div className="w-10 h-10 bg-green-500/10 rounded-lg flex items-center justify-center">
                    <FaPhone className="text-green-500" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Phone</h4>
                    <p className={`text-sm ${isDarkMode ? 'text-neutral-400' : 'text-neutral-600'}`}>
                      {CONTACT.phoneNo}
                    </p>
                  </div>
                </motion.div>
                
                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-start space-x-4 p-4 rounded-xl hover:bg-purple-500/5 transition-all duration-300"
                >
                  <div className="w-10 h-10 bg-purple-500/10 rounded-lg flex items-center justify-center">
                    <FaEnvelope className="text-purple-500" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Email</h4>
                    <p className={`text-sm ${isDarkMode ? 'text-neutral-400' : 'text-neutral-600'}`}>
                      {CONTACT.email}
                    </p>
                  </div>
                </motion.div>
              </div>

              {/* CTA Button */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="mt-8"
              >
                <Link
                  to="/projects"
                  className="btn btn-primary w-full text-center"
                >
                  {BUTTON_LABELS.viewMyWork}
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage; 