import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Sparkles,
  ExternalLink,
  Instagram,
  Github,
  Linkedin
} from "lucide-react";
import { CONTACT, SOCIAL_LINKS, CONTACT_ACTIONS, RESPONSE_TIMES } from "../constants";

// Contact Info Card Component
const ContactInfoCard = ({ icon: Icon, title, value, action, delay }) => {
  return (
    <motion.div
      className="glass-card p-6 rounded-2xl text-center group hover:scale-105 transition-all duration-300 cursor-pointer"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      onClick={action}
    >
      <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
        <Icon className="w-8 h-8 text-white" />
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 dark:text-gray-400 group-hover:text-blue-500 transition-colors duration-300">
        {value}
      </p>
    </motion.div>
  );
};

// Quick Actions Component
const QuickActions = () => {
  // Map icons to actions from constants
  const iconMap = {
    "Instagram": Instagram,
    "GitHub": Github,
    "LinkedIn": Linkedin
  };

  const socialMap = {
    "Instagram": SOCIAL_LINKS.instagram,
    "GitHub": SOCIAL_LINKS.github, 
    "LinkedIn": SOCIAL_LINKS.linkedin
  };

  const actions = CONTACT_ACTIONS.map(action => ({
    ...action,
    icon: iconMap[action.title],
    action: () => window.open(socialMap[action.title], "_blank")
  }));

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
      {actions.map((action, index) => (
        <motion.div
          key={index}
          className="glass-card p-6 rounded-xl text-center cursor-pointer group hover:scale-105 transition-all duration-300"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
          onClick={action.action}
        >
          <div className={`w-12 h-12 bg-gradient-to-r ${action.color} rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-105 transition-transform duration-300`}>
            <action.icon className="w-6 h-6 text-white" />
          </div>
          <h4 className="font-semibold mb-1">{action.title}</h4>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {action.description}
          </p>
        </motion.div>
      ))}
    </div>
  );
};

// Main Contact Component
const Contact = ({ isDarkMode }) => {
  const ref = useRef();
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: CONTACT.email,
      action: () => window.open(`mailto:${CONTACT.email}`, "_blank")
    },
    {
      icon: Phone,
      title: "Phone",
      value: CONTACT.phoneNo,
      action: () => window.open(`tel:${CONTACT.phoneNo}`, "_blank")
    },
    {
      icon: MapPin,
      title: "Location",
      value: CONTACT.address,
      action: () => window.open("https://maps.google.com/?q=Kota,Rajasthan,India", "_blank")
    }
  ];

  return (
    <section 
      id="contact" 
      className="section relative overflow-hidden"
      ref={ref}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '-3s' }} />
      </div>

      <div className="container-custom relative">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="text-4xl lg:text-5xl font-bold mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Let's <span className="gradient-text">Connect</span>
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Ready to bring your ideas to life? Let's discuss your next project
          </motion.p>
          
          {/* Decorative Elements */}
          <div className="flex justify-center mt-6">
            <motion.div
              className="flex items-center gap-2"
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.6, duration: 0.4 }}
            >
              <Sparkles className="w-5 h-5 text-yellow-400 animate-pulse" />
              <span className="text-sm text-gray-500 dark:text-gray-400">
                Available for new opportunities
              </span>
              <Sparkles className="w-5 h-5 text-yellow-400 animate-pulse" />
            </motion.div>
          </div>
        </motion.div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {contactInfo.map((info, index) => (
            <ContactInfoCard
              key={index}
              icon={info.icon}
              title={info.title}
              value={info.value}
              action={info.action}
              delay={index * 0.1}
            />
          ))}
        </div>

        {/* Main Content - Centered Layout */}
        <div className="max-w-4xl mx-auto">
          {/* Additional Information */}
          <div className="space-y-8">
            {/* Availability Status */}
            <motion.div
              className="glass-card p-8 rounded-2xl text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse" />
                <h3 className="text-2xl font-semibold">Available for Work</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg max-w-3xl mx-auto">
                I'm currently available for freelance projects and full-time opportunities. 
                Whether you need a complete web application or want to enhance your existing platform, 
                I'd love to help bring your vision to life.
              </p>
            </motion.div>

            {/* Response Time */}
            <motion.div
              className="glass-card p-8 rounded-2xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold mb-6 text-center">Quick Response Times</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {RESPONSE_TIMES.map((response, index) => (
                  <div key={index} className={`text-center p-4 rounded-xl bg-${response.color}-500/10 border border-${response.color}-500/20`}>
                    <div className={`text-2xl font-bold text-${response.color}-500 mb-2`}>{response.time}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">{response.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Quick Actions */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold mb-6 text-center">Let's Connect</h3>
              <QuickActions />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
