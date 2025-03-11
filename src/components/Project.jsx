import React from "react";
import { PROJECTS } from "../constants";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Project = ({ showTopThree = false }) => {
  // If showTopThree is true, only show the first 3 projects
  const projectsToShow = showTopThree ? PROJECTS.slice(0, 3) : PROJECTS;

  return (
    <div id="projects" className="border-b border-neutral-900 pb-4">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="my-20 text-center text-4xl gradient-text"
      >
        Projects
      </motion.h1>
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 0.8, delay: 0.5 }}>
        {projectsToShow.map((project, index) => (
          <div key={index} className="mb-8 flex flex-wrap hover:scale-105 transition-all ease-out duration-500 lg:justify-center">
            <div className="w-full lg:w-1/4 cursor-pointer">
              <a target="_blank" href={project.link} rel="noopener noreferrer">
                <motion.div
                  whileInView={{ opacity: 1, x: 100 }}
                  initial={{ opacity: 0, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="mb-6 rounded shadow-md overflow-hidden w-[200px] h-[200px]"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="img-contain"
                  />
                </motion.div>
              </a>
            </div>

            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <h6 className="mb-2 font-semibold cursor-pointer hover:underline">
                <a target="_blank" href={project.link} rel="noopener noreferrer">{project.title}</a>
              </h6>
              <p className="mb-4 text-neutral-350">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="rounded px-3 py-1 text-sm font-medium"
                    style={{ 
                      backgroundColor: 'var(--tech-tag-bg)', 
                      color: 'var(--tech-tag-text)' 
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        ))}
        
        {showTopThree && (
          <div className="flex justify-center mt-8 mb-12">
            <Link 
              to="/Arpan-Portfolio/projects"
              className="btn btn-primary inline-flex items-center gap-2 transform hover:translate-y-[-2px] hover:shadow-lg"
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
