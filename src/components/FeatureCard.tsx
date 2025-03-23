import React from "react";
import Image from "next/image";
import AppButton from "./fields/AppButton";

const FeatureCard = () => {
  return (
    <div className="bg-[#F6FAF3] pt-10 pl-10 rounded-2xl max-w-[1200px] mx-auto w-[90%]">
      <div className="flex items-center justify-between">
        <div className="w-1/2 space-y-8">
          <p className="text-tertiary text-lg font-medium">Market Prediction</p>
          <h2 className="text-primary text-5xl font-semibold leading-14">
            Use AI insights for smarter business decisions and stay competitive.
          </h2>
          <AppButton
            placeholder="Learn More"
            className="bg-tabColor text-white py-3 px-6"
          />
        </div>
        <div>
          <Image
            src="/features/prediction.png"
            alt="feature-card"
            width={1000}
            height={1000}
            className="w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
