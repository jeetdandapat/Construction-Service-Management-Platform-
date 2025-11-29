import React, { useEffect, useState } from "react";

export default function HeroSection() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setTimeout(() => setAnimate(true), 50);
  }, []);

  return (
    <div
      className={`w-full bg-gradient-to-br from-blue-700 via-blue-500 to-cyan-400 shadow-xl 
        transition-all duration-[1200ms] ease-out 
        ${animate ? "opacity-100" : "opacity-0"}`}
    >
      <div className="max-w-6xl mx-auto px-4 py-8 sm:py-12 flex flex-col sm:flex-row items-center gap-6">

        {/* LEFT CONTENT */}
        <div
          className={`flex-1 transition-all duration-[1000ms] ease-out 
            ${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          <p className="text-xs sm:text-sm text-blue-100 uppercase tracking-[0.2em] mb-2">
            BUILD SMART • SAVE MORE
          </p>

          <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight">
            Premium Building Materials,<br />
            <span className="text-yellow-300">Delivered Fast to Your Site</span>
          </h1>

          <p className="text-blue-100 text-sm sm:text-base mt-3 max-w-lg">
            Order cement, bricks, steel, sand, tiles & more.
          </p>

          <div className="mt-4 flex flex-wrap gap-3">
            <button className="bg-white text-blue-700 text-sm font-semibold px-4 py-2 rounded-full shadow-md hover:bg-blue-50">
              Shop Materials
            </button>

            <button className="border border-white/60 text-white text-sm font-semibold px-4 py-2 rounded-full hover:bg-white/10">
              View Ongoing Offers
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div
          className={`flex-1 hidden sm:flex justify-end transition-all duration-[1200ms] ease-out 
            ${animate ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-6 scale-90"}`}
        >
          <div className="w-64 h-40 sm:w-72 sm:h-48 rounded-3xl bg-white/10 border border-white/20 backdrop-blur flex items-center justify-center">
            <img
              src="https://images.unsplash.com/photo-1581090700227-1e37b190418e"
              className="w-full h-full object-cover rounded-3xl"
            />
          </div>
        </div>

      </div>
    </div>
  );
}
