import React, { useRef, useState } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  Code, 
  Heart, 
  Zap, 
  Users, 
  Target, 
  Award,
  ChevronRight,
  Sparkles,
  ArrowRight
} from "lucide-react";
import about from "../assets/about1.jpeg";
import { ABOUT_TEXT, ProfilePhoto, PASSION_POINTS } from "../constants";

// Animated Counter Component
const AnimatedCounter = ({ end, duration = 2, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const ref = useRef();
  const inView = useInView(ref, { once: true });

  React.useEffect(() => {
    if (inView) {
      let startTime;
      const animate = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = (timestamp - startTime) / (duration * 1000);
        
        if (progress < 1) {
          setCount(Math.floor(progress * end));
          requestAnimationFrame(animate);
        } else {
          setCount(end);
        }
      };
      requestAnimationFrame(animate);
    }
  }, [inView, end, duration]);

  return (
    <span ref={ref} className="text-3xl lg:text-4xl font-bold gradient-text">
      {count}{suffix}
    </span>
  );
};

// Skills Progress Component
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
          transition={{ delay: delay + 0.3, duration: 1.5, ease: "easeOut" }}
        />
      </div>
    </motion.div>
  );
};

// Passion Points Component
const PassionPoints = () => {
  // Map icons to passion points from constants
  const iconMap = {
    "Clean Code": Code,
    "Performance": Zap, 
    "Collaboration": Users,
    "Innovation": Target
  };

  const passions = PASSION_POINTS.map(point => ({
    ...point,
    icon: iconMap[point.title]
  }));

  return (
    <div className="grid grid-cols-2 gap-4 mt-8">
      {passions.map((passion, index) => (
        <motion.div
          key={index}
          className="glass-card p-4 rounded-xl group hover:scale-105 transition-transform duration-300"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: index * 0.1, duration: 0.5 }}
          viewport={{ once: true }}
        >
          <passion.icon className={`w-8 h-8 ${passion.color} mb-2 group-hover:animate-bounce`} />
          <h4 className="font-semibold text-sm mb-1">{passion.title}</h4>
          <p className="text-xs text-gray-600 dark:text-gray-400">
            {passion.description}
          </p>
        </motion.div>
      ))}
    </div>
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
      className="section relative overflow-hidden"
      ref={ref}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '-3s' }} />
      </div>

      <div className="container-custom relative">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="text-4xl lg:text-5xl font-bold mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            About <span className="gradient-text">Me</span>
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Passionate developer crafting digital experiences with modern technologies
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            {/* Image Container */}
            <div className="relative max-w-md mx-auto lg:mx-0">
              {/* Decorative elements */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl blur-2xl opacity-20 animate-pulse" />
              <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-3xl opacity-20 animate-float" />
              <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full blur-3xl opacity-20 animate-float" style={{ animationDelay: '-2s' }} />

              {/* Main image */}
              <motion.div
                className="relative glass-card p-2 rounded-3xl overflow-hidden"
                whileHover={{ scale: 1.02, rotate: 1 }}
                transition={{ duration: 0.3 }}
              >
                <img 
                  src={ProfilePhoto} 
                  alt="Arpan Gupta" 
                  className="w-full h-auto object-cover rounded-2xl"
                />
                
                {/* Floating badges */}
                <motion.div
                  className="absolute -top-4 -right-4 glass-card px-3 py-2 rounded-xl"
                  initial={{ scale: 0, rotate: -180 }}
                  animate={inView ? { scale: 1, rotate: 0 } : {}}
                  transition={{ delay: 1, type: "spring" }}
                >
                  <div className="flex items-center gap-2 text-sm font-semibold">
                    <Heart className="w-4 h-4 text-red-500" />
                    <span>Passionate</span>
                  </div>
                </motion.div>

                <motion.div
                  className="absolute -bottom-4 -left-4 glass-card px-3 py-2 rounded-xl"
                  initial={{ scale: 0, rotate: 180 }}
                  animate={inView ? { scale: 1, rotate: 0 } : {}}
                  transition={{ delay: 1.2, type: "spring" }}
                >
                  <div className="flex items-center gap-2 text-sm font-semibold">
                    <Target className="w-4 h-4 text-green-500" />
                    <span>Goal Oriented</span>
                  </div>
                </motion.div>
              </motion.div>
            </div>

            {/* Achievements Grid */}
            {!showTopThree && (
              <motion.div
                className="grid grid-cols-2 gap-4"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.8, duration: 0.6 }}
              >
                {achievements.map((achievement, index) => (
                  <div key={index} className="text-center glass-card p-4 rounded-xl">
                    <AnimatedCounter 
                      end={achievement.number} 
                      suffix={achievement.suffix}
                    />
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
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            {/* About Text */}
            <div className="space-y-6">
              <motion.p
                className="text-lg leading-relaxed text-gray-700 dark:text-gray-300"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.7, duration: 0.6 }}
              >
                {aboutTextToShow}
              </motion.p>

              {/* Skills Preview */}
              {showTopThree && (
                <motion.div
                  className="space-y-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.9, duration: 0.6 }}
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
                      delay={1 + index * 0.1}
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
                  transition={{ delay: 0.9, duration: 0.6 }}
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
                      delay={1 + index * 0.1}
                    />
                  ))}
                </motion.div>
              )}

              {/* Passion Points */}
              {showTopThree && <PassionPoints />}

              {/* Action Button */}
              {showTopThree && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 1.5, duration: 0.6 }}
                >
                  <Link 
                    to="/about"
                    className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                  >
                    <span>Learn More About Me</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    <Sparkles className="w-4 h-4 group-hover:animate-spin" />
                  </Link>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
