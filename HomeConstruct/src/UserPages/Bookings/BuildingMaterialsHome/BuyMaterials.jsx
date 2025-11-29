import React, { useEffect } from "react";

// COMPONENT IMPORTS
import HeroSection from "./Components/HeroSection";
import QuickActions from "./Components/QuickActions";
import SearchBar from "./Components/SearchBar";
import CategoryIcons from "./Components/CategoryIcons";
import FeaturedBanner from "./Components/FeaturedBanner";
import StillLooking from "./Components/StillLooking";
import PopularItems from "./Components/PopularItems";
import BottomNav from "./Components/BottomNav";

 // LOCAL IMAGES IMPORT




export default function BuyMaterials() {


  // DATA ARRAYS
  const quickActions = [
    { label: "Materials", img: "https://cdn-icons-png.flaticon.com/512/1995/1995574.png" },
    { label: "Payments", img: "https://cdn-icons-png.flaticon.com/512/891/891462.png" },
    { label: "Transport", img: "https://cdn-icons-png.flaticon.com/512/7439/7439675.png" },
    { label: "Services", img: "https://cdn-icons-png.flaticon.com/512/6819/6819166.png" },
  ];

 const categoryIcons = [
  { label: "For You", img: "https://cdn-icons-png.flaticon.com/512/1828/1828884.png", active: true },
  { label: "Bricks", img: "/Materials/brick.png" },
  { label: "Cement", img: "/Materials/Cement.png" },
  { label: "sand", img: "/Materials/sand.png" },

  { label: "Steel", img: "/Materials/steel.png" },
  { label: "Tiles", img: "/Materials/tiles.png" },
  { label: "Plumbing", img: "/Materials/plumbing.png" },
  { label: "Electrical", img: "/Materials/electrical.png" },
  { label: "Bricks", img: "/Materials/brick.png" },
  { label: "Cement", img: "/Materials/Cement.png" },
  { label: "sand", img: "/Materials/sand.png" },

  { label: "Steel", img: "/Materials/steel.png" },
  { label: "Tiles", img: "/Materials/tiles.png" },
  { label: "Plumbing", img: "/Materials/plumbing.png" },
  { label: "Electrical", img: "/Materials/electrical.png" },
  { label: "Bricks", img: "/Materials/brick.png" },
  { label: "Cement", img: "/Materials/Cement.png" },
    { label: "sand", img: "/Materials/sand.png" },

  { label: "Steel", img: "/Materials/steel.png" },
  { label: "Tiles", img: "/Materials/tiles.png" },
  { label: "Plumbing", img: "/Materials/plumbing.png" },
  { label: "Electrical", img: "/Materials/electrical.png" },
];


const stillLooking = [
  { title: "Cement Bag (50kg)", img: "/Materials/Cement.png" },
  { title: "Red Bricks", img: "/Materials/brick.png" },
  { title: "TMT Steel Rods", img: "/Materials/steel.png" },
  { title: "Floor Tiles", img: "/Materials/tiles.png" },
  { title: "Cement Bag (50kg)", img: "/Materials/Cement.png" },
  { title: "Red Bricks", img: "/Materials/brick.png" },
  { title: "TMT Steel Rods", img: "/Materials/steel.png" },
  { title: "Floor Tiles", img: "/Materials/tiles.png" },
  { title: "Cement Bag (50kg)", img: "/Materials/Cement.png" },
  { title: "Red Bricks", img: "/Materials/brick.png" },
  { title: "TMT Steel Rods", img: "/Materials/steel.png" },
  { title: "Floor Tiles", img: "/Materials/tiles.png" },
];


  const popular = [
  {
    name: "UltraTech Cement",
    img: "/Materials/Cement.png",
  },
  {
    name: "Premium Sand",
    img: "/Materials/sand.png",
  },
  {
    name: "Concrete Blocks",
    img: "/Materials/brick.png",
  },
    {
    name: "Premium Sand",
    img: "/Materials/sand.png",
  },
  {
    name: "Concrete Blocks",
    img: "/Materials/brick.png",
  },
  {
    name: "White Cement",
    img: "/Materials/Cement.png",
  },
     {
    name: "Premium Sand",
    img: "/Materials/sand.png",
  },
  {
    name: "Concrete Blocks",
    img: "/Materials/brick.png",
  },
  {
    name: "White Cement",
    img: "/Materials/Cement.png",
  },
  
];


  return (
    <div className="bg-slate-100 min-h-screen w-full flex flex-col">

      {/* scrollable content */}
      <div className="flex-1 overflow-y-auto pb-24">

        <HeroSection />
        <QuickActions quickActions={quickActions} />
        <SearchBar />
        <CategoryIcons categoryIcons={categoryIcons} />
        <FeaturedBanner />
        <StillLooking stillLooking={stillLooking} />
        <PopularItems popular={popular} />
        <PopularItems popular={popular} />

      </div>

      {/* bottom navbar */}
      <BottomNav />

    </div>
  );
}
