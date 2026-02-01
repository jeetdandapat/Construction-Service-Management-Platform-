import { 
  Star, 
  MapPin, 
  ArrowRight, 
  ChevronLeft, 
  ChevronRight 
} from "lucide-react";
import { useRef } from "react";

/* ---------- Local Button Component (NO IMPORTS NEEDED) ---------- */
const Button = ({ children, className = "", ...props }) => (
  <button
    className={`px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition ${className}`}
    {...props}
  >
    {children}
  </button>
);

/* ---------- Engineer Card ---------- */
const EngineerCard = ({ engineer }) => (
  <div className="scroll-item min-w-[240px] sm:min-w-[260px] md:min-w-[300px] lg:min-w-[320px] 
                  bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm group">

    {/* IMAGE */}
    <div className="relative h-48 bg-gray-200 overflow-hidden">
      <img
        src={engineer.image}
        alt={engineer.name}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      />

      {/* Verified Badge */}
      {engineer.verified && (
        <div className="absolute top-3 left-3 bg-green-600 text-white text-xs font-semibold px-2.5 py-1 rounded-full">
          Verified
        </div>
      )}

      {/* Rating Badge */}
      <div className="absolute top-3 right-3 bg-white/90 text-black text-sm font-semibold px-2.5 py-1 rounded-full flex items-center gap-1">
        <Star className="w-3.5 h-3.5 fill-yellow-500 text-yellow-500" />
        {engineer.rating}
      </div>
    </div>

    {/* CONTENT */}
    <div className="p-5">
      <h3 className="font-bold text-lg text-black mb-1">{engineer.name}</h3>

      <p className="text-sm text-gray-600 mb-2">
        {engineer.specialty} • {engineer.experience}
      </p>

      <div className="flex items-center gap-1 text-sm text-gray-600 mb-4">
        <MapPin className="w-3.5 h-3.5" />
        {engineer.location}
      </div>

      {/* Pricing */}
      <div className="flex items-center justify-between mb-4">
        <div>
          <div className="text-xs text-gray-500">Per Day</div>
          <div className="font-bold text-blue-600">{engineer.pricePerDay}</div>
        </div>

        <div className="text-right">
          <div className="text-xs text-gray-500">Per Project</div>
          <div className="font-bold text-black">{engineer.pricePerProject}</div>
        </div>
      </div>

      {/* CTA */}
      <Button className="w-full">Book Now</Button>
    </div>
  </div>
);

/* ---------- Horizontal Scroll Row ---------- */
const EngineerRow = ({ title, engineers }) => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -340 : 340,
      behavior: "smooth",
    });
  };

  return (
    <div className="mb-12">

      {/* ROW HEADER */}
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl md:text-2xl font-bold text-black">{title}</h3>

        <div className="flex items-center gap-2">
          <button
            onClick={() => scroll("left")}
            className="p-2 rounded-full bg-gray-200 hover:bg-gray-300"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={() => scroll("right")}
            className="p-2 rounded-full bg-gray-200 hover:bg-gray-300"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          <button className="hidden md:flex items-center gap-2 text-blue-600 font-semibold hover:gap-3 transition-all ml-4">
            View All
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* HORIZONTAL SCROLL CONTAINER */}
      <div
        ref={scrollRef}
        className="
          flex gap-5 
          overflow-x-auto 
          overflow-y-hidden
          px-1
          scrollbar-hide 
          snap-x snap-mandatory
        "
      >
        {engineers.map((engineer) => (
          <EngineerCard key={engineer.id} engineer={engineer} />
        ))}
      </div>
    </div>
  );
};

/* ---------- SAMPLE DATA ---------- */
const sampleEngineers = {
  "Structural Engineers": [
    { id: 1, name: "Er. Rahul Kumar", specialty: "Structural Engineer", experience: "8+ years", rating: 4.9, reviews: 156, pricePerDay: "₹1,500", pricePerProject: "₹10,000", location: "Delhi NCR", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400", verified: true },
    { id: 2, name: "Er. Priya Sharma", specialty: "Structural Engineer", experience: "6+ years", rating: 4.8, reviews: 89, pricePerDay: "₹1,200", pricePerProject: "₹8,000", location: "Mumbai", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400", verified: true },
    { id: 3, name: "Er. Amit Verma", specialty: "Structural Engineer", experience: "12+ years", rating: 4.9, reviews: 234, pricePerDay: "₹2,000", pricePerProject: "₹15,000", location: "Bangalore", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400", verified: true },
  ],
};

/* ---------- MAIN SECTION ---------- */
const EngineerSection = () => (
  <section className="py-16 md:py-20 px-4 bg-gray-100">
    <div className="container mx-auto">

      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-black">
          Available Civil Engineers
        </h2>
        <p className="text-gray-600 max-w-xl mx-auto">
          Browse our network of verified professionals ready to help with your construction project
        </p>
      </div>

      {Object.entries(sampleEngineers).map(([title, engineers]) => (
        <EngineerRow key={title} title={title} engineers={engineers} />
      ))}

    </div>
  </section>
);

export default EngineerSection;
