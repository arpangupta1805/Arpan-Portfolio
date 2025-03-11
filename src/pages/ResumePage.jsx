import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaDownload, FaExternalLinkAlt } from 'react-icons/fa';
import resumePdf from '../assets/Resume.pdf';

const ResumePage = ({ isDarkMode }) => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = resumePdf;
    link.download = 'Arpan_Gupta_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const openGoogleDrive = () => {
    window.open('https://drive.google.com/file/d/1UZffH5ThHHYBGgGHWsFWcvSRDzuPncSl/view', '_blank');
  };

  return (
    <div className={`min-h-screen container mx-auto px-8 py-10 ${isDarkMode ? 'text-neutral-300' : 'text-neutral-800'}`}>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold"
        >
          My Resume
        </motion.h1>
        <div className="flex flex-wrap gap-4">
          <button 
            onClick={handleDownload}
            className="btn btn-primary inline-flex items-center gap-2 transform hover:translate-y-[-2px]"
          >
            <FaDownload /> Download PDF
          </button>
          <button 
            onClick={openGoogleDrive}
            className="btn btn-outline inline-flex items-center gap-2 transform hover:translate-y-[-2px]"
          >
            <FaExternalLinkAlt /> View in Drive
          </button>
          <Link 
            to="/Arpan-Portfolio" 
            className="btn btn-secondary inline-flex items-center gap-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Back to Home
          </Link>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="p-4 rounded-lg shadow-lg"
        style={{ backgroundColor: 'var(--card-bg)' }}
      >
        <div className="relative aspect-[8.5/11] w-full max-w-4xl mx-auto overflow-hidden rounded-md shadow-xl">
          <iframe
            src={resumePdf}
            title="Resume"
            className="absolute inset-0 w-full h-full border-0"
          ></iframe>
        </div>
      </motion.div>
    </div>
  );
};

export default ResumePage; 