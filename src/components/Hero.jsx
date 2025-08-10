import React, { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ChevronDown, Code, Sparkles } from "lucide-react";
import { HERO_CONTENT, ProfilePhoto, HERO_TYPING_TEXTS, PERSONAL_INFO } from "../constants";

// Simplified Typing Animation Component
const TypingAnimation = ({ texts, className }) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const handleTyping = () => {
      const fullText = texts[currentTextIndex];
      
      if (isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length - 1));
      } else {
        setCurrentText(fullText.substring(0, currentText.length + 1));
      }

      if (!isDeleting && currentText === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
      }
    };

    const timer = setTimeout(handleTyping, isDeleting ? 50 : 150);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentTextIndex, texts]);

  return (
    <span className={className}>
      {currentText}
      <span className="animate-pulse">|</span>
    </span>
  );
};

// Simplified Action Buttons Component
const ActionButtons = () => {
  const handleScrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleDownloadResume = () => {
    window.open('/src/assets/Resume.pdf', '_blank');
  };

  return (
    <motion.div 
      className="flex flex-col sm:flex-row gap-4 mt-8"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.2, duration: 0.6 }}
    >
      <button
        onClick={handleScrollToProjects}
        className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl text-white font-semibold hover:shadow-lg transition-all duration-300"
      >
        <span className="flex items-center justify-center gap-2">
          View My Work
        </span>
      </button>

      <button
        onClick={handleDownloadResume}
        className="group px-8 py-4 border-2 border-blue-500 text-blue-500 rounded-xl font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300"
      >
        <span className="flex items-center justify-center gap-2">
          Download Resume
          <ChevronDown className="w-4 h-4" />
        </span>
      </button>
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
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center section">
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
            {/* Main Heading */}
            <div className="space-y-4">
              <motion.h1
                className="text-5xl lg:text-7xl font-bold leading-tight"
                variants={itemVariants}
              >
                <span className="block">Hi, I'm</span>
                <span className="block gradient-text">{PERSONAL_INFO.name}</span>
              </motion.h1>

              
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
          </motion.div>

          {/* Right Content - Image */}
          <motion.div 
            className="relative"
            variants={itemVariants}
          >
            <div className="relative max-w-md mx-auto lg:max-w-lg">
              {/* Simplified background decorations */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-3xl opacity-20" />
              
              {/* Main image container */}
              <div className="relative z-10 glass-card p-2 rounded-3xl">
                <div className="relative overflow-hidden rounded-2xl">
                  <img
                    src={ProfilePhoto}
                    alt={PERSONAL_INFO.name}
                    className="w-full h-auto object-cover"
                  />
                  
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.6 }}
        >
          <div className="flex flex-col items-center gap-2 text-gray-500 dark:text-gray-400">
            <span className="text-sm font-medium">Scroll to explore</span>
            <ChevronDown className="w-5 h-5 animate-bounce" />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
