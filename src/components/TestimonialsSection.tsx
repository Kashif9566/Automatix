"use client";

import { Star } from "lucide-react";

export default function TestimonialsSection() {
  return (
    <section
      className="bg-black text-white py-20 px-4 sm:px-6 md:px-20"
      data-aos="fade-up"
      data-aos-delay="200"
      data-aos-duration="1200"
    >
      <div className="text-center mb-16">
        <div className="inline-block px-4 py-1 mb-4 rounded-full bg-white/10 text-sm font-medium tracking-wide text-white">
          What Our Users Say
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium font-hero text-white pt-2">
          Trusted by Businesses Like Yours
        </h2>
      </div>

      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-10 mb-20">
        <img
          src="/zapfast.jpeg"
          alt="Zapfast"
          className="w-full sm:w-[80%] md:w-[400px] h-[250px] sm:h-[300px] object-cover rounded-2xl shadow-lg mx-auto"
        />

        <div className="w-full max-w-2xl">
          <h3 className="text-xl sm:text-2xl font-bold mb-3">Zapfast</h3>
          <p className="text-base sm:text-lg text-white mb-4 font-hero">
            &quot;Automatix&apos;s fusion of AI and innovation set our project apart.
            Their solutions are second to none.&quot;
          </p>
          <div className="font-hero text-base sm:text-lg text-white">Zidane Muharto</div>
          <div className="text-gray-400 text-sm sm:text-base">Chief Technology Officer</div>
          <div className="h-[1px] w-20 bg-gray-600 my-4" />
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-12 text-white text-sm sm:text-base">
            <div>
              <span className="text-2xl sm:text-3xl font-bold">73%</span>
              <br /> Sales increase in first month
            </div>
            <div>
              <span className="text-2xl sm:text-3xl font-bold">5X</span>
              <br /> Faster customer resolutions
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {[{
          company: "Creative Edge",
          quote: "The creativity and AI expertise from Automatix set a new benchmark for our industry. Highly recommended!",
          name: "Agus Blimbing",
          role: "Tech Manager"
        },
        {
          company: "BrightNest",
          quote: "Automatix&apos;s revolutionary AI approach and creative solutions elevated our project. Stellar performance!",
          name: "Steve Kebalen",
          role: "AI Developer"
        },
        {
          company: "PrimeCore",
          quote: "The blend of AI and creativity at Automatix transformed our vision into reality. Exceptional support!",
          name: "John Kepanjen",
          role: "E-Commerce Stacks"
        }].map((item, i) => (
          <div key={i} className="text-center px-2 sm:px-4">
            <div className="text-gray-400 text-lg font-medium mb-1">{item.company}</div>
            <div className="flex justify-center mb-2">
              {Array(5).fill(0).map((_, i) => (
                <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            <p className="text-base sm:text-lg font-hero text-gray-400 mb-4">&quot;{item.quote}&quot;</p>
            <div className="font-hero text-white text-base sm:text-lg">{item.name}</div>
            <div className="text-gray-400 text-sm sm:text-base">{item.role}</div>
          </div>
        ))}
      </div>
    </section>
  );
} 