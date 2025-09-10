"use client";
import { Product } from "@/types/productTypes";
import Link from "next/link";
import { useState } from "react";
import { CgEditBlackPoint, CgShoppingCart } from "react-icons/cg";
import { FiRepeat } from "react-icons/fi";
import { HiMiniDocumentCurrencyBangladeshi } from "react-icons/hi2";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoShareSocialOutline, IoStarOutline } from "react-icons/io5";
import { LiaMoneyCheckAltSolid } from "react-icons/lia";
import ReletedProduct from "../ReletedProduct/ReletedProduct";
import ProductDescription from "./ProductDescription";
import ProductSpecification from "./ProductSpecification";
interface ProductDetailsProps {
  product: Product;
}

interface Item {
  id: number;
  name: string;
  price: number;
  save: number;
  img: string;
}

interface FrequentlyProduct {
  name: string;
  price: number;
  oldPrice: number;
  image: string;
}

const ProductDetailsData = ({ product }: ProductDetailsProps) => {
  const {
    name,
    main_price,
    discount_price,
    image,
    discount_percent,
    tag,
    slug,
  } = product;

  const [isDescriptionShow, setIsDescriptionShow] = useState(false);
  const [selectedImage, setSelectedImage] = useState(image[0]);
  const [showMore, setShowMore] = useState<boolean>(false);

  console.log(discount_price, tag, slug);
  const handleMainImageClick = (image: string) => {
    setSelectedImage(image);
  };

  const items: Item[] = [
    {
      id: 1,
      name: "Anker High Speed USB C Charger 20W",
      price: 1190,
      save: 300,
      img: "https://dazzle.com.bd/_next/image?url=https%3A%2F%2Fdazzle.sgp1.cdn.digitaloceanspaces.com%2F39566%2FAnker-High-Speed-USB-C-Charger-20W-Price-in-bangladesh-1.jpg&w=96&q=75",
    },
    {
      id: 2,
      name: "Apple 20W USB C Power Adapter 3 Pin",
      price: 2990,
      save: 500,
      img: "https://dazzle.com.bd/_next/image?url=https%3A%2F%2Fdazzle.sgp1.cdn.digitaloceanspaces.com%2F27046%2FLe-Prius-BIRMAN-Case-For-iPhone-16-Pro-Max-(3).png&w=96&q=75",
    },
    {
      id: 3,
      name: "Samsung Fast Charger 25W",
      price: 1500,
      save: 200,
      img: "https://dazzle.com.bd/_next/image?url=https%3A%2F%2Fdazzle.sgp1.cdn.digitaloceanspaces.com%2F17343%2F1000004944.png&w=96&q=75",
    },
    {
      id: 4,
      name: "Xiaomi 33W Charger",
      price: 1200,
      save: 150,
      img: "https://dazzle.com.bd/_next/image?url=https%3A%2F%2Fdazzle.sgp1.cdn.digitaloceanspaces.com%2F17286%2FUntitled-design(11).png&w=96&q=75",
    },
  ];
  const visibleItems = showMore ? items : items.slice(0, 2);

  const product1: FrequentlyProduct = {
    name: "Spigen ArcStation 27W USB C Fast Charging Adapter 3 pin",
    price: 1990,
    oldPrice: 3490,
    image:
      "https://dazzle.com.bd/_next/image?url=https%3A%2F%2Fdazzle.sgp1.cdn.digitaloceanspaces.com%2F39538%2FSpigen-ArcStation-27W-USB-C-Fast-Charging-Adapter-Price-in-Bangladesh-white.jpg&w=128&q=75",
  };

  const product2: FrequentlyProduct = {
    name: "Spigen iPhone 16 Pro Max Glas.tR SLIM HD Screen Protector",
    price: 1999,
    oldPrice: 3990,
    image:
      "https://dazzle.com.bd/_next/image?url=https%3A%2F%2Fdazzle.sgp1.cdn.digitaloceanspaces.com%2F17198%2FUntitled-design(91).png&w=128&q=75",
  };

  const totalItems: number = 2;
  const totalPrice: number = product1.price + product2.price;

  return (
    <section>
      <section className="lg:grid grid-cols-2 mt-5 space-x-5">
        {/* image section */}
        <div className="lg:sticky top-5 self-start">
          <div className="flex flex-col-reverse lg:flex-row gap-2 h-[420px] md:h-[550px] lg:h-[480px] mb-10 ">
            {/* Thumbnail list */}
            <div className="flex flex-row lg:flex-col gap-3 scrollbar-thin w-full lg:w-auto max-w-[320px]">
              {/* Main image thumbnail */}
              <img
                src={image[0]}
                alt="Main Image"
                onClick={() => handleMainImageClick(image[0])}
                className={`h-16 w-16 sm:h-24 sm:w-24 object-cover cursor-pointer rounded ${
                  selectedImage === image[0] ? "ring-2 ring-borderColor" : ""
                }`}
              />

              {/* Other thumbnails */}
              {image?.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Thumbnail ${index + 1}`}
                  onClick={() => handleMainImageClick(img)}
                  className={`h-16 w-16 sm:h-24 sm:w-24 object-cover cursor-pointer rounded ${
                    selectedImage === img ? "ring-2 ring-borderColor" : ""
                  }`}
                />
              ))}
            </div>

            {/* Image or Video preview */}
            <div className="relative aspect-[3/4] overflow-hidden group w-full">
              <div
                //   onMouseMove={handleMouseMove}
                //   onMouseLeave={handleMouseLeave}
                className="relative w-full h-full overflow-hidden"
              >
                <img
                  src={selectedImage}
                  alt="Main Preview"
                  className={`w-full h-full object-cover transition-transform duration-300 rounded-md ${
                    ""
                    //   hoverPosition ? "scale-300" : ""
                  }`}
                  // style={{
                  //   transformOrigin: hoverPosition
                  //     ? `${hoverPosition.x}% ${hoverPosition.y}%`
                  //     : "center",
                  // }}
                />
              </div>
            </div>
          </div>

          {/* Frequently Buy Together Section */}
          <div className="bg-primary hidden lg:flex flex-col p-5 rounded-xl shadow-sm mt-auto">
            {/* Heading */}
            <h2 className="text-2xl font-semibold mb-8 text-secondary">
              Frequently Buy Together
            </h2>

            {/* Products & Total */}
            <div className="flex items-center justify-between gap-3 mb-8">
              {/* Products Section */}
              <div className="flex items-center gap-2">
                {/* Product 1 */}
                <div className="flex flex-col items-center text-center max-w-[160px]">
                  <div className="w-20 h-20 bg-primary rounded-lg p-1 shadow-sm mb-3">
                    <img
                      src={product1.image}
                      alt={product1.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <p className="text-xs text-secondary line-clamp-3 leading-tight mb-2">
                    {product1.name}
                  </p>
                  <div className="flex flex-col items-center">
                    <span className="text-sm font-semibold text-secondary">
                      BDT {product1.price.toLocaleString()}
                    </span>
                    <span className="text-xs text-secondary/40 line-through">
                      BDT {product1.oldPrice.toLocaleString()}
                    </span>
                  </div>
                </div>

                {/* Plus sign */}
                <div className="text-2xl text-secondary/40 font-light mx-2">
                  +
                </div>

                {/* Product 2 */}
                <div className="flex flex-col items-center text-center max-w-[160px]">
                  <div className="w-20 h-20 bg-primary rounded-lg p-3 shadow-sm mb-3">
                    <img
                      src={product2.image}
                      alt={product2.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <p className="text-xs text-secondary line-clamp-3 leading-tight mb-2">
                    {product2.name}
                  </p>
                  <div className="flex flex-col items-center">
                    <span className="text-sm font-semibold text-secondary">
                      BDT {product2.price.toLocaleString()}
                    </span>
                    <span className="text-xs text-secondary/40 line-through">
                      BDT {product2.oldPrice.toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>

              {/* Equals and Total */}
              <div className="flex items-center gap-2">
                <div className="text-2xl text-secondary/40 font-light">=</div>
                <div className="flex flex-col items-start">
                  <span className="text-sm text-secondary/60 mb-1">
                    {totalItems} Items
                  </span>
                  <span className="xl:text-xl font-bold text-borderColor">
                    BDT {totalPrice.toLocaleString()}
                  </span>
                </div>
              </div>
            </div>

            {/* Add to Cart Button */}
            <div className="flex justify-start">
              <button className="flex items-center gap-2 bg-secondary/80 text-primary py-3 px-6 rounded-md  transition-colors duration-200">
                <CgShoppingCart size={16} />
                <span className="text-sm font-medium uppercase tracking-wide">
                  ADD TO CART
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* product details */}
        <section>
          {/* brands section */}
          <div className="flex items-center justify-between">
            <Link
              href={"/"}
              className="px-3 py-2 rounded border border-borderColor font-medium"
            >
              Brand: Apple
            </Link>

            {/* button */}
            <div
              className="flex items-center
           space-x-1.5"
            >
              <button className="px-3 py-2 rounded border border-borderColor text-xl">
                <FiRepeat />
              </button>
              <button className="px-3 py-2 rounded border border-borderColor text-xl">
                <IoMdHeartEmpty />
              </button>
              <button className="px-3 py-2 rounded border border-borderColor text-xl">
                <IoShareSocialOutline />
              </button>
            </div>
          </div>

          <div className="mt-5 bg-foreground p-3 rounded">
            <div className="md:flex justify-between">
              <div className="">
                {/* products name */}
                <h2 className="text-xl font-medium">{name}</h2>
                {/* short discription {variant, storage, color} */}
                <div className="bg-tertiary/20 border border-borderColor p-2 rounded mt-2 w-fit">
                  <p className="text-sm">
                    <span>Blue Shadow </span>| <span>12/256GB</span> |{" "}
                    <span>Dual Sim</span>
                  </p>
                </div>
              </div>

              {/* price section */}
              <div className="mt-2">
                <h3 className="font-semibold text-borderColor md:text-lg">
                  BDT {main_price}
                </h3>
                <p className="line-through text-sm text-secondary/40 md:text-base">
                  BDT {discount_percent}
                </p>
              </div>
            </div>

            {/* review section */}
            <div className="mt-2">
              <h2 className="flex items-center space-x-1 text-yellow-500 font-medium">
                <span className="space-x-2 text-xl"> 5</span> <IoStarOutline />{" "}
                <IoStarOutline /> <IoStarOutline />
                <IoStarOutline /> <IoStarOutline />
                <span className="text-xs text-secondary/40 mt-2">
                  223 customer review
                </span>
              </h2>
            </div>

            {/* short details */}
            <div className="text-justify mt-2">
              <h2 className="text-sm font-semibold">
                Display:
                <span className="font-normal text-xs">
                  6.9&quot;LTPO Super Retina XDR OLED, 120Hz, HDR10, Dolby
                  Vision, 2000 nits brightness
                </span>
              </h2>
              <h2 className="text-sm font-semibold">
                Build Quality:
                <span className="font-normal text-xs">
                  Grade 5 titanium frame, Ceramic Shield (Mohs 4), IP68
                  certified
                </span>
              </h2>
              <h2 className="text-sm font-semibold">
                Performance:
                <span className="font-normal text-xs">
                  Apple A18 Pro chip (3nm), 6-core GPU, iOS 18, USB-C Gen 2
                </span>
              </h2>
              <h2 className="text-sm font-semibold">
                Camera:
                <span className="font-normal text-xs">
                  Triple-lens 48MP wide + 5x telephoto + ultrawide, ProRes, 3D
                  video, LiDAR scanner
                </span>
              </h2>

              <h2 className="text-sm font-semibold">
                Battery & Charging:
                <span className="font-normal text-xs">
                  4685mAh battery, 50% in 30 min, MagSafe, Qi2, reverse wired
                  charging
                </span>
              </h2>
            </div>
          </div>

          {/* variant section */}
          <div className="mt-3 bg-foreground p-3 rounded">
            <h2 className="md:text-lg font-semibold">
              Color: <span className="font-normal text-sm">Blue</span>
            </h2>

            {/* variant image */}
            <div className="flex items-center space-x-2 my-2">
              {image?.map((img, index) => (
                <div key={index} className="h-16 w-16">
                  <img
                    src={img}
                    alt={`image-${index}`}
                    className="h-full w-full rounded-md"
                  />
                </div>
              ))}
            </div>

            {/* variant */}
            <div className="mt-2">
              <h2 className="font-semibold uppercase">Region/Variant</h2>
              <div className="flex flex-col md:flex-row md:items-center gap-2 mt-2">
                <span className="bg-tertiary px-2 py-1 rounded w-fit text-xs">
                  USA (Dual e-Sim)
                </span>
                <span className="bg-background border border-borderColor px-2 py-1 rounded w-fit text-xs">
                  SG/UAE (Sim + e-Sim)
                </span>
                <span className="bg-background border border-borderColor px-2 py-1 rounded w-fit text-xs">
                  USA (Sim + e-Sim)
                </span>
              </div>
            </div>

            {/* storege */}
            <div className="flex items-center space-x-2.5 mt-3">
              <h2 className="uppercase font-semibold text-sm ">Srorege :</h2>{" "}
              <span className="font-normal bg-tertiary text-sm px-2 py-1 rounded">
                256GB
              </span>
              <span className="font-normal bg-background border border-borderColor text-sm rounded px-2 py-1">
                512GB
              </span>
              <span className="font-normal bg-background border border-borderColor text-sm rounded px-2 py-1">
                1TB
              </span>
            </div>
          </div>

          {/* booking price */}
          <div className=" mt-3 grid grid-cols-3 space-x-2">
            <div className="bg-foreground rounded p-2 flex flex-col items-center text-center space-y-1">
              <LiaMoneyCheckAltSolid />
              <p className="text-xs">Minimum Booking</p>
              <h3 className="text-sm font-semibold">10000 BDT</h3>
            </div>

            <div className="bg-foreground rounded p-2 flex flex-col items-center  text-center space-y-1">
              <CgEditBlackPoint />
              <p className="text-xs">Purchase Points</p>
              <h3 className="text-sm font-semibold">1000 BDT</h3>
            </div>

            <div className="bg-foreground rounded p-2 flex flex-col items-center  text-center space-y-1">
              <HiMiniDocumentCurrencyBangladeshi />
              <p className="text-xs">EMI Available</p>
              <h3 className="text-sm font-semibold">Details</h3>
            </div>
          </div>

          {/* price & offer price */}
          <div className="mt-3 grid gap-3 md:grid-cols-2">
            {/* Offer Price */}
            <label className="flex items-center space-x-3 p-3 border border-secondary/20 rounded-lg cursor-pointer bg-primary">
              <input
                type="radio"
                name="price"
                defaultChecked
                className="mt-1 w-5 h-5 appearance-none rounded-full border-2 border-secondary/40 checked:border-[6px] checked:border-tertiary checked:bg-primary"
              />
              <div>
                <p className="font-semibold lg:text-sm">
                  Offer Price:{" "}
                  <span className="text-borderColor font-bold">1,39,990 ৳</span>
                </p>
                <p className="text-sm text-secondary/50">
                  Cash/Card/MFS Payment
                </p>
              </div>
            </label>

            {/* Regular Price */}
            <label className="flex items-center space-x-3 p-3 border border-secondary/20 rounded-lg cursor-pointer bg-primary">
              <input
                type="radio"
                name="price"
                className="mt-1 w-5 h-5 appearance-none rounded-full border-2 border-secondary/40 checked:border-[6px] checked:border-tertiary checked:bg-primary"
              />
              <div>
                <p className="font-semibold lg:text-sm">
                  Regular Price:{" "}
                  <span className="text-borderColor font-bold">1,56,410 ৳</span>
                </p>
                <p className="text-sm text-secondary/50 line-clamp-1">
                  EMI begin at BDT 13,034 per month
                </p>
              </div>
            </label>
          </div>

          {/* see more save more */}
          <div className="mt-5">
            {/* Delivery Info */}
            <p className="font-medium text-sm lg:text-base">
              Estimated delivery:{" "}
              <span className="underline cursor-pointer">{`0-3 days`}</span>
            </p>

            {/* Promo Banner */}
            <div className="bg-secondary text-primary px-4 py-2 rounded-lg mt-3 flex items-center space-x-2">
              <span className="text-lg">🔥</span>
              <span className="font-semibold">Buy More Save More!</span>
            </div>

            {/* Items List */}
            <div className="mt-4 space-y-3">
              {visibleItems.map((item: Item) => (
                <label
                  key={item.id}
                  className="flex flex-col lg:flex-row items-start lg:items-center justify-between border border-secondary/20 rounded-lg p-2 lg:p-3 cursor-pointer bg-foreground hover:shadow-md transition-shadow duration-200"
                >
                  <div className="flex items-center space-x-3 w-full">
                    <input
                      type="checkbox"
                      className="w-5 h-5 accent-tertiary"
                    />
                    <img
                      src={item.img}
                      alt={item.name}
                      className="w-12 h-12 object-contain"
                    />
                    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center w-full">
                      <p className="font-medium text-xs lg:text-sm">
                        {item.name}
                      </p>
                      <div className="flex items-center space-x-3 mt-2 lg:mt-0">
                        <p className="font-semibold text-sm">{item.price}</p>
                        <p className="text-red-600 border border-red-400 px-2 py-1 text-xs rounded">
                          Save ৳ {item.save}
                        </p>
                      </div>
                    </div>
                  </div>
                </label>
              ))}

              {/* Show More / Show Less Button */}
              {items.length > 2 && (
                <div className="flex items-center justify-center my-3">
                  <button
                    onClick={() => setShowMore(!showMore)}
                    className="text-borderColor text-center text-sm hover:underline transition-all duration-150"
                  >
                    {showMore ? "Show Less" : "Show More"}
                  </button>
                </div>
              )}
            </div>
          </div>

          <div className="space-y-5">
            {/* Section 1: Dazzle Care / Warranty */}
            <div className="border border-secondary/20 rounded-lg overflow-hidden">
              <div className="bg-black text-white px-4 py-2 flex items-center space-x-2">
                <img
                  src="https://dazzle.com.bd/_next/image?url=%2Ficons%2Fcheckmark.png&w=64&q=75"
                  alt="Dazzle Care"
                  className="w-5 h-5"
                />
                <span className="font-semibold">Decent Care</span>
              </div>
              <div className="bg-gray-100 px-4 py-3 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    className="w-4 h-4 accent-borderColor"
                  />
                  <span className="text-sm">
                    Decent Care+ for 1 Year (Brand New Replacement Guarantee)
                  </span>
                </div>
                <span className="font-semibold text-sm">BDT 6,985</span>
              </div>
              <div className="px-4 py-2 text-xs text-gray-600">
                <input
                  type="checkbox"
                  checked
                  className="mr-2 accent-tertiary"
                />
                I agree to Decentt&rsquo;
                <a href="#" className="underline text-blue-500">
                  terms & conditions
                </a>
              </div>
            </div>

            {/* Section 2: Price & Actions */}
            <div className="space-y-3">
              {/* Price */}
              <p className="text-xl lg:text-2xl font-bold text-[#b5854d]">
                BDT 1,39,990
              </p>

              {/* Buttons */}
              <div className="grid grid-cols-2 gap-3">
                <button className="bg-black text-white px-4 py-3 rounded-lg flex items-center justify-center space-x-2 hover:bg-gray-900 transition">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.35 2.7a1 1 0 00.9 1.3h12.5a1 1 0 00.9-1.3L17 13M7 13V6h10v7"
                    ></path>
                  </svg>
                  <span>ADD TO CART</span>
                </button>
                <button className="bg-[#f7e7d0] px-4 py-3 rounded-lg flex items-center justify-center space-x-2 hover:bg-[#f0dbc2] transition">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 3h18M3 3v18M3 21h18M21 3v18"
                    ></path>
                  </svg>
                  <span>BUY NOW</span>
                </button>
              </div>

              {/* Stock & Warranty Info */}
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-green-500 text-white px-4 py-3 rounded-lg text-center font-semibold">
                  In Stock
                  <p className="text-xs font-normal">Check Delivery Time</p>
                </div>
                <div className="bg-gray-100 text-gray-800 px-4 py-3 rounded-lg text-center">
                  1 Year Apple Warranty
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
      {/* releted product section */}
      <section className="mt-10">
        {" "}
        <ReletedProduct />
      </section>

      {/* product description */}
      <section className="">
        {/* Tab Buttons */}
        <div className="flex mt-5">
          <button
            onClick={() => setIsDescriptionShow(false)}
            className={`px-4 py-2 font-semibold ${
              !isDescriptionShow
                ? "bg-tertiary text-color-secondary rounded-lg"
                : "bg-color-primary text-secondary/70 cursor-pointer"
            }`}
          >
            Specification
          </button>
          <button
            onClick={() => setIsDescriptionShow(true)}
            className={`px-4 py-2 font-semibold ${
              isDescriptionShow
                ? "bg-tertiary text-color-secondary rounded-lg"
                : "bg-color-primary text-secondary/70 cursor-pointer"
            }`}
          >
            Description
          </button>
        </div>
        <hr className="border-t border-secondary/20 mt-3" />

        {/* Tab Content */}
        <div>
          {!isDescriptionShow ? (
            <ProductSpecification />
          ) : (
            <ProductDescription />
          )}
        </div>
      </section>
    </section>
  );
};

export default ProductDetailsData;
