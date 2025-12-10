import { HardHat, Calculator, ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-[520px] lg:min-h-[650px] overflow-hidden">

      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/hero-banner.jpg"
          alt="Civil engineer reviewing blueprints"
          className="w-full h-full object-cover object-center"
        />

        {/* Cleaner, sharper gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-1 py-2 lg:py-0">
        <div className="max-w-2xl mt-8 lg:mt-10"> 
          {/* Badge */}
          <div 
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm 
            border border-white/20 rounded-full px-4 py-1.5 mb-6 animate-fade-in"
          >
            <HardHat className="w-4 h-4 text-yellow-400" />
            <span className="text-sm font-medium text-white">
              Trusted by 10,000+ Homeowners
            </span>
          </div>

          {/* Title */}
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-4 animate-fade-in"
            style={{ animationDelay: "0.1s" }}
          >
            Hire Expert Civil Engineers for  
            <br />
            <span className="text-yellow-400">Your Home Construction</span>
          </h1>

          {/* Sub Text */}
          <p
            className="text-lg md:text-xl text-white/90 leading-relaxed mb-8 animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            Structural Design, Site Supervision, Estimation & Layout Planning — 
            Everything you need to build your dream home.
          </p>

          {/* Buttons */}
          <div 
            className="flex flex-col sm:flex-row gap-4 animate-fade-in"
            style={{ animationDelay: "0.3s" }}
          >
            <button className="
              bg-yellow-500 hover:bg-yellow-400 text-black font-semibold
              px-8 py-4 rounded-full shadow-md flex items-center gap-2
              transition-all hover:scale-[1.04]
            ">
              <HardHat className="w-5 h-5" />
              Book Civil Engineer
              <ArrowRight className="w-5 h-5" />
            </button>

            <button className="
              border border-white text-white hover:bg-white/10
              px-8 py-4 rounded-full flex items-center gap-2
              transition-all hover:scale-[1.04]
            ">
              <Calculator className="w-5 h-5" />
              Get Cost Estimation
            </button>
          </div>

          {/* Stats */}
          <div 
            className="flex gap-10 mt-12 text-white animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            <div>
              <div className="text-3xl font-bold">500+</div>
              <div className="text-sm text-white/70">Verified Engineers</div>
            </div>
            <div>
              <div className="text-3xl font-bold">2,000+</div>
              <div className="text-sm text-white/70">Projects Completed</div>
            </div>
            <div>
              <div className="text-3xl font-bold">4.9★</div>
              <div className="text-sm text-white/70">Average Rating</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
