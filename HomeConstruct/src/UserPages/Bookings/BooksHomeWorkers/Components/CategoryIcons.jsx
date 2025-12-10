import React, { useState } from "react";
import {
  Hammer,
  Wrench,
  Zap,
  Paintbrush,
  LayoutGrid,
  Building2,
  Sparkles,
  HardHat,
  Layers,
  Users,
} from "lucide-react";

const categories = [
  { title: "Mason", icon: Hammer },
  { title: "Plumber", icon: Wrench },
  { title: "Electrician", icon: Zap },
  { title: "Carpenter", icon: Building2 },
  { title: "Painter", icon: Paintbrush },
  { title: "Tile Worker", icon: LayoutGrid },
  { title: "RCC Worker", icon: HardHat },
  { title: "POP & Ceiling", icon: Layers },
  { title: "Floor Polish", icon: Sparkles },
  { title: "General Labour", icon: Users },
];

const CategorySection = () => {
  const [activeCategory, setActiveCategory] = useState("");

  const handleCategoryClick = (title) => {
    setActiveCategory(title); // click effect
    console.log("Clicked:", title);
  };

  return (
    <section className="reveal px-4 sm:px-6 lg:px-8 py-4">
      {/* MAIN BOX */}
      <div
        className="reveal 
          bg-[#FFE9D6]
          border border-orange-300
          rounded-3xl 
          shadow-lg 
          p-4 
          sm:p-5
        "
      >
        {/* Title INSIDE box */}
        <h2 className=" reveal text-lg sm:text-xl font-bold text-gray-800 mb-3">
          Worker Categories
        </h2>

        {/* Horizontal Scroll */}
        <div className=" reveal flex gap-3 overflow-x-auto scrollbar-hide pb-2">
          {categories.map((category) => (
            <CategoryCard
              key={category.title}
              title={category.title}
              icon={category.icon}
              active={activeCategory === category.title}
              onClick={() => handleCategoryClick(category.title)}
            />
          ))}

          {/* right space */}
          <div className=" reveal min-w-[8px]" />
        </div>
      </div>
    </section>
  );
};

/* ---------------- CATEGORY CARD ---------------- */

const CategoryCard = ({ title, icon: Icon, onClick, active }) => {
  return (
    <button
      onClick={onClick}
      className={` reveal 
        min-w-[120px]
        rounded-xl 
        p-3 
        flex flex-col items-center text-center 
        transition-all
        shadow-sm

        ${active
          ? "bg-orange-600 text-white border border-orange-700 shadow-lg scale-[1.03]"
          : "bg-white border border-gray-200 hover:bg-orange-100 hover:shadow-md hover:-translate-y-1"}
      `}
    >
      {/* Icon */}
      <div
        className={` reveal
          w-10 h-10 rounded-xl flex items-center justify-center mb-2
          transition-colors
          ${active ? "bg-white text-orange-700" : "bg-orange-100 text-orange-600"}
        `}
      >
        <Icon className=" reveal w-5 h-5" />
      </div>

      {/* Title */}
      <span
        className={`text-[13px] font-semibold ${
          active ? "text-white" : "text-gray-700"
        }`}
      >
        {title}
      </span>
    </button>
  );
};

export default CategorySection;
