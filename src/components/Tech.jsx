import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { 
  Code, 
  Database, 
  Globe, 
  Settings, 
  Zap,
  Star,
  Award
} from "lucide-react";
import { SiNextdotjs, SiTypescript, SiVite } from "react-icons/si";
import { 
  ReactIcon, 
  NodeIcon, 
  MongoIcon, 
  ExpressIcon, 
  JavaScriptIcon, 
  HTMLIcon, 
  CSSIcon, 
  TailwindIcon, 
  GitIcon, 
  GitHubIcon, 
  VSCodeIcon, 
  PythonIcon, 
  CPlusPlusIcon, 
  CIcon, 
  BootstrapIcon, 
  SQLIcon, 
  FramerMotionIcon 
} from "./TechIcons";

// Simplified Tech Category Component
const TechCategory = ({ title, icon: Icon, technologies, delay, color }) => {
  const [hoveredTech, setHoveredTech] = useState(null);

  return (
    <motion.div
      className="space-y-6"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.6 }}
      viewport={{ once: true }}
    >
      {/* Category Header */}
      <div className="flex items-center gap-3">
        <div className={`p-3 rounded-xl bg-gradient-to-r ${color} shadow-lg`}>
          <Icon className="w-6 h-6 text-white" />
        </div>
        <h3 className="text-xl font-bold">{title}</h3>
      </div>

      {/* Technologies Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {technologies.map((tech, index) => (
          <motion.div
            key={tech.name}
            className="group relative"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: delay + index * 0.05, duration: 0.4 }}
            viewport={{ once: true }}
            onMouseEnter={() => setHoveredTech(tech.name)}
            onMouseLeave={() => setHoveredTech(null)}
          >
            <div className="glass-card p-4 rounded-xl text-center hover:shadow-lg transition-all duration-300">
              <div className="flex justify-center mb-3">
                <tech.icon 
                  className={`w-8 h-8 ${tech.color} transition-transform duration-300`}
                />
              </div>
              <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                {tech.name}
              </p>
              
              {/* Skill Level */}
              <div className="mt-2">
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1">
                  <motion.div
                    className={`h-1 rounded-full bg-gradient-to-r ${tech.gradient || 'from-blue-500 to-purple-500'}`}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${tech.level}%` }}
                    transition={{ delay: delay + index * 0.05 + 0.3, duration: 0.8 }}
                    viewport={{ once: true }}
                  />
                </div>
                <span className="text-xs text-gray-500 dark:text-gray-400 mt-1 block">
                  {tech.level}%
                </span>
              </div>

              {/* Hover Tooltip */}
              {hoveredTech === tech.name && (
                <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-black text-white px-3 py-1 rounded-lg text-xs whitespace-nowrap z-10">
                  {tech.experience}
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-black" />
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

// Main Tech Component
const Tech = ({ isDarkMode }) => {
  const ref = useRef();
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  const techCategories = [
    {
      title: "Frontend",
      icon: Globe,
      color: "from-blue-500 to-cyan-500",
      technologies: [
        { name: "React", icon: ReactIcon, color: "text-blue-400", level: 90, experience: "2+ years", gradient: "from-blue-400 to-blue-600" },
        { name: "Next.js", icon: SiNextdotjs, color: "text-gray-800 dark:text-gray-200", level: 85, experience: "1.5+ years", gradient: "from-gray-600 to-gray-800" },
        { name: "TypeScript", icon: SiTypescript, color: "text-blue-600", level: 80, experience: "1+ years", gradient: "from-blue-500 to-blue-700" },
        { name: "JavaScript", icon: JavaScriptIcon, color: "text-yellow-400", level: 95, experience: "2+ years", gradient: "from-yellow-400 to-yellow-600" },
        { name: "HTML", icon: HTMLIcon, color: "text-orange-500", level: 95, experience: "2+ years", gradient: "from-orange-400 to-orange-600" },
        { name: "CSS", icon: CSSIcon, color: "text-blue-500", level: 90, experience: "2+ years", gradient: "from-blue-400 to-blue-600" },
        { name: "Tailwind CSS", icon: TailwindIcon, color: "text-cyan-400", level: 90, experience: "2+ years", gradient: "from-cyan-400 to-cyan-600" },
        { name: "Bootstrap", icon: BootstrapIcon, color: "text-purple-500", level: 80, experience: "1+ years", gradient: "from-purple-400 to-purple-600" },
        { name: "Framer Motion", icon: FramerMotionIcon, color: "text-pink-500", level: 85, experience: "1+ years", gradient: "from-pink-400 to-pink-600" },
      ]
    },
    {
      title: "Backend",
      icon: Database,
      color: "from-green-500 to-emerald-500",
      technologies: [
        { name: "Node.js", icon: NodeIcon, color: "text-green-400", level: 85, experience: "2+ years", gradient: "from-green-400 to-green-600" },
        { name: "Express.js", icon: ExpressIcon, color: "text-gray-700 dark:text-gray-300", level: 85, experience: "2+ years", gradient: "from-gray-500 to-gray-700" },
        { name: "MongoDB", icon: MongoIcon, color: "text-green-600", level: 80, experience: "1.5+ years", gradient: "from-green-500 to-green-700" },
        { name: "SQL", icon: SQLIcon, color: "text-blue-600", level: 75, experience: "1+ years", gradient: "from-blue-500 to-blue-700" },
      ]
    },
    {
      title: "Programming Languages",
      icon: Code,
      color: "from-purple-500 to-pink-500",
      technologies: [
        { name: "JavaScript", icon: JavaScriptIcon, color: "text-yellow-400", level: 95, experience: "2+ years", gradient: "from-yellow-400 to-yellow-600" },
        { name: "Python", icon: PythonIcon, color: "text-blue-500", level: 85, experience: "1.5+ years", gradient: "from-blue-400 to-blue-600" },
        { name: "C++", icon: CPlusPlusIcon, color: "text-blue-600", level: 80, experience: "1+ years", gradient: "from-blue-500 to-blue-700" },
        { name: "C", icon: CIcon, color: "text-blue-700", level: 75, experience: "1+ years", gradient: "from-blue-600 to-blue-800" },
      ]
    },
    {
      title: "Tools & Others",
      icon: Settings,
      color: "from-orange-500 to-red-500",
      technologies: [
        { name: "Git", icon: GitIcon, color: "text-orange-500", level: 85, experience: "2+ years", gradient: "from-orange-400 to-orange-600" },
        { name: "GitHub", icon: GitHubIcon, color: "text-gray-700 dark:text-gray-300", level: 85, experience: "2+ years", gradient: "from-gray-500 to-gray-700" },
        { name: "VS Code", icon: VSCodeIcon, color: "text-blue-500", level: 90, experience: "2+ years", gradient: "from-blue-400 to-blue-600" },
        { name: "Vite", icon: SiVite, color: "text-purple-500", level: 80, experience: "1+ years", gradient: "from-purple-400 to-purple-600" },
      ]
    }
  ];

  const stats = [
    { number: "15+", label: "Technologies", icon: Code },
    { number: "50+", label: "Projects Built", icon: Zap },
    { number: "2+", label: "Years Learning", icon: Star },
    { number: "100%", label: "Passion", icon: Award },
  ];

  return (
    <section 
      id="technologies" 
      className="section relative"
      ref={ref}
    >
      {/* Simplified Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 right-1/3 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Technologies <span className="gradient-text">&</span> Skills
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            The tools and technologies I use to bring ideas to life
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="glass-card p-6 rounded-xl text-center hover:shadow-lg transition-all duration-300"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
            >
              <stat.icon className="w-8 h-8 mx-auto mb-3 text-blue-500" />
              <div className="text-2xl lg:text-3xl font-bold gradient-text mb-1">
                {stat.number}
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Technology Categories */}
        <div className="space-y-16">
          {techCategories.map((category, index) => (
            <TechCategory
              key={category.title}
              title={category.title}
              icon={category.icon}
              technologies={category.technologies}
              delay={index * 0.1}
              color={category.color}
            />
          ))}
        </div>

        {/* Learning Note */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <div className="glass-card inline-flex items-center gap-3 px-6 py-4 rounded-xl">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Always learning and exploring new technologies
            </span>
            <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Tech;
