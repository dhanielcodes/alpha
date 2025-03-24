"use client";
import React, { useEffect, useState } from "react";
import AppButton from "../fields/AppButton";
import { motion } from "framer-motion";

const HeroSection = () => {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 4500);
  }, []);
  return (
    <div className="max-w-main mx-auto w-[90%] py-10 pb-52 text-center space-y-10">
      <motion.p
        animate={{
          opacity: loading ? 0 : 1,
          transform: loading ? "translateY(10%)" : "translateY(0%)",
          type: "spring",
        }}
        className="text-secondarytwo font-bold"
      >
        Leverage on Automation
      </motion.p>
      <motion.h1
        animate={{
          opacity: loading ? 0 : 1,
          transform: loading ? "translateY(10%)" : "translateY(0%)",
          type: "spring",
        }}
        className="lg:text-8xl text-6xl lg:leading-24 leading-16 font-semibold text-white"
      >
        AI Models for <br /> Business Solutions
      </motion.h1>
      <motion.p
        animate={{
          opacity: loading ? 0 : 1,
          transform: loading ? "translateY(10%)" : "translateY(0%)",
          type: "spring",
        }}
        className="text-2xl leading-10 text-white"
      >
        Leverage the power of AI to automate, analyze, and optimize your
        workflows. Our <br /> specialized models are designed to fit different
        business needs
      </motion.p>
      <motion.div
        animate={{
          opacity: loading ? 0 : 1,
          transform: loading ? "translateY(10%)" : "translateY(0%)",
          type: "spring",
        }}
        className="flex justify-center items-center"
      >
        <AppButton placeholder="Get Started Now" className="w-fit rounded-lg" />
      </motion.div>
    </div>
  );
};

export default HeroSection;
