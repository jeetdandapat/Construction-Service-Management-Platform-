import { Search, SlidersHorizontal } from "lucide-react";

const SearchBar = () => {
  return (
    <div className="w-full max-w-3xl mx-auto -mt-8 relative z-20 px-4">
      <div
        className="
          flex items-center gap-3 
          bg-white 
          border border-gray-300 
          rounded-full 
          py-3 px-4 
          shadow-md 
          hover:shadow-lg 
          transition-all
        "
      >
        {/* Search Icon */}
        <Search className="w-5 h-5 text-gray-500" />

        {/* Input */}
        <input
          type="text"
          placeholder="Search Mason, Plumber, Electrician..."
          className="
            flex-1 
            bg-transparent 
            outline-none 
            text-gray-800 
            placeholder:text-gray-500
            text-base
          "
        />

        {/* Filter Button */}
        <button
          className="
            p-2 
            rounded-xl 
            hover:bg-gray-200 
            transition-all
          "
        >
          <SlidersHorizontal className="w-5 h-5 text-gray-600 hover:text-orange-600" />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
