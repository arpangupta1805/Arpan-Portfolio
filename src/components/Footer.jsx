import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaInstagram, FaLinkedin, FaGithub, FaHeart, FaRocket, FaCode, FaGlobe } from 'react-icons/fa';
import { SOCIAL_LINKS, FOOTER_LINKS, PERSONAL_INFO } from '../constants';

const Footer = ({ isDarkMode }) => {
  const handleInstagram = () => {
    window.open(SOCIAL_LINKS.instagram);
  };
  
  const handleLinkedin = () => {
    window.open(SOCIAL_LINKS.linkedin);
  };
  
  const handleGithub = () => {
    window.open(SOCIAL_LINKS.github);
  };

  // const currentYear = new Date().getFullYear();

  const quickLinks = FOOTER_LINKS.map(link => ({
    name: link.name,
    path: link.path,
    icon: link.name === 'Home' ? FaGlobe : 
          link.name === 'About' ? FaCode :
          link.name === 'Projects' ? FaRocket : FaGlobe
  }));

  const socialLinks = [
    { icon: FaInstagram, handler: handleInstagram, color: 'hover:text-pink-500' },
    { icon: FaLinkedin, handler: handleLinkedin, color: 'hover:text-blue-500' },
    { icon: FaGithub, handler: handleGithub, color: 'hover:text-gray-300' },
  ];

  return (
    <footer className="relative border-t border-white/10 backdrop-blur-xl bg-black/20 dark:bg-white/5">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-cyan-500/10" />
      
      {/* Animated particles - Moving Dots Effect */}
      {/* 
        MOVING DOTS EXPLANATION:
        - Creates 6 small circular particles (w-1 h-1 bg-blue-400 rounded-full)
        - Each dot has motion.div with animate prop for continuous movement
        - Animation moves dots in X: [0, 100, 0] (right and back)
        - Animation moves dots in Y: [0, -50, 0] (up and back down)
        - Opacity animates: [0.4, 0.8, 0.4] for breathing effect
        - Duration: 4 + i (each dot has different speed)
        - Delay: i * 0.5 (staggered start times)
        - Position: calculated with left and top percentages
        - repeat: Infinity keeps them moving continuously
        - easeInOut creates smooth, organic motion
      */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400 rounded-full opacity-40"
            animate={{
              x: [0, 100, 0],
              y: [0, -50, 0],
              opacity: [0.4, 0.8, 0.4],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
            style={{
              left: `${10 + i * 15}%`,
              top: `${20 + (i % 3) * 20}%`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto py-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left"
          >
            <Link 
              to="/" 
              className="inline-block text-3xl font-bold gradient-text hover:scale-105 transition-transform duration-300"
            >
              {PERSONAL_INFO.initials}
            </Link>
            <p className={`mt-3 text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              {PERSONAL_INFO.fullTitle}
            </p>
            <p className={`mt-2 text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              {PERSONAL_INFO.tagline}
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-center"
          >
            <h4 className={`text-lg font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Quick Links
            </h4>
            <div className="flex flex-wrap justify-center gap-4">
              {quickLinks.map((link, index) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`group flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-300 hover:scale-105 ${
                    isDarkMode 
                      ? 'text-gray-300 hover:text-white hover:bg-white/10' 
                      : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
                  }`}
                >
                  <link.icon className="text-sm group-hover:rotate-12 transition-transform duration-300" />
                  <span className="text-sm font-medium">{link.name}</span>
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center md:text-right"
          >
            <h4 className={`text-lg font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Connect
            </h4>
            <div className="flex justify-center md:justify-end space-x-4 mb-4">
              {socialLinks.map((social, index) => (
                <motion.button
                  key={index}
                  onClick={social.handler}
                  whileTap={{ scale: 0.9 }}
                  className={`p-3 rounded-full transition-all duration-300 ${
                    isDarkMode 
                      ? 'bg-white/10 text-gray-300 hover:bg-white/20' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  } ${social.color}`}
                >
                  <social.icon className="text-lg" />
                </motion.button>
              ))}
            </div>
          </motion.div>
        </div>

        
      </div>
    </footer>
  );
};

export default Footer; 