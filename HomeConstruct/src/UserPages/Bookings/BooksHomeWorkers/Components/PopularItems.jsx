import React from "react";
import { ChevronRight, Star } from "lucide-react";

/* ---------------------- WORKER DUMMY DATA ---------------------- */

const workerData = {
  masons: [
    { id: 1, name: "Rahul Kumar", skill: "Mason", experience: "8+ years", rating: 4.8, price: "₹900/day", image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=300&h=300&fit=crop" },
    { id: 2, name: "Suresh Yadav", skill: "Mason", experience: "5+ years", rating: 4.6, price: "₹750/day", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=300&fit=crop" },
    { id: 3, name: "Vikram Singh", skill: "Mason", experience: "10+ years", rating: 4.9, price: "₹1100/day", image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=300&h=300&fit=crop" },
    { id: 4, name: "Anil Sharma", skill: "Mason", experience: "6+ years", rating: 4.5, price: "₹800/day", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&h=300&fit=crop" },
  ],
  plumbers: [
    { id: 5, name: "Manoj Verma", skill: "Plumber", experience: "7+ years", rating: 4.7, price: "₹850/day", image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=300&h=300&fit=crop" },
    { id: 6, name: "Deepak Gupta", skill: "Plumber", experience: "4+ years", rating: 4.4, price: "₹650/day", image: "https://images.unsplash.com/photo-1540569014015-19a7be504e3a?w=300&h=300&fit=crop" },
    { id: 7, name: "Ravi Tiwari", skill: "Plumber", experience: "9+ years", rating: 4.8, price: "₹950/day", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop" },
    { id: 8, name: "Sanjay Das", skill: "Plumber", experience: "6+ years", rating: 4.6, price: "₹800/day", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop" },
  ],
  electricians: [
    { id: 9, name: "Amit Patel", skill: "Electrician", experience: "8+ years", rating: 4.9, price: "₹1000/day", image: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=300&h=300&fit=crop" },
    { id: 10, name: "Rakesh Jha", skill: "Electrician", experience: "5+ years", rating: 4.5, price: "₹750/day", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop" },
    { id: 11, name: "Nitin Kumar", skill: "Electrician", experience: "12+ years", rating: 5.0, price: "₹1200/day", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300&h=300&fit=crop" },
    { id: 12, name: "Pradeep Roy", skill: "Electrician", experience: "7+ years", rating: 4.7, price: "₹900/day", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&h=300&fit=crop" },
  ],
};

/* ---------------------- WORKER CARD ---------------------- */

const WorkerCard = ({ name, skill, experience, rating, price, image }) => (
  <div className="reveal min-w-[250px] bg-white shadow-md rounded-2xl p-4 border border-gray-200 hover:shadow-lg hover:-translate-y-1 transition-all">
    <div className="w-full h-40 rounded-xl overflow-hidden mb-4">
      <img src={image} className="w-full h-full object-cover" />
    </div>
    <h3 className="font-bold text-gray-900 text-lg">{name}</h3>
    <p className="text-sm text-gray-600 mb-2">{skill} • {experience}</p>

    <div className="flex items-center gap-1 mb-3">
      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
      <span className="text-sm font-semibold text-gray-900">{rating}</span>
    </div>

    <div className="flex items-center justify-between">
      <span className="text-lg font-bold text-orange-600">{price}</span>
      <button className="px-4 py-1.5 bg-orange-600 text-white rounded-full text-sm hover:bg-orange-700 transition">
        Book Now
      </button>
    </div>
  </div>
);

/* ---------------------- WORKER ROW ---------------------- */

const WorkerRow = ({ title, workers }) => (
  <div className=" reveal py-4">
    <div className="flex items-center justify-between mb-3 px-1">
      <h3 className="text-xl font-bold text-gray-900">{title}</h3>

      <button className="flex items-center gap-1 text-sm font-semibold text-blue-600 hover:text-blue-800 transition">
        View All <ChevronRight className="w-4 h-4" />
      </button>
    </div>

    <div className="flex gap-4 overflow-x-auto scrollbar-hide pb-2 px-1">
      {workers.map((worker) => (
        <WorkerCard key={worker.id} {...worker} />
      ))}
      <div className="min-w-[12px]" />
    </div>
  </div>
);

/* ---------------------- MAIN PAGE ---------------------- */

const WorkersPage = () => {
  return (
    <div className="px-4 sm:px-6 lg:px-8 py-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">
        Available Workers by Category
      </h2>

      <WorkerRow title="Mason Workers" workers={workerData.masons} />
      <WorkerRow title="Plumber Workers" workers={workerData.plumbers} />
      <WorkerRow title="Electrician Workers" workers={workerData.electricians} />
    </div>
  );
};

export default WorkersPage;
