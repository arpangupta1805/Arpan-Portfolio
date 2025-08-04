import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FaFileAlt, 
  FaArrowLeft
} from 'react-icons/fa';
import { PAGE_CONTENT } from '../constants';

const fileID = "1UZffH5ThHHYBGgGHWsFWcvSRDzuPncSl";
const resumeUrl = `https://drive.google.com/file/d/${fileID}/preview`;

const ResumePage = ({ isDarkMode }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    // Simulate loading time for PDF
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`min-h-screen pt-24 pb-12 ${isDarkMode ? 'text-neutral-300' : 'text-neutral-800'}`}>
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12"
        >
          <div>
            <h1 className="text-5xl md:text-6xl font-bold gradient-text mb-4">
              {PAGE_CONTENT.resume.title}
            </h1>
            <p className={`text-lg ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              View my professional experience and qualifications
            </p>
          </div>
          <Link 
            to="/" 
            className="btn btn-primary inline-flex items-center gap-2 mt-6 md:mt-0 group"
          >
            <FaArrowLeft className="group-hover:-translate-x-1 transition-transform duration-300" />
            {PAGE_CONTENT.resume.backButtonText}
          </Link>
        </motion.div>


          {/* Main Resume Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3"
          >
            {/* Resume Preview */}
            <div className="relative">
              <div className="card overflow-hidden shadow-2xl border border-white/10">
                {/* Loading State */}
                {isLoading && (
                  <div className="flex flex-col items-center justify-center py-20">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full mb-4"
                    />
                    <span className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      Loading Resume Preview...
                    </span>
                    <div className="flex space-x-1 mt-4">
                      {[...Array(3)].map((_, i) => (
                        <motion.div
                          key={i}
                          animate={{ 
                            scale: [1, 1.2, 1],
                            opacity: [0.7, 1, 0.7]
                          }}
                          transition={{ 
                            duration: 1,
                            repeat: Infinity,
                            delay: i * 0.2
                          }}
                          className="w-2 h-2 bg-blue-500 rounded-full"
                        />
                      ))}
                    </div>
                  </div>
                )}

                {/* PDF Viewer */}
                {!isLoading && !error && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="relative bg-white rounded-lg overflow-hidden"
                  >
                    <iframe
                      src={resumeUrl}
                      title="Arpan Gupta Resume"
                      className="w-full border-0"
                      onError={() => setError(true)}
                      style={{ minHeight: '80vh', height: '80vh' }}
                    />
                    
                    {/* Preview indicator */}
                    <div className="absolute bottom-4 left-4">
                      <div className="px-3 py-1 bg-black/20 backdrop-blur-sm rounded-lg text-white text-sm">
                        Interactive Preview
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Error State */}
                {error && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex flex-col items-center justify-center py-20"
                  >
                    <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mb-6">
                      <FaFileAlt className="text-3xl text-red-500" />
                    </div>
                    <h3 className="text-2xl font-semibold mb-3">Preview Unavailable</h3>
                    <p className={`text-center mb-8 max-w-md ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      The PDF preview couldn't load. Please try refreshing the page.
                    </p>
                  </motion.div>
                )}
              </div>
            </div>

            {/* Additional Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8 text-center"
            >
              <div className="card p-6">
                <h3 className="text-lg font-semibold mb-3">Need a Custom Version?</h3>
                <p className={`text-sm mb-4 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  I can provide a tailored version of my resume for specific roles or requirements.
                </p>
                <Link to="/about" className="btn btn-secondary text-sm">
                  Contact Me
                </Link>
              </div>
            </motion.div>
          </motion.div>
      </div>
    </div>
  );
};

export default ResumePage; 