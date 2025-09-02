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
    <nav>
      {/* top navbar */}
      <TopNavbar />
      {/* sub navbar */}
      <SubNavbar setIsMobileMenuOpen={setIsMobileMenuOpen} />
      {/* main navbar */}
      <MainNavbar />
      {/*Mobile side navbar */}
      <MobileNavbar
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />

      {/* mobile bottom navbar */}
      <MobileBottomNavbar />
    </nav>
  );
};

export default Navbar;
