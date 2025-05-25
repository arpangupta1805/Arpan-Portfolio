import React from "react";
import about from "../assets/about1.jpeg";
import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Container1 = (delay) => ({
  hidden: { x: -400, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 1, delay: delay },
  },
});

const About = ({ showTopThree = false }) => {
  // If showTopThree is true, show a shorter version of the about text
  const aboutTextToShow = showTopThree 
    ? ABOUT_TEXT.split('.').slice(0, 2).join('.') + '.' 
    : ABOUT_TEXT;

  return (
    <div id="about" className="border-b border-neutral-900 pb-4">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        About <span className="gradient-text">Me</span>
      </motion.h1>
      <div className="flex flex-wrap">
        <motion.div
          whileInView={{ opacity: 1, x: 100 }}
          initial={{ opacity: 0, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="w-full lg:w-1/2 lg:p-8"
        >
          <div className="flex items-center justify-center">
            <div className="w-2/3 aspect-square rounded-2xl overflow-hidden shadow-lg">
              <img className="w-full object-cover" src={about} alt="About img" />
            </div>
          </div>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className=" w-full lg:w-1/2">
          <div className="flex flex-col flex-wrap justify-center lg:justify-start">
            <p className="my-2 max-w-xl py-6">{aboutTextToShow}</p>
            
            {showTopThree && (
              <div className="mb-8">
                <Link 
                  to="/Arpan-Portfolio/about"
                  className="btn btn-primary inline-flex items-center gap-2 transform hover:translate-y-[-2px] hover:shadow-lg"
                >
                  <span>Read More about Arpan Gupta</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
