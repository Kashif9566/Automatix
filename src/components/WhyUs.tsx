"use client";

import { motion } from "framer-motion";

const textVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0
  }),
};

export default function WhyUs() {
  const cards = [
    {
      title: "Innovative Approach",
      desc: "Look for works that reflect a unique character and differentiate in a crowded marketplace.",
      content: (
        <div className="w-full max-w-[200px] sm:max-w-[250px] h-32 mb-5 relative overflow-hidden rounded-lg">
          <div 
            className="absolute inset-0 opacity-80"
            style={{
              backgroundImage: `
                linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)
              `,
              backgroundSize: '20px 20px'
            }}
          ></div>
          
          <div 
            className="absolute inset-0"
            style={{
              background: 'radial-gradient(circle at center, transparent 40%, rgba(0,0,0,0.9) 100%)'
            }}
          ></div>
          
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center animate-pulse">
              <div className="absolute inset-2 rounded-full bg-black animate-spin" style={{animationDuration: '3s'}}>
                <div className="absolute top-0 left-1/2 w-1 h-1 bg-orange-400 rounded-full transform -translate-x-1/2"></div>
              </div>
              <div className="relative z-10 text-white text-lg font-bold">AI</div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Seamless Experience",
      desc: "A seamless user experience across all devices, ensuring every interaction connects with the user.",
      content: (
        <div className="w-full max-w-[200px] sm:max-w-[250px] h-32 mb-5 relative overflow-hidden rounded-lg">
          <div 
            className="absolute inset-0 opacity-80"
            style={{
              backgroundImage: `
                linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)
              `,
              backgroundSize: '20px 20px'
            }}
          ></div>
          
          <div 
            className="absolute inset-0"
            style={{
              background: 'radial-gradient(circle at center, transparent 40%, rgba(0,0,0,0.9) 100%)'
            }}
          ></div>
          
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl flex items-center justify-center animate-bounce">
              <div className="absolute inset-1 bg-black rounded-lg animate-ping"></div>
              <div className="relative z-10 text-white text-lg font-bold">UX</div>
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-green-400 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Ongoing Partnership",
      desc: "Find a new partner easily, not just providers, who offer ongoing support even after the project ends.",
      content: (
        <div className="w-full max-w-[200px] sm:max-w-[250px] h-32 mb-5 relative overflow-hidden rounded-lg">
          <div 
            className="absolute inset-0 opacity-80"
            style={{
              backgroundImage: `
                linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)
              `,
              backgroundSize: '20px 20px'
            }}
          ></div>
          
          <div 
            className="absolute inset-0"
            style={{
              background: 'radial-gradient(circle at center, transparent 40%, rgba(0,0,0,0.9) 100%)'
            }}
          ></div>
          
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center">
              <div className="absolute inset-2 border-2 border-white rounded-full animate-spin" style={{animationDuration: '4s'}}></div>
              <div className="absolute inset-4 border-2 border-white rounded-full animate-spin" style={{animationDuration: '4s', animationDirection: 'reverse'}}></div>
              <div className="relative z-10 text-white text-lg font-bold">∞</div>
              <div className="absolute top-0 left-1/2 w-2 h-2 bg-yellow-400 rounded-full transform -translate-x-1/2 animate-ping"></div>
            </div>
          </div>
        </div>
      )
    },
  ];

  return (
    <section
      id="whyus"
      className="
        w-full 
        bg-black 
        text-white 
        pt-12
        sm:pt-16
        pb-10 
        sm:pb-20 
        px-4 
        sm:px-6 
        md:px-16 
        lg:px-24
      "
      style={{
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        width: "100%",
      }}
      data-aos="fade-up"
      data-aos-delay="200"
      data-aos-duration="1200"
    >
      <motion.div
        className="text-center max-w-4xl mx-auto mb-8 sm:mb-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={textVariants}
        custom={0}
      >
        <div className="inline-block px-4 py-1 mb-4 sm:mb-5 rounded-full bg-white/10 text-xs sm:text-sm font-medium tracking-wide text-white">
          Why Us
        </div>

        <h2 className="text-2xl sm:text-5xl font-satoshi font-medium text-white mb-4 leading-snug sm:leading-tight">
          Experience the Benefits <br className="hidden sm:block" />
          of Our Expertise
        </h2>

        <p className="text-sm sm:text-xl font-manrope text-white/60 max-w-2xl mx-auto">
          That drives impactful gain powerful results
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-10 mb-14 sm:mb-20 w-full">
        {cards.map(({ title, desc, content }, index) => (
          <motion.div
            key={index}
            className="bg-[#161618] border border-white/10 px-5 py-8 sm:px-8 rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col items-center text-center hover:-translate-y-1 hover:scale-[1.015]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={textVariants}
            custom={index + 1}
          >
            {content ? (
              content
            ) : null}
            <h3 className="text-lg sm:text-2xl font-satoshi font-bold text-white mb-3">
              {title}
            </h3>
            <p className="text-sm sm:text-lg text-white/70 font-manrope leading-relaxed">
              {desc}
            </p>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={textVariants}
        custom={4}
      >
        <a
          href="#pricing"
          className="inline-flex items-center gap-2 text-white text-sm sm:text-lg font-semibold px-6 py-3 rounded-xl border border-orange-400 bg-gradient-to-br from-orange-400 to-orange-600 hover:scale-105 transition-transform duration-300"
        >
          See Pricing
          <svg
            className="w-4 h-4 sm:w-5 sm:h-5 stroke-white"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <line x1="7" y1="7" x2="17" y2="17" />
            <polyline points="17 7 17 17 7 17" />
          </svg>
        </a>
      </motion.div>
    </section>
  );
} 