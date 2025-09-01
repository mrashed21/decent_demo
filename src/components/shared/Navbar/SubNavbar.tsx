"use client";

import SearchInput from "@/components/Reusable/SearchInput/SearchInput";
import { FaBars } from "react-icons/fa";

const SubNavbar = () => {
  return (
    <section className="flex items-center justify-between py-4 px-2 md:px-5 lg:px-10 gap-5 bg-secondary text-primary">
      {/* logo section */}
      <div className="">
        <h1>Decent</h1>
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
        <FaBars size={25} />
      </div>
    </section>
  );
};

export default SubNavbar;
