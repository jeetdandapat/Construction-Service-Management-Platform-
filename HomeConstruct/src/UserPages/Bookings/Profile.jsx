import React, { useState } from "react";

export default function Profile() {
  const [profile, setProfile] = useState({
    name: "Jeet Dandapat",
    email: "jeet@example.com",
    phone: "+91 9876543210",
    location: "Kolkata, India",
  });

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold text-gray-800 mb-2">Profile</h1>
      <p className="text-gray-600 mb-6">View and manage your personal details.</p>

      <div className="max-w-lg bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex flex-col items-center mb-4">
          <div className="w-20 h-20 rounded-full bg-blue-500 flex items-center justify-center text-white text-3xl font-bold mb-3">
            {profile.name.charAt(0)}
          </div>
          <h3 className="text-lg font-semibold text-gray-800">{profile.name}</h3>
          <p className="text-gray-500">{profile.email}</p>
        </div>

        <div className="space-y-2 text-gray-700">
          <p><strong>Phone:</strong> {profile.phone}</p>
          <p><strong>Location:</strong> {profile.location}</p>
        </div>

        <button className="mt-5 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">
          Edit Profile
        </button>
      </div>
    </div>
  );
}
