import React, { useEffect, useState } from "react";

export default function QuickActions({ quickActions }) {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setTimeout(() => setAnimate(true), 80); // small delay for smooth effect
  }, []);

  return (
    <div
      className={`max-w-6xl mx-auto -mt-8 sm:-mt-10 px-4 transition-all duration-[1000ms] ease-out
        ${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
    >
      <div className="bg-white p-4 sm:p-5 shadow-lg rounded-2xl">
        
        <div className="grid grid-cols-4 sm:flex sm:justify-evenly gap-4">
          {quickActions.map((item, idx) => (
            <div
              key={idx}
              className={`flex flex-col items-center bg-blue-50 rounded-xl py-3 sm:py-4 shadow-sm cursor-pointer 
                hover:scale-105 hover:bg-blue-100 transition w-full
                transform duration-[900ms] ease-out
                ${animate ? "opacity-100 scale-100" : "opacity-0 scale-75"}`}
              style={{ transitionDelay: `${idx * 120}ms` }} // stagger animation
            >
              <img src={item.img} className="w-9 h-9 mb-1.5" alt={item.label} />
              <span className="text-[11px] sm:text-xs font-semibold text-gray-700 text-center">
                {item.label}
              </span>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
