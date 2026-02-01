import { Search, SlidersHorizontal } from "lucide-react";
import { useState } from "react";

export default function SearchBar() {
  const [isFocused, setIsFocused] = useState(false);

  const tags = [
    "Structural Engineer",
    "Site Supervisor",
    "Estimation",
    "3D Design",
    "Vastu",
  ];

  return (
    <section className="relative z-20 px-4 mt-6">
      <div className="max-w-4xl mx-auto">

        {/* Main Search Box */}
        <div
          className={`
            bg-white rounded-2xl border-2 border-blue-300 shadow-lg
            transition-all duration-300 ease-out
            ${isFocused ? "shadow-2xl scale-[1.02] border-blue-500" : ""}
          `}
        >
          <div className="flex items-center gap-4 p-5">

            {/* SEARCH ICON */}
            <div
              className={`
                p-3 rounded-xl transition-all duration-300
                ${
                  isFocused
                    ? "bg-blue-600 text-white shadow-lg"
                    : "bg-blue-100 text-blue-600 shadow-sm"
                }
              `}
            >
              <Search className="w-6 h-6" />
            </div>

            {/* INPUT FIELD WITH BLACK BORDER */}
            <div
              className={`
                flex-1 rounded-xl px-4 py-2
                border-2 transition-all duration-300
                ${
                  isFocused
                    ? "border-black bg-blue-50/30"
                    : "border-black bg-white"
                }
              `}
            >
              <input
                type="text"
                placeholder="Search Civil Engineer, Site Supervisor, Estimator, Structural Design Expert…"
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                className="
                  w-full bg-transparent
                  text-[#0f172a] text-lg font-medium
                  placeholder:text-[#64748b]
                  outline-none
                "
              />
            </div>

            {/* FILTER BUTTON */}
            <button
              className={`
                p-3 rounded-xl border transition-all duration-300
                ${
                  isFocused
                    ? "border-blue-400 bg-blue-100 text-blue-700 shadow-md"
                    : "border-blue-200 bg-blue-50 text-blue-500 hover:bg-blue-100"
                }
              `}
            >
              <SlidersHorizontal className="w-6 h-6" />
            </button>
          </div>

          {/* QUICK TAGS */}
          <div className="px-5 pb-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <button
                key={tag}
                className="
                  px-4 py-1.5 rounded-full 
                  bg-teal-500 text-white 
                  text-sm font-semibold 
                  transition-all duration-200
                  hover:bg-blue-600
                "
              >
                {tag}
              </button>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
