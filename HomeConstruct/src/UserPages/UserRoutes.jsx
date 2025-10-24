import React from "react";
import { Routes, Route } from "react-router-dom";
import UserDashboard from "./UserDashboard";
import BuyMaterials from "./Bookings/BuyMaterials";
import BookMason from "./Bookings/BookMason";
import BookLabour from "./Bookings/BookLabour";
import HireEngineer from "./Bookings/HireEngineer";
import HireArchitect from "./Bookings/HireArchitect";
import MyOrders from "./Bookings/MyOrders";
import Profile from "./Bookings/Profile"; // ✅ Added profile page

export default function UserRoutes() {
  return (
    <Routes>
      <Route path="/user-dashboard" element={<UserDashboard />} />
      <Route path="/buy-materials" element={<BuyMaterials />} />
      <Route path="/book-mason" element={<BookMason />} />
      <Route path="/book-labour" element={<BookLabour />} />
      <Route path="/hire-engineer" element={<HireEngineer />} />
      <Route path="/hire-architect" element={<HireArchitect />} />
      <Route path="/my-orders" element={<MyOrders />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
}
