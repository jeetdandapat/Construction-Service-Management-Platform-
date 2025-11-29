export default function PopularItemsDouble({ popular }) {
  return (
    <>
      {/* FIRST SECTION */}
      <div className="reveal max-w-6xl mx-auto mt-6 px-4">

        <div className="bg-white rounded-2xl p-5 shadow-xl border-t-4 border-b-4 border-blue-300">

          <p className="text-base font-bold mb-4 text-blue-700">
            Popular Construction Picks
          </p>

          <div className="flex gap-5 overflow-x-auto pb-3">
            {popular.map((item, idx) => (
              <div
                key={`first-${idx}`}
                className="min-w-[170px] bg-white border border-blue-300 rounded-2xl p-4 shadow-md hover:shadow-lg transition text-center"
              >
                {/* IMAGE FIX: No crop + border + zoom out */}
                <div className="w-full h-24 rounded-xl overflow-hidden border border-gray-300 flex items-center justify-center bg-white mb-3">
                  <img
                    src={item.img}
                    className="max-w-full max-h-full object-contain scale-[0.90]"
                    alt={item.name}
                  />
                </div>

                <p className="text-sm font-semibold text-gray-900">
                  {item.name}
                </p>

                <button className="mt-2 bg-blue-600 text-white text-xs px-3 py-1 rounded-lg hover:bg-blue-700">
                  Add to Cart
                </button>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* SECOND SECTION */}
      <div className="reveal max-w-6xl mx-auto mt-6 px-4">

        <div className="bg-white rounded-2xl p-5 shadow-xl border-t-4 border-b-4 border-blue-300">

          <p className="text-base font-bold mb-4 text-blue-700">
            Popular Construction Picks
          </p>

          <div className="flex gap-5 overflow-x-auto pb-3">
            {popular.map((item, idx) => (
              <div
                key={`second-${idx}`}
                className="min-w-[170px] bg-white border border-blue-300 rounded-2xl p-4 shadow-md hover:shadow-lg transition text-center"
              >
                {/* IMAGE FIX: No crop + border + zoom out */}
                <div className="w-full h-24 rounded-xl overflow-hidden border border-gray-300 flex items-center justify-center bg-white mb-3">
                  <img
                    src={item.img}
                    className="max-w-full max-h-full object-contain scale-[0.90]"
                    alt={item.name}
                  />
                </div>

                <p className="text-sm font-semibold text-gray-900">
                  {item.name}
                </p>

                <button className="mt-2 bg-blue-600 text-white text-xs px-3 py-1 rounded-lg hover:bg-blue-700">
                  Add to Cart
                </button>
              </div>
            ))}
          </div>

        </div>
      </div>
    </>
  );
}
