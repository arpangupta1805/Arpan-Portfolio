import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaMoon, FaSun } from "react-icons/fa";

const Navbar = ({ toggleTheme, isDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/" || location.pathname === "";
  
  const handleInstagram = () => {
    window.open("https://www.instagram.com/arpan5218/");
  };
  
  const handlelinkedin = () => {
    window.open("https://www.linkedin.com/in/arpan-gupta-ab2959319/");
  };
  
  const handleGithub = () => {
    window.open("https://github.com/arpangupta1805");
  };
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav 
      className={`sticky top-0 z-50 backdrop-blur-md mb-10 flex flex-col md:flex-row items-center justify-between py-4 px-6 md:px-10 shadow-md`}
      style={{ backgroundColor: 'var(--nav-bg)' }}
      id="navbar"
    >
      <div className="flex w-full md:w-auto items-center justify-between">
        <div className="flex items-center justify-center gap-2">
          <div className={`flex flex-shrink-0 items-center text-4xl border-r-2 ${isDarkMode ? 'border-gray-700' : 'border-gray-300'} pr-3`}>
            <NavLink 
              to="/" 
              className={`mx-2 w-10 cursor-pointer font-bold ${isDarkMode ? 'hover:text-blue-300' : 'hover:text-blue-600'} transition-all ease-in-out`}
              style={{ color: 'var(--text-primary)' }}
            >
              AG
            </NavLink>
          </div>
          <div className="hidden md:flex items-center justify-center gap-4 text-2xl">
            <FaInstagram 
              onClick={handleInstagram} 
              className={`cursor-pointer hover:scale-110 transition-all ease-in-out ${isDarkMode ? 'text-neutral-300 hover:text-blue-300' : 'text-neutral-700 hover:text-blue-600'}`} 
            />
            <FaLinkedin 
              onClick={handlelinkedin} 
              className={`cursor-pointer hover:scale-110 transition-all ease-in-out ${isDarkMode ? 'text-neutral-300 hover:text-blue-300' : 'text-neutral-700 hover:text-blue-600'}`}
            />
            <FaGithub 
              onClick={handleGithub} 
              className={`cursor-pointer hover:scale-110 transition-all ease-in-out ${isDarkMode ? 'text-neutral-300 hover:text-blue-300' : 'text-neutral-700 hover:text-blue-600'}`} 
            />
          </div>
        </div>
        
        {/* Mobile menu button */}
        <div className="md:hidden flex items-center">
          <button 
            onClick={toggleTheme} 
            className={`mr-4 p-2 rounded-full ${isDarkMode ? 'hover:bg-neutral-800' : 'hover:bg-neutral-200'} transition-all`}
          >
            {isDarkMode ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-blue-600" />}
          </button>
          <button 
            onClick={toggleMenu} 
            className={`p-2 rounded-md ${isDarkMode ? 'hover:bg-neutral-800' : 'hover:bg-neutral-200'} transition-all`}
            style={{ color: 'var(--text-primary)' }}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>
      
      {/* Desktop Navigation */}
      <div className={`hidden md:flex items-center justify-center gap-6 text-lg`}>
        
          <>
            <NavLink to="/" className={({ isActive }) => `${isActive ? "text-blue-500" : ""} cursor-pointer ${isDarkMode ? 'hover:text-blue-300' : 'hover:text-blue-600'} transition-all font-medium hover:decoration-blue-500`} style={{ color: 'var(--text-primary)' }}>
              Home
            </NavLink>
            <NavLink to="/about" className={({ isActive }) => `${isActive ? "text-blue-500" : ""} cursor-pointer ${isDarkMode ? 'hover:text-blue-300' : 'hover:text-blue-600'} transition-all font-medium hover:decoration-blue-500`} style={{ color: 'var(--text-primary)' }}
            >
              About
            </NavLink>
            <NavLink to="/projects" className={({ isActive }) => `${isActive ? "text-blue-500" : ""} cursor-pointer ${isDarkMode ? 'hover:text-blue-300' : 'hover:text-blue-600'} transition-all font-medium hover:decoration-blue-500`}style={{ color: 'var(--text-primary)' }}>
              Projects
            </NavLink>
            <a target="_blank" href="https://blog-gamma-topaz-88.vercel.app" className={`cursor-pointer transition-all font-medium ${isDarkMode 
                    ? 'hover:text-blue-300' 
                    : 'hover:text-blue-600'} hover:decoration-blue-500`}>Blog</a>
          </>
        <NavLink 
          to="/resume" 
          className={({ isActive }) => `${isActive ? "text-blue-500" : ""} cursor-pointer ${isDarkMode ? 'hover:text-blue-300' : 'hover:text-blue-600'} transition-all font-medium hover:decoration-blue-500`}
          style={{ color: 'var(--text-primary)' }}
        >
          Resume
        </NavLink>
        
        <button 
          onClick={toggleTheme} 
          className={`p-2 rounded-full ${isDarkMode ? 'hover:bg-neutral-800' : 'hover:bg-neutral-200'} transition-all`}
        >
          {isDarkMode ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-blue-600" />}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      <div className={`md:hidden w-full ${isMenuOpen ? 'block' : 'hidden'} mt-4`}>
        <div className="flex flex-col items-center gap-4 py-2">
          <NavLink 
            to="/" 
            className={`cursor-pointer ${isDarkMode ? 'hover:text-blue-300' : 'hover:text-blue-600'} transition-all font-medium hover:decoration-blue-500`}
            style={{ color: 'var(--text-primary)' }}
            onClick={() => setIsMenuOpen(false)}
            >
              Home
            </NavLink>
          
          <NavLink 
            to="/about" 
            className={({ isActive }) => 
              `cursor-pointer transition-all font-medium ${
                isActive 
                  ? 'text-blue-500' 
                  : isDarkMode 
                    ? 'hover:text-blue-300' 
                    : 'hover:text-blue-600'
              } hover:decoration-blue-500`
            }
            style={{ color: 'var(--text-primary)' }}
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </NavLink>
          
          <NavLink 
            to="/projects" 
            className={({ isActive }) => 
              `cursor-pointer transition-all font-medium ${
                isActive 
                  ? 'text-blue-500' 
                  : isDarkMode 
                    ? 'hover:text-blue-300' 
                    : 'hover:text-blue-600'
              } hover:decoration-blue-500`
            }
            style={{ color: 'var(--text-primary)' }}
            onClick={() => setIsMenuOpen(false)}
          >
            Projects
          </NavLink>
          
          <a target="_blank" href="https://blog-gamma-topaz-88.vercel.app" className={`cursor-pointer transition-all font-medium ${isDarkMode 
                    ? 'hover:text-blue-300' 
                    : 'hover:text-blue-600'} hover:decoration-blue-500`}>Blog</a>

          <NavLink 
            to="/resume" 
            className={({ isActive }) => 
              `cursor-pointer transition-all font-medium ${
                isActive 
                  ? 'text-blue-500' 
                  : isDarkMode 
                    ? 'hover:text-blue-300' 
                    : 'hover:text-blue-600'
              } hover:decoration-blue-500`
            }
            style={{ color: 'var(--text-primary)' }}
            onClick={() => setIsMenuOpen(false)}
          >
            Resume
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
