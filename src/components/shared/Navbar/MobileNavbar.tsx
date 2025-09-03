"use client";

import Link from "next/link";
import { useState } from "react";
import { FaChevronDown, FaTimes } from "react-icons/fa";

interface MobileNavbarProps {
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const MobileNavbar: React.FC<MobileNavbarProps> = ({
  isMobileMenuOpen,
  setIsMobileMenuOpen,
}) => {
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  const navLinks = [
    { label: "Home", href: "/" },
    {
      label: "Shop",
      children: [
        { label: "Men", href: "/men" },
        { label: "Women", href: "/women" },
        { label: "Kids", href: "/kids" },
      ],
    },
    {
      label: "About",
      children: [
        { label: "Company", href: "/company" },
        { label: "Team", href: "/team" },
      ],
    },
    { label: "Contact", href: "/contact" },
  ];

  const toggleSubMenu = (menu: string) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  const handleCloseMenu = () => {
    setIsMobileMenuOpen(false);
    setTimeout(() => setOpenMenu(null), 500);
  };

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-500 ease-in-out
        ${isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        onClick={handleCloseMenu}
      ></div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-72 bg-white shadow-lg z-50 overflow-y-auto
        transform transition-transform duration-500 ease-in-out
        ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="font-bold text-lg">Menu</h2>
          <button
            onClick={handleCloseMenu}
            className="p-2 rounded hover:bg-gray-100 cursor-pointer"
            aria-label="Close menu"
          >
            <FaTimes size={18} />
          </button>
        </div>

        {/* Menu Items */}
        <ul className="p-4 space-y-2">
          {navLinks.map((item) =>
            item.children ? (
              <li key={item.label}>
                <button
                  onClick={() => toggleSubMenu(item.label)}
                  className="w-full flex items-center justify-between p-2 rounded hover:bg-gray-100 cursor-pointer"
                >
                  <span>{item.label}</span>
                  <FaChevronDown
                    className={`transition-transform duration-300 ${
                      openMenu === item.label ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Submenu */}
                <ul
                  className={`ml-4 mt-1 overflow-hidden transition-all duration-300
                  ${
                    openMenu === item.label
                      ? "max-h-40 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  {item.children.map((sub) => (
                    <li key={sub.label}>
                      <Link
                        href={sub.href}
                        onClick={handleCloseMenu}
                        className="block p-2 rounded hover:bg-gray-100"
                      >
                        {sub.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            ) : (
              <li key={item.label}>
                <Link
                  href={item.href}
                  onClick={handleCloseMenu}
                  className="block p-2 rounded hover:bg-gray-100"
                >
                  {item.label}
                </Link>
              </li>
            )
          )}
        </ul>
      </div>
    </>
  );
};

export default MobileNavbar;
