"use client";
import Container from "@/components/Reusable/Container/Container";
import Link from "next/link";
import React from "react";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

type Brand = {
  id: number;
  name: string;
  logo: string;
};

const brands: Brand[] = [
  {
    id: 1,
    name: "Apple",
    logo: "https://dazzle.com.bd/_next/image?url=%2Fimages%2Fbrands%2Fapple.webp&w=1920&q=75",
  },
  {
    id: 2,
    name: "Samsung",
    logo: "https://dazzle.com.bd/_next/image?url=%2Fimages%2Fbrands%2Fsamsung.webp&w=1920&q=75",
  },
  {
    id: 3,
    name: "Google",
    logo: "https://dazzle.com.bd/_next/image?url=%2Fimages%2Fbrands%2Fgoogle.webp&w=1920&q=75",
  },
  {
    id: 4,
    name: "Motorola",
    logo: "https://dazzle.com.bd/_next/image?url=%2Fimages%2Fbrands%2Fmotorola.webp&w=1920&q=75",
  },
  {
    id: 5,
    name: "Bose",
    logo: "https://dazzle.com.bd/_next/image?url=%2Fimages%2Fbrands%2Fbose.webp&w=1920&q=75",
  },
  {
    id: 6,
    name: "JBL",
    logo: "https://dazzle.com.bd/_next/image?url=%2Fimages%2Fbrands%2Fjbl.webp&w=1920&q=75",
  },
  {
    id: 7,
    name: "Spigen",
    logo: "https://dazzle.com.bd/_next/image?url=%2Fimages%2Fbrands%2Fspigen.webp&w=1920&q=75",
  },
];

const Brands: React.FC = () => {
  return (
    <section className="bg-foreground my-5 lg:my-10">
      <Container>
        <section className="rounded-lg py-4 lg:py-8 w-full">
          {/* Header */}
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">Shop By Brands</h2>
            <Link
              href="/"
              className="text-xs lg:text-sm lg:font-medium text-tertiary border border-tertiary px-1.5 py-0.5 lg:px-3 lg:py-2 rounded-md"
            >
              SEE ALL
            </Link>
          </div>

          {/* Swiper Section */}
          <section className="w-full mx-auto relative">
            <Swiper
              modules={[Navigation]}
              navigation={{
                prevEl: ".custom-prev",
                nextEl: ".custom-next",
              }}
            //   loop
              slidesPerView={1.2}
              slidesPerGroup={1}
              breakpoints={{
                320: {
                  slidesPerView: 3,
                  slidesPerGroup: 1,
                  spaceBetween: 10,
                },
                768: {
                  slidesPerView: 6,
                  slidesPerGroup: 1,
                  spaceBetween: 10,
                },
                1024: {
                  slidesPerView: 6,
                  slidesPerGroup: 1,
                  spaceBetween: 20,
                },
                1280: {
                  slidesPerView: 7,
                  slidesPerGroup: 1,
                  spaceBetween: 20,
                },
              }}
            >
              {brands.map((brand) => (
                <SwiperSlide key={brand.id}>
                  <div className="flex items-center justify-center bg-white rounded-lg shadow p-4 hover:shadow-md transition cursor-pointer">
                    <img
                      src={brand.logo}
                      alt={brand.name}
                      className="h-10 object-contain"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Custom Navigation */}
            <div className="lg:hidden flex absolute left-0 top-1/2 -translate-y-1/2 z-40">
              <button
                type="button"
                className="custom-prev flex items-center justify-center !w-8 !h-8 xl:!w-10 xl:!h-10 
               bg-secondary/30 text-primary hover:bg-secondary/50 
               rounded-full z-40 cursor-pointer"
              >
                <LuChevronLeft className="w-6 h-6" />
              </button>
            </div>

            <div className="lg:hidden flex absolute right-0 top-1/2 -translate-y-1/2 z-40">
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
        </section>
      </Container>
    </section>
  );
};

export default Brands;
