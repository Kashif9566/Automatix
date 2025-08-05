"use client";

import { useState } from "react";
import { FaArrowDown } from "react-icons/fa";
import { motion } from "framer-motion";
import clsx from "clsx";

const workItems = [
  {
    title: "Grapho AI",
    description:
      "That&apos;s Why We Leverage AI to Create Impactful, Lasting Experiences that Engage, and Transform Every Interaction.",
    image: "/work1.jpeg",
  },
  {
    title: "VectraOps",
    description:
      "That&apos;s Why We Leverage AI to Create Impactful, Lasting Experiences that Engage, and Transform Every Interaction.",
    image: "/work2.jpeg",
  },
  {
    title: "Signum",
    description:
      "That&apos;s Why We Leverage AI to Create Impactful, Lasting Experiences that Engage, and Transform Every Interaction.",
    image: "/work3.jpeg",
  },
];

const stats = [
  { label: "Active Users", value: "150k+" },
  { label: "Rating", value: "4.9/5" },
  { label: "Positive Reviews", value: "99k+" },
  { label: "Users Satisfied", value: "85k+" },
];

export default function WorksSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [expanded, setExpanded] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpanded(prev => (prev === index ? null : index));
    setActiveIndex(index);
  };

  return (
    <section
      className="bg-black text-white py-20 px-4 sm:px-6 md:px-16 lg:px-32"
      data-aos="fade-up"
      data-aos-delay="200"
      data-aos-duration="1200"
    >
      <div className="flex justify-center pb-12">
        <FaArrowDown className="text-6xl sm:text-7xl text-orange-500 font-medium animate-bounce" />
      </div>

      <div className="text-center mb-16" id="works">
        <div className="inline-block px-4 py-1 mb-5 rounded-full bg-white/10 text-sm font-medium tracking-wide">
          Work That Makes Us Proud
        </div>
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-3xl sm:text-4xl md:text-6xl font-medium leading-tight font-hero text-white pb-5"
        >
          Recent Works, Notable Impact
        </motion.h2>
      </div>

      <div className="flex flex-col gap-12 lg:flex-row lg:gap-12 items-start">
        <div className="w-full lg:w-1/2 order-1 lg:order-2" data-aos="fade-up" data-aos-delay="200">
          <motion.img
            key={activeIndex}
            src={workItems[activeIndex].image}
            alt={workItems[activeIndex].title}
            className="w-full rounded-xl shadow-lg object-cover"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          />
        </div>

        <div className="flex-1 order-2 lg:order-1 space-y-8">
          {workItems.map((item, index) => (
            <div
              key={index}
              onClick={() => toggleExpand(index)}
              className={clsx(
                "cursor-pointer border-l-4 pl-4 transition-all",
                activeIndex === index
                  ? "border-gray-400 hover:border-orange-500 text-white"
                  : "border-transparent text-white hover:text-white"
              )}
            >
              <h3 className="text-2xl sm:text-3xl font-hero font-medium mb-1">{item.title}</h3>
              <p className="text-base sm:text-lg leading-relaxed text-gray-400 pt-3 pb-5">
                {expanded === index
                  ? item.description
                  : item.description.split(".")[0] + "."}
              </p>
              <div className="w-full h-px bg-gray-800 mx-auto mb-2" />
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-wrap justify-center mt-16 border-y border-gray-700 py-10">
        {stats.map((stat, i) => (
          <div
            key={i}
            className={clsx(
              "w-1/2 md:w-1/4 text-center px-4 py-4",
              i !== stats.length - 1 && "border-r border-gray-700"
            )}
          >
            <div className="text-3xl sm:text-4xl font-extrabold text-white">
              {stat.value}
            </div>
            <div className="text-base sm:text-lg mt-2 text-white font-medium">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
} 