import React from 'react';
import { PROJECTS } from '../constants';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ProjectsPage = ({ isDarkMode }) => {
  return (
    <div className={`min-h-screen container mx-auto px-8 py-10 ${isDarkMode ? 'text-neutral-300' : 'text-neutral-800'}`}>
      <div className="flex justify-between items-center mb-10">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold"
        >
          All Projects
        </motion.h1>
        <Link 
          to="/Arpan-Portfolio" 
          className="btn btn-primary inline-flex items-center gap-2"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
          <span>Back to Home</span>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROJECTS.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="card"
            style={{ backgroundColor: 'var(--card-bg)' }}
          >
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-48 object-cover"
              />
            </a>
            <div className="p-6">
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className={`text-xl font-semibold mb-2 hover:underline ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}
              >
                {project.title}
              </a>
              <p className={`mb-4 ${isDarkMode ? 'text-neutral-400' : 'text-neutral-600'}`}>
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 rounded-full text-sm"
                    style={{ 
                      backgroundColor: 'var(--tech-tag-bg)', 
                      color: 'var(--tech-tag-text)' 
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage; 