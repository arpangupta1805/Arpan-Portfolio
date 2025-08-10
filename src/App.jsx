import { Routes, Route, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { animateScroll as scroll } from "react-scroll";
import { ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Components
import About from "./components/About";
import Education from "./components/Education";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Project from "./components/Project";
import Footer from "./components/Footer";

// Pages
import ProjectsPage from "./pages/ProjectsPage";
import AboutPage from "./pages/AboutPage";
import ResumePage from "./pages/ResumePage";
import TechnologiesPage from "./pages/TechnologiesPage";
import ExperiencePage from "./pages/ExperiencePage";

// Constants
import { THEME_CONFIG } from "./constants";

// Simplified Scroll to Top Button Component
const ScrollToTopButton = ({ showScrollButton, scrollToTop, isDarkMode }) => (
  <AnimatePresence>
    {showScrollButton && (
      <motion.button 
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0 }}
        onClick={scrollToTop} 
        className="fixed bottom-8 right-8 z-50 p-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white shadow-lg hover:shadow-xl transition-shadow duration-300"
        aria-label="Scroll to top"
      >
        <ChevronUp className="w-6 h-6" />
      </motion.button>
    )}
  </AnimatePresence>
);

// Simplified Background Effects Component
const BackgroundEffects = ({ isDarkMode }) => (
  <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
    {/* Simple gradient background */}
    <div className={`absolute inset-0 transition-all duration-1000 ${
      isDarkMode 
        ? 'bg-gradient-to-br from-neutral-950 via-slate-900 to-neutral-950' 
        : 'bg-gradient-to-br from-neutral-50 via-blue-50 to-neutral-100'
    }`}>
      {/* Minimal floating orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
    </div>
  </div>
);

// Simplified page transition variants
const pageVariants = {
  initial: { opacity: 0, y: 20 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: -20 }
};

const pageTransition = {
  type: "tween",
  ease: "easeInOut",
  duration: 0.3
};

function App() {
  // Simplified theme management
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme ? savedTheme === 'dark' : true;
  });
  
  const [showScrollButton, setShowScrollButton] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  // Initialize app
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  // Scroll to top when location changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Simplified theme toggle
  const toggleTheme = () => {
    const newThemeValue = !isDarkMode;
    setIsDarkMode(newThemeValue);
    localStorage.setItem('theme', newThemeValue ? 'dark' : 'light');
  };

  // Apply theme classes
  useEffect(() => {
    const root = document.documentElement;
    if (isDarkMode) {
      root.classList.add('dark');
      root.classList.remove('light');
    } else {
      root.classList.add('light');
      root.classList.remove('dark');
    }
  }, [isDarkMode]);

  // Simplified scroll handling
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollButton(window.scrollY > THEME_CONFIG.scrollButtonThreshold);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Simplified scroll to top
  const scrollToTop = () => {
    scroll.scrollToTop({
      duration: THEME_CONFIG.scrollDuration,
      smooth: 'easeInOutQuint'
    });
  };

  // Simplified loading screen
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
          <div className="w-16 h-16 border-4 border-blue-500/20 border-t-blue-500 rounded-full animate-spin mb-4 mx-auto"></div>
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
        <motion.div
          key={location.pathname}
          initial="initial"
          animate="in"
          variants={pageVariants}
          transition={pageTransition}
        >
          <Routes>
            <Route path="/" element={
              <div className="container-custom">
                <Hero isDarkMode={isDarkMode} />
                <About showTopThree={true} isDarkMode={isDarkMode} />
                <Education isDarkMode={isDarkMode} />
                <Project showTopThree={true} isDarkMode={isDarkMode} />
              </div>
            }/>
            <Route path="/resume" element={<ResumePage isDarkMode={isDarkMode} />} />
            <Route path="/projects" element={<ProjectsPage isDarkMode={isDarkMode} />} />
            <Route path="/about" element={<AboutPage isDarkMode={isDarkMode} />} />
            <Route path="/experience" element={<ExperiencePage isDarkMode={isDarkMode} />} />
            <Route path="/technologies" element={<TechnologiesPage isDarkMode={isDarkMode} />} />
          </Routes>
        </motion.div>
      </main>
      
      {/* Footer */}
      <Footer isDarkMode={isDarkMode} />

      {/* Scroll to Top Button */}
      <ScrollToTopButton 
        showScrollButton={showScrollButton}
        scrollToTop={scrollToTop}
        isDarkMode={isDarkMode}
      />
    </div>
  );
}

export default App;
