import React, { useEffect, useState } from "react";

export default function SearchBar() {
  const [animate, setAnimate] = useState(false);
  const [focus, setFocus] = useState(false); // 🔵 input focus animation

  useEffect(() => {
    setTimeout(() => setAnimate(true), 120);
  }, []);

  return (
    <div
      className={`mt-5 max-w-6xl mx-auto px-4 flex items-center gap-3
        transition-all duration-[1000ms] ease-out
        ${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
    >
      {/* SEARCH INPUT BOX */}
      <div
        className={`flex-1 flex items-center bg-white rounded-full px-4 py-3 shadow-md
          transition-all duration-[600ms] ease-out
          ${animate ? "opacity-100 scale-100" : "opacity-0 scale-95"}
          ${focus ? "ring-2 ring-blue-400 shadow-lg" : ""}   // 🔵 Focus Animation
        `}
      >
        <img
          src="https://cdn-icons-png.flaticon.com/512/751/751463.png"
          className="w-5 opacity-60 mr-2"
        />

        {/* INPUT FIELD */}
        <input
          type="text"
          className="bg-transparent outline-none text-sm w-full text-gray-900"
          placeholder="Search Cement, Bricks, Steel..."
          onFocus={() => setFocus(true)}   // 🔵 On Click
          onBlur={() => setFocus(false)}   // 🔵 On Blur
        />
      </div>

      {/* SMALL BUTTON */}
      <button
        className={`w-12 h-12 bg-white shadow-md rounded-full flex items-center justify-center 
          transition-all duration-[900ms] ease-out
          ${animate ? "opacity-100 scale-100" : "opacity-0 scale-90"}
          ${focus ? "scale-110 shadow-lg" : ""}   // 🔵 Sync Button Animation with focus
        `}
        style={{ transitionDelay: "150ms" }}
      >
        <img
          src="https://cdn-icons-png.flaticon.com/512/709/709592.png"
          className="w-7"
        />
      </button>
    </div>
  );
}
