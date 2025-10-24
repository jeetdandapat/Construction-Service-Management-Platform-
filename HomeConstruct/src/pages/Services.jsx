import React from "react";
import { FaHammer, FaTruck, FaCogs, FaPaintBrush } from "react-icons/fa";

const services = [
  {
    icon: <FaHammer className="text-4xl text-blue-600" />,
    title: "Construction Services",
    desc: "Hire skilled masons, laborers, and engineers for building your dream home.",
  },
  {
    icon: <FaTruck className="text-4xl text-green-600" />,
    title: "Material Delivery",
    desc: "Get building materials delivered directly from trusted dealers to your site.",
  },
  {
    icon: <FaCogs className="text-4xl text-purple-600" />,
    title: "Project Management",
    desc: "Track and manage your project progress with ease using our platform.",
  },
  {
    icon: <FaPaintBrush className="text-4xl text-red-600" />,
    title: "Design & Architecture",
    desc: "Connect with architects and designers to create modern and efficient spaces.",
  },
];

export default function ServicesPage() {
  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800">
          Our Services
        </h2>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          BuildHub offers a wide range of construction and home-building services to make your project seamless, efficient, and stress-free.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white flex flex-col items-center justify-start p-8 rounded-2xl shadow-md hover:shadow-xl transition transform hover:scale-105 text-center"
          >
            <div className="mb-5">{service.icon}</div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
            <p className="text-gray-600 text-sm">{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
