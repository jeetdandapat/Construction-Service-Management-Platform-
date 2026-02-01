import { 
  Building2, 
  HardHat, 
  Calculator, 
  Ruler, 
  Cuboid, 
  FileCheck, 
  Compass, 
  MapPin, 
  LayoutGrid,
  ShieldCheck,
  ArrowRight
} from "lucide-react";

const categories = [
  { icon: Building2, title: "Structural Engineer", description: "Load calculation & RCC design" },
  { icon: HardHat, title: "Site Supervisor", description: "Daily work monitoring" },
  { icon: Calculator, title: "Estimation & BOQ", description: "Cost & quantity estimation" },
  { icon: Ruler, title: "Architectural Planning", description: "Floor plans & layouts" },
  { icon: Cuboid, title: "3D Elevation Designer", description: "Modern elevation designs" },
  { icon: FileCheck, title: "RCC Drawing Specialist", description: "Structural drawings" },
  { icon: Compass, title: "Vastu Consultant", description: "Traditional design guidance" },
  { icon: MapPin, title: "Survey Engineer", description: "Land survey & marking" },
  { icon: LayoutGrid, title: "Interior Layout Planning", description: "Space optimization" },
  { icon: ShieldCheck, title: "Quality Checker", description: "Construction inspection" },
];

const CategorySection = () => {
  return (
    <section className="py-16 md:py-20 px-4 bg-[#F4F7FA]">
      <div className="container mx-auto">

        {/* Header */}
        <div className="flex items-center justify-between mb-10">
          <div>
            <h2 className="text-3xl font-bold text-[#0D0D0D]">
              Civil Engineering Services
            </h2>
            <p className="text-[#6B6E72]">
              Find the right expert for your construction needs
            </p>
          </div>

          <button className="hidden md:flex items-center gap-2 text-[#FF8A00] font-semibold hover:gap-3 transition-all">
            View All
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* HORIZONTAL SCROLL ROW */}
        <div className="flex gap-5 overflow-x-auto pb-4 scrollbar-hide">
          {categories.map((category) => (
            <div
              key={category.title}
              className="
                min-w-[240px] md:min-w-[260px]
                rounded-[24px] p-6 
                bg-[#FFF3E8] 
                shadow-md hover:shadow-lg 
                transition-all cursor-pointer
                flex-shrink-0
              "
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-full bg-[#FFE2C7] flex items-center justify-center mb-4">
                <category.icon className="w-6 h-6 text-[#FF8A00]" />
              </div>

              {/* Title */}
              <h3 className="font-semibold text-[#0D0D0D] text-lg mb-1">
                {category.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-[#5F6266] mb-4">
                {category.description}
              </p>

              {/* Explore */}
              <div className="text-[#FF8A00] font-medium flex items-center gap-1 text-sm">
                Explore
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CategorySection;
