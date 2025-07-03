import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaDownload, FaExternalLinkAlt, FaFileAlt, FaEye, FaPrint } from 'react-icons/fa';
import resumePdf from '../assets/Resume.pdf';

const Resume = ({ isDarkMode }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    // Simulate loading time for PDF
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = resumePdf;
    link.download = 'Arpan_Gupta_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handlePrint = () => {
    window.open(resumePdf, '_blank');
  };

  const handleView = () => {
    window.open(resumePdf, '_blank');
  };

  const actions = [
    { icon: FaDownload, label: 'Download', action: handleDownload, color: 'bg-blue-500 hover:bg-blue-600' },
    { icon: FaEye, label: 'View', action: handleView, color: 'bg-green-500 hover:bg-green-600' },
    { icon: FaPrint, label: 'Print', action: handlePrint, color: 'bg-purple-500 hover:bg-purple-600' },
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            My Resume
          </h2>
          <p className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            Download or view my professional experience and skills
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {actions.map((action, index) => (
            <motion.button
              key={action.label}
              onClick={action.action}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-xl text-white font-medium transition-all duration-300 flex items-center gap-3 shadow-lg hover:shadow-xl ${action.color}`}
            >
              <action.icon className="text-lg" />
              {action.label} Resume
            </motion.button>
          ))}
        </motion.div>

        {/* Resume Preview */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative max-w-5xl mx-auto"
        >
          <div className="card overflow-hidden shadow-2xl border border-white/10">
            {/* Loading State */}
            {isLoading && (
              <div className="flex items-center justify-center py-20">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full"
                />
                <span className={`ml-4 text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Loading Resume...
                </span>
              </div>
            )}

            {/* PDF Viewer */}
            {!isLoading && !error && (
              <div className="relative bg-white rounded-lg overflow-hidden">
                <iframe
                  src={resumePdf}
                  title="Arpan Gupta Resume"
                  className="w-full h-[80vh] border-0"
                  onError={() => setError(true)}
                  style={{ minHeight: '800px' }}
                />
                
                {/* Overlay for better interaction */}
                <div className="absolute top-4 right-4 flex gap-2">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    onClick={handleView}
                    className="p-2 bg-black/20 backdrop-blur-sm rounded-lg text-white hover:bg-black/30 transition-all duration-300"
                    title="Open in new tab"
                  >
                    <FaExternalLinkAlt />
                  </motion.button>
                </div>
              </div>
            )}

            {/* Error State */}
            {error && (
              <div className="flex flex-col items-center justify-center py-20">
                <FaFileAlt className="text-6xl text-gray-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Unable to display PDF</h3>
                <p className={`text-center mb-6 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  Don't worry! You can still download or view the resume in a new tab.
                </p>
                <div className="flex gap-4">
                  <button
                    onClick={handleDownload}
                    className="btn btn-primary flex items-center gap-2"
                  >
                    <FaDownload /> Download PDF
                  </button>
                  <button
                    onClick={handleView}
                    className="btn btn-secondary flex items-center gap-2"
                  >
                    <FaExternalLinkAlt /> Open in New Tab
                  </button>
                </div>
              </div>
            )}
          </div>
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Last updated: {new Date().toLocaleDateString()} • 
            Available in PDF format • 
            Optimized for ATS systems
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Resume;
