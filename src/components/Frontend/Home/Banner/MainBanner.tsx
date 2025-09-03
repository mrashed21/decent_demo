"use client";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const MainBanner = () => {
  const slides = [
    {
      id: 1,
      img: "https://dazzle.sgp1.cdn.digitaloceanspaces.com/54736/honor.jpg",
    },
    {
      id: 2,
      img: "https://dazzle.sgp1.cdn.digitaloceanspaces.com/54748/IPHONE-16-series.jpg",
    },
    {
      id: 3,
      img: "https://dazzle.sgp1.cdn.digitaloceanspaces.com/54748/IPHONE-16-series.jpg",
    },
  ];

  return (
    <div className="w-full mx-auto relative">
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation={{
          prevEl: ".swiper-button-prev",
          nextEl: ".swiper-button-next",
        }}
        autoplay={{ delay: 4000 }}
        loop
        className="rounded-xl lg:rounded-2xl overflow-hidden shadow-lg"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="w-full h-[250px] sm:h-[300px] md:h-[420px] lg:h-[480px]">
              <img
                src={slide.img}
                alt={`Slide ${slide.id}`}
                className="w-full h-full object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation */}
      <div className="hidden lg:flex absolute lg:left-[5px] -translate-x-full top-1/2 -translate-y-1/2 z-40  ">
        <div className="swiper-button-prev !w-8 !h-8 xl:!w-10 xl:!h-10 after:!text-sm lg:after:!text-xl font-extrabold bg-primary/30 rounded-full p-2 after:!text-primary" />
      </div>
      <div className="hidden lg:flex absolute right-0 lg:right-[5px] translate-x-full top-1/2 -translate-y-1/2 z-40">
        <div className="swiper-button-next !w-8 !h-8 xl:!w-10 xl:!h-10 after:!text-sm lg:after:!text-xl font-extrabold bg-primary/30 rounded-full p-2 after:!text-primary" />
      </div>
    </div>
  );
};

export default MainBanner;
