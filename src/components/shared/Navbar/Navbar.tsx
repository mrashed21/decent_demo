"use client";

import MainNavbar from "./MainNavbar";
import MobileBottomNavbar from "./MobileBottomNavbar";
import MobileNavbar from "./MobileNavbar";
import SubNavbar from "./SubNavbar";
import TopNavbar from "./TopNavbar";

const Navbar = () => {
  return (
    <nav className="">
      {/* top navbar for contact, links  */}
      <TopNavbar />
      {/* sub navbar for logo, search, cart, auth */}
      <SubNavbar />
      {/* main navbar fo category menu */}
      <MainNavbar />
      {/* navbar for mobile  */}
      <MobileNavbar />
      {/* mobile bottom navbar */}
      <MobileBottomNavbar />
    </nav>
  );
};

export default Navbar;
