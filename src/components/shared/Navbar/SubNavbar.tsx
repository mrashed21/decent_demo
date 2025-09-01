"use client";

import SearchInput from "@/components/Reusable/SearchInput/SearchInput";
import { FaBars } from "react-icons/fa";

interface SubNavbarProps {
  setIsMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const SubNavbar: React.FC<SubNavbarProps> = ({ setIsMobileMenuOpen }) => {
  return (
    <section className="flex items-center justify-between py-4 px-2 md:px-5 lg:px-10 gap-5 bg-secondary text-primary">
      {/* logo section */}
      <div className="">
        <h1 className="text-xl font-semibold ">Decent</h1>
      </div>
      {/* search section */}
      <div className="">
        <SearchInput
          placeholder="Search for products..."
          className="bg-primary text-secondary"
        />
      </div>
      {/* hamberger menu icon */}
      <div className="">
        <FaBars
          size={25}
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
        />
      </div>
    </section>
  );
};

export default SubNavbar;
