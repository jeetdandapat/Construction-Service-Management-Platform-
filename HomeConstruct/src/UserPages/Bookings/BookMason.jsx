import React from "react";

export default function BookMason() {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold text-gray-800 mb-2">Book Mason</h1>
      <p className="text-gray-600 mb-6">
        Hire skilled and verified masons for your construction work.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {[1, 2, 3].map((id) => (
          <div
            key={id}
            className="p-5 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition"
          >
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center font-bold text-blue-600">
                M{id}
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">Mason {id}</h3>
                <p className="text-sm text-gray-500">5+ years experience</p>
              </div>
            </div>
            <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">
              Book Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
