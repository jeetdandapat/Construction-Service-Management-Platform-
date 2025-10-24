import React from "react";
import { FaHome, FaTools, FaShoppingCart, FaUserFriends } from "react-icons/fa";

const userSteps = [
  {
    icon: <FaHome className="text-5xl text-blue-500 mb-3" />,
    title: "Plan Your Home",
    desc: "Design and plan your dream home with guidance from professionals.",
  },
  {
    icon: <FaTools className="text-5xl text-green-500 mb-3" />,
    title: "Hire Skilled Professionals",
    desc: "Find masons, engineers, architects, and laborers for your project.",
  },
  {
    icon: <FaShoppingCart className="text-5xl text-yellow-500 mb-3" />,
    title: "Buy Materials",
    desc: "Purchase all building materials online from trusted dealers.",
  },
  {
    icon: <FaUserFriends className="text-5xl text-purple-500 mb-3" />,
    title: "Manage Your Project",
    desc: "Track progress and communicate with your team from one dashboard.",
  },
];

export default function HowUserUses() {
  return (
    <section className="py-20 px-6 bg-gray-100">
      <h2 className="text-2xl md:text-5xl font-extrabold text-center text-gray-800 mb-16">
        How Users Use BuildHub
      </h2>

      <div className="max-w-7xl mx-auto grid gap-10 sm:grid-cols-2 lg:grid-cols-2">
        {userSteps.map((step, index) => (
         <div
          key={index}
          className="bg-white w-full mx-auto rounded-2xl shadow-lg hover:shadow-xl transition transform hover:scale-105 p-8 flex flex-col items-center justify-start text-center"
         >
         <div className="flex justify-center mb-4">{step.icon}</div>
         <h3 className="text-2xl font-bold mb-3 text-black">{step.title}</h3>
          <p className="text-gray-700">{step.desc}</p>
       </div>

        ))}
      </div>
    </section>
  );
}
