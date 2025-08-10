// Project Images
import Dhanush_image from "../assets/projects/DhanushAI.png"
import LandWise_image from "../assets/projects/lendwise/Dashboard.png";
import Wanderlust_image from "../assets/projects/wanderlust/Wanderlust_image.png";
import Story_image from "../assets/projects/StoryMosaic/UserDashboard.png";
import Music_image from "../assets/projects/Tuneflow/Landingpage.png";
import Task_image from "../assets/projects/Taskflow/ViasulaiseTask.png";
import Portfolio_image from "../assets/projects/Portfolio_image.png";

// Profile Images
import ProfilePhoto from "../assets/images/Proffesional_profile_photo.jpg";
import HeroBackground from "../assets/images/Hero.jpg";

export const HERO_CONTENT = `I am a passionate and versatile developer with experience in building robust and scalable web applications using technologies like React, Next.js, Node.js, MySQL, and MongoDB. Having completed multiple web development projects, I am now expanding my expertise into machine learning and software development, aiming to create innovative, impactful, and future-ready solutions.`;
export const ABOUT_TEXT = `I am a dedicated full stack developer with a strong foundation in creating efficient and user-friendly web applications. Over the past year, I have worked on numerous projects involving React, Next.js, Node.js, MySQL, and MongoDB. Currently, I am broadening my skill set by exploring machine learning and software development, with the goal of integrating intelligent systems into practical, high-quality solutions. I thrive in collaborative environments, enjoy tackling complex challenges, and am committed to continuous learning. Beyond coding, I stay active, explore emerging technologies, and contribute to open-source projects.`;


export const EXPERIENCES = [
  {
    year: "2025-2025",
    role: "Full Stack Engineer",
    company: "Open Source Contributer - Metis IIT Gandhinagar",
    description: `Contributed for the development of various features and improvements in the Blog website project, focusing on enhancing user experience and performance. Integrated a User profile with the user icon, enabled the editing profile feature, implemented the fuzzy search functionality in main page, implemented the proper structure for the create blog and giving a support of the markdown in the blog body with preview button to see the preview of the blog before publishing it, and also provided a security feature that only IITGN students can write the blog.`,
    technologies: ["HTML", "CSS", "JS"],
    link: "https://github.com/Metis-IITGandhinagar/InsIIT-Blogs",
    keycontributions: [
      "Implemented user profile feature",
      "Enabled editing profile functionality",
      "Integrated fuzzy search in main page",
      "Structured create blog feature",
      "Supported markdown feature in blog body with preview functionality",
      "Ensured security for IITGN students"]
  },
  {
    year: "2025-2025",
    role: "Full Stack Engineer",
    company: "Open Source Contributer - Meta IIT Gandhinagar",
    description: "Improved the complete UI of the page for the dull boring to the need and accordence of the web page structured the complete page in a proper manner by adding a proper linking of the webpages across enhancing user experience.",
    technologies: ["Mkdocs yml", "Markdown file"], 
    link: "https://github.com/OpenSource-IITGn/metaiitgn/",
    keycontributions: [
      "Redesigned the UI for improved user engagement",
      "Streamlined navigation for better accessibility",
      "Enhanced content organization with clear structure"
    ]
  },
  {
    year: "2025 - 2025",
    role: "Frontend Engineer",
    company: "Open Source Contributer - Zen Citizen",
    description: `Integrated the Side Pannel Switching Bot, Audio input/output support with almost evry language using google voice recognition and gTTS, Image support for asking questions according to the image, Image resizer tool which resizes the image according to the government photo requirements.`,
    technologies: ["Reactjs", "Web Speech Api", "Open Ai APis", "axios", "browser-image-compression"],
    link: "https://github.com/zen-citizen/kaveribot",
    keycontributions: [
      "Implemented side panel switching bot",
      "Integrated audio input/output support",
      "Developed image support for question answering",
      "Created image resizer tool for government photo requirements"
    ]
  }
];

export const EDUCATIONS = [
  {
    title: "Indian Institute of Technology, Gandhinagar",
    subtitle: "B.Tech in Computer Science and Engineering",
    year: "2024 - present",
    link: "https://www.iitgn.ac.in/"
  }
]

