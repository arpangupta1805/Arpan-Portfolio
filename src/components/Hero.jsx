import React, { useEffect, useState, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { ChevronDown, Code, Sparkles, Zap, Coffee, Heart } from "lucide-react";
import { HERO_CONTENT, ProfilePhoto, HeroBackground, STATS, HERO_TYPING_TEXTS, PERSONAL_INFO } from "../constants";

// Typing Animation Component
const TypingAnimation = ({ texts, className }) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const handleTyping = () => {
      const fullText = texts[currentTextIndex];
      
      if (isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length - 1));
        setTypingSpeed(50);
      } else {
        setCurrentText(fullText.substring(0, currentText.length + 1));
        setTypingSpeed(150);
      }

      if (!isDeleting && currentText === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentTextIndex, texts, typingSpeed]);

  return (
    <span className={className}>
      {currentText}
      <span className="animate-pulse">|</span>
    </span>
  );
};

// Floating Icons Component
const FloatingIcons = () => {
  const icons = [
    { Icon: Code, delay: 0, position: "top-20 left-10" },
    { Icon: Sparkles, delay: 1, position: "top-40 right-20" },
    { Icon: Zap, delay: 2, position: "bottom-32 left-20" },
    { Icon: Coffee, delay: 3, position: "bottom-20 right-16" },
    { Icon: Heart, delay: 4, position: "top-60 left-1/2" },
  ];

  return (
    <div className="absolute inset-0 pointer-events-none">
      {icons.map(({ Icon, delay, position }, index) => (
        <motion.div
          key={index}
          className={`absolute ${position} text-blue-500/20 dark:text-blue-400/20`}
          initial={{ opacity: 0, scale: 0, rotate: -180 }}
          animate={{ 
            opacity: [0, 1, 0], 
            scale: [0, 1, 0], 
            rotate: [0, 180, 360],
            y: [0, -20, 0]
          }}
          transition={{
            duration: 6,
            delay: delay,
            repeat: Infinity,
            repeatDelay: 10,
            ease: "easeInOut"
          }}
        >
          <Icon className="w-8 h-8" />
        </motion.div>
      ))}
    </div>
  );
};

// Stats Component
const StatsComponent = () => {
  const stats = [
    { number: `${STATS.projectsCompleted}+`, label: "Projects Completed" },
    { number: `${STATS.technologies}+`, label: "Technologies" },
    { number: `${STATS.experienceYears}+`, label: "Years Experience" },
    { number: `${STATS.passionLevel}%`, label: "Passion" },
  ];

  return (
    <motion.div 
      className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-12"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 2, duration: 0.8 }}
    >
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          className="text-center group"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          <div className="glass-card p-4 rounded-xl border border-white/10">
            <motion.div
              className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 2.2 + index * 0.1, type: "spring" }}
            >
              {stat.number}
            </motion.div>
            <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              {stat.label}
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

// Action Buttons Component
const ActionButtons = () => {
  const handleScrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleDownloadResume = () => {
    // You can add the actual resume download logic here
    window.open('/src/assets/Resume.pdf', '_blank');
  };

  return (
    <motion.div 
      className="flex flex-col sm:flex-row gap-4 mt-8"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.8, duration: 0.6 }}
    >
      <motion.button
        onClick={handleScrollToProjects}
        className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl text-white font-semibold overflow-hidden"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <span className="relative z-10 flex items-center justify-center gap-2">
          View My Work
          <Sparkles className="w-4 h-4 group-hover:animate-spin" />
        </span>
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </motion.button>

      <motion.button
        onClick={handleDownloadResume}
        className="group px-8 py-4 border-2 border-blue-500 text-blue-500 rounded-xl font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <span className="flex items-center justify-center gap-2">
          Download Resume
          <ChevronDown className="w-4 h-4 group-hover:animate-bounce" />
        </span>
      </motion.button>
    </motion.div>
  );
};

const Hero = ({ isDarkMode }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center section overflow-hidden">
      {/* Floating background elements */}
      <FloatingIcons />
      
      <motion.div 
        ref={ref}
        className="container-custom"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div 
            className="space-y-8 text-center lg:text-left"
            variants={itemVariants}
          >
            {/* Greeting */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full border border-blue-500/20"
            >
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-sm font-medium">Available for opportunities</span>
            </motion.div>

            {/* Main Heading */}
            <div className="space-y-4">
              <motion.h1
                className="text-5xl lg:text-7xl font-bold leading-tight"
                variants={itemVariants}
              >
                <span className="block">Hi, I'm</span>
                <span className="block gradient-text">{PERSONAL_INFO.name}</span>
              </motion.h1>

              {/* Typing Animation for Role */}
              <motion.div
                className="text-2xl lg:text-4xl font-semibold text-gray-700 dark:text-gray-300"
                variants={itemVariants}
              >
                <TypingAnimation
                  texts={HERO_TYPING_TEXTS}
                  className="text-blue-600 dark:text-blue-400"
                />
              </motion.div>
            </div>

            {/* Description */}
            <motion.p
              className="text-lg lg:text-xl text-gray-600 dark:text-gray-400 max-w-2xl leading-relaxed"
              variants={itemVariants}
            >
              {HERO_CONTENT}
            </motion.p>

            {/* Action Buttons */}
            <ActionButtons />

            {/* Stats */}
            <StatsComponent />
          </motion.div>

          {/* Right Content - Image */}
          <motion.div 
            className="relative"
            variants={itemVariants}
          >
            <div className="relative max-w-md mx-auto lg:max-w-lg">
              {/* Background decorations */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-3xl opacity-20 animate-pulse" />
              <div className="absolute -top-4 -right-4 w-72 h-72 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-3xl opacity-10 animate-float" />
              <div className="absolute -bottom-4 -left-4 w-64 h-64 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full blur-3xl opacity-10 animate-float" style={{ animationDelay: '-2s' }} />
              
              {/* Main image container */}
              <motion.div
                className="relative z-10 glass-card p-2 rounded-3xl"
                whileHover={{ scale: 1.02, rotate: 1 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative overflow-hidden rounded-2xl">
                  <motion.img
                    src={ProfilePhoto}
                    alt={PERSONAL_INFO.name}
                    className="w-full h-auto object-cover"
                    initial={{ scale: 1.1, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                  />
                  
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
              </motion.div>

              {/* Floating badges */}
              <motion.div
                className="absolute -top-8 -left-8 glass-card px-4 py-2 rounded-xl"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 2, type: "spring" }}
                whileHover={{ scale: 1.1, rotate: -5 }}
              >
                <div className="flex items-center gap-2 text-sm font-semibold">
                  <Code className="w-4 h-4 text-blue-500" />
                  <span>Developer</span>
                </div>
              </motion.div>

              <motion.div
                className="absolute -bottom-8 -right-8 glass-card px-4 py-2 rounded-xl"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 2.2, type: "spring" }}
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <div className="flex items-center gap-2 text-sm font-semibold">
                  <Zap className="w-4 h-4 text-purple-500" />
                  <span>Innovator</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3, duration: 0.6 }}
        >
          <motion.div
            className="flex flex-col items-center gap-2 text-gray-500 dark:text-gray-400"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span className="text-sm font-medium">Scroll to explore</span>
            <ChevronDown className="w-5 h-5" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
