"use client";
import Container from "@/components/Reusable/Container/Container";
import { FiPhoneCall } from "react-icons/fi";

const TopNavbar = () => {
  return (
    <section className="hidden lg:flex">
      <Container>
        <div className="py-2.5 flex justify-between text-sm">
          <span className="flex items-center gap-1">
            <FiPhoneCall /> +8801712345678
          </span>

          <div className="space-x-3 uppercase text-xs font-medium">
            <span className=""> Order Tracking</span>
            <span className="">Gift</span>
            <span className="">Blogs</span>
            <span className="">EMI Policy</span>
            <span className="">Store Location</span>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default TopNavbar;
