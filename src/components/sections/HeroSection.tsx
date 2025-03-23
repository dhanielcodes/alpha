import React from "react";
import AppButton from "../fields/AppButton";

const HeroSection = () => {
  return (
    <div className="max-w-main mx-auto w-[90%] py-10 pb-52 text-center space-y-10">
      <p className="text-secondarytwo font-bold">Leverage on Automation</p>
      <h1 className="text-7xl leading-20 font-semibold text-white">
        AI Models for <br /> Business Solutions
      </h1>
      <p className="text-2xl leading-10 text-white">
        Leverage the power of AI to automate, analyze, and optimize your
        workflows. Our <br /> specialized models are designed to fit different
        business needs
      </p>
      <div className="flex justify-center items-center">
        <AppButton placeholder="Get Started Now" className="w-fit rounded-lg" />
      </div>
    </div>
  );
};

export default HeroSection;
