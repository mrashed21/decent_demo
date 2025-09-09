"use client";

import ProductCard from "@/components/Reusable/ProductCard/ProductCard";
import { Product } from "@/types/productTypes";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

interface ProductSliderProps {
  product: Product[];
}

const ProductSlider = ({ product }: ProductSliderProps) => {
  return (
    <section className="w-full mx-auto relative">
      <Swiper
        modules={[Navigation]}
        navigation={{
          prevEl: ".custom-prev",
          nextEl: ".custom-next",
        }}
        loop
        slidesPerView={1.2}
        slidesPerGroup={1}
        breakpoints={{
          320: { slidesPerView: 1.8, slidesPerGroup: 1, spaceBetween: 10 },
          768: { slidesPerView: 2.8, slidesPerGroup: 1, spaceBetween: 10 },
          1024: { slidesPerView: 4, slidesPerGroup: 1, spaceBetween: 20 },
          1280: { slidesPerView: 6, slidesPerGroup: 1, spaceBetween: 20 },
        }}
      >
        {product.map((item, i) => (
          <SwiperSlide key={i} className="h-full">
            <ProductCard product={item} />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation */}
      <div className="hidden lg:flex absolute lg:left-[5px] xl:left-[15px] -translate-x-full top-1/2 -translate-y-1/2 z-40">
        <button
          type="button"
          className="custom-prev flex items-center justify-center !w-8 !h-8 xl:!w-10 xl:!h-10 
             bg-secondary/30 text-primary hover:bg-secondary/50 
             rounded-full z-40 cursor-pointer"
        >
          <LuChevronLeft className="w-6 h-6" />
        </button>
      </div>

      <div className="hidden lg:flex absolute right-0 lg:right-[5px] xl:right-[15px] translate-x-full top-1/2 -translate-y-1/2 z-40">
        <button
          type="button"
          className="custom-next flex items-center justify-center !w-8 !h-8 xl:!w-10 xl:!h-10 
             bg-secondary/30 text-primary hover:bg-secondary/50 
             rounded-full z-40 cursor-pointer"
        >
          <LuChevronRight className="w-6 h-6" />
        </button>
      </div>
    </section>
  );
};

export default ProductSlider;
