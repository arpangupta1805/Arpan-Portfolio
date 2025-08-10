import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Code, Database, Globe, Settings } from "lucide-react";
import Tech from "../components/Tech";

const TechnologiesPage = ({ isDarkMode }) => {
  return (
    <div className="min-h-screen pt-20">
      {/* Header Section */}
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-blue-500 hover:text-blue-600 transition-colors duration-200 mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          
          <div className="text-center">
            <p className="text-4xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              A comprehensive overview of the tools and technologies I work with
            </p>
          </div>
        </motion.div>
      </div>

      {/* Tech Component */}
      <Tech isDarkMode={isDarkMode} />
    </div>
  );
};

export default TechnologiesPage;
