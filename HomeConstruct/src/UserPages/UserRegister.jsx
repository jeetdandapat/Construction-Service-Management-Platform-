import React, { useState } from "react";
import { 
  HiUserCircle, 
  HiUser, 
  HiMail, 
  HiPhone, 
  HiLocationMarker, 
  HiLockClosed 
} from "react-icons/hi";

export default function UserRegister() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    pin: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User Registered:", formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white transition-colors duration-300">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8 border border-gray-300">
        {/* Heading */}
        <div className="flex items-center justify-center mb-6">
          <HiUserCircle className="text-4xl text-blue-600 mr-2" />
          <h2 className="text-3xl font-bold text-gray-800">
            Create Your Account
          </h2>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name */}
          <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2">
            <HiUser className="text-gray-400 mr-2 text-xl" />
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full bg-white text-gray-800 focus:outline-none"
            />
          </div>

          {/* Email */}
          <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2">
            <HiMail className="text-gray-400 mr-2 text-xl" />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-white text-gray-800 focus:outline-none"
            />
          </div>

          {/* Phone */}
          <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2">
            <HiPhone className="text-gray-400 mr-2 text-xl" />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="w-full bg-white text-gray-800 focus:outline-none"
            />
          </div>

        {/* Address & PIN */}
<div className="flex space-x-4">
  <div className="flex-1 flex items-center border border-gray-300 rounded-lg px-3 py-3"> {/* increased py */}
    <HiLocationMarker className="text-gray-400 mr-2 text-xl" />
    <input
      type="text"
      name="address"
      placeholder="Address"
      value={formData.address}
      onChange={handleChange}
      className="w-full bg-white text-gray-800 focus:outline-none py-2" // added py for taller input
    />
  </div>
  <div className="w-28 flex items-center border border-gray-300 rounded-lg px-3 py-3">
    <HiLocationMarker className="text-gray-400 mr-1 text-xl" />
    <input
      type="text"
      name="pin"
      placeholder="PIN"
      value={formData.pin}
      onChange={handleChange}
      className="w-full bg-white text-gray-800 focus:outline-none py-2"
    />
  </div>
</div>


          {/* Password */}
          <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2">
            <HiLockClosed className="text-gray-400 mr-2 text-xl" />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full bg-white text-gray-800 focus:outline-none"
            />
          </div>

          {/* Confirm Password */}
          <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2">
            <HiLockClosed className="text-gray-400 mr-2 text-xl" />
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full bg-white text-gray-800 focus:outline-none"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition"
          >
            Register
          </button>
        </form>

        <p className="text-center text-gray-600 mt-6">
          Already have an account?{" "}
          <a
            href="/user-login"
            className="text-blue-600 font-semibold hover:underline"
          >
            Login here
          </a>
        </p>
      </div>
    </div>
  );
}