export const PROJECTS = [
  {
    title: "DhanushAI - Web Assistant",
    image: Dhanush_image,
    description: "Designed a smart browser interface capable of opening any platforms through natural language, YouTube playback, and dynamic weather API integrations. Built a fully functional, multimodal browser supporting both voice and text interaction with real-time back-end communication and LLM response generation(Meta | LLaM A3). Gained hands-on experience with Meta’s LLaMA3 LLM, Google’s gTTS for speech recognition, and real-time communication using WebSockets.",
    technologies: ["React", "Web-Sockiets", "Tailwind", "gTTS", "API key Integration", "Dynamic chats", "Youtube Playback"],
    link: "https://web-assistant-arpan.vercel.app",
    category: "AI Agent"
  },
  {
    title: "LendWise - Lend Money Smartly",
    image: LandWise_image,
    description: "Designed and developed LendWise, a lending platform enabling users to lend and borrow money with a secure and user-friendly interface. Implemented features including user authentication, loan management, and a responsive design to provide a seamless lending experience.",
    technologies: ["HTML", "CSS", "Javascript", "Node.js", "Express Js", "MongoDB", "React.js", "Motion Library", "React Router", "Tailwind css", "Body-Parser", "bcryptjs", "jsonwebtoken", "mongoose", "axios", "nodemailer"],
    link: "https://moneylanding.vercel.app",
    category: "Fintech"
  },
  {
    title: "Wanderlust - Interactive Itinerary Board",
    image: Wanderlust_image,
    description: "Crafted an intuitive travel planning platform that transforms chaotic trip planning into a streamlined visual experience. Implemented a sophisticated drag-and-drop interface for itinerary customization, integrated real-time weather forecasting API to enhance trip preparation, and developed a proprietary algorithm that optimizes daily activities based on proximity and user preferences.",
    technologies: ["HTML", "CSS", "Javascript", "Node.js", "Express Js", "MongoDB", "React.js", "Motion Library", "React Router", "Tailwind css", "Html2pdf", "OpenWeatherMap API", "React-Toastify", "React-Beautiful-Dnd", "marked", "moongose"],
    link: "https://code-circuit-n5ct.vercel.app/",
    category: "Travel"
  },
  {
    title: "Story Mosaic: Story Editing Platform ",
    image: Story_image,
    description: "Architected a collaborative writing platform that bridges the gap between authors and their audience through an innovative contribution system. Implemented a GitHub-inspired pull request feature that allows readers to suggest plot developments while maintaining narrative integrity. The platform's unique branching system enables unlimited creative exploration while preserving the original storyline.",
    technologies: ["HTML", "CSS", "Javascript", "Node.js", "Express Js", "MongoDB", "React.js", "Motion Library", "React Router", "Tailwind css", "Body-Parser", "bcryptjs", "jsonwebtoken", "mongoose", "axios"],
    link: "https://story-mosaic-eight.vercel.app/",
    category: "Writing"
  },
  {
    title: "Tuneflow - Flow in the tune of the music",
    image: Music_image,
    description:
      "Developed a feature-rich music streaming application with an elegant, responsive interface and sophisticated audio management capabilities. Engineered a custom audio processing system that maintains playback state across sessions, implements intelligent queue management, and provides advanced playlist functionality. The application features keyboard shortcuts for seamless navigation and a unique audio visualization component.",
    technologies: ["HTML", "CSS", "Javascript", "Node.js", "Express Js", "MongoDB"],
    link: "https://arpangupta1805.github.io/Music-Player",
    category: "Music"
  },
  {
    title: "Taskflow - Task Management App",
    image: Task_image,
    description:
      "Created a productivity-focused task management system that transforms complex project workflows into manageable action items. Implemented a priority-based task algorithm that intelligently suggests daily focus areas, integrated a pomodoro timer for enhanced productivity, and developed a progress analytics dashboard that visualizes productivity patterns over time.",
    technologies: ["HTML", "CSS", "React Js", "MongoDB", "Tailwind"],
    link: "https://arpangupta1805.github.io/To-Do_List/",
    category: "Productivity"
  },
  {
    title: "Arpan Gupta's Portfolio",
    image: Portfolio_image,
    description:
      "Designed and developed a personal portfolio website that showcases my technical expertise and creative abilities through an interactive and visually engaging interface. Implemented performance optimizations resulting in a 95+ Lighthouse score, created custom animations using Framer Motion for enhanced user engagement, and built a responsive design system that ensures flawless presentation across all devices.",
    technologies: ["HTML", "CSS", "JavaScript","React.js", "Tailwind", "Motion Library", "React Router", "Tailwind css"],
    link: "https://arpan-gupta.vercel.app/",
    category: "Portfolio"
  }
];

export const CONTACT = {
  address: "Kota, Rajasthan, India ",
  phoneNo: "+91 7726930361 ",
  email: "24110051@iitgn.ac.in",
};

// Social Media URLs - Change from one place
export const SOCIAL_LINKS = {
  instagram: "https://www.instagram.com/arpan5218/",
  github: "https://github.com/arpangupta1805",
  linkedin: "https://www.linkedin.com/in/arpan-gupta-ab2959319/",
  email: "mailto:24110051@iitgn.ac.in",
};

// External Links - Centralized external URLs
export const EXTERNAL_LINKS = {
  blog: "https://blog-gamma-topaz-88.vercel.app",
  portfolio: "https://arpan-gupta.vercel.app/",
};

// Navigation Configuration - Used in Navbar.jsx and Footer.jsx
export const NAV_ITEMS = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/experience", label: "Experience" },
  { to: "/technologies", label: "Technologies" },
  { to: "/projects", label: "Projects" },
  { to: "/resume", label: "Resume" }
];

