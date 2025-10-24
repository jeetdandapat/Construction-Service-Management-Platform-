import React from "react";
import { useNavigate } from "react-router-dom";
import ArchitectImg from "../assets/Architect_at_work_image_9238178c.png";
import CivilEngineerImg from "../assets/Civil_engineer_image_dd781933.png";
import DealerImg from "../assets/Dealer_storefront_image_afc59823.png";
import HomeownerImg from "../assets/Homeowner_user_image_9a0f4966.png";
import LabourImg from "../assets/Labour_workers_image_4897757c.png";
import MasonImg from "../assets/Mason_at_work_image_fedad4cc.png";

const roles = [
  {
    title: "User",
    subtitle: "Homeowner",
    desc: "Find everything you need to build your dream home - from materials to skilled professionals.",
    button: "Join as User",
    img: HomeownerImg,
    route: "/user-login",
  },
  {
    title: "Dealer",
    subtitle: "Building Material Seller",
    desc: "Showcase your products and connect with customers looking for quality construction materials.",
    button: "Join as Dealer",
    img: DealerImg,
    route: "/dashboard/dealer",
  },
  {
    title: "Mason",
    subtitle: "Skilled Craftsman",
    desc: "Get hired for construction projects and showcase your masonry expertise to homeowners.",
    button: "Join as Mason",
    img: MasonImg,
    route: "/dashboard/mason",
  },
  {
    title: "Labour",
    subtitle: "Construction Worker",
    desc: "Find daily work opportunities and connect with projects that need skilled labor.",
    button: "Join as Labour",
    img: LabourImg,
    route: "/dashboard/labour",
  },
  {
    title: "Civil Engineer",
    subtitle: "Structural Expert",
    desc: "Offer professional engineering services for residential and commercial projects.",
    button: "Join as Civil Engineer",
    img: CivilEngineerImg,
    route: "/dashboard/engineer",
  },
  {
    title: "Architect",
    subtitle: "Design Professional",
    desc: "Share your creative vision and help clients design their perfect homes.",
    button: "Join as Architect",
    img: ArchitectImg,
    route: "/dashboard/architect",
  },
];

export default function JoinSection() {
  const navigate = useNavigate();

  const handleCardClick = (route) => {
    navigate(route); // Navigate to role-specific dashboard
  };

  return (
    <section className="py-16 px-6 bg-gray-50">
      {/* Heading */}
      <h2 className="text-center text-5xl md:text-6xl font-extrabold text-gray-800 mb-4">
        Join BuildHub
      </h2>
      <p className="text-center text-lg md:text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
        Connect with skilled professionals, dealers, and engineers to build your dream home seamlessly. Choose your role and get started today!
      </p>

      {/* Cards Grid */}
      <div className="max-w-6xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {roles.map((role, index) => (
          <div
            key={index}
            onClick={() => handleCardClick(role.route)}
            className={`
              cursor-pointer rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition transform hover:scale-105
              ${role.title === "User" 
                ? "bg-blue-50 border-2 border-blue-500" 
                : "bg-white border border-transparent"
              }
            `}
          >
            {/* Image */}
            <div className="h-64 w-full overflow-hidden rounded-t-2xl">
              <img
                src={role.img}
                alt={role.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Text Content */}
            <div className="p-5">
              <h3 className="text-xl font-semibold text-gray-900 mb-1">
                {role.title}
              </h3>
              <p className="text-sm text-blue-600 mb-2">{role.subtitle}</p>
              <p className="text-gray-600 mb-4">{role.desc}</p>
              <button className={`w-full px-4 py-2 rounded-lg font-medium transition 
                ${role.title === "User"
                  ? "bg-blue-500 text-white hover:bg-blue-600 border-none"
                  : "border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
                }
              `}>
                {role.button}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
