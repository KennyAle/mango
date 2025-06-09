'use client'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import { useState } from 'react';

const slides =  [
    {
        name: 'Irene String',
        img: 'https://placehold.jp/50x50.png',
        text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil, illo quasi! Consequatur quas repellendus dicta omnis, nam amet voluptatem tempore aperiam cum.'
    },
    {
        name: 'Jonas Kakaroto',
        img: 'https://placehold.jp/50x50.png',
        text: 'Consequatur quas repellendus dicta omnis, nam amet voluptatem tempore aperiam cum. Natus eligendi similique dolore iure accusamus, magnam assumenda.'
    },
    {
        name: 'Mizuki Kikicoco',
        img: 'https://placehold.jp/50x50.png',
        text: 'Natus eligendi similique dolore iure accusamus, magnam assumenda.Aliquam, pariatur cumque. Reprehenderit quos deleniti sequi!'
    },
    {
        name: 'Tomoya Shalala',
        img: 'https://placehold.jp/50x50.png',
        text: 'Aliquam, pariatur cumque. Reprehenderit quos deleniti sequi! Magnam assumenda lorem ipsum dolor sit amet consectetur adipisicing elit'
    },
    {
        name: 'Julia Brabrabra',
        img: 'https://placehold.jp/50x50.png',
        text: 'Magnam assumenda lorem ipsum dolor sit amet consectetur adipisicing elit.'
    },
    {
        name: 'Kenny Hehehe',
        img: 'https://placehold.jp/50x50.png',
        text: 'Magnam assumenda lorem ipsum dolor sit amet consectetur adipisicing elit.Aliquam, pariatur cumque. Reprehenderit quos deleniti sequi!'
    }
]


const ClientSlides = () => {
    const [slideIndex, setSlideIndex] = useState(0)

  return (
    <div className="w-full mb-10">
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={2}
        navigation
        pagination={{ clickable: true}}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
        onSlideChange={(swiper) => {
            setSlideIndex(swiper.realIndex)
        }}
      >
        { slides.map((slide, index) => (
            <SwiperSlide key={index}>
                <div className={`p-6 rounded-lg shadow-md h-50 flex flex-col items-center text-center gap-3 ${slideIndex === index ? "bg-black text-white":"bg-white text-black"}`}>
                    <img src={slide.img} alt={slide.name} className="rounded-full w-16 h-16"/>
                    <h1 className="font-semibold text-lg">{slide.name}</h1>
                    <p className="text-sm w-2/3">{slide.text}</p>
                </div>
            </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ClientSlides;
