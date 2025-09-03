"use client";

import ProductCard from "@/components/Reusable/ProductCard/ProductCard";
import { products } from "@/data/ProductData";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export interface Product {
  name: string;
  main_price: number;
  discount_price: number;
  image: string[];
  discount_percent: number;
  tag: string;
  category: string;
}

const BestDealProducts = () => {
  return (
    <section className="w-full mx-auto relative">
      <Swiper
        modules={[Navigation]}
        navigation={{
          prevEl: ".custom-prev",
          nextEl: ".custom-next",
        }}
        loop
        // spaceBetween={20}
        // speed={300}
        slidesPerView={1.2}
        slidesPerGroup={1}
        breakpoints={{
          320: { slidesPerView: 1.8, slidesPerGroup: 1, spaceBetween: 10 },
          768: { slidesPerView: 2.8, slidesPerGroup: 1, spaceBetween: 10 },
          1024: { slidesPerView: 4, slidesPerGroup: 1, spaceBetween: 20 },
          1280: { slidesPerView: 6, slidesPerGroup: 1, spaceBetween: 20 },
        }}
      >
        {products.map((product: Product, i: number) => (
          <SwiperSlide key={i} className="h-full">
            <ProductCard product={product} />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation */}
      <button
        type="button"
        className="custom-prev hidden lg:flex absolute -left-10 top-1/2 -translate-y-1/2 z-40 bg-secondary/30 text-primary rounded-full p-2 hover:bg-secondary/50 transition cursor-pointer"
      >
        <LuChevronLeft className="w-6 h-6 " />
      </button>

      <button
        type="button"
        className="custom-next hidden lg:flex absolute -right-10 top-1/2 -translate-y-1/2 z-40 bg-secondary/30 text-primary rounded-full p-2 hover:bg-secondary/50 transition cursor-pointer"
      >
        <LuChevronRight className="w-6 h-6" />
      </button>
    </section>
  );
};

export default BestDealProducts;
