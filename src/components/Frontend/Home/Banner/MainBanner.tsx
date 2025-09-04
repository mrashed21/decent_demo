"use client";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const MainBanner = () => {
  const slides = [
    {
      id: 1,
      img: "https://i.ibb.co.com/NdR4fX6P/photo-1575909812264-6902b55846ad-w-500-auto-format-fit-crop-q-60-ixlib-rb-4-1.jpg",
    },
    {
      id: 2,
      img: "https://i.ibb.co.com/Cp2f6QZn/photo-1513530534585-c7b1394c6d51-w-500-auto-format-fit-crop-q-60-ixlib-rb-4-1.jpg",
    },
    {
      id: 3,
      img: "https://i.ibb.co.com/J0vN05P/photo-1519389950473-47ba0277781c-w-500-auto-format-fit-crop-q-60-ixlib-rb-4-1.jpg",
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
                className="w-full h-full "
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
