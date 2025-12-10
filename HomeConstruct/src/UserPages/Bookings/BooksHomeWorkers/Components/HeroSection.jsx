import { Search } from "lucide-react";
import React, { useEffect, useState } from "react";

const HeroSection = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setTimeout(() => setAnimate(true), 50);
  }, []);

  return (
    <section
      className={`
        relative w-full h-[460px] md:h-[560px] rounded-3xl overflow-hidden mx-auto shadow-lg
        transition-all duration-[1200ms] ease-out
        ${animate ? "opacity-100 scale-100" : "opacity-0 scale-95"}
      `}
    >
      {/* Background Image */}
      <img
        src="/image.png"
        alt="Construction workers"
        className={`
          absolute inset-0 w-full h-full object-cover object-center 
          scale-[1.05] transition-all duration-[1500ms]
          ${animate ? "opacity-100 scale-[1.02]" : "opacity-0 scale-110"}
        `}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />

      {/* Content */}
      <div
        className={`
          relative z-10 h-full flex flex-col items-center justify-center text-center px-6
          transition-all duration-[1200ms]
          ${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
        `}
      >
        {/* TITLE */}
        <h1 className="
          text-3xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 
          drop-shadow-[0_4px_8px_rgba(0,0,0,0.5)]
        ">
          Hire Skilled Workers for Your Home
        </h1>

        {/* SUBTITLE */}
        <p className="
          text-lg md:text-xl text-white/90 max-w-2xl mb-6 
          drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]
        ">
          Masons, Plumbers, Electricians, Painters & More – All at your fingertips
        </p>

        {/* 🔥 BOOK NOW BUTTON - KEEP SAME */}
        <button
          className="
            bg-[#FF7A00] 
            hover:bg-[#F97316] 
            text-white 
            font-semibold 
            px-10 
            py-3.5 
            text-lg 
            rounded-full 
            shadow-xl 
            transition-all 
            duration-300 
            hover:shadow-2xl 
            hover:scale-[1.04]
            active:scale-[0.98]
          "
        >
          Book Now
        </button>

        {/* 🔥 SEARCH BAR BELOW BUTTON */}
        <div
          className={`
            w-full max-w-2xl bg-white/95 backdrop-blur-md rounded-full
            flex items-center gap-3 px-5 py-3 shadow-xl border border-white/40
            mt-5
            transition-all duration-700
            ${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
          `}
        >
          <Search className="w-5 h-5 text-gray-500" />

          <input
            type="text"
            placeholder="Search Mason, Plumber, Electrician…"
            className="
              flex-1 bg-transparent outline-none text-gray-800
              placeholder:text-gray-500 text-sm md:text-base
            "
          />

          <button className="
            bg-[#FF7A00] hover:bg-[#F97316]
            text-white px-5 py-2 rounded-full
            text-sm font-semibold shadow-md
            transition-all duration-300
            hover:shadow-xl hover:scale-105 active:scale-95
          ">
            Search
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
