"use client";

import { ArrowRight, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const PricingSection = () => {
  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6
      }
    }
  };

  const staggerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <section
      className="bg-black text-white py-20 px-6 sm:px-6 md:px-16 lg:px-32"
      id="pricing"
    >
      <div className="text-center mb-16">
        <div className="inline-block px-4 py-1 mb-4 rounded-full bg-white/10 text-sm font-medium tracking-wide text-white">
          Simple Pricing
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium font-hero text-white">
          Transparent Pricing Plans
        </h2>
        <p className="text-gray-400 text-base sm:text-lg mt-5">
          We offer adaptable pricing solutions for businesses of any sizes.
        </p>
      </div>

      <motion.div 
        className="flex flex-col lg:flex-row gap-1 lg:gap-10 justify-center items-stretch max-w-6xl mx-auto lg:mx-8"
        variants={staggerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div
          className="border border-[#2d2d2d] rounded-2xl p-6 sm:p-8 lg:my-10 w-full lg:w-1/3 shadow-md flex flex-col justify-between transition duration-300"
          style={{
            background: 'radial-gradient(75% 32.81392308321177% at -5.7% -5%, #212121 0%, rgb(17, 17, 17) 100%)'
          }}
          variants={cardVariants}
        >
          <div className="flex flex-col justify-between h-full">
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold mb-2">Standard</h3>
              <p className="text-gray-400 mb-4 text-base sm:text-lg">Ideal for small teams</p>
              <div className="text-3xl sm:text-4xl font-bold text-[#ff6b00] mb-6">
                $900
                <span className="text-sm sm:text-lg font-medium text-gray-500">/month</span>
              </div>
              <button className="w-full text-base sm:text-lg inline-flex items-center justify-center gap-2 text-white bg-[#ff6b00] px-5 py-3 hover:bg-[#e95f00] transition" style={{ borderRadius: '7px' }}>
                Get Started <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="mt-6">
              <h4 className="text-base sm:text-lg mb-3 text-gray-400">What&apos;s Included:</h4>
              <ul className="space-y-3 text-gray-400 text-sm sm:text-base">
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-4 h-4" /> Up to 10 users
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-4 h-4" /> Basic support
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-4 h-4" /> Standard features
                </li>
              </ul>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="rounded-3xl p-6 sm:p-8 lg:my-10 w-full lg:w-2/3 shadow-2xl flex flex-col justify-between transition duration-300"
          style={{
            background: 'radial-gradient(75% 32.81392308321177% at -5.7% -5%, #212121 0%, rgb(17, 17, 17) 100%)'
          }}
          variants={cardVariants}
        >
          <div className="flex flex-col justify-between h-full">
            <div>
              <div className="flex flex-wrap justify-between items-center mb-3 gap-2">
                <h3 className="text-xl sm:text-2xl font-semibold">Pro</h3>
                <span className="inline-block px-4 py-1 rounded-full bg-white/10 text-sm font-medium tracking-wide">
                  Popular
                </span>
              </div>
              <p className="text-gray-400 text-base sm:text-lg mb-4">
                Designed for expanding teams and advanced needs.
              </p>
              <div className="text-4xl sm:text-5xl font-bold text-[#ff6b00] mb-6">
                $1600
                <span className="text-sm sm:text-lg font-medium text-gray-500">/month</span>
              </div>
              <button className="w-full text-base sm:text-lg inline-flex items-center justify-center gap-2 text-white bg-[#ff6b00] px-5 py-3 hover:bg-[#e95f00] transition" style={{ borderRadius: '7px' }}>
                Get Started <ArrowRight className="w-5 h-5" />
              </button>
            </div>

            <div className="mt-8">
              <h4 className="text-base sm:text-lg mb-3 text-gray-400">What&apos;s Included:</h4>
              <div className="flex flex-wrap gap-x-6 gap-y-4 text-gray-400 text-sm sm:text-base">
                <div className="flex items-center gap-2 w-[48%] min-w-[150px]">
                  <CheckCircle className="w-4 h-4" /> Up to 50 users
                </div>
                <div className="flex items-center gap-2 w-[48%] min-w-[150px]">
                  <CheckCircle className="w-4 h-4" /> Advanced Analytics
                </div>
                <div className="flex items-center gap-2 w-[48%] min-w-[150px]">
                  <CheckCircle className="w-4 h-4" /> Priority support
                </div>
                <div className="flex items-center gap-2 w-[48%] min-w-[150px]">
                  <CheckCircle className="w-4 h-4" /> Custom workflows
                </div>
                <div className="flex items-center gap-2 w-[48%] min-w-[150px]">
                  <CheckCircle className="w-4 h-4" /> Enhanced Security
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default PricingSection; 