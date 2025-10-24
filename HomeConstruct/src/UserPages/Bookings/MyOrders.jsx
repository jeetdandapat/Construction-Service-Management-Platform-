import React from "react";

export default function MyOrders() {
  const orders = [
    { id: 1, type: "Material", item: "Cement (20 bags)", status: "Delivered" },
    { id: 2, type: "Service", item: "Mason Booking", status: "In Progress" },
    { id: 3, type: "Material", item: "Steel (10 rods)", status: "Pending" },
  ];

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold text-gray-800 mb-2">My Orders</h1>
      <p className="text-gray-600 mb-6">Track your past and current bookings.</p>

      <div className="overflow-x-auto bg-white rounded-xl shadow-sm border border-gray-200">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-blue-50 text-gray-700 font-semibold">
            <tr>
              <th className="px-6 py-3">#</th>
              <th className="px-6 py-3">Type</th>
              <th className="px-6 py-3">Item</th>
              <th className="px-6 py-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id} className="border-t">
                <td className="px-6 py-3">{order.id}</td>
                <td className="px-6 py-3">{order.type}</td>
                <td className="px-6 py-3">{order.item}</td>
                <td
                  className={`px-6 py-3 font-medium ${
                    order.status === "Delivered"
                      ? "text-green-600"
                      : order.status === "Pending"
                      ? "text-yellow-600"
                      : "text-blue-600"
                  }`}
                >
                  {order.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
