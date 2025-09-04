"use client";
import { FaBangladeshiTakaSign } from "react-icons/fa6";
import { Product } from "../ProductWrapper/ProductSlider";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { name, main_price, discount_price, image, discount_percent, tag } =
    product;
  return (
    <section className="group flex flex-col bg-primary p-2 rounded-xl h-[320px] lg:h-[350px]">
      <div className="flex-grow">
        <div className="relative w-full h-48 overflow-hidden rounded-md mb-4">
          <img
            src={image[0]}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          {tag && (
            <span className="absolute top-0 left-0 bg-background border border-tertiary text-[8px] lg:text-xs text-secondary font-medium lg:font-bold px-1.5 lg:px-2 py-0.5 lg:py-1 rounded-full">
              {tag}
            </span>
          )}
          {discount_percent > 0 && (
            <span className="absolute top-0 right-0 bg-red-500 text-white text-[8px] lg:text-xs font-medium lg:font-bold px-1.5 lg:px-2 py-0.5 lg:py-1 rounded-full">
              -{discount_percent}%
            </span>
          )}
        </div>
        {/* Title */}
        <h3 className="text-xs lg:text-lg text-center font-medium xl:font-semibold text-secondary">
          {name}
        </h3>
      </div>

      {/* Price sticks to bottom */}
      <div className="mt-auto text-center">
        <div className="flex justify-center items-center space-x-2 mt-1 mb-2">
          <p className="text-xs lg:text-lg font-medium lg:font-semibold text-tertiary flex gap-0.5">
            <FaBangladeshiTakaSign /> {discount_price.toFixed(2)}
          </p>
          <p className="text-xs lg:text-sm line-through text-gray-500 flex gap-0.5">
            <FaBangladeshiTakaSign size={10} />
            {main_price.toFixed(2)}
          </p>
        </div>
      </div>
      {/* button section */}
      <div className="flex items-center gap-2 justify-between">
        {/* view details button */}
        <button className="w-full bg-secondary text-primary text-[10px] xl:text-sm font-medium  py-1.5 rounded-lg hover:bg-secondary/90 transition cursor-pointer">
          View Details
        </button>

        {/* cart button */}
        <button className="w-full bg-tertiary text-primary text-[10px]  xl:text-sm font-medium py-1.5 rounded-lg hover:bg-tertiary/90 transition cursor-pointer">
          Add to Cart
        </button>
      </div>
    </section>
  );
};

export default ProductCard;
