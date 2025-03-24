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
            <span className="text-5xl text-black font-semibold text-center">
              AI Models tailored for your <br /> business needs
            </span>
          }
          description={
            <span className="text-tertiary text-2xl text-center font-medium my-2">
              {" "}
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
