import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { 
  ArrowLeft, 
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
  Building2,
  CheckCircle
} from "lucide-react";
import { EXPERIENCES } from "../constants";

// Enhanced Timeline Experience Card
const TimelineExperienceCard = ({ experience, index, isInView }) => {
  const isEven = index % 2 === 0;
  
  const cardVariants = {
    hidden: { 
      opacity: 0, 
      x: isEven ? -100 : 100,
      scale: 0.8
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        delay: index * 0.2,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const [company, role] = experience.company.includes(' - ') 
    ? experience.company.split(' - ')
    : [experience.company, ''];

  const achievements = experience.keycontributions || [];

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="relative mb-16"
    >
      {/* Timeline connector */}
      <div className="hidden lg:block absolute left-1/2 top-20 bottom-0 w-0.5 bg-gradient-to-b from-blue-500/50 to-transparent transform -translate-x-1/2" />
      
      {/* Timeline dot */}
      <motion.div
        className="hidden lg:block absolute left-1/2 top-16 w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full z-10 transform -translate-x-1/2 shadow-lg"
        initial={{ scale: 0, rotate: -180 }}
        animate={isInView ? { scale: 1, rotate: 0 } : {}}
        transition={{ 
          duration: 0.6, 
          delay: index * 0.2 + 0.3,
          type: "spring",
          stiffness: 200 
        }}
      >
        <div className="w-full h-full bg-white dark:bg-gray-900 rounded-full flex items-center justify-center scale-75 shadow-inner">
          <Briefcase className="w-4 h-4 text-blue-500" />
        </div>
        {/* Pulse animation */}
        <div className="absolute inset-0 rounded-full bg-blue-500/30 animate-ping" />
      </motion.div>

      {/* Card content */}
      <div className={`lg:w-5/12 ${isEven ? 'lg:ml-0 lg:pr-16' : 'lg:ml-auto lg:pl-16'}`}>
        <motion.div
          className="glass-card p-8 rounded-2xl hover:shadow-2xl transition-all duration-500 border border-white/10"
          whileHover={{ 
            scale: 1.02, 
            y: -5,
            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
          }}
        >
          {/* Header section */}
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center shadow-lg">
                  <Building2 className="w-8 h-8 text-white" />
                </div>
                <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-4 h-4 text-white" />
                </div>
              </div>
              
              <div>
                <h3 className="text-xl lg:text-2xl font-bold text-gray-900 dark:text-white mb-1 hover:text-blue-500 transition-colors">
                  {experience.role}
                </h3>
                <p className="text-blue-600 dark:text-blue-400 font-semibold text-lg">
                  {company}
                </p>
                {role && (
                  <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                    {role}
                  </p>
                )}
              </div>
            </div>

            {/* Date and status */}
            <div className="text-right">
              <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-2">
                <Calendar className="w-4 h-4" />
                <span className="font-medium">{experience.year}</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-full">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-green-600 dark:text-green-400 text-xs font-medium">
                  Open Source
                </span>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-base">
              {experience.description}
            </p>
          </div>

          {/* Key Contributions */}
          {achievements && achievements.length > 0 && (
            <div className="mb-6">
              <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 flex items-center gap-2 mb-4">
                <Trophy className="w-5 h-5 text-yellow-500" />
                Key Contributions
              </h4>
              <div className="grid gap-3">
                {achievements.map((achievement, achievementIndex) => (
                  <motion.div
                    key={achievementIndex}
                    className="flex items-start gap-3 p-3 rounded-xl bg-gray-50/50 dark:bg-gray-800/50 hover:bg-blue-50/50 dark:hover:bg-blue-900/20 transition-colors"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: index * 0.2 + 0.6 + achievementIndex * 0.1 }}
                  >
                    <Star className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                      {achievement}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* Technologies */}
          <div className="mb-6">
            <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 flex items-center gap-2 mb-4">
              <Code className="w-5 h-5 text-blue-500" />
              Technologies Used
            </h4>
            <div className="flex flex-wrap gap-2">
              {experience.technologies.map((tech, techIndex) => (
                <motion.span
                  key={techIndex}
                  className="px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-full text-sm font-medium text-blue-600 dark:text-blue-400 hover:scale-105 hover:bg-blue-500/20 transition-all duration-200"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: index * 0.2 + 1 + techIndex * 0.05 }}
                  whileHover={{ scale: 1.05 }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>

          {/* Footer with actions */}
          <div className="flex items-center justify-between pt-6 border-t border-gray-200/50 dark:border-gray-700/50">
            <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                <span>Open Source</span>
              </div>
              <div className="flex items-center gap-2">
                <GitBranch className="w-4 h-4" />
                <span>Collaborative</span>
              </div>
            </div>
            
            {experience.link && experience.link.trim() !== "" && (
              <motion.a
                href={experience.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl font-medium hover:shadow-lg transition-all duration-300"
                whileHover={{ scale: 1.05, x: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>View Project</span>
                <ExternalLink className="w-4 h-4" />
              </motion.a>
            )}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

// Experience stats component
const ExperienceStats = ({ isInView }) => {
  const stats = [
    { number: EXPERIENCES.length, label: "Total Projects", icon: Briefcase, suffix: "" },
    { number: "15+", label: "Technologies", icon: Code, suffix: "" },
    { number: "100+", label: "Contributions", icon: GitBranch, suffix: "" },
    { number: "2+", label: "Years Active", icon: Calendar, suffix: "" },
  ];

  return (
    <motion.div
      className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: 0.4 }}
    >
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          className="glass-card p-6 rounded-2xl text-center group hover:scale-105 transition-all duration-300 border border-white/10"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 + index * 0.1, duration: 0.6 }}
          whileHover={{ y: -5 }}
        >
          <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mx-auto mb-4">
            <stat.icon className="w-6 h-6 text-white" />
          </div>
          <div className="text-3xl font-bold gradient-text mb-2">
            {stat.number}{stat.suffix}
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">
            {stat.label}
          </p>
        </motion.div>
      ))}
    </motion.div>
  );
};

const ExperiencePage = ({ isDarkMode }) => {
  const ref = useRef();
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  return (
    <div className="min-h-screen pt-20">
      {/* Header Section */}
      <div className="container-custom py-12" ref={ref}>
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-blue-500 hover:text-blue-600 transition-colors duration-200 mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          
          <div className="text-center mb-12">
            <motion.h1 
              className="text-5xl lg:text-6xl font-bold mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Professional <span className="gradient-text">Experience</span>
            </motion.h1>
            <motion.p
              className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              My journey in open source contributions and software development, 
              building impactful solutions and learning from amazing communities.
            </motion.p>
          </div>
        </motion.div>

        {/* Experience Stats */}
        <ExperienceStats isInView={isInView} />

        {/* Timeline */}
        <div className="relative">
          {/* Main timeline line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-20 w-1 bg-gradient-to-b from-blue-500/30 via-purple-500/30 to-transparent transform -translate-x-1/2 rounded-full" />
          
          {/* Experience cards */}
          <div className="space-y-0">
            {EXPERIENCES.map((experience, index) => (
              <TimelineExperienceCard
                key={index}
                experience={experience}
                index={index}
                isInView={isInView}
              />
            ))}
          </div>

          {/* Timeline end marker */}
          <motion.div
            className="hidden lg:flex absolute left-1/2 -bottom-4 w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transform -translate-x-1/2 items-center justify-center shadow-lg"
            initial={{ scale: 0, rotate: -180 }}
            animate={isInView ? { scale: 1, rotate: 0 } : {}}
            transition={{ 
              duration: 0.8, 
              delay: EXPERIENCES.length * 0.2 + 1,
              type: "spring" 
            }}
          >
            <Globe className="w-6 h-6 text-white" />
          </motion.div>
        </div>

        {/* Call to action */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <div className="glass-card inline-flex items-center gap-4 px-8 py-4 rounded-2xl border border-white/10">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
            <span className="text-lg font-medium text-gray-700 dark:text-gray-300">
              Always open to new opportunities and collaborations
            </span>
            <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ExperiencePage;
