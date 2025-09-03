"use client";
import Container from "@/components/Reusable/Container/Container";
import Link from "next/link";
import { FiPhoneCall } from "react-icons/fi";

const TopNavbar = () => {
  return (
    <section className="hidden lg:flex text-secondary">
      <Container>
        <div className="py-2.5 flex justify-between text-sm">
          <Link href={"tel:+8801712345678"} className="flex items-center gap-1">
            <FiPhoneCall /> +8801712345678
          </Link>

          <div className="space-x-3 uppercase text-xs font-medium">
            <span className="cursor-pointer"> Order Tracking</span>
            <span className="cursor-pointer">Gift</span>
            <span className="cursor-pointer">Blogs</span>
            <span className="cursor-pointer">EMI Policy</span>
            <span className="cursor-pointer">Store Location</span>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default TopNavbar;
