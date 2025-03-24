import React from "react";
import Image from "next/image";
import AppButton from "./fields/AppButton";

const FeatureCard = ({
  title,
  description,
  image,
}: {
  title: string;
  description: string;
  image: string;
}) => {
  return (
    <div className="bg-[#F6FAF3] pt-10 pl-10 rounded-2xl overflow-hidden">
      <div className="flex items-center justify-between">
        <div className="w-1/2 space-y-8">
          <p className="text-tertiary text-lg font-medium">{title}</p>
          <h2 className="text-primary text-5xl font-semibold leading-14">
            {description}
          </h2>
          <AppButton
            placeholder="Learn More"
            className="bg-tabColor text-white py-3 px-6"
          />
        </div>
        <div>
          <Image
            src={image}
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
