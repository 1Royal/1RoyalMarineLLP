import React, { useRef, useState } from "react";

import { assets } from "../assets/assets";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Hero = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  return (
    <div className="flex flex-col sm:flex-row border border-gray-400 ">
      {/* Hero left side */}
      <div className="w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0 ">
        <div className="text-[#414141]">
          <div className="flex items-center gap-2">
            <p className="w-8 md:w-11 h-[2px] bg-[#414141]"></p>
            <p className="font-medium text-sm md:text-base uppercase">
              OUR PRODUCTS
            </p>
          </div>
          <h1 className="text-3xl sm:py-3 lg:text-5xl leading-relaxed uppercase">
            Latest Arrival
          </h1>
          <div className="flex items-center gap-2">
            <p className="font-semibold text-sm md:text-base uppercase">
              Shop Now
            </p>
            <p className="w-8 md:w-11 h-[2px] bg-[#414141]"></p>
          </div>
        </div>
      </div>

      {/* Hero right side */}
      <div className="w-full sm:w-1/2 h-full">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide className="flex items-center justify-center">
            <img className="w-full " src={assets.h_1} alt="" />
          </SwiperSlide>

          <SwiperSlide className="flex items-center justify-center">
            <img className="w-full" src={assets.h_2} alt="" />
          </SwiperSlide>

          <SwiperSlide className="flex items-center justify-center">
            <img className="w-full " src={assets.h_3} alt="" />
          </SwiperSlide>

          <SwiperSlide className="flex items-center justify-center">
            <img className="w-full" src={assets.h_4} alt="" />
          </SwiperSlide>

          <SwiperSlide className="flex items-center justify-center">
            <img className="w-full" src={assets.h_5} alt="" />
          </SwiperSlide>

          <SwiperSlide className="flex items-center justify-center">
            <img className="w-full" src={assets.h_6} alt="" />
          </SwiperSlide>

          <SwiperSlide className="flex items-center justify-center">
            <img className="w-full" src={assets.h_7} alt="" />
          </SwiperSlide>

          <SwiperSlide className="flex items-center justify-center">
            <img className="w-full" src={assets.h_8} alt="" />
          </SwiperSlide>
        </Swiper>
        {/* <img className="w-full sm:w-1/2 " src={assets.hero_img} alt="" /> */}
      </div>
    </div>
  );
};

export default Hero;
