"use client";

import Container from "@/components/Reusable/Container/Container";
import SearchInput from "@/components/Reusable/SearchInput/SearchInput";
import { FaBars, FaGift } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { PiNoteDuotone } from "react-icons/pi";

interface SubNavbarProps {
  setIsMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const SubNavbar: React.FC<SubNavbarProps> = ({ setIsMobileMenuOpen }) => {
  return (
    <section className=" bg-secondary text-primary">
      <Container className="flex items-center justify-between py-4 px-2  gap-5">
        {/* logo section */}
        <div className="">
          <h1 className="text-xl font-semibold ">Decent</h1>
        </div>
        {/* search section */}
        <div className="w-sm xl:max-w-xl">
          <SearchInput
            placeholder="Search for products..."
            className="bg-primary text-secondary"
          />
        </div>
        {/* hamberger menu icon */}
        <div className="xl:hidden">
          <button
            type="button"
            className="cursor-pointer"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          >
            <FaBars size={25} />
          </button>
        </div>
        {/* for xl screen */}
        <section className="hidden xl:flex items-center space-x-5">
          <button className="relative px-7 py-2 rounded-full bg-[#111] flex items-center justify-center overflow-hidden">
            <span className="bg-gradient-to-r from-yellow-200 to-yellow-500 bg-clip-text text-transparent font-medium text-sm">
              OFFER
            </span>
            <span className="absolute -top-1 right-3 text-yellow-400 text-lg">
              <FaGift />
            </span>
          </button>

          <button className="px-5 py-2 border border-tertiary rounded-xl text-tertiary flex items-center gap-1 text-sm cursor-pointer">
            <PiNoteDuotone size={16} /> Prime Order
          </button>

          <button className="px-5 py-2 border border-tertiary rounded-xl text-tertiary flex items-center gap-1 text-sm cursor-pointer">
            <IoCartOutline size={16} /> Cart
          </button>

          <button className="px-5 py-2 border border-tertiary rounded-xl text-tertiary flex items-center gap-1 text-sm cursor-pointer">
            Login
          </button>
        </section>
      </Container>
    </section>
  );
};

export default SubNavbar;
