export default function BottomNav() {
  return (
  <div className="  w-full bg-white border-t border-gray-300 py-2 px-4 flex justify-between items-center fixed bottom-0 left-0 right-0 shadow-xl z-50">
        <div className="flex flex-col items-center text-blue-600 text-xs cursor-pointer hover:scale-110 transition">
          <img src="https://cdn-icons-png.flaticon.com/512/25/25694.png" className="w-6 mb-1" alt="home" />
          <span>Home</span>
        </div>

        <div className="flex flex-col items-center text-gray-600 text-xs cursor-pointer hover:scale-110 transition">
          <img src="https://cdn-icons-png.flaticon.com/512/709/709722.png" className="w-6 mb-1" alt="explore" />
          <span>Explore</span>
        </div>

        <div className="flex flex-col items-center text-gray-600 text-xs cursor-pointer hover:scale-110 transition">
          <img src="https://cdn-icons-png.flaticon.com/512/561/561127.png" className="w-6 mb-1" alt="categories" />
          <span>Categories</span>
        </div>

        <div className="flex flex-col items-center text-gray-600 text-xs cursor-pointer hover:scale-110 transition">
          <img src="https://cdn-icons-png.flaticon.com/512/1077/1077012.png" className="w-6 mb-1" alt="account" />
          <span>Account</span>
        </div>

        <div className="flex flex-col items-center text-gray-600 text-xs cursor-pointer relative hover:scale-110 transition">
          <img src="https://cdn-icons-png.flaticon.com/512/2838/2838895.png" className="w-6 mb-1" alt="cart" />
          <span>Cart</span>
          <span className="absolute -top-1 -right-2 bg-red-600 text-white text-[10px] px-1.5 py-0.5 rounded-full">
            3
          </span>
        </div>
      </div>
  );
}
