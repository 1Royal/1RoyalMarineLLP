import React from "react";

import { assets } from "../assets/assets";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import Para from "../components/para";

const About = () => {
  return (
    <div>
      <div className="flex flex-col sm:flex-row border border-gray-400 ">
        {/* Hero left side */}
        <div className="w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0 ">
          <div className="text-[#414141]">
            <div className="flex items-center gap-2">
              <p className="w-8 md:w-11 h-[2px] bg-[#414141]"></p>
              <p className="font-medium text-sm md:text-base uppercase">
                Trusted Marine Equipment Suppliers
              </p>
            </div>
            <h1 className="text-3xl sm:py-3 lg:text-5xl leading-relaxed uppercase">
              about us
            </h1>
            <div className="flex items-center gap-2">
              <p className="font-semibold text-sm md:text-base uppercase">
                Heritage in Marine Recycling
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
            <SwiperSlide>
              <img
                loading="eager"
                className="w-full h-full"
                src={assets.ship_1}
                alt=""
              />
            </SwiperSlide>

            <SwiperSlide>
              <img
                loading="eager"
                className="w-full h-full"
                src={assets.ship_2}
                alt=""
              />
            </SwiperSlide>

            <SwiperSlide>
              <img
                loading="eager"
                className="w-full h-full"
                src={assets.ship_3}
                alt=""
              />
            </SwiperSlide>

            <SwiperSlide>
              <img
                loading="eager"
                className="w-full h-full"
                src={assets.ship_4}
                alt=""
              />
            </SwiperSlide>
          </Swiper>
          {/* <img className="w-full sm:w-1/2 " src={assets.hero_img} alt="" /> */}
        </div>
      </div>

      {/* Introduction */}
      <Para
        heading={"About Us"}
        text={`Welcome to 1Royal Marine LLP, a
          pioneering ecommerce company that's redefining the way we source and
          sell products. Our mission is to provide high-quality, unique products
          while promoting sustainability and reducing waste. We achieve this by
          salvaging valuable materials from breaking ships, giving new life to
          items that would otherwise end up in landfills`}
      />

      {/* Our Story */}
      <Para
        heading={"Our Story"}
        text={`Our journey began with a passion for the marine industry and a desire
          to make a positive impact on the environment. Our team of experts,
          with years of experience in the field, came together to create a
          platform that would not only provide customers with unique products
          but also contribute to a more sustainable future. Since our inception,
          we've grown rapidly, and we're proud to have established ourselves as
          a trusted and reliable supplier of salvaged goods.`}
      />

      {/* Our Products */}
      <Para
        heading={"Our Products"}
        text={`At 1Royal Marine LLP, we offer
          a wide range of products salvaged from breaking ships, including
          pumps, tapes, and more. Our products are not only cost-effective but
          also eco-friendly, reducing the demand for new, resource-intensive
          materials. We take pride in our quality control process, ensuring that
          every product meets our high standards before it reaches our
          customers.`}
      />

      {/* Our Process */}
      <Para
        heading={"Our Process"}
        text={`Our team of experts works closely with shipbreaking yards to identify
          and salvage valuable materials. We then refurbish and test each
          product to ensure it meets our high standards. We're committed to
          compliance with industry standards and regulations, ensuring that our
          products are not only sustainable but also safe and reliable.`}
      />

      {/* Why Choose Us */}
      <Para
        heading={"Why Choose Us"}
        text={`By choosing 1Royal Marine LLP,
          you're not only getting high-quality products at competitive prices,
          but you're also contributing to a more sustainable future. We offer
          fast shipping, excellent customer service, and a unique shopping
          experience. Join the movement towards a more eco-friendly tomorrow,
          and shop with us today!`}
      />

      {/* Testimonials */}
    </div>
  );
};

export default About;
