"use client";
import Link from "next/link";
import React from "react";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import Container from "@/components/Reusable/Container/Container";
import "swiper/css";
import "swiper/css/navigation";

type Blog = {
  id: number;
  category: string;
  date: string;
  title: string;
  excerpt: string;
  image: string;
};

const blogs: Blog[] = [
  {
    id: 1,
    category: "TECHNOLOGY",
    date: "17 07, 2025",
    title: "iPhone 17 Pro Max Price in Bangladesh (Unofficial): Early",
    excerpt:
      "Looking for the iPhone 17 Pro Max price in Bangladesh (unofficial)? Discover expected pricing, specs, and early availability insights from Dazzle.",
    image:
      "https://dazzle.com.bd/_next/image?url=https%3A%2F%2Fdazzle.sgp1.cdn.digitaloceanspaces.com%2F49296%2Fiphone-16-pro-max-battery-mah.webp&w=1920&q=75",
  },
  {
    id: 2,
    category: "TECHNOLOGY",
    date: "18 07, 2025",
    title: "iPhone 17 Concept: Future of the iPhone Series Unveiled",
    excerpt:
      "Explore the iPhone 17 concept with leaks on design, features, and Apple’s future vision. Stay ahead with Dazzle, Bangladesh’s top Apple destination.",
    image:
      "https://dazzle.com.bd/_next/image?url=https%3A%2F%2Fdazzle.sgp1.cdn.digitaloceanspaces.com%2F49297%2Fsamsung-s24-ultra-unofficial-price-in-bangladesh.webp&w=1920&q=75",
  },
  {
    id: 3,
    category: "TECHNOLOGY",
    date: "18 07, 2025",
    title: "iPhone 17 Pro Camera Upgrades | What’s New in 2025?",
    excerpt:
      "Discover the iPhone 17 Pro camera upgrades, including new sensors, spatial video, and AI-powered photography.",
    image:
      "https://dazzle.com.bd/_next/image?url=https%3A%2F%2Fdazzle.sgp1.cdn.digitaloceanspaces.com%2F49298%2Fsamsung-s24-ultra-price-bangladesh.webp&w=1920&q=75",
  },
  {
    id: 4,
    category: "TECHNOLOGY",
    date: "17 07, 2025",
    title: "iPhone 17 Pro Max Price in Bangladesh (Unofficial): Early",
    excerpt:
      "Looking for the iPhone 17 Pro Max price in Bangladesh (unofficial)? Discover expected pricing, specs, and early availability insights from Dazzle.",
    image:
      "https://dazzle.com.bd/_next/image?url=https%3A%2F%2Fdazzle.sgp1.cdn.digitaloceanspaces.com%2F49505%2Fiphone-16-pro.webp&w=1920&q=75",
  },
  {
    id: 5,
    category: "TECHNOLOGY",
    date: "18 07, 2025",
    title: "iPhone 17 Concept: Future of the iPhone Series Unveiled",
    excerpt:
      "Explore the iPhone 17 concept with leaks on design, features, and Apple’s future vision. Stay ahead with Dazzle, Bangladesh’s top Apple destination.",
    image:
      "https://dazzle.com.bd/_next/image?url=https%3A%2F%2Fdazzle.sgp1.cdn.digitaloceanspaces.com%2F48253%2FUnofficial-price-of-iPhone-17-pro-max.webp&w=1920&q=75",
  },
  {
    id: 6,
    category: "TECHNOLOGY",
    date: "18 07, 2025",
    title: "iPhone 17 Pro Camera Upgrades | What’s New in 2025?",
    excerpt:
      "Discover the iPhone 17 Pro camera upgrades, including new sensors, spatial video, and AI-powered photography.",
    image:
      "https://dazzle.com.bd/_next/image?url=https%3A%2F%2Fdazzle.sgp1.cdn.digitaloceanspaces.com%2F48472%2Fiphone-17-concept.webp&w=1920&q=75",
  },
];

const Blogs: React.FC = () => {
  return (
    <section className=" py-8 lg:py-12">
      <Container >
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg lg:text-xl font-semibold">
            Latest Blog Posts
          </h2>
          <Link
            href="/blogs"
            className="text-xs lg:text-sm font-medium text-tertiary border border-tertiary px-2 py-1 lg:px-3 lg:py-2 rounded-md"
          >
            SEE ALL
          </Link>
        </div>

        {/* Swiper */}
        <div className="relative">
          <Swiper
            modules={[Navigation]}
            navigation={{
              prevEl: ".custom-prev",
              nextEl: ".custom-next",
            }}
            loop
            spaceBetween={20}
            breakpoints={{
              320: { slidesPerView: 1.1, spaceBetween: 12 },
              768: { slidesPerView: 2, spaceBetween: 16 },
              1024: { slidesPerView: 3, spaceBetween: 20 },
            }}
          >
            {blogs.map((blog) => (
              <SwiperSlide key={blog.id}>
                <div className="bg-primary rounded-lg shadow hover:shadow-md transition p-4 flex flex-col">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-48 object-cover rounded-md mb-3"
                  />
                  <div className="text-xs text-secondary/50 uppercase tracking-wide mb-1">
                    {blog.category} | {blog.date}
                  </div>
                  <h3 className="font-semibold text-base line-clamp-2 mb-2">
                    {blog.title}
                  </h3>
                  <p className="text-sm text-secondary/50 line-clamp-2 mb-3">
                    {blog.excerpt}
                  </p>
                  <Link
                    href={`/blogs/${blog.id}`}
                    className="mt-auto text-sm font-semibold text-secondary flex items-center gap-1 hover:underline"
                  >
                    SEE MORE <LuChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation */}
          <div className="flex absolute lg:left-[5px] xl:left-[15px] -translate-x-full top-1/2 -translate-y-1/2 z-40">
            <button
              type="button"
              className="custom-prev flex items-center justify-center !w-8 !h-8 xl:!w-10 xl:!h-10 
             bg-secondary/30 text-primary hover:bg-secondary/50 
             rounded-full z-40 cursor-pointer"
            >
              <LuChevronLeft className="w-6 h-6" />
            </button>
          </div>

          <div className="flex absolute right-0 lg:right-[5px] xl:right-[15px] translate-x-full top-1/2 -translate-y-1/2 z-40">
            <button
              type="button"
              className="custom-next flex items-center justify-center !w-8 !h-8 xl:!w-10 xl:!h-10 
             bg-secondary/30 text-primary hover:bg-secondary/50 
             rounded-full z-40 cursor-pointer"
            >
              <LuChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Blogs;
