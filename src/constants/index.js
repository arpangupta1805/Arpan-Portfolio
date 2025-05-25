import LandWise_image from "../assets/projects/LandWise_image.png";
import Wanderlust_image from "../assets/projects/Wanderlust_image.png";
import Story_image from "../assets/projects/Story_image.png";
import Music_image from "../assets/projects/Music_image.png";
import Task_image from "../assets/projects/Task_image.png";
import Portfolio_image from "../assets/projects/Portfolio_image.png";
import blogging_image from "../assets/projects/blogging_image.png";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;
export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 1 year of experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2024 - 2025",
    role: "Frontend Engineer",
    company: "Open Source Contributer - Zen Citizen",
    description: `Integrated the Side Pannel Switching Bot, Audio input/output support with almost evry language using google voice recognition and gTTS, Image support for asking questions according to the image, Image resizer tool which resizes the image according to the government photo requirements.`,
    technologies: ["Reactjs", "Web Speech Api", "Open Ai APis", "axios", "browser-image-compression"],
  },
];

export const EDUCATIONS = [
  {
    title: "Indian Institute of Technology, Gandhinagar",
    subtitle: "B.Tech in Computer Science and Engineering",
    year: "2024 - 2028",
    link: "https://www.iitgn.ac.in/"
  }
]

export const PROJECTS = [
  {
    title: "LendWise - Lend Money Smartly",
    image: LandWise_image,
    description: "Designed and developed LendWise, a lending platform enabling users to lend and borrow money with a secure and user-friendly interface. Implemented features including user authentication, loan management, and a responsive design to provide a seamless lending experience.",
    technologies: ["HTML", "CSS", "Javascript", "Node.js", "Express Js", "MongoDB", "React.js", "Motion Library", "React Router", "Tailwind css", "Body-Parser", "bcryptjs", "jsonwebtoken", "mongoose", "axios", "nodemailer"],
    link: "https://moneylanding.vercel.app"
  },
  {
    title: "Wanderlust - Interactive Itinerary Board",
    image: Wanderlust_image,
    description: "Crafted an intuitive travel planning platform that transforms chaotic trip planning into a streamlined visual experience. Implemented a sophisticated drag-and-drop interface for itinerary customization, integrated real-time weather forecasting API to enhance trip preparation, and developed a proprietary algorithm that optimizes daily activities based on proximity and user preferences.",
    technologies: ["HTML", "CSS", "Javascript", "Node.js", "Express Js", "MongoDB", "React.js", "Motion Library", "React Router", "Tailwind css", "Html2pdf", "OpenWeatherMap API", "React-Toastify", "React-Beautiful-Dnd", "marked", "moongose"],
    link: "https://code-circuit-n5ct.vercel.app/"
  },
  {
    title: "Story Mosaic: Story Editing Platform ",
    image: Story_image,
    description: "Architected a collaborative writing platform that bridges the gap between authors and their audience through an innovative contribution system. Implemented a GitHub-inspired pull request feature that allows readers to suggest plot developments while maintaining narrative integrity. The platform's unique branching system enables unlimited creative exploration while preserving the original storyline.",
    technologies: ["HTML", "CSS", "Javascript", "Node.js", "Express Js", "MongoDB", "React.js", "Motion Library", "React Router", "Tailwind css", "Body-Parser", "bcryptjs", "jsonwebtoken", "mongoose", "axios"],
    link: "https://story-mosaic-eight.vercel.app/"
  },
  {
    title: "Music-player",
    image: Music_image,
    description:
      "Developed a feature-rich music streaming application with an elegant, responsive interface and sophisticated audio management capabilities. Engineered a custom audio processing system that maintains playback state across sessions, implements intelligent queue management, and provides advanced playlist functionality. The application features keyboard shortcuts for seamless navigation and a unique audio visualization component.",
    technologies: ["HTML", "CSS", "Javascript", "Node.js", "Express Js", "MongoDB"],
    link: "https://arpangupta1805.github.io/Music-Player"
  },
  {
    title: "Task Management App",
    image: Task_image,
    description:
      "Created a productivity-focused task management system that transforms complex project workflows into manageable action items. Implemented a priority-based task algorithm that intelligently suggests daily focus areas, integrated a pomodoro timer for enhanced productivity, and developed a progress analytics dashboard that visualizes productivity patterns over time.",
    technologies: ["HTML", "CSS", "React Js", "MongoDB", "Tailwind"],
    link: "https://arpangupta1805.github.io/To-Do_List/"
  },
  {
    title: "Portfolio Website",
    image: Portfolio_image,
    description:
      "Designed and developed a personal portfolio website that showcases my technical expertise and creative abilities through an interactive and visually engaging interface. Implemented performance optimizations resulting in a 95+ Lighthouse score, created custom animations using Framer Motion for enhanced user engagement, and built a responsive design system that ensures flawless presentation across all devices.",
    technologies: ["HTML", "CSS", "JavaScript","React.js", "Tailwind", "Motion Library", "React Router", "Tailwind css"],
    link: "https://arpangupta1805.github.io/Arpan-Portfolio/"
  },
  {
    title: "Blogging Platform",
    image: blogging_image,
    description:
      "Engineered a modern blogging platform that emphasizes content discovery and reader engagement through an intuitive interface. Implemented a rich text editor with markdown support, developed a sophisticated content recommendation algorithm based on reading patterns, and created a responsive design system that adapts to various screen sizes while maintaining optimal readability.",
    technologies: ["HTML", "CSS", "React.js", "Express", "localStorage"],
    link: "https://arpangupta1805.github.io/Static-Blog-website/"
  },
];

export const CONTACT = {
  address: "Kota, Rajasthan, India ",
  phoneNo: "+91 7726930361 ",
  email: "24110051@iitgn.ac.in",
};
