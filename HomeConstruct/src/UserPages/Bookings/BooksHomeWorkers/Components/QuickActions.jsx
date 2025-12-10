import React, { useEffect, useState } from "react";
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

export default function QuickActions() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setTimeout(() => setAnimate(true), 100);
  }, []);

  const quickActions = [
    { label: "Mason", icon: Hammer },
    { label: "Plumber", icon: Wrench },
    { label: "Electrician", icon: Zap },
    { label: "Carpenter", icon: Building2 },
    { label: "Painter", icon: Paintbrush },
    { label: "Tile Worker", icon: LayoutGrid },
    { label: "RCC Worker", icon: HardHat },
    { label: "POP & Ceiling", icon: Layers },
    { label: "Floor Polish", icon: Sparkles },
    { label: "General Labour", icon: Users },
  ];

  return (
    <div
      className={`
        max-w-6xl mx-auto -mt-10 px-2   /* 🔥 box moved UP + wider width */
        transition-all duration-700 ease-out
        ${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
      `}
    >
      {/* 🔥 Smaller Height Box */}
      <div className="bg-white p-4 sm:p-5 rounded-3xl shadow-lg border border-gray-200">

        {/* Horizontal Scroll */}
        <div className="flex gap-5 overflow-x-auto scrollbar-hide snap-x snap-mandatory">
          {quickActions.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className={`
                  flex flex-col items-center justify-center
                  bg-gray-50 rounded-2xl
                  w-[110px] min-w-[110px]
                  py-4 cursor-pointer               /* height little smaller */
                  shadow-sm border border-gray-200
                  transition-all duration-300
                  hover:shadow-xl hover:bg-[#FFF1E6] hover:border-orange-300 hover:-translate-y-1
                  snap-start
                  ${animate ? "opacity-100 scale-100" : "opacity-0 scale-75"}
                `}
                style={{ transitionDelay: `${idx * 120}ms` }}
              >
                {/* ICON */}
                <Icon className="w-8 h-8 text-orange-600 mb-2" />

                {/* LABEL */}
                <span className="text-[13px] font-semibold text-gray-700 text-center leading-tight">
                  {item.label}
                </span>
              </div>
            );
          })}

          <div className="min-w-[12px]" />
        </div>

      </div>
    </div>
  );
}