// Theme Configuration - App level theme settings
export const THEME_CONFIG = {
  scrollThreshold: 50, // When to show scrolled navbar state
  scrollButtonThreshold: 500, // When to show scroll-to-top button (was 300, now 500)
  scrollDuration: 800, // Scroll animation duration in ms (was 500, now 800)
};

// Personal Info - Used across components for consistent personal details
export const PERSONAL_INFO = {
  name: "Arpan Gupta",
  title: "Developer & Tech Enthusiast", 
  fullTitle: "Developer & Tech Enthusiast",
  initials: "AG",
  tagline: "Building digital experiences that matter",
  currentRole: "Student at IIT Gandhinagar",
  institution: "Indian Institute of Technology, Gandhinagar",
  degree: "B.Tech in Computer Science and Engineering",
  description: "Get to know the person behind the code",
  resumeFileName: "Arpan_Gupta_Resume.pdf"
};

// Page Titles and Descriptions - Centralized page content
export const PAGE_CONTENT = {
  about: {
    title: "About Me",
    description: "Get to know the person behind the code",
    backButtonText: "Back to Home"
  },
  experience: {
    title: "Professional Experience",
    description: "My journey in open source contributions and software development",
    backButtonText: "Back to Home"
  },
  technologies: {
    title: "Technologies & Skills",
    description: "A comprehensive overview of my technical expertise",
    backButtonText: "Back to Home"
  },
  projects: {
    title: "All Projects", 
    description: "A collection of my work and experiments",
    backButtonText: "Back to Home",
    viewAllText: "View All Projects",
    viewProjectText: "View Project"
  },
  resume: {
    title: "My Resume",
    downloadText: "Download PDF",
    backButtonText: "Back to Home"
  }
};

// Button Labels - Centralized button text content
export const BUTTON_LABELS = {
  downloadCV: "Download CV",
  viewPortfolio: "View Portfolio", 
  viewProject: "View Project",
  viewAllProjects: "View All Projects",
  readMore: "Read More about Arpan Gupta",
  backToHome: "Back to Home",
  viewMyWork: "View My Work",
  downloadPDF: "Download PDF",
  connect: "Let's Connect"
};

// Stats - Real numbers based on actual data
export const STATS = {
  projectsCompleted: PROJECTS.length, // Real count from projects array (currently 6)
  technologies: 15, // Fixed count based on actual tech stack used across projects
  experienceYears: 1, // Real experience in years
  passionLevel: 100, // Always 100%
};

// AboutPage specific stats - Used for animated counters in AboutPage.jsx
export const ABOUT_STATS = {
  projects: PROJECTS.length, // Real project count from PROJECTS array
  experience: 1, // Years of experience (matches STATS.experienceYears)
  technologies: 15, // Total technologies mastered (matches STATS.technologies)
  // Note: Removed coffee counter as it was just decorative
};

// AboutPage animation durations - Used for counter animations in AboutPage.jsx
export const ANIMATION_CONFIG = {
  counterDurations: {
    projects: 2000, // 2 seconds for project counter
    experience: 1500, // 1.5 seconds for experience counter  
    technologies: 2500, // 2.5 seconds for technologies counter
  },
  counterUpdateInterval: 50, // Update counter every 50ms for smooth animation
};

// Hero component typing texts - Used in Hero.jsx TypingAnimation
export const HERO_TYPING_TEXTS = [
  "Full Stack Developer",
  "Problem Solver", 
  "Tech Enthusiast",
  "Code Architect"
];

// About component passion points - Used in About.jsx PassionPoints component
export const PASSION_POINTS = [
  {
    title: "Clean Code",
    description: "Writing maintainable, scalable code",
    color: "text-blue-500"
  },
  {
    title: "Performance", 
    description: "Optimizing for speed and efficiency",
    color: "text-yellow-500"
  },
  {
    title: "Collaboration",
    description: "Working with amazing teams",
    color: "text-green-500"
  },
  {
    title: "Innovation",
    description: "Creating solutions that matter",
    color: "text-purple-500"
  }
];

// Contact component quick actions - Used in Contact.jsx QuickActions component
export const CONTACT_ACTIONS = [
  {
    title: "Instagram",
    description: "Follow my journey",
    color: "from-pink-500 to-purple-500"
  },
  {
    title: "GitHub", 
    description: "Code reviews & collaboration",
    color: "from-gray-700 to-gray-900"
  },
  {
    title: "LinkedIn",
    description: "Connect professionally", 
    color: "from-blue-600 to-blue-700"
  }
];

// Footer navigation links - Used in Footer.jsx (uses NAV_ITEMS for consistency)
export const FOOTER_LINKS = NAV_ITEMS.map(item => ({
  name: item.label,
  path: item.to
}));

// Response time data - Used in Contact.jsx for response time display
export const RESPONSE_TIMES = [
  { label: "Email Response", time: "< 24h", color: "green" },
  { label: "Project Discussion", time: "Same Day", color: "blue" },
  { label: "Project Quotes", time: "48h", color: "purple" }
];

// Export profile images for use in components
export { ProfilePhoto, HeroBackground };
