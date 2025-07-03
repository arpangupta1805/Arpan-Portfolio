import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FaDownload, 
  FaExternalLinkAlt, 
  FaFileAlt, 
  FaEye, 
  FaPrint,
  FaArrowLeft,
  FaCheckCircle,
  FaTimesCircle,
  FaSpinner
} from 'react-icons/fa';
import resumePdf from '../assets/Resume.pdf';
import { PAGE_CONTENT, PERSONAL_INFO, BUTTON_LABELS } from '../constants';

const ResumePage = ({ isDarkMode }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [downloadStatus, setDownloadStatus] = useState('');

  useEffect(() => {
    // Simulate loading time for PDF
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  const handleDownload = async () => {
    try {
      setDownloadStatus('downloading');
      const link = document.createElement('a');
      link.href = resumePdf;
      link.download = PERSONAL_INFO.resumeFileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      setTimeout(() => {
        setDownloadStatus('success');
        setTimeout(() => setDownloadStatus(''), 3000);
      }, 1000);
    } catch (err) {
      setDownloadStatus('error');
      setTimeout(() => setDownloadStatus(''), 3000);
    }
  };

  const handlePrint = () => {
    window.open(resumePdf, '_blank');
  };

  const handleView = () => {
    window.open(resumePdf, '_blank');
  };

  const actions = [
    { 
      icon: FaDownload, 
      label: 'Download', 
      action: handleDownload, 
      color: 'bg-blue-500 hover:bg-blue-600',
      status: downloadStatus === 'downloading' ? 'loading' : downloadStatus 
    },
    { 
      icon: FaEye, 
      label: 'View', 
      action: handleView, 
      color: 'bg-green-500 hover:bg-green-600' 
    },
    { 
      icon: FaPrint, 
      label: 'Print', 
      action: handlePrint, 
      color: 'bg-purple-500 hover:bg-purple-600' 
    },
  ];

  const resumeFeatures = [
    '✨ ATS-Optimized Format',
    '🎯 Tailored for Tech Roles',
    '📱 Mobile-Friendly Design',
    '🔄 Regularly Updated',
    '🏆 Achievement-Focused',
    '💼 Professional Layout'
  ];

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
              Download or view my professional experience and qualifications
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

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Resume Info Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-1"
          >
            <div className="card p-6 sticky top-24">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                  <FaFileAlt className="text-white text-sm" />
                </div>
                Resume Features
              </h3>
              
              <div className="space-y-3 mb-8">
                {resumeFeatures.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 * index }}
                    className="flex items-center text-sm"
                  >
                    <span className="mr-2">{feature}</span>
                  </motion.div>
                ))}
              </div>

              {/* Quick Stats */}
              <div className="space-y-4 pt-6 border-t border-gray-200 dark:border-gray-700">
                <div className="flex justify-between items-center text-sm">
                  <span className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>Last Updated</span>
                  <span className="font-medium">{new Date().toLocaleDateString()}</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>File Size</span>
                  <span className="font-medium">~2.5 MB</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>Format</span>
                  <span className="font-medium">PDF</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Main Resume Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3"
          >
            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 mb-8">
              {actions.map((action, index) => (
                <motion.button
                  key={action.label}
                  onClick={action.action}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  disabled={action.status === 'loading'}
                  className={`px-6 py-3 rounded-xl text-white font-medium transition-all duration-300 flex items-center gap-3 shadow-lg hover:shadow-xl ${action.color} ${
                    action.status === 'loading' ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                >
                  {action.status === 'loading' ? (
                    <FaSpinner className="text-lg animate-spin" />
                  ) : action.status === 'success' ? (
                    <FaCheckCircle className="text-lg" />
                  ) : action.status === 'error' ? (
                    <FaTimesCircle className="text-lg" />
                  ) : (
                    <action.icon className="text-lg" />
                  )}
                  {action.status === 'loading' ? 'Downloading...' : 
                   action.status === 'success' ? 'Downloaded!' :
                   action.status === 'error' ? 'Error' :
                   `${action.label} Resume`}
                </motion.button>
              ))}
            </div>

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
                      src={resumePdf}
                      title="Arpan Gupta Resume"
                      className="w-full border-0"
                      onError={() => setError(true)}
                      style={{ minHeight: '80vh', height: '80vh' }}
                    />
                    
                    {/* Overlay for better interaction */}
                    <div className="absolute top-4 right-4 flex gap-2">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        onClick={handleView}
                        className="p-3 bg-black/20 backdrop-blur-sm rounded-xl text-white hover:bg-black/30 transition-all duration-300 shadow-lg"
                        title="Open in new tab"
                      >
                        <FaExternalLinkAlt />
                      </motion.button>
                    </div>

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
                      The PDF preview couldn't load, but you can still download or view the resume in a new tab.
                    </p>
                    <div className="flex gap-4">
                      <button
                        onClick={handleDownload}
                        className="btn btn-primary flex items-center gap-2"
                      >
                        <FaDownload /> {PAGE_CONTENT.resume.downloadText}
                      </button>
                      <button
                        onClick={handleView}
                        className="btn btn-secondary flex items-center gap-2"
                      >
                        <FaExternalLinkAlt /> Open in New Tab
                      </button>
                    </div>
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
    </div>
  );
};

export default ResumePage; 