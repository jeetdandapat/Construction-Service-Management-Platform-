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
    <section className="relative z-20 -mt-10 px-4">
      <div className="max-w-4xl mx-auto">

        {/* Main Search Box */}
        <div
          className={`
            bg-card rounded-2xl border border-border/40 shadow-md
            transition-all duration-300 ease-out
            ${isFocused ? "shadow-xl scale-[1.02] border-primary/40" : ""}
          `}
        >
          <div className="flex items-center gap-4 p-4 md:p-5">

            {/* ICON LEFT */}
            <div
              className={`
                p-3 rounded-xl transition-all duration-300
                ${isFocused
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground"
                }
              `}
            >
              <Search className="w-5 h-5" />
            </div>

            {/* INPUT FIELD */}
            <input
              type="text"
              placeholder="Search Civil Engineer, Site Supervisor, Estimator, Structural Design Expert…"
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              className="flex-1 bg-transparent text-foreground placeholder:text-muted-foreground text-base md:text-lg outline-none"
            />

            {/* FILTER BUTTON */}
            <button
              className={`
                p-3 rounded-xl border transition-all duration-300
                ${
                  isFocused
                    ? "border-primary/40 bg-accent text-accent-foreground"
                    : "border-border bg-muted text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                }
              `}
            >
              <SlidersHorizontal className="w-5 h-5" />
            </button>
          </div>

          {/* QUICK TAGS */}
          <div className="px-5 pb-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <button
                key={tag}
                className="
                  px-4 py-1.5 rounded-full bg-accent text-accent-foreground 
                  text-sm font-medium transition-all duration-200
                  hover:bg-primary hover:text-primary-foreground
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
