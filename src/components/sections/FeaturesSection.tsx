"use client";
import React, { useState } from "react";
import SectionHeader from "../bits/SectionHeader";
import CardSlider from "../CardSlider";

const FeaturesSection: React.FC = () => {
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
      </div>

      <CardSlider />
    </div>
  );
};

export default FeaturesSection;
