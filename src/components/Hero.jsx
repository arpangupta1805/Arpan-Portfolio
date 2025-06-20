import React from "react";
import { HERO_CONTENT } from "../constants";
import about from "../assets/about.png";
import { motion } from "framer-motion";

const Container = (delay) => ({
  hidden: { x: -400, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 1, delay: delay },
  },
});

const Hero = () => {
  return (
    <>
      <div className="border-b border-neutral-900 pb-4 lg:mb-35"></div>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1  // this motion library is used to create motion like effects.
              variants={Container(0)}
              initial="hidden" // this is the initial state
              animate="visible" // this is the final state
              className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-7xl"
            >
              Arpan Gupta
            </motion.h1>
            <motion.span
              variants={Container(0.6)}
              initial="hidden"
              animate="visible"
              className="gradient-text text-3xl tracking-tight"
            >
              Full Stack Developer
            </motion.span>
            <motion.p
              variants={Container(1.2)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 font-light tracking-tight"
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="w-2/3 aspect-square rounded-lg overflow-hidden shadow-lg"
            >
              <img
                className="img-contain"
                src={about}
                alt="Arpan Gupta"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
