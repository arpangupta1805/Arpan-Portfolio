import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ABOUT_TEXT, CONTACT } from '../constants';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import about from '../assets/about1.jpg';

const AboutPage = ({ isDarkMode }) => {
  const handleInstagram = () => {
    window.open("https://www.instagram.com/arpan5218/");
  };
  
  const handleLinkedin = () => {
    window.open("https://www.linkedin.com/in/arpan-gupta-ab2959319/");
  };
  
  const handleGithub = () => {
    window.open("https://github.com/arpangupta1805");
  };

  return (
    <div className={`min-h-screen container mx-auto px-8 py-10 ${isDarkMode ? 'text-neutral-300' : 'text-neutral-800'}`}>
      <div className="flex justify-between items-center mb-10">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold"
        >
          About <span className="gradient-text">Me</span>
        </motion.h1>
        <Link 
          to="/Arpan-Portfolio" 
          className="btn btn-primary inline-flex items-center gap-2"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
          Back to Home
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-2"
        >
          <div className="card p-8" style={{ backgroundColor: 'var(--card-bg)' }}>
            <div className="flex flex-col md:flex-row gap-8 mb-8">
              <div className="w-full md:w-1/3 flex justify-center">
                <div className="w-48 h-48 rounded-full overflow-hidden shadow-lg border-4 border-blue-500">
                  <img 
                    src={about} 
                    alt="Arpan Gupta" 
                    className="img-contain"
                  />
                </div>
              </div>
              <div className="w-full md:w-2/3">
                <h2 className="text-2xl font-semibold mb-4">
                  <span className="gradient-text text-3xl">Arpan Gupta</span>
                </h2>
                <h3 className="text-xl mb-4">Full Stack Developer</h3>
                <div className="flex space-x-4 mb-4">
                  <FaInstagram 
                    onClick={handleInstagram} 
                    className={`text-xl cursor-pointer hover:scale-110 transition-all ${isDarkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-500'}`} 
                  />
                  <FaLinkedin 
                    onClick={handleLinkedin} 
                    className={`text-xl cursor-pointer hover:scale-110 transition-all ${isDarkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-500'}`} 
                  />
                  <FaGithub 
                    onClick={handleGithub} 
                    className={`text-xl cursor-pointer hover:scale-110 transition-all ${isDarkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-500'}`} 
                  />
                </div>
              </div>
            </div>
            
            <h2 className="text-2xl font-semibold mb-6">My Journey</h2>
            <div className="space-y-4">
              <p className="leading-relaxed">{ABOUT_TEXT}</p>
              <p className="leading-relaxed">
                I am currently pursuing my B.Tech in Computer Science and Engineering at the Indian Institute of Technology, Gandhinagar. 
                My academic journey has equipped me with a strong foundation in algorithms, data structures, and software engineering principles.
              </p>
              <p className="leading-relaxed">
                Beyond coding, I enjoy exploring new technologies, contributing to open-source projects, and staying updated with the latest trends in the tech industry.
                I believe in continuous learning and am always looking for opportunities to expand my skill set and take on new challenges.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="lg:col-span-1"
        >
          <div id="contact" className="card p-8" style={{ backgroundColor: 'var(--card-bg)' }}>
            <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <FaMapMarkerAlt className={`mt-1 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} />
                <div>
                  <h3 className="font-medium">Location</h3>
                  <p className={isDarkMode ? 'text-neutral-400' : 'text-neutral-600'}>{CONTACT.address}</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <FaPhone className={`mt-1 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} />
                <div>
                  <h3 className="font-medium">Phone</h3>
                  <p className={isDarkMode ? 'text-neutral-400' : 'text-neutral-600'}>{CONTACT.phoneNo}</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <FaEnvelope className={`mt-1 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} />
                <div>
                  <h3 className="font-medium">Email</h3>
                  <p className={isDarkMode ? 'text-neutral-400' : 'text-neutral-600'}>{CONTACT.email}</p>
                </div>
              </div>
              
              <div className={`pt-4 border-t ${isDarkMode ? 'border-neutral-700' : 'border-neutral-300'}`}>
                <h3 className="font-medium mb-4">Social Media</h3>
                <div className="flex space-x-6">
                  <FaInstagram 
                    onClick={handleInstagram} 
                    className={`text-2xl cursor-pointer hover:scale-110 transition-all ${isDarkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-500'}`} 
                  />
                  <FaLinkedin 
                    onClick={handleLinkedin} 
                    className={`text-2xl cursor-pointer hover:scale-110 transition-all ${isDarkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-500'}`} 
                  />
                  <FaGithub 
                    onClick={handleGithub} 
                    className={`text-2xl cursor-pointer hover:scale-110 transition-all ${isDarkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-500'}`} 
                  />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutPage; 