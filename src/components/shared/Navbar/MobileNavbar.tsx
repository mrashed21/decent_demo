"use client";

import { useState } from "react";
import { FaChevronDown, FaTimes } from "react-icons/fa";

interface MobileNavbarProps {
  setIsMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const MobileNavbar: React.FC<MobileNavbarProps> = ({ setIsMobileMenuOpen }) => {
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  const toggleSubMenu = (menu: string) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  const handleItemClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <div
        className="fixed inset-0 bg-black/50 z-40"
        onClick={() => {
          setIsMobileMenuOpen(false);
        }}
      ></div>
      {/* Sidebar */}
      <div className="fixed top-0 left-0 h-full w-72 bg-white shadow-lg z-50 overflow-y-auto transform transition-transform duration-300 ease-in-out translate-x-0">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="font-bold text-lg">Menu</h2>
          <button
            onClick={() => {
              setIsMobileMenuOpen(false);
            }}
            className="p-2 rounded hover:bg-gray-100"
            aria-label="Close menu"
          >
            <FaTimes size={18} />
          </button>
        </div>

        {/* Menu items */}
        <ul className="p-4 space-y-2">
          <li
            onClick={handleItemClick}
            className="p-2 rounded hover:bg-gray-100 cursor-pointer"
          >
            Home
          </li>

          {/* Shop submenu */}
          <li>
            <button
              onClick={() => toggleSubMenu("shop")}
              className="w-full flex items-center justify-between p-2 rounded hover:bg-gray-100"
            >
              <span>Shop</span>
              <FaChevronDown
                className={`transition-transform ${
                  openMenu === "shop" ? "rotate-180" : ""
                }`}
              />
            </button>
            {openMenu === "shop" && (
              <ul className="ml-4 mt-2 space-y-1">
                <li
                  onClick={handleItemClick}
                  className="p-2 rounded hover:bg-gray-100 cursor-pointer"
                >
                  Men
                </li>
                <li
                  onClick={handleItemClick}
                  className="p-2 rounded hover:bg-gray-100 cursor-pointer"
                >
                  Women
                </li>
                <li
                  onClick={handleItemClick}
                  className="p-2 rounded hover:bg-gray-100 cursor-pointer"
                >
                  Kids
                </li>
              </ul>
            )}
          </li>

          {/* About submenu */}
          <li>
            <button
              onClick={() => toggleSubMenu("about")}
              className="w-full flex items-center justify-between p-2 rounded hover:bg-gray-100"
            >
              <span>About</span>
              <FaChevronDown
                className={`transition-transform ${
                  openMenu === "about" ? "rotate-180" : ""
                }`}
              />
            </button>
            {openMenu === "about" && (
              <ul className="ml-4 mt-2 space-y-1">
                <li
                  onClick={handleItemClick}
                  className="p-2 rounded hover:bg-gray-100 cursor-pointer"
                >
                  Company
                </li>
                <li
                  onClick={handleItemClick}
                  className="p-2 rounded hover:bg-gray-100 cursor-pointer"
                >
                  Team
                </li>
              </ul>
            )}
          </li>

          <li
            onClick={handleItemClick}
            className="p-2 rounded hover:bg-gray-100 cursor-pointer"
          >
            Contact
          </li>
        </ul>
      </div>
    </>
  );
};

export default MobileNavbar;
