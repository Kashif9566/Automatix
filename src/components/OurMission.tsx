"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { BlurIn } from "./BlurIn";

const OurMission = () => {
  return (
    <section
      className="bg-black text-white py-16 px-6 sm:px-6 md:px-16 lg:px-32"
      data-aos="fade-up"
      data-aos-delay="200"
      data-aos-duration="1200"
    >
      <div className="font-hero max-w-5xl mx-auto text-center space-y-10">
        {/* Pill Label */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          id="mission"
          className="inline-block px-4 py-1 mb-2 sm:mb-5 rounded-full bg-white/10 text-xs sm:text-sm font-medium tracking-wide text-white"
        >
          Our Mission
        </motion.div>

        {/* Heading */}
        <BlurIn>
          <div className="text-3xl sm:text-4xl md:text-6xl font-medium leading-snug sm:leading-tight font-hero text-white">
            We Drive <span className="text-orange-500">Businesses</span> <br />
            To The <span className="text-orange-600">Forefront</span> Of The Industries <br />
            Through Comprehensive <br />
            <span className="text-orange-500">AI Automation.</span>
          </div>
        </BlurIn>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-sm sm:text-lg text-gray-400 max-w-3xl mx-auto font-hero"
        >
          First impressions matter. That&apos;s why our mission is to create clean,
          enduring designs that elevate. First impressions matter. That&apos;s why our mission.
        </motion.p>

        {/* Book a Call Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex justify-center"
        >
          <button className="inline-flex items-center gap-2 bg-black text-orange-400 px-6 py-3 rounded-full font-medium text-sm sm:text-base md:text-lg transition hover:bg-white hover:text-black">
            Book a Call
            <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default OurMission; 