import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";

export default function UserLogin() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User Login Data:", formData);
    navigate("/user-dashboard"); // Prototype redirect
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-100 via-white to-blue-100 p-6">
      {/* Added top margin so it doesn't stick to the top */}
      <div className="bg-white/90 backdrop-blur-md p-8 rounded-3xl shadow-2xl w-full max-w-md border border-gray-200 mt-10">
        
        {/* Heading */}
        <h2 className="text-4xl font-extrabold text-center text-blue-700 mb-2">
          Login Now
        </h2>
        <p className="text-center text-gray-600 mb-8">
          Access your BuildHub account easily
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Email */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="Enter your password"
              required
            />
            <div className="text-right mt-1">
              <Link
                to="/forgot-password"
                className="text-sm text-blue-600 hover:underline"
              >
                Forgot password?
              </Link>
            </div>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2.5 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-all duration-300 shadow-md hover:shadow-lg"
          >
            Login
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center my-6">
          <hr className="flex-1 border-gray-300" />
          <span className="px-3 text-gray-500 text-sm">or</span>
          <hr className="flex-1 border-gray-300" />
        </div>

        {/* Social Login in one row */}
        <div className="flex items-center justify-between gap-3">
          {/* Google */}
          <button
            type="button"
            className="flex items-center justify-center gap-2 border border-gray-300 rounded-lg py-2.5 w-1/2 hover:bg-gray-100 transition-all duration-300"
          >
            <FcGoogle className="text-xl" />
            <span className="text-gray-700 font-medium text-sm sm:text-base">
              Google
            </span>
          </button>

          {/* Facebook */}
          <button
            type="button"
            className="flex items-center justify-center gap-2 border border-gray-300 rounded-lg py-2.5 w-1/2 hover:bg-blue-50 transition-all duration-300"
          >
            <FaFacebook className="text-blue-600 text-xl" />
            <span className="text-gray-700 font-medium text-sm sm:text-base">
              Facebook
            </span>
          </button>
        </div>

        {/* Register Link */}
        <p className="text-center text-gray-600 mt-8 text-sm">
          Don’t have an account?{" "}
          <Link
            to="/user-register"
            className="text-blue-600 font-semibold hover:underline"
          >
            Register here
          </Link>
        </p>
      </div>
    </div>
  );
}
