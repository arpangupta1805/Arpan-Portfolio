import React, { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  ExternalLink, 
  Github, 
  Play, 
  Code, 
  Sparkles, 
  ArrowRight,
  Eye,
  Star,
  Calendar,
  Users
} from "lucide-react";
import { PROJECTS, BUTTON_LABELS } from "../constants";

// Enhanced Project Card Component
const ProjectCard = ({ project, index, isInView }) => {
  const [isHovered, setIsHovered] = useState(false);

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        delay: index * 0.1,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    hover: {
      scale: 1.1,
      rotate: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const overlayVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.3 }
    }
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative glass-card rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02]">
        {/* Project Image */}
        <div className="relative h-64 lg:h-72 overflow-hidden">
          <motion.img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
            variants={imageVariants}
            whileHover="hover"
          />
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          
          {/* Hover Overlay */}
          <AnimatePresence>
            {isHovered && (
              <motion.div
                className="absolute inset-0 bg-black/60 flex items-center justify-center"
                variants={overlayVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
              >
                <div className="flex gap-4">
                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg text-white hover:bg-white/20 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Live Demo</span>
                  </motion.a>
                  
                  {project.github && (
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg text-white hover:bg-white/20 transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github className="w-4 h-4" />
                      <span>Code</span>
                    </motion.a>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Status Badge */}
          <div className="absolute top-4 left-4">
            <div className="flex items-center gap-2 px-3 py-1 bg-green-500/90 backdrop-blur-sm rounded-full text-white text-sm font-medium">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
              <span>Live</span>
            </div>
          </div>

          {/* Featured Badge */}
          {index < 3 && (
            <div className="absolute top-4 right-4">
              <div className="flex items-center gap-1 px-2 py-1 bg-yellow-500/90 backdrop-blur-sm rounded-full text-white text-xs font-medium">
                <Star className="w-3 h-3" />
                <span>Featured</span>
              </div>
            </div>
          )}
        </div>

        {/* Project Content */}
        <div className="p-6 space-y-4">
          {/* Title and Description */}
          <div className="space-y-3">
            <h3 className="text-xl lg:text-2xl font-bold group-hover:text-blue-500 transition-colors duration-300">
              {project.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed line-clamp-3">
              {project.description}
            </p>
          </div>

          {/* Technologies */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide">
              Technologies
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.slice(0, 6).map((tech, techIndex) => (
                <motion.span
                  key={techIndex}
                  className="px-3 py-1 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-full text-sm font-medium text-blue-600 dark:text-blue-400"
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(59, 130, 246, 0.1)" }}
                  transition={{ duration: 0.2 }}
                >
                  {tech}
                </motion.span>
              ))}
              {project.technologies.length > 6 && (
                <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm font-medium text-gray-600 dark:text-gray-400">
                  +{project.technologies.length - 6}
                </span>
              )}
            </div>
          </div>

          {/* Project Stats */}
          <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
            <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
              <div className="flex items-center gap-1">
                <Eye className="w-4 h-4" />
                <span>Live</span>
              </div>
              <div className="flex items-center gap-1">
                <Code className="w-4 h-4" />
                <span>{project.technologies.length} techs</span>
              </div>
            </div>
            
            <motion.a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-blue-500 hover:text-blue-600 font-medium transition-colors"
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            >
              <span>{BUTTON_LABELS.viewProject}</span>
              <ArrowRight className="w-4 h-4" />
            </motion.a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// Main Projects Component
const Project = ({ showTopThree = false, isDarkMode }) => {
  const ref = useRef();
  const isInView = useInView(ref, { once: true, threshold: 0.1 });
  
  const projectsToShow = showTopThree ? PROJECTS.slice(0, 3) : PROJECTS;

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const headerVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <section 
      id="projects" 
      className="section relative overflow-hidden"
      ref={ref}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '-4s' }} />
      </div>

      <div className="container-custom relative">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          variants={headerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.h2 
            className="text-4xl lg:text-5xl font-bold mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Featured <span className="gradient-text">Projects</span>
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Showcase of my latest work and creative solutions
          </motion.p>
          
          {/* Decorative Elements */}
          <div className="flex justify-center mt-6">
            <motion.div
              className="flex items-center gap-2"
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.6, duration: 0.4 }}
            >
              <Sparkles className="w-5 h-5 text-yellow-400 animate-pulse" />
              <span className="text-sm text-gray-500 dark:text-gray-400">
                {projectsToShow.length} {showTopThree ? 'Featured' : 'Total'} Projects
              </span>
              <Sparkles className="w-5 h-5 text-yellow-400 animate-pulse" />
            </motion.div>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8"
          variants={sectionVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {projectsToShow.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
              index={index}
              isInView={isInView}
            />
          ))}
        </motion.div>

        {/* View All Projects Button */}
        {showTopThree && (
          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1, duration: 0.6 }}
          >
            <Link 
              to="/projects"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <span>{BUTTON_LABELS.viewAllProjects}</span>
              <div className="flex items-center gap-1">
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                <Sparkles className="w-4 h-4 group-hover:animate-spin" />
              </div>
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Project;
