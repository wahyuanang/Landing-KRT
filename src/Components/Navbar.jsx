import React, { useState } from "react";
import { AlignRight } from "lucide-react";
import logo from "../Assets/images/logo-amcc.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = (dropdown) => {
    if (openDropdown === dropdown) {
      setOpenDropdown(null);
    } else {
      setOpenDropdown(dropdown);
    }
  };

  return (
    <nav className="bg-white fixed w-full z-50 border-b border-gray-200">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center pt-2">
            <a className="block text-teal-600" href="#">
              <span className="sr-only">Home</span>
              <img src={logo} alt="logo volunteerin" className="w-72" />
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={toggleMenu}
      >
        <div
          className={`fixed top-0 left-0 w-full bg-white shadow-lg transform transition-transform duration-700 ease-in-out ${
            isMenuOpen ? "translate-y-0" : "-translate-y-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <div className="flex justify-end p-4">
            <button
              className=" p-2 text-gray-600 transition hover:text-gray-600/75"
              onClick={toggleMenu}
            >
              <AlignRight size={32} strokeWidth={3} />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
