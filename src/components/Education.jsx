import React, { useRef } from 'react';
import { motion, useInView } from "framer-motion";
import { 
  GraduationCap, 
  Calendar, 
  MapPin, 
  ExternalLink, 
  Award,
  BookOpen,
  Users,
  Star,
  TrendingUp
} from "lucide-react";
import { EDUCATIONS } from '../constants';

// Education Card Component
const EducationCard = ({ education, index, isInView }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
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

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="group relative"
    >
      {/* Timeline Line */}
      <div className="absolute left-8 top-20 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500 opacity-30 group-hover:opacity-100 transition-opacity duration-300" />
      
      {/* Timeline Dot */}
      <motion.div
        className="absolute left-6 top-16 w-5 h-5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full z-10 group-hover:scale-125 transition-transform duration-300"
        variants={iconVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      />

      <div className="glass-card ml-16 p-8 rounded-2xl hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02] hover:-translate-y-1">
        {/* Institution Header */}
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <GraduationCap className="w-8 h-8 text-white" />
            </div>
            <div>
              <motion.h3 
                className="text-xl lg:text-2xl font-bold group-hover:text-blue-500 transition-colors duration-300 cursor-pointer"
                onClick={() => window.open(education.link, "_blank")}
                whileHover={{ scale: 1.02 }}
              >
                {education.title}
              </motion.h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Premier Engineering Institute
              </p>
            </div>
          </div>
          
          <motion.button
            onClick={() => window.open(education.link, "_blank")}
            className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-blue-500 hover:text-white transition-all duration-300 group/btn"
            whileHover={{ scale: 1.1, rotate: 15 }}
            whileTap={{ scale: 0.9 }}
          >
            <ExternalLink className="w-4 h-4 group-hover/btn:animate-pulse" />
          </motion.button>
        </div>

        {/* Degree Information */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <BookOpen className="w-5 h-5 text-blue-500" />
            <span className="text-lg font-semibold">{education.subtitle}</span>
          </div>

          <div className="flex items-center gap-6 text-sm text-gray-600 dark:text-gray-400">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>{education.year}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>Gandhinagar, Gujarat</span>
            </div>
          </div>

          {/* Achievements/Highlights */}
          <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
            <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3 flex items-center gap-2">
              <Award className="w-4 h-4 text-yellow-500" />
              Highlights
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="flex items-center gap-2 text-sm">
                <Star className="w-4 h-4 text-yellow-400" />
                <span>Computer Science & Engineering</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <TrendingUp className="w-4 h-4 text-green-400" />
                <span>Full Stack Development Focus</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Users className="w-4 h-4 text-blue-400" />
                <span>Active in Tech Communities</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <BookOpen className="w-4 h-4 text-purple-400" />
                <span>Current Student (2024-2028)</span>
              </div>
            </div>
          </div>

          {/* Skills Gained */}
          <div className="pt-4">
            <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
              Core Competencies
            </h4>
            <div className="flex flex-wrap gap-2">
              {[
                "Data Structures", 
                "Algorithms", 
                "Web Development", 
                "Software Engineering",
                "Database Systems",
                "Computer Networks"
              ].map((skill, skillIndex) => (
                <motion.span
                  key={skillIndex}
                  className="px-3 py-1 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-full text-xs font-medium text-blue-600 dark:text-blue-400"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: index * 0.2 + 0.8 + skillIndex * 0.1, duration: 0.3 }}
                  whileHover={{ scale: 1.05 }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// Main Education Component
const Education = ({ isDarkMode }) => {
  const ref = useRef();
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
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

  // Stats for education section
  const stats = [
    { number: "2024-2028", label: "Study Period", icon: Calendar },
    { number: "B.Tech", label: "Degree Level", icon: GraduationCap },
    { number: "CSE", label: "Major Field", icon: BookOpen },
    { number: "IIT", label: "Institution Type", icon: Award },
  ];

  return (
    <section 
      id="education" 
      className="section relative overflow-hidden"
      ref={ref}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/3 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '-2s' }} />
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
            <span className="gradient-text">Education</span> Journey
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Building strong foundations in computer science and engineering
          </motion.p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="glass-card p-6 rounded-xl text-center group hover:scale-105 transition-transform duration-300"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
            >
              <stat.icon className="w-8 h-8 mx-auto mb-3 text-blue-500 group-hover:animate-bounce" />
              <div className="text-2xl lg:text-3xl font-bold gradient-text mb-1">
                {stat.number}
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Education Timeline */}
        <motion.div
          className="space-y-12"
          variants={sectionVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold mb-2">Academic Timeline</h3>
            <p className="text-gray-600 dark:text-gray-400">
              My educational journey in computer science
            </p>
          </div>

          {EDUCATIONS.map((education, index) => (
            <EducationCard
              key={index}
              education={education}
              index={index}
              isInView={isInView}
            />
          ))}
        </motion.div>

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
              Currently pursuing B.Tech in Computer Science & Engineering
            </span>
            <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
