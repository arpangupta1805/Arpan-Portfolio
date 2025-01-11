import React from 'react'
import { EDUCATIONS } from '../constants'
import { motion } from "framer-motion";

const Container = (delay) => ({
    hidden: { x: -400, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 1, delay: delay },
    },
  });

const Education = () => {
  return (
    <div className="flex flex-col items-center w-full lg:items-start border-b border-neutral-900 pb-4">
        <motion.span
            variants={Container(0.6)}
            initial="hidden"
            animate="visible"
            className="mb-4 bg-gradient-to-r text-center from-[#4682b4] via-slate-500 to-[#663399] bg-clip-text text-[2.5rem] tracking-tight text-transparent" >
            Education
        </motion.span>
        <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className='flex lg:flex-col gap-8 lg:flex-wrap justify-start max-h-[50vh] max-w-[95vw] scrollbar-hide overflow-scroll'>
        {EDUCATIONS.map((education, index) => (
            <div key={index} className="w-full md:w-[25rem] flex-col flex-wrap flex lg:items-center border-[2px] border-gray-600 rounded-2xl p-3 ">
                <motion.h1
                    variants={Container(0)}
                    initial="hidden" // this is the initial state
                    animate="visible" // this is the final state
                    onClick={() => window.open(education.link)} // this will open link in new tab
                    className="text-2xl cursor-pointer hover:underline font-thin text-wrap tracking-tight lg:mt-16" >{education.title}
                </motion.h1>
        
                <motion.h3
                    variants={Container(0.5)}
                    initial="hidden"
                    animate="visible"
                    className="my-1 ml-10 lg:ml-16 max-w-xl text-xl transition-all font-light tracking-tight">
                    {education.subtitle}
                </motion.h3>
                <motion.p
                    variants={Container(0.7)}
                    initial="hidden"
                    animate="visible"
                    className="my-1 ml-10 lg:ml-16 text-gray-500 text-2xl max-w-xl font-light tracking-tight">
                    {education.year}
                </motion.p>
            </div>
        ))}
        </motion.div>
    </div>
  )
}

export default Education
