import React from "react";
import { PROJECTS } from "../constants";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Project = ({ showTopThree = false }) => {
  // If showTopThree is true, only show the first 3 projects
  const projectsToShow = showTopThree ? PROJECTS.slice(0, 3) : PROJECTS;

  return (
    <div id="projects" className="border-b border-neutral-900 py-12 pb-16">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="my-20 text-center text-5xl gradient-text font-bold"
      >
        Projects
      </motion.h1>
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="max-w-7xl mx-auto px-4">
        {projectsToShow.map((project, index) => (
          <motion.div 
            key={index} 
            className="mb-16 flex flex-col lg:flex-row items-start gap-8 hover:scale-[1.02] transition-all ease-out duration-500"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <div className="w-full lg:w-2/5 mx-auto lg:mx-0 max-w-md">
              <a target="_blank" href={project.link} rel="noopener noreferrer" className="block overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="relative overflow-hidden rounded-xl w-full h-[250px]">
                  <img
                    src={`${project.image}`}
                    alt={project.title}
                    className="w-full h-full object-cover object-center transform hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <span className="text-white p-4 font-medium">View Project</span>
                  </div>
                </div>
              </a>
            </div>

            <div className="w-full lg:w-3/5">
              <h2 className="text-2xl font-bold mb-3 cursor-pointer hover:text-blue-500 transition-colors duration-300">
                <a target="_blank" href={project.link} rel="noopener noreferrer">{project.title}</a>
              </h2>
              <p className="mb-5 text-neutral-350 leading-relaxed">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.slice(0, 8).map((tech, index) => (
                  <span
                    key={index}
                    className="rounded-full px-3 py-1 text-sm font-medium transform hover:scale-105 transition-transform duration-300"
                    style={{ 
                      backgroundColor: 'var(--tech-tag-bg)', 
                      color: 'var(--tech-tag-text)' 
                    }}
                  >
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 8 && (
                  <span className="rounded-full px-3 py-1 text-sm font-medium bg-blue-500 text-white">
                    +{project.technologies.length - 8} more
                  </span>
                )}
              </div>
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-blue-500 hover:text-blue-700 font-medium transition-colors duration-300 mt-2"
              >
                View Project
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </motion.div>
        ))}
        
        {showTopThree && (
          <div className="flex justify-center mt-12">
            <Link 
              to="/projects"
              className="btn btn-primary inline-flex items-center gap-2 transform hover:translate-y-[-2px] hover:shadow-lg px-6 py-3 text-lg font-medium rounded-lg"
            >
              <span>View All Projects</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default Project;
