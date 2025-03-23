"use client";
import React, { useState } from "react";
import SectionHeader from "../bits/SectionHeader";
import BaseFilterTab from "../bits/BaseFilterTab";
import FeatureCard from "../FeatureCard";
import CardSlider from "../Swiper";

const FeaturesSection: React.FC = () => {
  const [active, setActive] = useState<string>("market");
  const tabList = [
    { name: "Market Prediction", tab: "market" },
    { name: "Finance", tab: "finance" },
    { name: "Analytics", tab: "analytics" },
    { name: "Content Generation", tab: "content" },
    { name: "Customer Support", tab: "support" },
  ];
  return (
    <div>
      <div className="max-w-main w-[90%] mx-auto">
        <SectionHeader
          title={
            <span>
              AI Models tailored for your <br /> business needs
            </span>
          }
          description={
            <span>
              Leverage the power of AI to automate, analyze, and optimize your
              workflows. Our <br /> specialized models are designed to fit
              different business needs
            </span>
          }
        />
        <br />
        <BaseFilterTab setActive={setActive} active={active} tab={tabList} />
      </div>
      <br />
      <br />
      <CardSlider />
    </div>
  );
};

export default FeaturesSection;
