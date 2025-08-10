import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  Code, 
  Heart, 
  Users, 
  Target, 
  Award,
  ArrowRight
} from "lucide-react";
import about from "../assets/about1.jpeg";
import { ABOUT_TEXT, ProfilePhoto, PASSION_POINTS } from "../constants";

// Simplified Skills Progress Component
const SkillBar = ({ skill, percentage, delay }) => {
  const ref = useRef();
  const inView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      className="mb-4"
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay, duration: 0.6 }}
    >
      <div className="flex justify-between mb-2">
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
          {skill}
        </span>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          {percentage}%
        </span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
        <motion.div
          className="h-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"
          initial={{ width: 0 }}
          animate={inView ? { width: `${percentage}%` } : {}}
          transition={{ delay: delay + 0.3, duration: 1, ease: "easeOut" }}
        />
      </div>
    </motion.div>
  );
};

// Main About Component
const About = ({ showTopThree = false, isDarkMode }) => {
  const ref = useRef();
  const inView = useInView(ref, { once: true, threshold: 0.1 });

  const aboutTextToShow = showTopThree 
    ? ABOUT_TEXT.split('.').slice(0, 3).join('.') + '.' 
    : ABOUT_TEXT;

  const topSkills = [
    { name: "React/Next.js", level: 90 },
    { name: "Node.js", level: 85 },
    { name: "JavaScript/TypeScript", level: 88 },
    { name: "Database Design", level: 82 }
  ];

  const achievements = [
    { number: 15, suffix: "+", label: "Projects Built" },
    { number: 1, suffix: "+", label: "Years Experience" },
    { number: 10, suffix: "+", label: "Technologies" },
    { number: 100, suffix: "%", label: "Dedication" }
  ];

  return (
    <section 
      id="about" 
      className="section relative"
      ref={ref}
    >
      {/* Simplified Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            {/* Image Container */}
            <div className="relative max-w-md mx-auto lg:mx-0">
              {/* Simplified decorative elements */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl blur-xl opacity-20" />

              {/* Main image */}
              <div className="relative glass-card p-2 rounded-3xl overflow-hidden">
                <img 
                  src={ProfilePhoto} 
                  alt="Arpan Gupta" 
                  className="w-full h-auto object-cover rounded-2xl"
                />
                
                {/* Simplified badges
                <div className="absolute -top-4 -right-4 glass-card px-3 py-2 rounded-xl">
                  <div className="flex items-center gap-2 text-sm font-semibold">
                    <Heart className="w-4 h-4 text-red-500" />
                    <span>Passionate</span>
                  </div>
                </div>

                <div className="absolute -bottom-4 -left-4 glass-card px-3 py-2 rounded-xl">
                  <div className="flex items-center gap-2 text-sm font-semibold">
                    <Target className="w-4 h-4 text-green-500" />
                    <span>Goal Oriented</span>
                  </div>
                </div> */}
              </div>
            </div>

            {/* Achievements Grid */}
            {!showTopThree && (
              <motion.div
                className="grid grid-cols-2 gap-4"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                {achievements.map((achievement, index) => (
                  <div key={index} className="text-center glass-card p-4 rounded-xl">
                    <span className="text-3xl lg:text-4xl font-bold gradient-text">
                      {achievement.number}{achievement.suffix}
                    </span>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                      {achievement.label}
                    </p>
                  </div>
                ))}
              </motion.div>
            )}
          </motion.div>

          {/* Right Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            {/* About Text */}
            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                {aboutTextToShow}
              </p>

              {/* Skills Preview */}
              {showTopThree && (
                <motion.div
                  className="space-y-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.6, duration: 0.6 }}
                >
                  <h4 className="text-lg font-semibold flex items-center gap-2">
                    <Award className="w-5 h-5 text-yellow-500" />
                    Core Skills
                  </h4>
                  {topSkills.slice(0, 3).map((skill, index) => (
                    <SkillBar
                      key={skill.name}
                      skill={skill.name}
                      percentage={skill.level}
                      delay={0.8 + index * 0.1}
                    />
                  ))}
                </motion.div>
              )}

              {/* Full Skills List */}
              {!showTopThree && (
                <motion.div
                  className="space-y-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.6, duration: 0.6 }}
                >
                  <h4 className="text-lg font-semibold flex items-center gap-2">
                    <Award className="w-5 h-5 text-yellow-500" />
                    Technical Skills
                  </h4>
                  {topSkills.map((skill, index) => (
                    <SkillBar
                      key={skill.name}
                      skill={skill.name}
                      percentage={skill.level}
                      delay={0.8 + index * 0.1}
                    />
                  ))}
                </motion.div>
              )}

              {/* Action Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1, duration: 0.6 }}
              >
                <Link 
                  to="/about"
                  className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
                >
                  <span>Learn More About Me</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
