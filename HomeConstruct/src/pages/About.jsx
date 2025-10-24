import React from "react";
import AboutImage from "../assets/Construction_hero.jpg"; // You can use any relevant image

export default function AboutSection() {
  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Image */}
        <div className="lg:w-1/2 w-full rounded-2xl overflow-hidden shadow-lg">
          <img
            src={AboutImage}
            alt="About BuildHub"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text Content */}
        <div className="lg:w-1/2 w-full">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-6">
            About BuildHub
          </h2>
          <p className="text-gray-700 text-lg mb-4">
            BuildHub is a modern construction and service management platform that
            connects homeowners with trusted professionals, skilled workers, and
            dealers. Whether you are planning your dream home or need building
            materials, BuildHub makes it simple and convenient.
          </p>
          <p className="text-gray-700 text-lg mb-6">
            Our platform ensures transparency, reliability, and quality for all
            your construction projects. From planning and hiring to purchasing
            materials, BuildHub is your one-stop solution to build smarter and
            faster.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition duration-300">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}
