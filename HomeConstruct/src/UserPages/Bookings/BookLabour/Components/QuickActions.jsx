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
} from "lucide-react";

const categories = [
  { title: "Mason Labour", description: "House construction work", icon: Hammer },
  { title: "Plumbing Labour", description: "Water pipe, bathroom repair", icon: Droplets },
  { title: "Electrical Labour", description: "Wiring, switch, repair work", icon: Zap },
  { title: "Carpentry Labour", description: "Furniture, doors, woodwork", icon: Trees },
  { title: "Painting Labour", description: "Interior, exterior painting", icon: Paintbrush },
  { title: "Tile Work Labour", description: "Tiles, marble, flooring", icon: LayoutGrid },
  { title: "RCC Construction", description: "Concrete, pillar work", icon: Building2 },
  { title: "POP & Ceiling Labour", description: "Ceiling design, plaster", icon: Layers },
  { title: "Floor Polishing", description: "Marble polish, finishing", icon: Sparkles },
  { title: "General Helper", description: "Basic home work assistance", icon: HardHat },
];

const CategoryCard = ({ title, description, icon: Icon }) => {
  return (
    <button
      className="
      reveal 
      
        min-w-[240px] sm:min-w-0
        h-[140px]
        p-5 rounded-2xl 
        bg-white 
        border border-gray-200 
        shadow-sm 
        hover:shadow-xl 
        hover:border-orange-500 
        hover:-translate-y-1 
        transition-all duration-300 
        group text-left flex
      "
    >
      <div className=" reveal flex items-center justify-between w-full">
        <div className="flex items-center gap-4">
          <div
            className="
            reveal 
              w-14 h-14 rounded-2xl 
              bg-gradient-to-br from-orange-100 to-orange-200 
              flex items-center justify-center
              group-hover:from-orange-200 
              group-hover:to-orange-300 
              transition-colors
            "
          >
            <Icon className="w-7 h-7 text-orange-600" />
          </div>

          <div>
            <h3 className=" reveal font-semibold text-gray-900 text-lg group-hover:text-orange-600 transition-colors">
              {title}
            </h3>
            <p className="text-sm text-gray-500">{description}</p>
          </div>
        </div>

        <ChevronRight
          className="reveal 
            w-6 h-6 text-gray-400 
            group-hover:text-orange-600 
            group-hover:translate-x-1 
            transition-all
          "
        />
      </div>
    </button>
  );
};

const CategorySection = () => {
  return (
    <section className=" reveal  py-12 bg-[#F4F6FB]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Choose Home Work Category
          </h2>
          <p className=" reveal text-gray-600 text-lg">
            Select the right labour for your home project
          </p>
        </div>

        <div
          className=" reveal 
            flex gap-4 overflow-x-auto pb-3 
            sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 
            sm:overflow-visible sm:gap-5
          "
        >
          {categories.map((cat, i) => (
            <CategoryCard key={i} {...cat} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
