"use client";

import { withHover } from "../utils/withEffects";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { PARTNER_LOGOS, ANCHOR_LINKS, ANIMATION_DELAYS } from "@/constants";
import * as React from 'react';

const EnhancedSection = motion.section;

function TypingEffect({ text = 'Typing Effect', delay = 0 }: { text: string; delay?: number }) {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });
  
  return (
    <div
      ref={ref}
      className="block"
    >
      {text.split('').map((letter, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ 
            duration: 0.1, 
            delay: delay + (index * 0.05)
          }}
        >
          {letter}
        </motion.span>
      ))}
    </div>
  );
}

export default function HeroSection() {
  const AnimatedButton = withHover(motion.button);

  return (
    <>
      <EnhancedSection
        className="relative z-10 w-full max-w-none mx-0 
          px-0 pt-0 pb-0 
          sm:pt-0 sm:pb-0 
          md:pt-0 md:pb-0 
          lg:pt-0 lg:pb-0
          min-h-screen"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        aria-label="Hero section"
      >
        <div className="absolute inset-0 z-0 pointer-events-none" aria-hidden="true">
          <div className="h-full w-full opacity-100">
            <div className="relative h-full w-full opacity-100">
              <div className="absolute inset-0 opacity-100">
                <div
                  className="w-full h-full"
                  style={{
                    backdropFilter: 'blur(58px)',
                    backgroundColor: 'transparent',
                    backgroundImage: 'radial-gradient(rgba(232, 120, 17, 0.2) 1px, transparent 1px)',
                    backgroundSize: '9px 9px'
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        <div
          className="relative z-10 text-center max-w-2xl sm:max-w-4xl w-full mx-auto flex flex-col items-center justify-center min-h-screen"
        >
          <motion.div
            className="inline-flex items-center px-4 py-1.5 mb-6 rounded-full bg-[#181818] border border-[#212121] text-xs sm:text-sm text-[#AFAFAF] shadow-md"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: ANIMATION_DELAYS.HERO_BADGE }}
            role="status"
            aria-live="polite"
          >
            <div className="relative flex items-center justify-center w-4 h-4 mr-2">
              <div className="absolute w-4 h-4 bg-green-500 rounded-full animate-ping opacity-30" />
              <div className="relative w-2 h-2 bg-green-500 rounded-full" />
            </div>
            <span>Available now, only 3 spots left</span>
          </motion.div>

          <div className="text-[2rem] xs:text-[2.3rem] sm:text-5xl md:text-6xl lg:text-9xl xl:text-7xl 
            font-medium leading-[1.05] font-satoshi 
            mt-1 sm:mt-4 md:mt-6">
            <div className="text-[#E87811]">
              <TypingEffect text="Automation Agency" delay={0} />
            </div>
            <div className="text-white mt-1 sm:mt-2">
              <TypingEffect text="Beyond ✦ Limits." delay={1.5} />
            </div>
            <div className="text-[#E87811] mt-1 sm:mt-2">
              <TypingEffect text="Amplified With AI." delay={3.0} />
            </div>
          </div>

          <motion.p
            className="text-sm xs:text-base sm:text-lg text-[#AFAFAF] mt-6 font-manrope px-2 sm:px-6 md:px-12 text-center"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: ANIMATION_DELAYS.HERO_DESCRIPTION }}
          >
            Design services at your fingertips. <br className="sm:hidden" />
            Pause or cancel anytime.
          </motion.p>

          <AnimatedButton
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: ANIMATION_DELAYS.HERO_BUTTON }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a
              href={ANCHOR_LINKS.WHY_US}
              className="inline-flex text-sm xs:text-base sm:text-lg items-center justify-center px-5 sm:px-6 py-3 mt-8 bg-gradient-to-b from-[#212121] to-[#050505] border border-[#212121] rounded-lg text-[#DEDEDE] transition hover:scale-105 shadow-lg"
              aria-label="Learn more about our services"
            >
              Learn More
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="ml-2 w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <line x1="7" y1="7" x2="17" y2="17" />
                <polyline points="17 7 17 17 7 17" />
              </svg>
            </a>
          </AnimatedButton>
        </div>
      </EnhancedSection>

      <section className="relative z-20 w-full bg-black/5 pt-10 pb-6 sm:py-16" aria-label="Trusted by companies">
        <div className="font-inter text-[12px] leading-normal tracking-normal max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-sm text-gray-400 mb-6 sm:mb-8">
            Our services are featured on
          </p>
          <div className="relative w-full overflow-hidden">
            <div
              className="mx-auto w-full max-w-full sm:max-w-4xl overflow-hidden"
              style={{
                maskImage:
                  "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
                WebkitMaskImage:
                  "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
              }}
            >
              <div className="flex items-center animate-scroll-x gap-8 sm:gap-12">
                {[...PARTNER_LOGOS, ...PARTNER_LOGOS].map((logo, idx) => (
                  <Image
                    key={idx}
                    src={logo}
                    alt={`Partner logo ${idx + 1}`}
                    width={40}
                    height={40}
                    className="h-8 sm:h-10 w-auto object-contain grayscale opacity-80 hover:opacity-100 transition"
                    loading="lazy"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
} 