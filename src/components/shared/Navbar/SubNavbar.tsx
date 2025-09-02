"use client";

import Container from "@/components/Reusable/Container/Container";
import SearchInput from "@/components/Reusable/SearchInput/SearchInput";
import { FaBars } from "react-icons/fa";

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
        <div className="w-full xl:max-w-3xl">
          <SearchInput
            placeholder="Search for products..."
            className="bg-primary text-secondary"
          />
        </div>
        {/* hamberger menu icon */}
        <div className="xl:hidden">
          <FaBars
            size={25}
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          />
        </div>
        {/* for xl screen */}
        <section className="hidden xl:flex items-center space-x-3">
          <button>Offter</button>
          <button>Prime Order</button>
          <button>Cart</button>
          <button>Login</button>
        </section>
      </Container>
    </section>
  );
};

export default SubNavbar;
