"use client";

import Container from "@/components/Reusable/Container/Container";
import Link from "next/link";
import { JSX, useState } from "react";
import {
  FaClock,
  FaCogs,
  FaHeadphones,
  FaLaptop,
  FaMobileAlt,
  FaTabletAlt,
  FaTv,
} from "react-icons/fa";
import { FaBars } from "react-icons/fa6";
import CategoryModal from "./CategoryModal";

type LinkItem = {
  label: string;
  href: string;
};

type MenuItem = {
  name: string;
  icon: JSX.Element;
  links: LinkItem[];
};

const MainNavbar = () => {
  const [hovered, setHovered] = useState<number | null>(null);
  const [categoryOpen, setCategoryOpen] = useState(false);

  const menuItems: MenuItem[] = [
    {
      name: "PHONES",
      icon: <FaMobileAlt className="inline mr-1" />,
      links: [
        { label: "iPhone", href: "/phones/iphone" },
        { label: "Samsung", href: "/phones/samsung" },
        { label: "OnePlus", href: "/phones/oneplus" },
        { label: "Xiaomi", href: "/phones/xiaomi" },
      ],
    },
    {
      name: "TABLET",
      icon: <FaTabletAlt className="inline mr-1" />,
      links: [
        { label: "iPad", href: "/tablet/ipad" },
        { label: "Samsung Tab", href: "/tablet/samsung" },
        { label: "Lenovo", href: "/tablet/lenovo" },
      ],
    },
    {
      name: "LAPTOP",
      icon: <FaLaptop className="inline mr-1" />,
      links: [
        { label: "MacBook", href: "/laptop/macbook" },
        { label: "Dell", href: "/laptop/dell" },
        { label: "HP", href: "/laptop/hp" },
        { label: "Asus", href: "/laptop/asus" },
      ],
    },
    {
      name: "SMART WATCH",
      icon: <FaClock className="inline mr-1" />,
      links: [
        { label: "Apple Watch", href: "/watch/apple" },
        { label: "Samsung Watch", href: "/watch/samsung" },
        { label: "Fitbit", href: "/watch/fitbit" },
      ],
    },
    {
      name: "GADGET",
      icon: <FaCogs className="inline mr-1" />,
      links: [
        { label: "VR Headsets", href: "/gadget/vr" },
        { label: "Drones", href: "/gadget/drones" },
        { label: "Smart Glasses", href: "/gadget/glasses" },
      ],
    },
    {
      name: "ACCESSORIES",
      icon: <FaCogs className="inline mr-1" />,
      links: [
        { label: "Adapters", href: "/accessories/adapters" },
        { label: "Power Banks", href: "/accessories/power-banks" },
        { label: "Laptop Sleeves", href: "/accessories/laptop-sleeves" },
        { label: "USB Hubs", href: "/accessories/usb-hubs" },
        { label: "Chargers", href: "/accessories/chargers" },
        { label: "Phone Cases", href: "/accessories/phone-cases" },
        { label: "Camera Accessories", href: "/accessories/camera" },
      ],
    },
    {
      name: "SOUNDS",
      icon: <FaHeadphones className="inline mr-1" />,
      links: [
        { label: "Headphones", href: "/sounds/headphones" },
        { label: "Speakers", href: "/sounds/speakers" },
      ],
    },
    {
      name: "SMART TV",
      icon: <FaTv className="inline mr-1" />,
      links: [
        { label: "Samsung", href: "/tv/samsung" },
        { label: "LG", href: "/tv/lg" },
      ],
    },
  ];

  return (
    <section className="bg-primary shadow-md text-secondary relative">
      <Container className="hidden xl:flex py-3">
        <div className="flex w-full items-center justify-between ">
          {/* popular  brands menu*/}
          <div>
            <button
              type="button"
              onClick={() => setCategoryOpen((prev) => !prev)}
              className="cursor-pointer"
            >
              <FaBars size={20} className="inline mr-2" />
            </button>
          </div>

          {/* category  */}
          <div className="flex gap-8 items-center relative">
            {menuItems.map((item, idx) => (
              <div
                key={idx}
                className="relative"
                onMouseEnter={() => setHovered(idx)}
                onMouseLeave={() => setHovered(null)}
              >
                {/* Menu Title with Icon */}
                <span className="cursor-pointer text-sm font-medium hover:text-tertiary transition flex items-center gap-1">
                  {item.icon}
                  {item.name}
                </span>

                {/* Dropdown */}
                {item.links.length > 0 && hovered === idx && (
                  <div className="absolute top-2.5 left-0 mt-2 w-[350px] bg-primary rounded-md shadow-lg p-5 grid grid-cols-2 gap-3 z-50">
                    {item.links.map((link, i) => (
                      <Link
                        key={i}
                        href={link.href}
                        className="text-gray-700 text-sm hover:text-tertiary transition"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className=""></div>
          {/* hot offer buton */}
          {/* <div>
            <button className="px-4 py-2 rounded-lg bg-secondary text-tertiary text-sm transition uppercase font-semibold">
              Online Exclusive
            </button>
          </div> */}
        </div>
      </Container>
      {categoryOpen && (
        <div className="absolute top-full left-5 w-full z-50">
          <CategoryModal setCategoryOpen={setCategoryOpen} />
        </div>
      )}
    </section>
  );
};

export default MainNavbar;
