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
    <div className="bg-[#F6FAF3] h-[500px] lg:pl-10  rounded-2xl overflow-hidden">
      <div className="flex lg:flex-row h-full flex-col items-center justify-between lg:space-x-6 ">
        <div className="lg:w-1/2 w-full space-y-4  lg:px-0 lg:pt-0 pt-6 px-6">
          <p className="text-tertiary text-lg font-medium">{title}</p>
          <h2 className="text-primary text-[2.6vw] xl:text-5xl font-semibold leading-[3vw] xl:leading-14">
            {description}
          </h2>
          <AppButton
            placeholder="Learn More"
            className="bg-tabColor text-white py-3 px-6"
          />
        </div>
        <Image
          src={image}
          alt="feature-card"
          width={1000}
          height={1000}
          className="lg:w-[50%] w-[100%] h-full lg:mt-12 mt-6 justify-self-end items-end object-cover rounded-none "
        />
      </div>
    </div>
  );
};

export default FeatureCard;
