"use client";

import { useState } from "react";
import MainNavbar from "./MainNavbar";
import MobileBottomNavbar from "./MobileBottomNavbar";
import MobileNavbar from "./MobileNavbar";
import SubNavbar from "./SubNavbar";
import TopNavbar from "./TopNavbar";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <nav className="">
      {/* top navbar for contact, links  */}
      <TopNavbar />
      {/* sub navbar for logo, search, cart, auth */}
      <SubNavbar setIsMobileMenuOpen={setIsMobileMenuOpen} />
      {/* main navbar fo category menu */}
      <MainNavbar />
      {/* navbar for mobile  */}
      {isMobileMenuOpen && (
        <MobileNavbar setIsMobileMenuOpen={setIsMobileMenuOpen} />
      )}
      {/* mobile bottom navbar */}
      <MobileBottomNavbar />
    </nav>
  );
};

export default Navbar;
