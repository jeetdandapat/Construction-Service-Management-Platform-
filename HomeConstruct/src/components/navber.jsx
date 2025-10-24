import React, { useState, useEffect } from "react";
import { HiMenu, HiX, HiChevronDown } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [languageOpen, setLanguageOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("English");

  const navigate = useNavigate();

  const languages = [
    "English", "हिन्दी", "বাংলা", "తెలుగు", "தமிழ்",
    "मराठी", "ગુજરાતી", "ಕನ್ನಡ", "ଓଡ଼ିଆ", "മലയാളം",
    "ਪੰਜਾਬੀ", "Español", "Français"
  ];

  // Smooth scroll to a section on the same page
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }
  };

  // Auto-highlight active section while scrolling
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "services", "contact", "join"];
      const scrollPos = window.scrollY + 100;
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && scrollPos >= section.offsetTop) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-sm border-b">
      <div className="flex justify-between items-center h-16 px-4 md:px-8">
        {/* Logo + Language */}
        <div className="flex items-center space-x-3">
          {/* Clickable Logo */}
          <div
            onClick={() => {
              navigate("/"); // Always go to home page
              setMenuOpen(false);
              window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll to top
            }}
            className="flex items-center space-x-2 cursor-pointer hover:opacity-80 transition"
          >
            <div className="w-8 h-8 bg-blue-500 rounded-md flex items-center justify-center text-white font-bold">
              📄
            </div>
            <h1 className="text-xl font-semibold text-black">BuildHub</h1>
          </div>

          {/* Desktop Language Dropdown */}
          <div className="relative hidden md:block z-50">
            <button
              onClick={() => setLanguageOpen(!languageOpen)}
              className="px-3 py-1 rounded-lg border border-gray-300 text-black hover:bg-gray-100 transition flex items-center gap-1"
            >
              {selectedLanguage} <HiChevronDown className="w-4 h-4" />
            </button>
            {languageOpen && (
              <ul className="absolute left-0 mt-2 w-36 bg-gray-50 border border-gray-300 rounded-md shadow-lg z-50">
                {languages.map((lang) => (
                  <li
                    key={lang}
                    className="px-4 py-2 hover:bg-gray-200 cursor-pointer text-black font-medium"
                    onClick={() => {
                      setSelectedLanguage(lang);
                      setLanguageOpen(false);
                    }}
                  >
                    {lang}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6 font-medium">
          {["home", "about", "services", "contact", "join"].map((section) => (
            <button
              key={section}
              onClick={() => {
                // Always navigate to home first before scrolling
                navigate("/");
                setTimeout(() => scrollToSection(section), 200);
              }}
              className={`${
                activeSection === section ? "text-blue-600 font-bold" : "text-black"
              } hover:text-blue-600 transition`}
            >
              {section === "join"
                ? "Join BuildHub"
                : section.charAt(0).toUpperCase() + section.slice(1)}
            </button>
          ))}

          <button className="px-4 py-2 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700">
            Login
          </button>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center space-x-2">
          {/* Mobile Language Dropdown */}
          <div className="relative z-50">
            <button
              onClick={() => setLanguageOpen(!languageOpen)}
              className="px-2 py-1 rounded-lg border border-gray-300 text-black hover:bg-gray-100 transition flex items-center gap-1"
            >
              {selectedLanguage} <HiChevronDown className="w-4 h-4" />
            </button>
            {languageOpen && (
              <ul className="absolute top-12 left-0 w-36 bg-gray-50 border border-gray-300 rounded-md shadow-lg z-50">
                {languages.map((lang) => (
                  <li
                    key={lang}
                    className="px-4 py-2 hover:bg-gray-200 cursor-pointer text-black font-medium"
                    onClick={() => {
                      setSelectedLanguage(lang);
                      setLanguageOpen(false);
                    }}
                  >
                    {lang}
                  </li>
                ))}
              </ul>
            )}
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-black focus:outline-none"
          >
            {menuOpen ? <HiX className="w-6 h-6" /> : <HiMenu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-sm">
          <ul className="flex flex-col space-y-4 px-4 py-4">
            {["home", "about", "services", "contact", "join"].map((section) => (
              <li key={section}>
                <button
                  onClick={() => {
                    navigate("/");
                    setTimeout(() => scrollToSection(section), 200);
                  }}
                  className={`w-full text-left ${
                    activeSection === section ? "text-blue-600 font-bold" : "text-black"
                  } hover:text-blue-600 font-medium`}
                >
                  {section === "join"
                    ? "Join BuildHub"
                    : section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              </li>
            ))}
            <li>
              <button className="w-full px-4 py-2 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700">
                Login
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
