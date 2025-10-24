import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  ShoppingCart,
  Hammer,
  Users,
  Wrench,
  PenTool,
  Box,
  CreditCard,
  User,
  LogOut,
  Menu,
  X,
} from "lucide-react";

export default function UserDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  // Sidebar navigation items
  const navItems = [
    { icon: LayoutDashboard, label: "Dashboard", path: "/user-dashboard" },
    { icon: ShoppingCart, label: "Buy Materials", path: "/buy-materials" },
    { icon: Hammer, label: "Book Mason", path: "/book-mason" },
    { icon: Users, label: "Book Labour", path: "/book-labour" },
    { icon: Wrench, label: "Hire Engineer", path: "/hire-engineer" },
    { icon: PenTool, label: "Hire Architect", path: "/hire-architect" },
    { icon: Box, label: "My Orders", path: "/my-orders" },
    { icon: CreditCard, label: "Payment History", path: "/payments" },
    { icon: User, label: "Profile", path: "/profile" },
  ];

  // Services section
  const services = [
    { icon: ShoppingCart, title: "Buy Materials", desc: "Order building materials easily", path: "/buy-materials" },
    { icon: Hammer, title: "Book Mason", desc: "Hire verified and skilled masons", path: "/book-mason" },
    { icon: Users, title: "Book Labour", desc: "Find reliable construction workers", path: "/book-labour" },
    { icon: Wrench, title: "Hire Engineer", desc: "Hire professional civil engineers", path: "/hire-engineer" },
    { icon: PenTool, title: "Hire Architect", desc: "Hire expert architects for design", path: "/hire-architect" },
  ];

  // Stats section
  const stats = [
    { label: "Active Orders", value: "3", icon: Box },
    { label: "Ongoing Projects", value: "1", icon: Wrench },
    { label: "Total Spent", value: "₹45,000", icon: CreditCard },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* ---------- DESKTOP SIDEBAR ---------- */}
      <aside className="hidden lg:flex flex-col w-64 bg-white border-r border-gray-200 shadow-md">
        <div className="p-6 border-b border-gray-200 flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-blue-500 flex items-center justify-center shadow-md">
            <LayoutDashboard className="w-5 h-5 text-white" />
          </div>
          <h1 className="text-lg font-bold text-blue-600">BuildHub</h1>
        </div>

        <nav className="flex-1 overflow-y-auto p-3 space-y-1">
          {navItems.map((item) => {
            const active = location.pathname === item.path;
            return (
              <Link
                key={item.label}
                to={item.path}
                className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-lg transition-all ${
                  active ? "bg-blue-500 text-white shadow-md" : "text-gray-800 hover:bg-blue-50"
                }`}
              >
                <item.icon className="w-5 h-5" />
                <span className="font-medium text-sm">{item.label}</span>
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-gray-200">
          <button className="w-full bg-red-500 text-white py-2.5 rounded-lg flex items-center justify-center gap-2 hover:bg-red-600 transition">
            <LogOut className="w-5 h-5" /> Logout
          </button>
        </div>
      </aside>

      {/* ---------- MOBILE OVERLAY ---------- */}
      {sidebarOpen && (
        <div className="fixed inset-0 bg-black/50 z-40 lg:hidden" onClick={() => setSidebarOpen(false)} />
      )}

      {/* ---------- MOBILE SIDEBAR ---------- */}
      <aside
        className={`fixed top-0 left-0 bottom-0 w-72 bg-white shadow-2xl z-50 transform transition-transform duration-300 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-6 flex items-center justify-between border-b border-gray-200">
          <h1 className="text-lg font-bold text-blue-600">BuildHub</h1>
          <button onClick={() => setSidebarOpen(false)} className="text-gray-600 hover:text-gray-900">
            <X className="w-5 h-5" />
          </button>
        </div>

        <nav className="p-3 space-y-1 overflow-y-auto h-[calc(100vh-150px)]">
          {navItems.map((item) => {
            const active = location.pathname === item.path;
            return (
              <Link
                key={item.label}
                to={item.path}
                onClick={() => setSidebarOpen(false)}
                className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-lg transition-all ${
                  active ? "bg-blue-500 text-white shadow-md" : "text-gray-800 hover:bg-blue-50"
                }`}
              >
                <item.icon className="w-5 h-5" />
                <span className="font-medium text-sm">{item.label}</span>
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-gray-200">
          <button className="w-full bg-red-500 text-white py-2.5 rounded-lg flex items-center justify-center gap-2 hover:bg-red-600 transition">
            <LogOut className="w-5 h-5" /> Logout
          </button>
        </div>
      </aside>

      {/* ---------- MAIN CONTENT ---------- */}
      <main className="flex-1 flex flex-col min-w-0">
        {/* HEADER (MOBILE) */}
        <header className="lg:hidden sticky top-0 bg-white border-b border-gray-200 p-4 flex items-center justify-between shadow-sm">
          <div className="flex items-center gap-3">
            <button onClick={() => setSidebarOpen(true)}>
              <Menu className="w-6 h-6 text-gray-800" />
            </button>
            <h1 className="text-lg font-bold text-blue-600">BuildHub</h1>
          </div>
          <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
            <User className="w-5 h-5 text-white" />
          </div>
        </header>

        {/* BODY */}
        <div className="flex-1 p-6 space-y-8">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Welcome to Your Dashboard</h1>
            <p className="text-gray-500 mt-1">Manage your construction project from one place</p>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="p-5 rounded-xl bg-white border border-gray-200 shadow-sm hover:shadow-md transition"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500">{stat.label}</p>
                    <h2 className="text-2xl font-bold text-gray-800 mt-1">{stat.value}</h2>
                  </div>
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <stat.icon className="w-5 h-5 text-blue-600" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Services Section */}
          <section>
            <h2 className="text-xl font-bold text-gray-800 mb-3">Our Services</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {services.map((service) => (
                <Link
                  key={service.title}
                  to={service.path}
                  className="p-5 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition cursor-pointer flex flex-col items-start"
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-3">
                    <service.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">{service.title}</h3>
                  <p className="text-sm text-gray-500 mt-1">{service.desc}</p>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
