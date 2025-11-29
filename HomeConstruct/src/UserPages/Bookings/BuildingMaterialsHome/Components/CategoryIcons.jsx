import React, { useState } from "react";

export default function CategoryIcons({ categoryIcons }) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="reveal max-w-6xl mx-auto mt-4 px-4">
      <div className="flex gap-6 overflow-x-auto p-4 bg-white shadow-md rounded-2xl">

        {categoryIcons.map((item, idx) => {
          const isActive = activeIndex === idx;

          return (
            <div
              key={idx}
              className="flex flex-col items-center group cursor-pointer transition-all duration-300"
              onClick={() => setActiveIndex(idx)}
            >

              {/* ICON CIRCLE */}
              <div
                className={`
                  w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300
                  shadow-sm border 
                  group-hover:scale-110 group-hover:shadow-md
                  ${isActive 
                    ? "bg-blue-50 border-blue-500 shadow-blue-300 shadow-md" 
                    : "bg-slate-50 border-gray-300 group-hover:border-blue-400"
                  }
                `}
                style={{
                  boxShadow: isActive
                    ? "0 4px 12px rgba(59,130,246,0.4)"
                    : "0 2px 5px rgba(0,0,0,0.08)"
                }}
              >
                <img
                  src={item.img}
                  alt={item.label}
                  className="w-10 h-10 object-contain p-1 transition-all duration-300 
                  group-hover:scale-125 group-hover:rotate-6"
                />
              </div>

              {/* LABEL */}
              <span
                className={`
                  text-[12px] mt-2 transition-all duration-300
                  ${isActive ? "text-blue-600 font-bold" : "text-gray-700"}
                  group-hover:text-blue-600 group-hover:font-semibold
                `}
              >
                {item.label}
              </span>

              {/* BLUE UNDERLINE FOR ACTIVE */}
              {isActive && (
                <div className="w-12 h-1 bg-blue-600 mt-1 rounded-full transition-all duration-300 group-hover:w-14"></div>
              )}

            </div>
          );
        })}

      </div>
    </div>
  );
}
