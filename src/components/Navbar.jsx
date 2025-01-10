import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";

const Navbar = () => {
  const handleInstagram = () => {
    window.open("https://www.instagram.com/arpan5218/");
  };
  const handlelinkedin = () => {
    window.open("https://www.linkedin.com/in/arpan-gupta-ab2959319/");
  }
  const handleGithub = () => {
    window.open("https://github.com/arpangupta1805")
  }
  return (
    <nav className="   mb-20 flex items-center justify-between py-6">
      <div className="  flex flex-shrink-0 items-center text-4xl">
        <p className="mx-2 w-10">AG</p>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <FaInstagram onClick={handleInstagram} className="cursor-pointer hover:scale-110 transition-all ease-in-out" />
        <FaLinkedin onClick={handlelinkedin} className="cursor-pointer hover:scale-110 transition-all ease-in-out"/>
        <FaGithub onClick={handleGithub} className="cursor-pointer hover:scale-110 transition-all ease-in-out" />
      </div>
    </nav>
  );
};

export default Navbar;
