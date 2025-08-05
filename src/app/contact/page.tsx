"use client";

import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { ArrowUpRight } from "lucide-react";
import { TextFade } from "../../components/TextFade";

export default function ContactPage() {
  return (
    <div className="min-h-screen px-4 py-24 bg-black text-white" data-aos="fade-up">
      <div className="max-w-4xl mx-auto text-center space-y-6 pt-10">
        {/* Pill */}
        <TextFade direction="up">
          <div className="inline-block px-4 py-1 mb-5 rounded-full bg-white/10 text-sm font-medium tracking-wide">
            Let's Talk
          </div>
        </TextFade>

        {/* Heading & Paragraph */}
        <TextFade direction="up" staggerChildren={0.2}>
          <h1 className="text-4xl md:text-5xl font-medium font-hero pt-3">We're Here To Help</h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto pt-3 pb-5">
            Our team is ready to support you with expert advice & solutions.
          </p>
        </TextFade>

        {/* Form */}
        <TextFade direction="up" className="container mx-auto max-w-5xl">
          <div className="relative bg-[#1a1a1a] p-10 rounded-3xl shadow-lg">
            {/* Background Image */}
            <div className="absolute inset-0 rounded-3xl overflow-hidden">
              <img 
                src="https://framerusercontent.com/images/1DpcyFptwH4wP4MXEaHB1bDxY.svg" 
                alt="" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Right side blackish gradient */}
            <div className="absolute right-0 top-0 w-1/3 h-full bg-gradient-to-l from-black/60 to-transparent rounded-r-3xl"></div>
            
            <form className="relative z-10 mt-10 text-left space-y-8">
              <div className="grid md:grid-cols-2 gap-10">
                <div className="space-y-6">
                  <label className="block">
                    <div className="mb-3">
                      <p className="text-white font-medium text-lg">Name *</p>
                    </div>
                    <div className="relative">
                      <input
                        type="text"
                        required
                        name="Name"
                        placeholder="David Johnson"
                        className="w-full text-lg bg-transparent border-b border-gray-500 py-3 focus:outline-none placeholder-gray-400 focus:border-orange-400 transition-colors"
                      />
                      <div className="absolute bottom-0 left-0 w-full h-px bg-gray-500"></div>
                    </div>
                  </label>

                  <label className="block">
                    <div className="mb-3">
                      <p className="text-white font-medium text-lg">Email *</p>
                    </div>
                    <div className="relative">
                      <input
                        type="email"
                        required
                        name="Email"
                        placeholder="example@mail.com"
                        className="w-full text-lg bg-transparent border-b border-gray-500 py-3 focus:outline-none placeholder-gray-400 focus:border-orange-400 transition-colors"
                      />
                      <div className="absolute bottom-0 left-0 w-full h-px bg-gray-500"></div>
                    </div>
                  </label>
                </div>

                <div className="space-y-6">
                  <label className="block">
                    <div className="mb-3">
                      <p className="text-white font-medium text-lg">Select Service *</p>
                    </div>
                    <div className="relative">
                      <select 
                        name="Service" 
                        required 
                        defaultValue=""
                        className="w-full bg-transparent border-b border-gray-500 py-3 focus:outline-none text-white focus:border-orange-400 transition-colors"
                      >
                        <option value="">Select Your Service</option>
                        <option value="Analytics & Reports">Analytics & Reporting</option>
                        <option value="Brand Strategy">Brand Strategy</option>
                        <option value="Event Planning">Event Planning</option>
                        <option value="Advertising Campaigns">Advertising Campaigns</option>
                        <option value="Consulting Services">Consulting Services</option>
                      </select>
                      <div className="absolute bottom-0 left-0 w-full h-px bg-gray-500"></div>
                    </div>
                  </label>

                  <label className="block">
                    <div className="mb-3">
                      <p className="text-white font-medium text-lg">Project Budget *</p>
                    </div>
                    <div className="relative">
                      <select 
                        name="Budget" 
                        required 
                        defaultValue=""
                        className="w-full bg-transparent border-b border-gray-500 py-3 focus:outline-none text-white focus:border-orange-400 transition-colors"
                      >
                        <option value="">Select Your Range</option>
                        <option value="Under $10.000">Under $10.000</option>
                        <option value="$10.000 - $25.000">$10.000 - $25.000</option>
                        <option value="$25.000 - $50.000">$25.000 - $50.000</option>
                        <option value="Above $50.000">Above $50.000</option>
                        <option value="Custom Budget">Custom Budget</option>
                      </select>
                      <div className="absolute bottom-0 left-0 w-full h-px bg-gray-500"></div>
                    </div>
                  </label>
                </div>
              </div>

              <label className="block">
                <div className="mb-3">
                  <p className="text-white font-medium text-lg">Company Name *</p>
                </div>
                <div className="relative">
                  <input
                    type="text"
                    required
                    name="Company"
                    placeholder="Ex. StaticMania"
                    className="w-full text-lg bg-transparent border-b border-gray-500 py-3 focus:outline-none placeholder-gray-400 focus:border-orange-400 transition-colors"
                  />
                  <div className="absolute bottom-0 left-0 w-full h-px bg-gray-500"></div>
                </div>
              </label>

              <label className="block">
                <div className="mb-3">
                  <p className="text-white font-medium text-lg">Project Details</p>
                </div>
                <div className="relative">
                  <textarea
                    required
                    name="Details"
                    placeholder="Tell us more about your project"
                    rows={4}
                    className="w-full text-lg bg-transparent border-b border-gray-500 py-3 resize-none focus:outline-none placeholder-gray-400 focus:border-orange-400 transition-colors"
                  />
                  <div className="absolute bottom-0 left-0 w-full h-px bg-gray-500"></div>
                </div>
              </label>

              {/* Submit + Note */}
              <div className="flex items-center justify-between flex-wrap gap-4 pt-4">
                <button 
                  type="submit" 
                  className="relative inline-flex items-center gap-2 px-6 py-3 text-lg font-medium text-white rounded-lg transition-all"
                  style={{
                    background: 'linear-gradient(45deg, rgb(255, 177, 104) -30%, rgb(227, 109, 0) 100%)'
                  }}
                >
                  <span>Submit</span>
                  <ArrowUpRight size={24} className="transition-transform duration-300 hover:-rotate-45" />
                </button>
                <p className="text-lg text-white">
                  We will contact you within 24 business hours.
                </p>
              </div>
            </form>
          </div>
        </TextFade>

        {/* Contact Info */}
        <TextFade direction="up" className="mt-16 grid md:grid-cols-3 gap-8 text-left text-sm text-white border-t border-gray-700 pt-10">
          <div className="flex flex-col gap-2 pr-4 border-r border-gray-700">
            <h4 className="text-lg font-semibold flex items-center gap-2 mb-1">
              <FaMapMarkerAlt /> Head Office
            </h4>
            <p className="text-lg">5899 Alexys Highway Suite<br/> 678, NR, Nevada, USA</p>
          </div>

          <div className="flex flex-col gap-2 px-4 border-r border-gray-700">
            <h4 className="text-lg font-semibold flex items-center gap-2 mb-1">
              <FaPhone /> Phone
            </h4>
            <p className="text-lg">+1 234 567 890</p>
            <p className="text-lg">+1 234 567 890</p>
          </div>

          <div className="flex flex-col gap-2 pl-4">
            <h4 className="text-lg font-semibold flex items-center gap-2 mb-1">
              <FaEnvelope /> Email
            </h4>
            <p className="text-lg">customer@automx.com</p>
            <p className="text-lg">client@automx.com</p>
          </div>
        </TextFade>
      </div>
    </div>
  );
} 