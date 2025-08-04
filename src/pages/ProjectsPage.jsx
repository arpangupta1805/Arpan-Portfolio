import React, { useState, useRef, useEffect } from 'react';
import { PROJECTS, PAGE_CONTENT, BUTTON_LABELS } from '../constants';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FaArrowLeft, 
  FaExternalLinkAlt, 
  FaGithub, 
  FaSearch,
  FaStar,
  FaCode,
  FaCalendar,
  FaEye,
  FaChevronDown,
  FaFilter
} from 'react-icons/fa';

const ProjectsPage = ({ isDarkMode }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [hoveredProject, setHoveredProject] = useState(null);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [expandedTech, setExpandedTech] = useState({});
  const filterRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (filterRef.current && !filterRef.current.contains(event.target)) {
        setIsFilterOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Extract unique categories for filter
  const allCategories = [...new Set(PROJECTS.map(project => project.category))];
  const filters = ['All', ...allCategories];

  // Toggle technology display for a specific project
  const toggleTechDisplay = (projectTitle) => {
    setExpandedTech(prev => ({
      ...prev,
      [projectTitle]: !prev[projectTitle]
    }));
  };

  // Filter projects based on search and category filter
  const filteredProjects = PROJECTS.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = selectedFilter === 'All' || project.category === selectedFilter;
    return matchesSearch && matchesFilter;
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className={`min-h-screen pt-24 pb-12 ${isDarkMode ? 'text-neutral-300' : 'text-neutral-800'}`}>
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="text-left">
              <h1 className="text-5xl md:text-6xl font-bold gradient-text mb-4">
                {PAGE_CONTENT.projects.title}
              </h1>
              <p className={`text-lg ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                {PAGE_CONTENT.projects.description}
              </p>
            </div>
            <Link 
              to="/" 
              className="btn btn-primary inline-flex items-center gap-2 mt-6 md:mt-0 group"
            >
              <FaArrowLeft className="group-hover:-translate-x-1 transition-transform duration-300" />
              <span>{PAGE_CONTENT.projects.backButtonText}</span>
            </Link>
          </div>

          {/* Search and Filter Controls */}
          <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
            {/* Search Bar */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative flex-1 max-w-md"
            >
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className={`w-full pl-10 pr-4 py-3 rounded-xl border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  isDarkMode 
                    ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-400' 
                    : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                }`}
              />
            </motion.div>

            {/* Filter Dropdown */}
            <motion.div
              ref={filterRef}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <button
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                className={`flex items-center gap-2 px-4 py-3 rounded-xl border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  isDarkMode 
                    ? 'bg-gray-800 border-gray-700 text-white hover:bg-gray-700' 
                    : 'bg-white border-gray-300 text-gray-900 hover:bg-gray-50'
                }`}
              >
                <FaFilter className="text-sm" />
                <span className="font-medium">{selectedFilter}</span>
                <FaChevronDown className={`text-sm transition-transform duration-300 ${isFilterOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Dropdown Menu */}
              <AnimatePresence>
                {isFilterOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className={`absolute top-full mt-2 w-48 rounded-xl border shadow-lg z-10 ${
                      isDarkMode 
                        ? 'bg-gray-800 border-gray-700' 
                        : 'bg-white border-gray-200'
                    }`}
                  >
                    <div className="py-2">
                      {filters.map((filter) => (
                        <button
                          key={filter}
                          onClick={() => {
                            setSelectedFilter(filter);
                            setIsFilterOpen(false);
                          }}
                          className={`w-full px-4 py-2 text-left text-sm font-medium transition-colors duration-200 ${
                            selectedFilter === filter
                              ? 'bg-blue-500 text-white'
                              : isDarkMode
                              ? 'text-gray-300 hover:bg-gray-700'
                              : 'text-gray-700 hover:bg-gray-100'
                          }`}
                        >
                          {filter}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>

          {/* Results Counter */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className={`mt-4 text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}
          >
            Showing {filteredProjects.length} of {PROJECTS.length} projects
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                variants={itemVariants}
                layout
                onMouseEnter={() => setHoveredProject(index)}
                onMouseLeave={() => setHoveredProject(null)}
                className="card overflow-hidden rounded-2xl group cursor-pointer h-full flex flex-col"
              >
                {/* Project Image */}
                <div className="relative overflow-hidden h-56">
                  <motion.img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    whileHover={{ scale: 1.05 }}
                  />
                  
                  {/* Overlay */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredProject === index ? 1 : 0 }}
                    className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end justify-between p-6"
                  >
                    <div className="flex gap-3">
                      <motion.a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-2 bg-white/20 backdrop-blur-sm rounded-lg text-white hover:bg-white/30 transition-all duration-300"
                        title="View Live Demo"
                      >
                        <FaEye />
                      </motion.a>
                      {project.github && (
                        <motion.a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="p-2 bg-white/20 backdrop-blur-sm rounded-lg text-white hover:bg-white/30 transition-all duration-300"
                          title="View Source Code"
                        >
                          <FaGithub />
                        </motion.a>
                      )}
                    </div>
                    <div className="text-white text-right">
                      <FaStar className="text-yellow-400" />
                    </div>
                  </motion.div>

                  {/* Featured Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-blue-500 text-white text-xs font-medium rounded-full">
                      Featured
                    </span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6 flex flex-col flex-grow">
                  {/* Project Title */}
                  <motion.h3
                    className="text-xl font-bold mb-3 group-hover:text-blue-500 transition-colors duration-300"
                    whileHover={{ x: 5 }}
                  >
                    {project.title}
                  </motion.h3>

                  {/* Category Badge */}
                  <div className="mb-3">
                    <span className="inline-block px-3 py-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-medium rounded-full">
                      {project.category}
                    </span>
                  </div>

                  {/* Project Description */}
                  <p className={`mb-4 text-sm leading-relaxed flex-grow ${
                    isDarkMode ? 'text-neutral-400' : 'text-neutral-600'
                  }`}>
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold mb-2 flex items-center gap-2">
                      <FaCode className="text-blue-500" />
                      Tech Stack
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {(expandedTech[project.title] ? project.technologies : project.technologies.slice(0, 4)).map((tech, techIndex) => (
                        <motion.span
                          key={techIndex}
                          whileHover={{ scale: 1.05 }}
                          className="px-2 py-1 rounded-lg text-xs font-medium transition-all duration-300"
                          style={{ 
                            backgroundColor: 'var(--tech-tag-bg)', 
                            color: 'var(--tech-tag-text)' 
                          }}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.2, delay: techIndex * 0.05 }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                      {project.technologies.length > 4 && (
                        <motion.button
                          onClick={() => toggleTechDisplay(project.title)}
                          className="px-2 py-1 rounded-lg text-xs bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600 transition-all duration-300 cursor-pointer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          {expandedTech[project.title] ? 'Show Less' : `+${project.technologies.length - 4} more`}
                        </motion.button>
                      )}
                    </div>
                  </div>

                  {/* Project Actions */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700 mt-auto">
                    <motion.a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      className="inline-flex items-center gap-2 text-blue-500 hover:text-blue-700 font-medium text-sm transition-colors duration-300"
                    >
                      <FaExternalLinkAlt />
                      {PAGE_CONTENT.projects.viewProjectText}
                    </motion.a>
                    
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <FaCalendar />
                      <span>2024</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* No Results */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-16"
          >
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold mb-2">No projects found</h3>
            <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Try adjusting your search or filter criteria
            </p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedFilter('All');
              }}
              className="btn btn-primary mt-4"
            >
              Clear Filters
            </button>
          </motion.div>
        )}

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-16"
        >
          <div className="card p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Like what you see?</h3>
            <p className={`mb-6 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Let's collaborate on your next project and create something amazing together.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/about" className="btn btn-primary">
                Get In Touch
              </Link>
              <Link to="/resume" className="btn btn-secondary">
                View Resume
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectsPage;