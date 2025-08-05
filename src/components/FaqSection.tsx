"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { BlurIn } from "./BlurIn";

const faqs = [
  {
    question: "What makes Automatix different from other agencies?",
    answer:
      "Automatix stands out by integrating advanced AI technologies with human creativity, streamlining workflows, and delivering faster, data-driven results at scale.",
  },
  {
    question: "How does AI enhance the services provided by Automatix?",
    answer:
      "AI powers content generation, automates repetitive tasks, and provides deep analytics to guide decisions—enabling faster turnaround and smarter strategy execution.",
  },
  {
    question: "How does Automatix ensure the quality of its AI solutions?",
    answer:
      "We combine AI efficiency with expert reviews, continuous training, and iterative testing to maintain high standards and ensure consistent performance.",
  },
  {
    question: "Does Automatix offer customized solutions?",
    answer:
      "Yes, we tailor every solution to your brand&apos;s needs, whether it&apos;s in marketing, automation, or design—ensuring alignment with your goals and identity.",
  },
];

export default function FaqSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleIndex = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section
      className="w-full bg-black text-white py-20 px-6 md:px-10 lg:px-20"
      data-aos="fade-up"
      data-aos-delay="200"
      data-aos-duration="1200"
    >
      <div className="text-center mb-16">
        <span className="inline-block px-4 py-1 mb-5 rounded-full bg-white/10 text-sm font-medium tracking-wide text-white">
          Need to Know
        </span>
        <BlurIn>
          Frequently Asked Questions
        </BlurIn>
      </div>

      <div className="space-y-6 max-w-3xl mx-auto">
        {faqs.map((item, index) => (
          <div
            key={index}
            className="border-b border-gray-700 pb-4 cursor-pointer group"
            onClick={() => toggleIndex(index)}
          >
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-medium font-hero text-gray-400 group-hover:text-white transition">
                {item.question}
              </h3>
              {activeIndex === index ? (
                <ChevronUp className="w-5 h-5 text-gray-400 transition-transform duration-300" />
              ) : (
                <ChevronDown className="w-5 h-5 text-gray-400 transition-transform duration-300" />
              )}
            </div>
            {activeIndex === index && (
              <p className="mt-3 text-lg text-gray-400 font-hero font-medium transition-all duration-300 ease-in-out">
                {item.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
} 