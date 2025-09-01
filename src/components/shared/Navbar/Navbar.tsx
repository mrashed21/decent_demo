"use client";

import MainNavbar from "./MainNavbar";
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
    </nav>
  );
};

export default Navbar;
