"use client";
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper as SwiperType } from "swiper";
import { BiLeftArrowCircle, BiRightArrowCircle } from "react-icons/bi";

const HeroSlider = () => {
  const [swiperRef, setSwiperRef] = useState<SwiperType | null>(null);
  const [isMounted, setIsMounted] = useState(false); 

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null; 

  return (
    <div className="w-full max-w-screen md:h-80 px-6 md:px-10 lg:px-0 lg:max-w-75 mx-auto">
      <Swiper
        onSwiper={setSwiperRef}
        loop={true}
        pagination={{ clickable: true, el: ".custom-pagination" }}
        modules={[Navigation, Pagination]}
        breakpoints={{
          0: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
        }}
      >
        {Array.from({ length: 4 }).map((_, i) => (
          <SwiperSlide key={i}>
            <div className="bg-blue-400 text-white flex items-center justify-center aspect-[3/4] rounded">
              Slide {i + 1}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="flex items-center justify-between gap-4 mt-4">
        <button
          onClick={() => swiperRef?.slidePrev()}
          className="flex items-center gap-2 dark:text-white"
        >
          <BiLeftArrowCircle className="text-2xl" />
          <span className="text-xs text-neutral-500 font-semibold uppercase">
            prev
          </span>
        </button>

        <div className="custom-pagination flex justify-center gap-3 flex-1" />

        <button
          onClick={() => swiperRef?.slideNext()}
          className="flex items-center gap-2 dark:text-white"
        >
          <span className="text-xs text-neutral-500 font-semibold uppercase">
            next
          </span>
          <BiRightArrowCircle className="text-2xl" />
        </button>
      </div>
    </div>
  );
};

export default HeroSlider;
