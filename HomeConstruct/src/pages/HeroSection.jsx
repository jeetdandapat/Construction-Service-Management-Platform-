import React from "react";
import heroImage from "../assets/Construction_hero.jpg";

export default function HeroSection() {
  return (
    <section className="relative w-full h-[90vh] flex items-center justify-center overflow-hidden mt-1.5">
      {/* Background Image with darker effect and top offset */}
      <img
        src={heroImage}
        alt="Hero"
        className="absolute w-full h-full object-cover"
        style={{
          filter: "brightness(0.45)",
          top: "20px", // moves the image slightly down
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-2xl">
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
