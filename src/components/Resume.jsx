import React from 'react'

const Resume = () => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-[#0a0a0a] text-white">
      <iframe
        src="./src/assets/Resume.pdf"
        title="Resume"
        className="w-[80%] h-[90vh] rounded-lg shadow-lg"
      ></iframe>
    </div>
  )
}

export default Resume
