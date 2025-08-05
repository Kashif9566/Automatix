"use client";
import { Brain, Zap, Code } from "lucide-react";
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const featureLabels = [
  'Virtual Assistants',
  'AI-Driven Solutions',
  'Serverless Computing',
  'Cloud Integration',
  'Data Insight',
  "Blockchain Solutions",
];

const NotFound = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Utility functions for randomizing - only used on client
  const getRandomRotation = () => Math.random() * 40 - 20;
  const getRandomX = () => Math.random() * 100 - 50;
  const getRandomY = () => Math.random() * 60 + 20;

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const labelVariants = {
    hidden: {
      opacity: 0,
      y: isClient ? -getRandomY() : 0,
      x: isClient ? getRandomX() : 0,
      rotate: isClient ? getRandomRotation() : 0,
      scale: 0.7,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      rotate: 0,
      scale: 1,
      transition: {
        type: 'spring' as const,
        stiffness: 80,
        damping: 10,
      },
    },
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col relative overflow-hidden" data-aos="fade-up">
      <main className="flex flex-col items-center justify-center flex-1 text-center px-6 z-10">
        {/* Heading */}
        <h2 className="text-[24px] leading-[1.3] font-semibold text-white/70 mb-2 pt-20 mt-20">
          Page not found
        </h2>
        <h1 className="text-[206px] leading-[0.8] font-bold text-white/50 mb-4 pt-10" >
          404
        </h1>
        <p className="text-[18px] leading-[1.6] text-white/70 mb-8 max-w-md">
          We can't find the page you're looking for.
        </p>

        <motion.div
          className="flex flex-wrap justify-center gap-4 mt-12 px-6 max-w-10xl"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {featureLabels.map((label, index) => (
            <motion.div
              key={index}
              variants={labelVariants}
              className="flex items-center gap-2 px-4 py-2 rounded-[30px]"
              style={{
                background:
                  'linear-gradient(180deg, rgb(33,33,33) 0%, rgb(17,17,17) 100%)',
                boxShadow: '0px 4px 33px rgba(0,0,0,0.1)',
              }}
            >
              <div
                className="w-6 h-6 rounded-full flex items-center justify-center"
                style={{
                  background:
                    'linear-gradient(135deg, rgb(61,61,61) 0%, rgb(17,17,17) 100%)',
                }}
              >
                <div
                  className="w-4 h-4 rounded-full"
                  style={{
                    background:
                      'radial-gradient(68% 69% at 18% 15%, rgb(33,33,33) 47%, rgb(17,17,17) 100%)',
                  }}
                >
                  <img
                    src="https://framerusercontent.com/images/WAStXM67xiG29TOK2TCCxlKOmM.svg"
                    alt=""
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
              <p className="text-lg text-gray-300 font-medium whitespace-nowrap">
                {label}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Back Button */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-orange-500 text-black font-semibold hover:bg-orange-600 transition mt-4 z-20"
        >
          Back to Home
          <ArrowUpRight size={20} />
        </Link>
      </main>
    </div>
  );
};

export default NotFound; 