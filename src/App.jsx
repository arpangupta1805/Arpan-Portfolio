import { Routes, Route, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { animateScroll as scroll } from "react-scroll";
import { ChevronUp, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import "./App.css";

// Components
import About from "./components/About";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Project from "./components/Project";
import Tech from "./components/Tech";
import Resume from "./components/Resume";
import Experience from "./components/Experience";
import Footer from "./components/Footer";

// Pages
import ProjectsPage from "./pages/ProjectsPage";
import AboutPage from "./pages/AboutPage";
import ResumePage from "./pages/ResumePage";

// Constants
import { THEME_CONFIG } from "./constants";

// Enhanced Scroll to Top Button Component
const ScrollToTopButton = ({ showScrollButton, scrollToTop, isDarkMode }) => (
  <AnimatePresence>
    {showScrollButton && (
      <motion.button 
        initial={{ opacity: 0, scale: 0, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0, y: 20 }}
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.9 }}
        onClick={scrollToTop} 
        className="fixed bottom-8 right-8 z-50 group"
        aria-label="Scroll to top"
      >
        <div className="relative">
          {/* Glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-lg opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
          
          {/* Button */}
          <div className="relative p-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white shadow-lg backdrop-blur-sm border border-white/10">
            <ChevronUp className="w-6 h-6" />
          </div>
          
          {/* Sparkle decoration */}
          <Sparkles className="absolute -top-1 -right-1 w-4 h-4 text-yellow-400 animate-pulse" />
        </div>
      </motion.button>
    )}
  </AnimatePresence>
);

/*
 * BACKGROUND EFFECTS EXPLANATION:
 * 
 * 1. Dynamic Theme Colors:
 *    - The background gradient changes based on isDarkMode state
 *    - Dark mode: neutral-950 → slate-900 → neutral-950 gradient
 *    - Light mode: neutral-50 → blue-50 → neutral-100 gradient
 *    - Transition is controlled by CSS: transition-all duration-1000
 * 
 * 2. Floating Orbs:
 *    - Three animated circles with different colors (blue, purple, cyan)
 *    - Each has blur-3xl for glow effect and opacity-10 for subtlety
 *    - animate-float CSS animation creates up/down movement
 *    - Different animation delays (-2s, -4s) create organic motion
 * 
 * 3. Grid Pattern:
 *    - Radial gradient overlay creates depth
 *    - Different opacity for dark/light modes
 * 
 * 4. Mesh Gradient:
 *    - Conic gradient with multiple color stops
 *    - Creates a complex, modern background pattern
 *    - Opacity-30 keeps it subtle
 */

// Background Effects Component
const BackgroundEffects = ({ isDarkMode }) => (
  <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
    {/* Animated gradient background */}
    <div className={`absolute inset-0 transition-all duration-1000 ${
      isDarkMode 
        ? 'bg-gradient-to-br from-neutral-950 via-slate-900 to-neutral-950' 
        : 'bg-gradient-to-br from-neutral-50 via-blue-50 to-neutral-100'
    }`}>
      {/* Floating orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '-2s' }}></div>
      <div className="absolute top-1/2 left-3/4 w-48 h-48 bg-cyan-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '-4s' }}></div>
      
      {/* Grid pattern */}
      <div className={`absolute inset-0 ${
        isDarkMode 
          ? 'bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]' 
          : 'bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.05),transparent_50%)]'
      }`}></div>
      
      {/* Mesh gradient overlay */}
      <div className={`absolute inset-0 opacity-30 ${
        isDarkMode 
          ? 'bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0deg,rgba(120,119,198,0.1)_60deg,transparent_120deg,rgba(168,85,247,0.1)_180deg,transparent_240deg,rgba(59,130,246,0.1)_300deg,transparent_360deg)]' 
          : 'bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0deg,rgba(59,130,246,0.05)_60deg,transparent_120deg,rgba(168,85,247,0.05)_180deg,transparent_240deg,rgba(14,165,233,0.05)_300deg,transparent_360deg)]'
      }`}></div>
    </div>
  </div>
);

// Page transition variants
const pageVariants = {
  initial: { opacity: 0, y: 20 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: -20 }
};

const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 0.5
};

