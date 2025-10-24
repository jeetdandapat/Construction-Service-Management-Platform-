import React from "react";

export default function BuyMaterials() {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold text-gray-800 mb-2">Buy Materials</h1>
      <p className="text-gray-600 mb-6">
        Browse and order high-quality building materials for your project.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {["Cement", "Bricks", "Steel", "Sand", "Tiles", "Paint"].map(
          (material) => (
            <div
              key={material}
              className="p-5 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition cursor-pointer"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-3">
                <span className="text-blue-600 font-bold text-lg">
                  {material[0]}
                </span>
              </div>
              <h3 className="text-lg font-semibold text-gray-800">
                {material}
              </h3>
              <p className="text-sm text-gray-500 mt-1">
                High-quality {material.toLowerCase()} for construction needs.
              </p>
            </div>
          )
        )}
      </div>
    </div>
  );
}
