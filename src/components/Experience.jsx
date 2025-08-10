import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { 
  Briefcase, 
  Calendar, 
  MapPin, 
  ExternalLink, 
  Code, 
  Users, 
  Trophy,
  Zap,
  Star,
  GitBranch,
  Globe,
  Sparkles
} from "lucide-react";
import { EXPERIENCES } from "../constants";

// Experience Card Component
const ExperienceCard = ({ experience, index, isInView }) => {
  const cardVariants = {
    hidden: { opacity: 0, x: index % 2 === 0 ? -50 : 50, scale: 0.9 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        delay: index * 0.2,
        ease: "easeOut"
      }
    }
  };

  const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.5,
        delay: index * 0.2 + 0.3,
        type: "spring",
        stiffness: 200
      }
    }
  };

  // Extract company and role for better display
  const [company, role] = experience.company.includes(' - ') 
    ? experience.company.split(' - ')
    : [experience.company, ''];

  // Use dynamic key contributions from the experience data
  const achievements = experience.keycontributions || [];

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="group relative mb-12"
    >
      {/* Timeline Line (Desktop) */}
      <div className="hidden lg:block absolute left-1/2 top-16 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500 opacity-30 group-hover:opacity-100 transition-opacity duration-300 transform -translate-x-1/2" />
      
      {/* Timeline Dot */}
      <motion.div
        className="hidden lg:block absolute left-1/2 top-12 w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full z-10 group-hover:scale-125 transition-transform duration-300 transform -translate-x-1/2"
        variants={iconVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <div className="w-full h-full bg-white dark:bg-gray-900 rounded-full flex items-center justify-center scale-50">
          <Briefcase className="w-3 h-3 text-blue-500" />
        </div>
      </motion.div>

      {/* Card Container */}
      <div className={`lg:w-5/12 ${index % 2 === 0 ? 'lg:ml-0' : 'lg:ml-auto'} glass-card p-8 rounded-2xl hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02] hover:-translate-y-1`}>
        
        {/* Experience Header */}
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Code className="w-8 h-8 text-white" />
            </div>
            <div>
              <h3 className="text-xl lg:text-2xl font-bold group-hover:text-blue-500 transition-colors duration-300">
                {experience.role}
              </h3>
              <p className="text-blue-600 dark:text-blue-400 font-semibold">
                {company}
              </p>
              {role && (
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {role}
                </p>
              )}
            </div>
          </div>
          
          <div className="text-right">
            <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-1">
              <Calendar className="w-4 h-4" />
              <span className="font-medium">{experience.year}</span>
            </div>
            <div className="inline-flex items-center gap-1 px-2 py-1 bg-green-100 dark:bg-green-900/30 rounded-full text-green-600 dark:text-green-400 text-xs font-medium">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span>Open Source</span>
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="space-y-4 mb-6">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            {experience.description}
          </p>

          {/* Key Achievements */}
          {achievements && achievements.length > 0 && (
            <div className="space-y-3">
              <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 flex items-center gap-2">
                <Trophy className="w-4 h-4 text-yellow-500" />
                Key Contributions
              </h4>
              <ul className="space-y-2">
                {achievements.map((achievement, achievementIndex) => (
                  <motion.li
                    key={achievementIndex}
                    className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: index * 0.2 + 0.5 + achievementIndex * 0.1, duration: 0.4 }}
                  >
                    <Star className="w-4 h-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                    <span>{achievement}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Technologies */}
        <div className="space-y-3">
          <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 flex items-center gap-2">
            <Zap className="w-4 h-4 text-blue-500" />
            Technologies Used
          </h4>
          <div className="flex flex-wrap gap-2">
            {experience.technologies.map((tech, techIndex) => (
              <motion.span
                key={techIndex}
                className="px-3 py-1 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-full text-sm font-medium text-blue-600 dark:text-blue-400 hover:scale-105 transition-transform duration-200"
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: index * 0.2 + 0.8 + techIndex * 0.05, duration: 0.3 }}
                whileHover={{ scale: 1.05, backgroundColor: "rgba(59, 130, 246, 0.1)" }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Project Links/Actions */}
        <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
              <div className="flex items-center gap-1">
                <Users className="w-4 h-4" />
                <span>Open Source</span>
              </div>
              <div className="flex items-center gap-1">
                <GitBranch className="w-4 h-4" />
                <span>Frontend Focus</span>
              </div>
            </div>
            
            {/* Show View Project button only if link exists */}
            {experience.link && experience.link.trim() !== "" && (
              <motion.a
                href={experience.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-blue-500 hover:text-blue-600 font-medium transition-colors text-sm"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <span>View Project</span>
                <ExternalLink className="w-4 h-4" />
              </motion.a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};



// Main Experience Component
const Experience = ({ isDarkMode }) => {
  const ref = useRef();
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

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
      id="experience" 
      className="section relative overflow-hidden"
      ref={ref}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/3 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '-3s' }} />
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
            Professional <span className="gradient-text">Experience</span>
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Contributing to open source and building impactful solutions
          </motion.p>
          
          {/* Decorative Elements
          <div className="flex justify-center mt-6">
            <motion.div
              className="flex items-center gap-2"
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.6, duration: 0.4 }}
            >
              <Sparkles className="w-5 h-5 text-yellow-400 animate-pulse" />
              <span className="text-sm text-gray-500 dark:text-gray-400">
                {EXPERIENCES.length} Experience{EXPERIENCES.length > 1 ? 's' : ''}
              </span>
              <Sparkles className="w-5 h-5 text-yellow-400 animate-pulse" />
            </motion.div>
          </div> */}
        </motion.div>


        {/* Experience Timeline */}
        <div className="relative">
          {/* Timeline Background */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-gray-300 dark:via-gray-600 to-transparent transform -translate-x-1/2" />
          
          {EXPERIENCES.map((experience, index) => (
            <ExperienceCard
              key={index}
              experience={experience}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>

        {/* Future Goals */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.5, duration: 0.6 }}
        >
          <div className="glass-card inline-flex items-center gap-3 px-6 py-4 rounded-xl">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Always looking for new opportunities to contribute and learn
            </span>
            <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
