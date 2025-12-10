import React, { useState } from "react";
import { Search, SlidersHorizontal } from "lucide-react";

const SearchBar = () => {
  const [focused, setFocused] = useState(false);

  return (
    <div className="w-full">
      <div
        className={`
          w-full bg-white rounded-full shadow-2xl 
          flex items-center gap-4 px-6 py-4 border 
          transition-all duration-300
          ${focused ? "border-orange-500 shadow-[0_4px_20px_rgba(255,122,0,0.3)]" : "border-gray-200"}
        `}
      >
        {/* input + icon */}
        <div className="flex items-center gap-3 flex-1">
          <Search className="w-5 h-5 text-gray-500" />

          <input
            type="text"
            placeholder="Search Labour for Mason, Plumber, Electrician, Painting…"
            className="flex-1 bg-transparent outline-none text-gray-700 placeholder:text-gray-500"
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
          />
        </div>

        {/* Filters */}
        <button className="px-6 py-2 bg-orange-50 text-gray-700 rounded-full hover:bg-orange-100">
          <div className="flex items-center gap-2">
            <SlidersHorizontal className="w-4 h-4 text-orange-600" />
            <span>Filters</span>
          </div>
        </button>

        {/* Search */}
        <button className="px-6 py-2 bg-orange-500 text-white rounded-full hover:bg-orange-600 font-semibold">
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
