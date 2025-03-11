import React from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaLinkedin, FaGithub, FaHeart } from 'react-icons/fa';

const Footer = ({ isDarkMode }) => {
  const handleInstagram = () => {
    window.open("https://www.instagram.com/arpan5218/");
  };
  
  const handleLinkedin = () => {
    window.open("https://www.linkedin.com/in/arpan-gupta-ab2959319/");
  };
  
  const handleGithub = () => {
    window.open("https://github.com/arpangupta1805");
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer 
      className={`py-8 border-t w-full z-10 relative mt-8 ${isDarkMode ? 'bg-[#111111] border-[#262626]' : 'bg-[#f1f5f9] border-[#e5e7eb]'}`}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Link to="/Arpan-Portfolio" className="text-2xl font-bold gradient-text">AG</Link>
            <p className={`mt-2 text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Full Stack Developer
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-6 mb-4">
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
            
            <div className="flex flex-wrap justify-center md:justify-end gap-4 mb-4">
              <Link to="/Arpan-Portfolio" className={`text-sm hover:underline ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Home</Link>
              <Link to="/Arpan-Portfolio/about" className={`text-sm hover:underline ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>About</Link>
              <Link to="/Arpan-Portfolio/projects" className={`text-sm hover:underline ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Projects</Link>
              <Link to="/Arpan-Portfolio/resume" className={`text-sm hover:underline ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Resume</Link>
            </div>
            
            <p className={`text-sm flex items-center ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              © {currentYear} Made with <FaHeart className="mx-1 text-red-500" /> by Arpan Gupta
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 