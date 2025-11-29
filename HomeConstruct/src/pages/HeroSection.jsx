import React, { useEffect, useState } from "react";
import heroImage from "../assets/Construction_hero.jpg";

export default function HeroSection() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setTimeout(() => setAnimate(true), 50); // small delay for smooth start
  }, []);

  return (
    <section
      className={`relative w-full h-[90vh] flex items-center justify-center overflow-hidden mt-1.5 transition-all duration-[1200ms] ease-out
        ${animate ? "opacity-100" : "opacity-0"}`}
    >
      {/* Background Image */}
      <img
        src={heroImage}
        alt="Hero"
        className={`absolute w-full h-full object-cover transition-all duration-[1200ms] ease-out
          ${animate ? "brightness-50 scale-100" : "brightness-0 scale-110"}`}
        style={{ top: "20px" }}
      />

      {/* Content */}
      <div
        className={`relative z-10 text-center text-white px-4 max-w-2xl transition-all duration-[1000ms] ease-out
          ${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 drop-shadow-md leading-tight text-center md:whitespace-nowrap">
          From Bricks to Blueprint
        </h1>

        <p className="text-lg md:text-xl mb-8 drop-shadow-sm">
          Everything You Need to Build Your Dream Home in One Place
        </p>

        <div className="flex justify-center gap-4 flex-wrap">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition duration-300">
            Get Started as Homeowner
          </button>
          <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-6 py-3 rounded-lg font-semibold transition duration-300">
            Explore Services
          </button>
        </div>
      </div>
    </section>
  );
}
