import { useState, useEffect } from "react";
import SearchBar from "./SearchBar";

// Local Button
const Button = ({ children, className = "", variant = "solid", ...props }) => {
  const baseStyles =
    "px-6 py-3 rounded-xl font-semibold transition-all duration-200";

  const variants = {
    solid: "bg-orange-500 hover:bg-orange-600 text-white",
    outline: "border border-white/40 text-white hover:bg-white/20 backdrop-blur-sm",
  };

  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};

const heroBanner =
  "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80";

const HeroBanner = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setTimeout(() => setAnimate(true), 70);
  }, []);

  return (
    <section
      className={`
        relative w-full 
        min-h-[620px] md:min-h-[700px] 
        rounded-b-3xl 
        pb-28 
        overflow-visible
        mb-20
        transition-all duration-[1200ms] ease-out
        ${animate ? "opacity-100 scale-100" : "opacity-0 scale-95"}
      `}
    >
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroBanner}
          alt="Workers"
          className={`
            w-full h-full object-cover
            transition-all duration-[1500ms]
            ${animate ? "opacity-100 scale-100" : "opacity-0 scale-110"}
          `}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />
      </div>

      {/* Content */}
      <div
        className={`
          relative z-10 container mx-auto px-4 pt-20 md:pt-28
          transition-all duration-[1200ms]
          ${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
        `}
      >
        <div className="max-w-2xl">

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
            Hire Skilled Labour for{" "}
            <span className="text-orange-400">Your Home Work</span> & Repairs
          </h1>

          <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed">
            Book Masons, Plumbers, Electricians, Painters & More. Quality labour at affordable prices.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mb-10">
            <Button variant="solid" className="px-8 py-4 text-lg">Book Labour Now</Button>
            <Button variant="outline" className="px-8 py-4 text-lg">View All Services</Button>
          </div>

          {/* Trust indicators */}
          <div className="flex items-center gap-6 pt-6 border-t border-white/30">
            <div className="text-center">
              <p className="text-2xl font-bold text-white">10K+</p>
              <p className="text-sm text-gray-300">Workers</p>
            </div>

            <div className="w-px h-10 bg-white/20" />

            <div className="text-center">
              <p className="text-2xl font-bold text-white">50K+</p>
              <p className="text-sm text-gray-300">Jobs Done</p>
            </div>

            <div className="w-px h-10 bg-white/20" />

            <div className="text-center">
              <p className="text-2xl font-bold text-white">4.8★</p>
              <p className="text-sm text-gray-300">Rating</p>
            </div>
          </div>

        </div>
      </div>

      {/* ⭐ Animated SearchBar */}
      <div
        className={`
          absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-1/2 
          w-full max-w-5xl px-4 z-30
          transition-all duration-[1100ms]
          ${animate ? "opacity-100 translate-y-1/2" : "opacity-0 translate-y-10"}
        `}
      >
        <SearchBar />
      </div>
    </section>
  );
};

export default HeroBanner;
