import { Routes, Route, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { animateScroll as scroll } from "react-scroll";
import { FaArrowUp } from "react-icons/fa";
import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Project from "./components/Project";
import Tech from "./components/Tech";
import Resume from "./components/Resume";
import ProjectsPage from "./pages/ProjectsPage";
import AboutPage from "./pages/AboutPage";
import ResumePage from "./pages/ResumePage";

function App() {
  // Initialize theme from localStorage, system preference, or default to dark mode
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    
    // If there's a saved preference, use it
    if (savedTheme) {
      return savedTheme === 'dark';
    }
    
    // If no saved preference, check system preference
    if (window.matchMedia) {
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    
    // Default to dark mode if nothing else is available
    return true;
  });
  
  const [showScrollButton, setShowScrollButton] = useState(false);
  const location = useLocation();

  // Listen for system theme changes
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    const handleChange = (e) => {
      // Only update if user hasn't set a preference
      if (!localStorage.getItem('theme')) {
        setIsDarkMode(e.matches);
      }
    };
    
    // Add listener for theme changes
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handleChange);
      return () => mediaQuery.removeEventListener('change', handleChange);
    } else {
      // Fallback for older browsers
      mediaQuery.addListener(handleChange);
      return () => mediaQuery.removeListener(handleChange);
    }
  }, []);

  const toggleTheme = () => {
    const newThemeValue = !isDarkMode;
    setIsDarkMode(newThemeValue);
    // Save theme preference to localStorage
    localStorage.setItem('theme', newThemeValue ? 'dark' : 'light');
  };

  // Apply theme class to body
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
      document.body.classList.remove('light-mode');
    } else {
      document.body.classList.add('light-mode');
      document.body.classList.remove('dark-mode');
    }
  }, [isDarkMode]);

  // Handle scroll to top button visibility
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    scroll.scrollToTop({
      duration: 500,
      smooth: true
    });
  };

  return (
    <div className={`overflow-x-hidden antialiased selection:bg-cyan-300 selection:text-cyan-900 ${isDarkMode ? 'text-neutral-300 bg-neutral-950' : 'text-neutral-800 bg-neutral-100'}`}>
      <div className="fixed top-0 -z-10 h-full w-full">
        {" "}
        <div className={`absolute top-0 z-[-2] h-screen w-screen ${
          isDarkMode 
            ? "bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" 
            : "bg-neutral-100 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.15),rgba(255,255,255,0))]"
        }`}></div>
      </div>
      <Navbar toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
      <Routes>
        <Route path="/Arpan-Portfolio" element={
          <div className="container mx-auto px-8">
            <Hero />
            <About showTopThree={true} />
            <Education />
            <Tech />
            {/* <Experience /> */}
            <Project showTopThree={true} />
            <Contact />
          </div>
        }/>
        <Route path="/Arpan-Portfolio/resume" element={<ResumePage isDarkMode={isDarkMode} />} />
        <Route path="/Arpan-Portfolio/projects" element={<ProjectsPage isDarkMode={isDarkMode} />} />
        <Route path="/Arpan-Portfolio/about" element={<AboutPage isDarkMode={isDarkMode} />} />
      </Routes>

      {/* Scroll to Top Button */}
      {showScrollButton && (
        <button 
          onClick={scrollToTop} 
          className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-blue-600 text-white shadow-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-110"
          aria-label="Scroll to top"
        >
          <FaArrowUp />
        </button>
      )}
    </div>
  );
}

export default App;
