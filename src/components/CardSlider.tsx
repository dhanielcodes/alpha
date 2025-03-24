"use client"; // If using Next.js App Router (Next 13+)

import { useEffect, useRef, useState } from "react";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SwiperCore from "swiper";
import FeatureCard from "./FeatureCard";
import BaseFilterTab from "./bits/BaseFilterTab";
import useScreenSize from "@/hooks/useScreenSize";

const CardSlider = () => {
  const swiperRef = useRef<SwiperCore | null>(null);
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const tabList = [
    { name: "Market Prediction", tab: "market" },
    { name: "Finance", tab: "finance" },
    { name: "Analytics", tab: "analytics" },
    { name: "Content Generation", tab: "content" },
    { name: "Customer Support", tab: "support" },
  ];

  const list = [
    {
      title: "Market Prediction",
      description:
        "Use AI insights for smarter business decisions and stay competitive.",
      image: "/features/prediction.png",
    },
    {
      title: "Finance",
      description:
        "Our AI models analyze financial data for confident investments.",
      image: "/features/finance.png",
    },
    {
      title: "Data Analytics",
      description:
        "Transform data into insights with AI analytics that enhance decisions.",
      image: "/features/finance.png",
    },
    {
      title: "Content Generation",
      description:
        "Create quality content easily with AI that knows your brand and audience.",
      image: "/features/content.png",
    },
    {
      title: "Customer Support",
      description:
        "Use AI chatbots for instant, personalized customer support.",
      image: "/features/customer.png",
    },
  ];

  const [active, setActive] = useState<string>("market");

  const { width } = useScreenSize();

  return (
    <div className="w-full mx-auto relative z-0">
      <div className="max-w-main w-[90%] mx-auto mb-10 hidden lg:block">
        <BaseFilterTab
          setActive={setActive}
          onTabClick={(idx: number) => {
            if (swiperRef.current) {
              swiperRef.current.slideToLoop(idx);
            }
          }}
          active={active}
          tab={tabList}
        />
      </div>

      <Swiper
        modules={[Navigation, Autoplay]}
        slidesPerView={"auto"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
          swiper.slideToLoop(0);
        }}
        onSlideChange={(swiper) => {
          setActive(tabList[swiper.realIndex].tab);
          setActiveIndex(swiper.realIndex);
        }}
        className="w-full overflow-x-hidden overflow-y-visible"
        spaceBetween={50}
        speed={1200}
      >
        {list.map((item, index) => (
          <SwiperSlide
            key={index}
            style={{
              width: width > 1300 ? "1100px" : "70%",
              height: "800px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                transition: "all 0.5s",
                transform:
                  activeIndex === index ? `translateY(-20%)` : `translateY(0%)`,
              }}
            >
              <FeatureCard
                title={item.title}
                description={item.description}
                image={item.image}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CardSlider;
