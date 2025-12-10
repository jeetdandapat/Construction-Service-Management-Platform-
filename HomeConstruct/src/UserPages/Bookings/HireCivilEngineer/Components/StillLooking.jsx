export default function StillLooking({ stillLooking }) {
  return (
    <div className="reveal max-w-6xl mx-auto mt-6 px-4">

      <p className="text-base font-bold text-gray-900 mb-2">
        Still looking for materials?
      </p>

      <div className="flex gap-4 overflow-x-auto pb-2 w-full">
        {stillLooking.map((item, idx) => (
          <div
            key={idx}
            className="min-w-[170px] bg-white rounded-2xl p-4 border border-blue-300 shadow-md hover:shadow-lg transition"
          >
            {/* IMAGE WRAPPER WITH BORDER + ZOOM OUT */}
            <div className="w-full h-24 rounded-xl overflow-hidden mb-3 border border-gray-300 flex items-center justify-center bg-white">
              <img
                src={item.img}
                alt={item.title}
                className="max-w-full max-h-full object-contain scale-[0.90]"
              />
            </div>

            <p className="text-sm font-semibold text-gray-900 leading-tight">
              {item.title}
            </p>

            <p className="text-xs font-semibold text-blue-600 mt-1">
              View Details
            </p>
          </div>
        ))}
      </div>

    </div>
  );
}
