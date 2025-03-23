"use client"; // If using Next.js App Router (Next 13+)

import { useRef, useState } from "react";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import SwiperCore from "swiper";
import FeatureCard from "./FeatureCard";

const CardSlider = () => {
  const swiperRef = useRef<SwiperCore | null>(null);

  return (
    <div className="w-full mx-auto relative z-0">
      <Swiper
        modules={[Navigation, Autoplay]}
        slidesPerView={1}
        grabCursor={true}
        spaceBetween={10}
        loop
        onSwiper={(swiper) => (swiperRef.current = swiper)} // Store instance
        /*  style={{
          width: width / 4.2 + "px",
        }} */
      >
        <SwiperSlide>
          <FeatureCard />
        </SwiperSlide>
        <SwiperSlide>
          <FeatureCard />
        </SwiperSlide>
        <SwiperSlide>
          <FeatureCard />
        </SwiperSlide>
        <SwiperSlide>
          <FeatureCard />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default CardSlider;
