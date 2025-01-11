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
    <div className="flex flex-col items-center lg:items-start border-b border-neutral-900 pb-4">
        <motion.span
            variants={Container(0.6)}
            initial="hidden"
            animate="visible"
            className="bg-gradient-to-r text-center from-[#4682b4] via-slate-500 to-[#663399] bg-clip-text text-[2.5rem] tracking-tight text-transparent" >
            Education
        </motion.span>
        <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className='flex flex-wrap justify-start '>
        {EDUCATIONS.map((education, index) => (
            <div key={index} className="mb-8 flex-col flex lg:items-center border-[2px] border-neutral-950 rounded-xl p-3">
                <a target='_blank' href={education.link} className='cursor-pointer hover:underline'>
                  <motion.h1 
                      variants={Container(0)}
                      initial="hidden" // this is the initial state
                      animate="visible" // this is the final state
                      className="text-4xl font-thin tracking-tight lg:mt-16 lg:text-2xl" >{education.title}
                  </motion.h1>
                </a>
                <a target='_blank' href="https://cs.iitgn.ac.in/career" className='cursor-pointer hover:underline'>
                <motion.h3
                    variants={Container(0.5)}
                    initial="hidden"
                    animate="visible"
                    className="my-2 ml-4 max-w-xl text-2xl font-light tracking-tight">
                    {education.subtitle}
                </motion.h3>
                </a>
                <motion.p
                    variants={Container(0.7)}
                    initial="hidden"
                    animate="visible"
                    className="my-2 ml-4 text-3xl max-w-xl font-light tracking-tight">
                    {education.year}
                </motion.p>
            </div>
        ))}
        </motion.div>
    </div>
  )
}

export default Education
