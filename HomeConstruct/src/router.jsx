import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/navber";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import UserLogin from "./UserPages/UserLogin";
import UserRegister from "./UserPages/UserRegister";
import UserRoutes from "./UserPages/UserRoutes"; // ✅ Import sub-routes

// Layout wrapper for Navbar & Footer control
function Layout({ children }) {
  const location = useLocation();

  // ✅ Hide Navbar/Footer on user pages
  const hideNavbarRoutes = [
    "/user-dashboard",
    "/buy-materials",
    "/book-mason",
    "/book-labour",
    "/hire-engineer",
    "/hire-architect",
    "/my-orders",
    "/profile",
  ];

  const hideNavbar = hideNavbarRoutes.includes(location.pathname);

  return (
    <>
      {!hideNavbar && <Navbar />}
      {children}
      {!hideNavbar && <Footer />}
    </>
  );
}

export default function Router() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          {/* Public routes */}
          <Route path="/" element={<Home />} />
          <Route path="/user-login" element={<UserLogin />} />
          <Route path="/user-register" element={<UserRegister />} />

          {/* Dashboard + internal pages */}
          <Route path="/*" element={<UserRoutes />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
