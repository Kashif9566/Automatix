"use client";

import { ArrowUpRight } from "lucide-react";
import { TextFade } from "./TextFade";

export default function Footer() {
  return (
    <section
      className="relative w-full bg-black text-white py-16 px-6 sm:px-6 md:px-10 lg:px-20 overflow-hidden"
      data-aos="fade-up"
      data-aos-delay="200"
      data-aos-duration="1200"
    >
      <div className="relative z-10 max-w-6xl mx-auto bg-black rounded-3xl border border-gray-800 px-5 py-12 sm:px-8 sm:py-16 shadow-xl text-center">
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-[radial-gradient(#e87811_1px,transparent_1px)] [background-size:10px_10px] opacity-20" />
        </div>

        <TextFade direction="up" className="mb-6 text-orange-300 text-lg font-medium font-hero tracking-wide">
          Automatix
        </TextFade>

        <TextFade direction="up" staggerChildren={0.2}>
          <h2 className="text-[1.75rem] sm:text-4xl md:text-6xl font-medium font-satoshi mb-4 leading-tight sm:leading-none text-center">
            Let&apos;s Turn Your
            <span className="block pt-0 sm:pt-5">Dream Into Reality</span>
          </h2>
        </TextFade>

        <TextFade direction="up" className="text-lg sm:text-base text-gray-400 leading-relaxed max-w-md sm:max-w-xl mx-auto mb-6 pt-3 px-2 text-center">
          <span className="block sm:hidden">
            We bring your vision to life <br />
            with creativity and precision. <br />
            Let&apos;s make it happen.
          </span>

          <span className="hidden sm:block">
            We bring your vision to life with creativity<br/> and precision. Let&apos;s make it happen.
          </span>
        </TextFade>

        <TextFade direction="up" className="mb-8">
          <button className="inline-flex items-center gap-2 bg-black text-orange-400 px-6 py-3 rounded-full font-medium text-lg sm:text-lg transition duration-300">
            Book A Call
            <ArrowUpRight className="w-5 h-5" />
          </button>
        </TextFade>

        <div className="w-24 h-px bg-gray-800 mx-auto mb-10" />

        <TextFade direction="up" className="flex flex-col items-center gap-4 text-gray-400 text-base font-medium sm:flex-row sm:justify-center sm:gap-6 mb-10">
          <div className="flex gap-6 justify-center">
            <a href="#whyus" className="hover:text-white transition">Why Us</a>
            <a href="#mission" className="hover:text-white transition">Mission</a>
            <a href="#works" className="hover:text-white transition">Works</a>
          </div>
          <div className="flex gap-6 justify-center">
            <a href="#services" className="hover:text-white transition">Services</a>
            <a href="/contact" className="hover:text-white transition">Contact</a>
          </div>
        </TextFade>

        <TextFade direction="up" className="text-sm sm:text-base text-gray-400 font-hero">
          © Copyright Automatix. All rights reserved.
        </TextFade>
      </div>
    </section>
  );
} 