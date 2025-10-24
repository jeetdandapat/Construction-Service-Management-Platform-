import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-16 px-6 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Brand Section */}
        <div>
          <h3 className="text-3xl font-bold mb-3 text-teal-400">BuildHub</h3>
          <p className="text-gray-400">
            Connecting homeowners with skilled professionals and quality materials to build dream homes.
          </p>
        </div>

        {/* Support Section */}
        <div>
          <h4 className="font-semibold mb-4 text-lg">Support</h4>
          <ul className="space-y-2 text-gray-400">
            <li className="hover:text-teal-400 cursor-pointer transition-all duration-300">Help Center</li>
            <li className="hover:text-teal-400 cursor-pointer transition-all duration-300">Contact</li>
            <li className="hover:text-teal-400 cursor-pointer transition-all duration-300">FAQs</li>
          </ul>
        </div>

        {/* Legal Section */}
        <div>
          <h4 className="font-semibold mb-4 text-lg">Legal</h4>
          <ul className="space-y-2 text-gray-400">
            <li className="hover:text-teal-400 cursor-pointer transition-all duration-300">Privacy Policy</li>
            <li className="hover:text-teal-400 cursor-pointer transition-all duration-300">Terms of Use</li>
            <li className="hover:text-teal-400 cursor-pointer transition-all duration-300">Cookie Policy</li>
          </ul>
        </div>

        {/* Social / Newsletter */}
        <div>
          <h4 className="font-semibold mb-4 text-lg">Follow Us</h4>
          <div className="flex space-x-3 mb-4">
            <a href="#" className="bg-gray-700 p-2 rounded-full hover:bg-teal-400 hover:text-white transition">
              <FaFacebookF className="text-lg" />
            </a>
            <a href="#" className="bg-gray-700 p-2 rounded-full hover:bg-teal-400 hover:text-white transition">
              <FaTwitter className="text-lg" />
            </a>
            <a href="#" className="bg-gray-700 p-2 rounded-full hover:bg-teal-400 hover:text-white transition">
              <FaLinkedinIn className="text-lg" />
            </a>
          </div>
          <p className="text-gray-400 text-sm mb-2">Subscribe for updates and news.</p>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Your email"
              className="w-full p-2 rounded-lg text-gray-900 focus:outline-none"
            />
            <button className="bg-teal-400 hover:bg-teal-500 px-4 rounded-lg font-medium transition text-white">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="mt-16 border-t border-gray-700 pt-6 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} BuildHub. All rights reserved.
      </div>
    </footer>
  );
}
