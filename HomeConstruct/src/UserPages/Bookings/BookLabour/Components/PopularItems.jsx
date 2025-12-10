import { useRef } from "react";
import {
  Hammer,
  Droplets,
  Zap,
  Trees,
  Paintbrush,
  LayoutGrid,
  Building2,
  Layers,
  Sparkles,
  HardHat,
  ChevronRight,
  ChevronLeft,
  Star,
} from "lucide-react";

// Worker Images
const workerImages = [
  "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&h=300&fit=crop",
  "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=400&h=300&fit=crop",
  "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&h=300&fit=crop",
  "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
];

// Generate Worker List
const generateWorkers = (skill) => [
  { name: "Rahul Kumar", skill, experience: "8+ years", rating: 4.8, price: "₹900", image: workerImages[0] },
  { name: "Suresh Singh", skill, experience: "5+ years", rating: 4.6, price: "₹750", image: workerImages[1] },
  { name: "Amit Sharma", skill, experience: "10+ years", rating: 4.9, price: "₹1,100", image: workerImages[2] },
  { name: "Vikram Yadav", skill, experience: "6+ years", rating: 4.7, price: "₹850", image: workerImages[3] },
  { name: "Manoj Verma", skill, experience: "4+ years", rating: 4.5, price: "₹700", image: workerImages[4] },
  { name: "Deepak Gupta", skill, experience: "7+ years", rating: 4.8, price: "₹950", image: workerImages[0] },
];

// Category List
const workerCategories = [
  { title: "Mason Labour", skill: "Mason" },
  { title: "Plumbing Labour", skill: "Plumber" },
  { title: "Electrical Labour", skill: "Electrician" },
  { title: "Carpentry Labour", skill: "Carpenter" },
  { title: "Painting Labour", skill: "Painter" },
  { title: "Tile Work Labour", skill: "Tile Expert" },
];

// WorkerCard Component
const WorkerCard = ({ name, skill, experience, rating, price, image }) => {
  return (
    <div className=" reveal min-w-[280px] max-w-[280px] bg-white rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden group">
      <div className=" reveal relative h-44 overflow-hidden">
        <img src={image} alt={name} className=" reveal w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
        <div className=" reveal  absolute top-3 right-3 px-2 py-1 bg-white/90 backdrop-blur-sm rounded-lg flex items-center gap-1">
          <Star className=" reveal w-4 h-4 text-orange-500 fill-orange-500" />
          <span className="reveal text-sm font-semibold text-gray-900">{rating}</span>
        </div>
      </div>

      <div className="reveal p-4">
        <h3 className="reveal font-bold text-gray-900 text-lg mb-1">{name}</h3>
        <p className="reveal text-sm text-gray-500 mb-3">
          {skill} • {experience}
        </p>

        <div className="reveal flex items-center justify-between">
          <div>
            <span className="reveal text-2xl font-bold text-orange-500">{price}</span>
            <span className="reveal text-sm text-gray-500">/day</span>
          </div>
          <button className="reveal px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-xl text-sm">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

// WorkerRow Component
const WorkerRow = ({ title, workers }) => {
  const scrollRef = useRef(null);

  const scroll = (dir) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: dir === "left" ? -300 : 300,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="reveal mb-10">
      <div className="reveal flex items-center justify-between mb-5">
        <h3 className="reveal text-xl font-bold text-gray-900">{title}</h3>

        <div className="flex gap-2">
          <button onClick={() => scroll("left")} className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button onClick={() => scroll("right")} className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div ref={scrollRef} className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide scroll-smooth">
        {workers.map((worker, i) => (
          <WorkerCard key={i} {...worker} />
        ))}
      </div>
    </div>
  );
};

// MAIN SECTION (ALL IN ONE PAGE)
const WorkersSection = () => {
  return (
    <section className="reveal py-16 bg-gray-100">
      <div className="reveal container mx-auto px-4">

        <div className="reveal text-center mb-12">
          <h2 className="reveal text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Available Labour for Home Work
          </h2>
          <p className="reveal text-gray-600 text-lg">
            Browse through our verified and skilled workers
          </p>
        </div>

        {workerCategories.map((cat, i) => (
          <WorkerRow key={i} title={cat.title} workers={generateWorkers(cat.skill)} />
        ))}
      </div>
    </section>
  );
};

export default WorkersSection;
