import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Instagram, 
  Linkedin, 
  Github, 
  Sun, 
  Moon, 
  Menu, 
  X, 
  Sparkles,
  Code2,
  ExternalLink
} from "lucide-react";
import { SOCIAL_LINKS, EXTERNAL_LINKS, NAV_ITEMS, THEME_CONFIG, PERSONAL_INFO } from "../constants";

const Navbar = ({ toggleTheme, isDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  
  // Handle scroll effect using THEME_CONFIG
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > THEME_CONFIG.scrollThreshold);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const socialLinks = [
    {
      icon: Instagram,
      href: SOCIAL_LINKS.instagram,
      label: "Instagram",
      color: "hover:text-pink-500"
    },
    {
      icon: Linkedin,
      href: SOCIAL_LINKS.linkedin,
      label: "LinkedIn",
      color: "hover:text-blue-500"
    },
    {
      icon: Github,
      href: SOCIAL_LINKS.github,
      label: "GitHub",
      color: "hover:text-gray-700 dark:hover:text-gray-300"
    }
  ];

  const navItems = NAV_ITEMS;

  const handleSocialClick = (href) => {
    window.open(href, '_blank', 'noopener,noreferrer');
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <motion.nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled 
            ? 'glass backdrop-blur-xl shadow-lg' 
            : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <motion.div 
              className="flex items-center space-x-4"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <NavLink to="/" className="flex items-center space-x-3 group">
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center relative overflow-hidden group-hover:shadow-lg transition-all duration-300">
                    <Code2 className="w-6 h-6 text-white relative z-10" />
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <Sparkles className="absolute -top-1 -right-1 w-4 h-4 text-yellow-400 animate-pulse" />
                </div>
                <div className="hidden sm:block">
                  <div className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    {PERSONAL_INFO.name}
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">
                    {PERSONAL_INFO.title}
                  </div>
                </div>
              </NavLink>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) =>
                    `relative px-3 py-2 text-sm font-medium transition-colors duration-300 ${
                      isActive
                        ? 'text-blue-500'
                        : 'text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {item.label}
                      {isActive && (
                        <motion.div
                          className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-purple-500"
                          layoutId="activeTab"
                          initial={false}
                          transition={{ type: "spring", stiffness: 500, damping: 30 }}
                        />
                      )}
                    </>
                  )}
                </NavLink>
              ))}
              
              {/* Blog Link */}
              <a
                href={EXTERNAL_LINKS.blog}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-1 px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300"
              >
                <span>Blog</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            {/* Social Links & Theme Toggle */}
            <div className="flex items-center space-x-4">
              {/* Social Links - Desktop */}
              <div className="hidden md:flex items-center space-x-3">
                {socialLinks.map((social) => (
                  <motion.button
                    key={social.label}
                    onClick={() => handleSocialClick(social.href)}
                    className={`p-2 rounded-lg text-gray-600 dark:text-gray-400 ${social.color} transition-colors duration-300 hover:bg-gray-100 dark:hover:bg-gray-800`}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.button>
                ))}
              </div>

              {/* Theme Toggle */}
              <motion.button
                onClick={toggleTheme}
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Toggle theme"
              >
                <AnimatePresence mode="wait">
                  {isDarkMode ? (
                    <motion.div
                      key="sun"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Sun className="w-5 h-5 text-yellow-500" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="moon"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Moon className="w-5 h-5 text-blue-500" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>

              {/* Mobile Menu Button */}
              <motion.button
                onClick={toggleMenu}
                className="md:hidden p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Toggle menu"
              >
                <AnimatePresence mode="wait">
                  {isMenuOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90 }}
                      animate={{ rotate: 0 }}
                      exit={{ rotate: 90 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X className="w-6 h-6" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90 }}
                      animate={{ rotate: 0 }}
                      exit={{ rotate: -90 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu className="w-6 h-6" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={toggleMenu}
            />

            {/* Menu Panel */}
            <motion.div
              className="fixed top-16 right-4 left-4 glass rounded-2xl shadow-2xl z-50 md:hidden overflow-hidden"
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ duration: 0.2 }}
            >
              <div className="p-6 space-y-6">
                {/* Navigation Links */}
                <div className="space-y-4">
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.to}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <NavLink
                        to={item.to}
                        className={({ isActive }) =>
                          `block px-4 py-3 rounded-xl text-lg font-medium transition-all duration-300 ${
                            isActive
                              ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white'
                              : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                          }`
                        }
                        onClick={toggleMenu}
                      >
                        {item.label}
                      </NavLink>
                    </motion.div>
                  ))}

                  {/* Blog Link - Mobile */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: navItems.length * 0.1 }}
                  >
                    <a
                      href={EXTERNAL_LINKS.blog}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between px-4 py-3 rounded-xl text-lg font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300"
                      onClick={toggleMenu}
                    >
                      <span>Blog</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </motion.div>
                </div>

                {/* Social Links - Mobile */}
                <motion.div
                  className="flex justify-center space-x-6 pt-4 border-t border-gray-200 dark:border-gray-700"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  {socialLinks.map((social) => (
                    <motion.button
                      key={social.label}
                      onClick={() => handleSocialClick(social.href)}
                      className={`p-3 rounded-xl text-gray-600 dark:text-gray-400 ${social.color} transition-colors duration-300 hover:bg-gray-100 dark:hover:bg-gray-800`}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      aria-label={social.label}
                    >
                      <social.icon className="w-6 h-6" />
                    </motion.button>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
