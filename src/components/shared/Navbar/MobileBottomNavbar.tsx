"use client";
import Link from "next/link";
import { BsBookmarkHeart } from "react-icons/bs";
import { FaCartArrowDown } from "react-icons/fa";
import { IoMdHome } from "react-icons/io";
import { IoMenuSharp } from "react-icons/io5";

const MobileBottomNavBar = () => {
  return (
    <section>
      <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 bg-white  border-t border-gray-200 rounded-t-lg shadow-lg w-full xl:hidden z-10 ">
        <div className="flex justify-between lg:justify-center lg:space-x-12 mx-3 items-center py-2">
          <Link
            className="text-sm font-medium tracking-wide text-black flex flex-col items-center"
            href="/"
          >
            <IoMdHome className="text-2xl text-center" />

            <span className="text-xs text-gray-400">Home</span>
          </Link>

          <button
            className="text-sm  font-medium tracking-wide text-black flex flex-col items-center"
            type="button"
          >
            <IoMenuSharp className="text-xl text-center" />

            <span className="text-xs text-gray-400">Category</span>
          </button>

          <button
            className="text-sm  font-medium tracking-wide text-black flex flex-col items-center"
            type="button"
          >
            <FaCartArrowDown className="text-xl text-center" />

            <span className="text-xs text-gray-400">Cart</span>
          </button>
          <button
            className="text-sm  font-medium tracking-wide text-black flex flex-col items-center"
            type="button"
          >
            <BsBookmarkHeart className="text-xl text-center" />

            <span className="text-xs text-gray-400">Wishlist</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default MobileBottomNavBar;
