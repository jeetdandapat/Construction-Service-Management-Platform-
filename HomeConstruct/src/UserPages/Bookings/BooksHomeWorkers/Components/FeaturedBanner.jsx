export default function FeaturedBanner() {
  return (
    <div className="reveal max-w-6xl mx-auto px-4 mt-5">
      <div className="w-full h-88 sm:h-64 md:h-82 rounded-3xl overflow-hidden shadow-xl relative">

        {/* ORIGINAL IMAGE — NO ZOOM CHANGE */}
        <img
          src="/Materials/bl.png"
          alt="Featured Banner"
          className="w-full h-full object-cover"
        />

        {/* DARK OVERLAY FOR TEXT READABILITY */}
        <div className="absolute inset-0 bg-black/30"></div>

        {/* CENTERED TEXT */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">

          <h2 className="text-white text-2xl sm:text-4xl md:text-5xl font-bold drop-shadow-xl leading-tight">
            Premium Construction Materials
          </h2>

          <p className="text-white/90 text-sm sm:text-base md:text-lg mt-2 drop-shadow-md max-w-xl">
            Cement, Bricks, Tools, Electrical & Plumbing Supplies — Everything You Need in One Place
          </p>

          <button className="mt-4 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-2 rounded-full shadow-lg transition">
            Shop Now
          </button>

        </div>

      </div>
    </div>
  );
}