function App() {
  // Enhanced theme management
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme) {
      return savedTheme === 'dark';
    }
    
    // Default to dark mode for new users
    return true;
  });
  
  const [showScrollButton, setShowScrollButton] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  // Initialize app
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  // Listen for system theme changes
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    const handleChange = (e) => {
      if (!localStorage.getItem('theme')) {
        setIsDarkMode(e.matches);
      }
    };
    
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handleChange);
      return () => mediaQuery.removeEventListener('change', handleChange);
    } else {
      mediaQuery.addListener(handleChange);
      return () => mediaQuery.removeListener(handleChange);
    }
  }, []);

  // Enhanced theme toggle
  const toggleTheme = () => {
    const newThemeValue = !isDarkMode;
    setIsDarkMode(newThemeValue);
    localStorage.setItem('theme', newThemeValue ? 'dark' : 'light');
    
    // Add smooth transition effect
    document.documentElement.style.transition = 'all 0.3s ease-in-out';
    setTimeout(() => {
      document.documentElement.style.transition = '';
    }, 300);
  };

  // Apply theme classes
  useEffect(() => {
    const root = document.documentElement;
    if (isDarkMode) {
      root.classList.add('dark');
      root.classList.remove('light');
      document.body.classList.add('dark');
      document.body.classList.remove('light');
    } else {
      root.classList.add('light');
      root.classList.remove('dark');
      document.body.classList.add('light');
      document.body.classList.remove('dark');
    }
  }, [isDarkMode]);

  // Enhanced scroll handling using THEME_CONFIG
  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setShowScrollButton(window.scrollY > THEME_CONFIG.scrollButtonThreshold);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Enhanced scroll to top using THEME_CONFIG
  const scrollToTop = () => {
    scroll.scrollToTop({
      duration: THEME_CONFIG.scrollDuration,
      smooth: 'easeInOutQuint'
    });
  };

  // Loading screen
  if (isLoading) {
    return (
      <div className={`min-h-screen flex items-center justify-center ${
        isDarkMode ? 'bg-neutral-950' : 'bg-neutral-50'
      }`}>
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="text-center"
        >
          <div className="relative">
            <div className="w-16 h-16 border-4 border-blue-500/20 border-t-blue-500 rounded-full animate-spin mb-4 mx-auto"></div>
            <div className="absolute inset-0 w-16 h-16 border-4 border-purple-500/20 border-b-purple-500 rounded-full animate-spin mb-4 mx-auto" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }}></div>
          </div>
          <h2 className="text-xl font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Loading Portfolio...
          </h2>
        </motion.div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen overflow-x-hidden antialiased selection:bg-blue-500/20 ${
      isDarkMode ? 'text-neutral-100' : 'text-neutral-900'
    }`}>
      {/* Background Effects */}
      <BackgroundEffects isDarkMode={isDarkMode} />
      
      {/* Navigation */}
      <Navbar toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
      
      {/* Main Content with Page Transitions */}
      <main className="relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
          >
            <Routes>
              <Route path="/" element={
                <div className="container-custom">
                  <Hero isDarkMode={isDarkMode} />
                  <About showTopThree={true} isDarkMode={isDarkMode} />
                  <Education isDarkMode={isDarkMode} />
                  <Tech isDarkMode={isDarkMode} />
                  <Experience isDarkMode={isDarkMode} />
                  <Project showTopThree={true} isDarkMode={isDarkMode} />
                  <Contact isDarkMode={isDarkMode} />
                </div>
              }/>
              <Route path="/resume" element={<ResumePage isDarkMode={isDarkMode} />} />
              <Route path="/projects" element={<ProjectsPage isDarkMode={isDarkMode} />} />
              <Route path="/about" element={<AboutPage isDarkMode={isDarkMode} />} />
            </Routes>
          </motion.div>
        </AnimatePresence>
      </main>
      
      {/* Footer */}
      <Footer isDarkMode={isDarkMode} />

      {/* Enhanced Scroll to Top Button */}
      <ScrollToTopButton 
        showScrollButton={showScrollButton}
        scrollToTop={scrollToTop}
        isDarkMode={isDarkMode}
      />
    </div>
  );
}

export default App;
