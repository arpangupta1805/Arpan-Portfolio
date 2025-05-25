import React from 'react';
import { PROJECTS } from '../constants';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ProjectsPage = ({ isDarkMode }) => {
  return (
    <div className={`min-h-screen py-16 ${isDarkMode ? 'text-neutral-300' : 'text-neutral-800'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-5xl font-bold gradient-text mb-6 md:mb-0"
          >
            All Projects
          </motion.h1>
          <Link 
            to="/" 
            className="btn btn-primary inline-flex items-center gap-2 transform hover:translate-y-[-2px] hover:shadow-lg transition-all duration-300"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            <span>Back to Home</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card overflow-hidden rounded-xl hover:shadow-xl hover:translate-y-[-5px] transition-all duration-300 flex flex-col h-full"
              style={{ backgroundColor: 'var(--card-bg)' }}
            >
              <div className="relative overflow-hidden h-52">
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <span className="text-white p-4 font-medium">View Project</span>
                  </div>
                </a>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`text-xl font-bold mb-3 block hover:text-blue-500 transition-colors duration-300 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}
                >
                  {project.title}
                </a>
                <p className={`mb-5 line-clamp-3 flex-grow ${isDarkMode ? 'text-neutral-400' : 'text-neutral-600'}`}>
                  {project.description}
                </p>
                <div className="space-y-4 mt-auto">
                  <h4 className="text-md font-semibold">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 5).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 rounded-full text-sm transform hover:scale-105 transition-transform duration-300"
                        style={{ 
                          backgroundColor: 'var(--tech-tag-bg)', 
                          color: 'var(--tech-tag-text)' 
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 5 && (
                      <span className="px-3 py-1 rounded-full text-sm bg-blue-500 text-white">
                        +{project.technologies.length - 5} more
                      </span>
                    )}
                  </div>
                </div>
                <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-blue-500 hover:text-blue-700 font-medium transition-colors duration-300"
                  >
                    View Project
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage; 