"use client";

import {
  Brain,
  Cloud,
  Server,
  BarChart3,
  ShieldCheck,
  Clock3,
  Radar,
  DatabaseZap,
} from "lucide-react";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const miniServices = [
  { title: "AI-Driven Solutions", icon: <Brain size={22} /> },
  { title: "Serverless Computing", icon: <Server size={22} /> },
  { title: "Cloud Integration", icon: <Cloud size={22} /> },
  { title: "Data Insight", icon: <DatabaseZap size={22} /> },
  { title: "Analytics", icon: <BarChart3 size={22} /> },
  { title: "API Security", icon: <ShieldCheck size={22} /> },
  { title: "Real-Time", icon: <Clock3 size={22} /> },
  { title: "Ad Targeting", icon: <Radar size={22} /> },
];

const textVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0
  },
};

const imageVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0
  },
};

const ServicesSection = () => {
  const [selected, setSelected] = useState(0);
  const [typingText, setTypingText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [activeButton, setActiveButton] = useState(0);
  
  const functionNames = [
    'response.msg(){}',
    'process.data(){}',
    'analyze.input(){}',
    'generate.output(){}',
    'validate.query(){}'
  ];

  // Sequential button animation
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveButton((prev) => (prev + 1) % 3);
    }, 4000); // Change button every 4 seconds (2 rounds)

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const currentFunction = functionNames[currentIndex];
    
    if (!isDeleting) {
      if (typingText.length < currentFunction.length) {
        const timeout = setTimeout(() => {
          setTypingText(currentFunction.slice(0, typingText.length + 1));
        }, 100);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setIsDeleting(true);
        }, 2000);
        return () => clearTimeout(timeout);
      }
    } else {
      if (typingText.length > 0) {
        const timeout = setTimeout(() => {
          setTypingText(typingText.slice(0, -1));
        }, 50);
        return () => clearTimeout(timeout);
      } else {
        setIsDeleting(false);
        setCurrentIndex((prev) => (prev + 1) % functionNames.length);
      }
    }
  }, [typingText, currentIndex, isDeleting, functionNames]);

  return (
    <section
      className="w-full py-12 sm:py-20 bg-black text-white px-6 sm:px-6 md:px-16 relative overflow-hidden"
      id="services"
      data-aos="fade-up"
      data-aos-delay="200"
      data-aos-duration="1200"
    >
      <motion.div
        className="text-center mb-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={textVariants}
      >
        <span className="inline-block px-4 py-1 mb-5 rounded-full bg-white/10 text-sm font-medium tracking-wide">
          Our Services
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl mt-4 font-hero font-medium">
          Expertise That Drives Quality
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl mx-auto font-hero pt-5">
          With deep expertise, we deliver quality solutions that drive <br className="hidden sm:block" />
          success and exceed industry standards consistently.
        </p>
      </motion.div>

      <div className="absolute inset-0 opacity-5 z-0 pointer-events-none">
        <img
          src="https://framerusercontent.com/images/EaQHg2lXGfJYdlkVzsdOTUA4AIk.png"
          alt="grid background"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10 mb-8 relative z-10 mt-0">
        {[1, 2, 3].map((_, idx) => (
          <motion.div
            key={idx}
            className="relative group"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={textVariants}
            custom={idx + 1}
          >
            {/* Main Card Container */}
            <div 
              className="w-full h-full rounded-[25px] relative overflow-hidden"
              style={{
                background: 'radial-gradient(46% 31% at 50% 0%, rgb(33, 33, 33) 0%, rgb(17, 17, 17) 100%)'
              }}
            >
              {/* Grid Background */}
              <div 
                className="absolute inset-0"
                style={{ 
                  opacity: 0.15,
                  borderBottomRightRadius: '23px'
                }}
              >
                <img
                  src="https://framerusercontent.com/images/kqJNnjGgAUImwuaX1RZZWjFMc.png"
                  alt="card-background"
                  className="w-full h-full object-contain"
                  style={{ objectPosition: 'center' }}
                />
              </div>

              {/* Content Container */}
              <div className="relative z-10 p-6 sm:p-8 h-full flex flex-col">
                {/* Title */}
                <h3 className="text-2xl sm:text-3xl font-semibold text-white mb-6 text-center">
                  {idx === 0 ? "Plan & Organize" : idx === 1 ? "Custom Projects" : "Smart Automation"}
                </h3>
                
                {/* Interactive Widget Container */}
                <div className="h-48 sm:h-56 relative overflow-hidden">
                  <div 
                    className="w-full h-full rounded-[18px] relative overflow-hidden border border-[rgb(38,38,38)]"
                    style={{ backgroundColor: 'rgba(0, 0, 0, 0)' }}
                  >
                    {/* Background Image */}
                    {idx !== 1 && (
                      <div className="absolute inset-0">
                        <img
                          src={idx === 2 ? "https://framerusercontent.com/images/RQWGh7f8Cnb8blhaJXengKND4Bw.png" : "https://framerusercontent.com/images/YX9i3N9waLZ4JydRrYz5jum2W5o.png"}
                          alt=""
                          className="w-full h-full object-cover"
                          style={{ objectPosition: 'center' }}
                        />
                      </div>
                    )}

                    {/* Overlay Content */}
                    <div className="absolute inset-0">
                      {idx === 0 && (
                        <div className="flex items-center justify-center h-full">
                          <div className="relative">
                            {/* Main Icon Container */}
                            <motion.div 
                              className="w-20 h-20 rounded-full relative"
                              style={{
                                background: 'linear-gradient(135deg, rgb(61, 61, 61) 0%, rgb(17, 17, 17) 100%)'
                              }}
                              animate={{
                                scale: [1, 1.05, 1],
                                boxShadow: [
                                  "0 0 0 0 rgba(232, 120, 17, 0.4)",
                                  "0 0 0 10px rgba(232, 120, 17, 0)",
                                  "0 0 0 0 rgba(232, 120, 17, 0)"
                                ]
                              }}
                              transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut"
                              }}
                            >
                              <div 
                                className="absolute inset-1 rounded-full"
                                style={{
                                  background: 'radial-gradient(68.03% 69.39% at 18.33% 15.83%, rgb(33, 33, 33) 47.49%, rgb(17, 17, 17) 100%)'
                                }}
                              >
                                <div className="w-full h-full flex items-center justify-center">
                                  <motion.svg 
                                    className="w-8 h-8 text-white" 
                                    fill="currentColor" 
                                    viewBox="0 0 24 24"
                                    animate={{ rotate: [0, 360] }}
                                    transition={{
                                      duration: 8,
                                      repeat: Infinity,
                                      ease: "linear"
                                    }}
                                  >
                                    <path d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/>
                                  </motion.svg>
                                </div>
                              </div>
                            </motion.div>

                            {/* Floating Icons */}
                            <motion.div 
                              className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-gradient-to-br from-gray-600 to-gray-800 flex items-center justify-center"
                              animate={{
                                y: [0, -8, 0],
                                x: [0, 4, 0],
                                rotate: [0, 15, 0]
                              }}
                              transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: 0.5
                              }}
                            >
                              <motion.svg 
                                className="w-3 h-3 text-white" 
                                fill="currentColor" 
                                viewBox="0 0 24 24"
                                animate={{ scale: [1, 1.2, 1] }}
                                transition={{
                                  duration: 2,
                                  repeat: Infinity,
                                  ease: "easeInOut",
                                  delay: 1
                                }}
                              >
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                              </motion.svg>
                            </motion.div>
                            
                            <motion.div 
                              className="absolute -bottom-1 -left-1 w-6 h-6 rounded-full bg-gradient-to-br from-gray-600 to-gray-800 flex items-center justify-center"
                              animate={{
                                y: [0, 8, 0],
                                x: [0, -4, 0],
                                rotate: [0, -15, 0]
                              }}
                              transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: 1.5
                              }}
                            >
                              <motion.svg 
                                className="w-3 h-3 text-white" 
                                fill="currentColor" 
                                viewBox="0 0 24 24"
                                animate={{ scale: [1, 1.2, 1] }}
                                transition={{
                                  duration: 2,
                                  repeat: Infinity,
                                  ease: "easeInOut",
                                  delay: 0.5
                                }}
                              >
                                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                              </motion.svg>
                            </motion.div>

                            {/* Additional floating elements */}
                            <motion.div 
                              className="absolute top-1/2 right-0 w-4 h-4 rounded-full bg-orange-500/20"
                              animate={{
                                y: [0, -12, 0],
                                opacity: [0.3, 0.8, 0.3]
                              }}
                              transition={{
                                duration: 4,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: 2
                              }}
                            />
                            
                            <motion.div 
                              className="absolute top-1/2 left-0 w-4 h-4 rounded-full bg-blue-500/20"
                              animate={{
                                y: [0, 12, 0],
                                opacity: [0.3, 0.8, 0.3]
                              }}
                              transition={{
                                duration: 4,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: 3
                              }}
                            />
                          </div>
                        </div>
                      )}

                      {idx === 1 && (
                        <div className="flex items-center justify-center h-full bg-black">
                          <div className="w-full h-full font-mono text-xs overflow-hidden">
                            {/* Code Editor Content */}
                            <div className="flex h-full">
                              {/* Line Numbers */}
                              <div className="bg-gray-900 text-gray-500 text-xs px-3 py-2 border-r border-gray-800 select-none">
                                {Array.from({length: 15}, (_, i) => (
                                  <div key={i}>{i + 1}</div>
                                ))}
                              </div>
                              
                              {/* Code Content */}
                              <div className="flex-1 p-2 pt-2 leading-relaxed">
                                <div><span className="text-orange-500">Class</span><span className="text-blue-400"> ChatBot</span><span className="text-gray-300">{'{'}</span></div>
                                <div className="ml-4"><span className="text-blue-400">address</span><span className="text-gray-300"> public owner;</span></div>
                                <div className="ml-4"><span className="text-blue-400">int</span><span className="text-gray-300"> private response;</span></div>
                                <div className="ml-4"><span className="text-orange-500">constructor</span><span className="text-gray-300">() {'{'}</span></div>
                                <div className="ml-8"><span className="text-gray-300">owner = msg.sender;</span></div>
                                <div className="ml-4 text-gray-300">{'}'}</div>
                                <div className="ml-4"><span className="text-orange-500">function</span><span className="text-gray-300"> {typingText}</span><span className="text-orange-500">|</span></div>
                                <div className="text-gray-300">{'}'}</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}

                      {idx === 2 && (
                        <div className="flex items-center justify-center h-full">
                          <div className="flex flex-col items-center space-y-2">
                            {/* Trigger Button */}
                            <motion.button
                              className="relative group w-28 overflow-hidden"
                              initial={{ opacity: 1 }}
                              animate={{ 
                                opacity: activeButton === 0 ? 1 : 0.2,
                                scale: activeButton === 0 ? 1.15 : 0.95
                              }}
                              transition={{ duration: 1 }}
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              <div className="absolute -inset-0.5 rounded-lg overflow-hidden">
                                <div
                                  className="absolute inset-0 rounded-lg"
                                  style={{
                                    background: 'conic-gradient(from 0deg, transparent 0deg, rgb(232, 120, 17) 90deg, transparent 180deg, transparent 360deg)',
                                    animation: activeButton === 0 ? 'rotate 4s linear infinite' : 'none'
                                  }}
                                />
                              </div>
                              <span className="relative inline-flex items-center justify-center gap-2 px-3 py-2 rounded-md text-xs font-medium text-white bg-[#0E0E10] border border-white/10 transition-all overflow-hidden z-10 w-full">
                                <span className="absolute inset-0 z-0 rounded-full bg-[radial-gradient(circle_at_top_left,_rgba(255,115,51,0.2)_0%,_transparent_100%)]" />
                                <span className="absolute inset-0 border border-orange-400 transition-all z-0" />
                                <span className="absolute inset-0 bg-gradient-to-r from-[#1a1a1a] to-[#111] opacity-90 z-0" />
                                <span className="relative z-10 flex items-center gap-2">
                                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                  </svg>
                                  Trigger
                                </span>
                              </span>
                            </motion.button>
                            
                            {/* Connecting Line */}
                            <div className="w-0.5 h-4 bg-gray-700"></div>
                            
                            {/* Prompt Button */}
                            <motion.button
                              className="relative group w-28 overflow-hidden"
                              initial={{ opacity: 1 }}
                              animate={{ 
                                opacity: activeButton === 1 ? 1 : 0.2,
                                scale: activeButton === 1 ? 1.15 : 0.95
                              }}
                              transition={{ duration: 1 }}
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              <div className="absolute -inset-0.5 rounded-lg overflow-hidden">
                                <div
                                  className="absolute inset-0 rounded-lg"
                                  style={{
                                    background: 'conic-gradient(from 0deg, transparent 0deg, rgb(232, 120, 17) 90deg, transparent 180deg, transparent 360deg)',
                                    animation: activeButton === 1 ? 'rotate 4s linear infinite' : 'none'
                                  }}
                                />
                              </div>
                              <span className="relative inline-flex items-center justify-center gap-2 px-3 py-2 rounded-md text-xs font-medium text-white bg-[#0E0E10] border border-white/10 transition-all overflow-hidden z-10 w-full">
                                <span className="absolute inset-0 z-0 rounded-full bg-[radial-gradient(circle_at_top_left,_rgba(255,115,51,0.2)_0%,_transparent_100%)]" />
                                <span className="absolute inset-0 border border-orange-400 transition-all z-0" />
                                <span className="absolute inset-0 bg-gradient-to-r from-[#1a1a1a] to-[#111] opacity-90 z-0" />
                                <span className="relative z-10 flex items-center gap-2">
                                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                  </svg>
                                  Prompt
                                </span>
                              </span>
                            </motion.button>
                            
                            {/* Connecting Line */}
                            <div className="w-0.5 h-4 bg-gray-700"></div>
                            
                            {/* Send Email Button */}
                            <motion.button
                              className="relative group w-28 overflow-hidden"
                              initial={{ opacity: 1 }}
                              animate={{ 
                                opacity: activeButton === 2 ? 1 : 0.2,
                                scale: activeButton === 2 ? 1.15 : 0.95
                              }}
                              transition={{ duration: 1 }}
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              <div className="absolute -inset-0.5 rounded-lg overflow-hidden">
                                <div
                                  className="absolute inset-0 rounded-lg"
                                  style={{
                                    background: 'conic-gradient(from 0deg, transparent 0deg, rgb(232, 120, 17) 90deg, transparent 180deg, transparent 360deg)',
                                    animation: activeButton === 2 ? 'rotate 4s linear infinite' : 'none'
                                  }}
                                />
                              </div>
                              <span className="relative inline-flex items-center justify-center gap-2 px-3 py-2 rounded-md text-xs font-medium text-white bg-[#0E0E10] border border-white/10 transition-all overflow-hidden z-10 w-full">
                                <span className="absolute inset-0 z-0 rounded-full bg-[radial-gradient(circle_at_top_left,_rgba(255,115,51,0.2)_0%,_transparent_100%)]" />
                                <span className="absolute inset-0 border border-orange-400 transition-all z-0" />
                                <span className="absolute inset-0 bg-gradient-to-r from-[#1a1a1a] to-[#111] opacity-90 z-0" />
                                <span className="relative z-10 flex items-center gap-2">
                                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                  </svg>
                                  Send Email
                                </span>
                              </span>
                            </motion.button>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-300 text-base sm:text-lg text-center mt-6">
                  {idx === 0 && "We enhance efficiency by integrating apps and reducing downtime."}
                  {idx === 1 && "We created a versatile chatbot that understands diverse questions."}
                  {idx === 2 && "We analyze operations and suggest AI solutions to boost efficiency."}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 pt-10 relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={textVariants}
        custom={4}
      >
        {miniServices.map((service, idx) => (
          <motion.div
            key={idx}
            className="bg-[#1A1A1A] hover:bg-[#2a2a2a] transition rounded-xl px-4 py-4 sm:px-5 flex items-center gap-4 shadow-md"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="w-11 h-11 min-w-[44px] sm:w-12 sm:h-12 rounded-full bg-black text-orange-500 border border-black flex items-center justify-center">
              {service.icon}
            </div>
            <p className="text-base sm:text-lg text-white font-hero">{service.title}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default ServicesSection; 