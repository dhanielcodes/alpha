import React from "react";
import { motion } from "framer-motion";

interface SectionHeaderProps {
  title: string | React.ReactNode;
  description: string | React.ReactNode;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  description,
}) => {
  return (
    <div className="space-y-4">
      <motion.h2
        initial={{ transform: "translateY(20%)", opacity: 0 }}
        whileInView={{ transform: "translateY(0%)", opacity: 1 }}
        transition={{
          type: "spring",
          bounce: 0.2,
          duration: 0.8,
          delay: 0.2,
        }}
        className="text-4xl lg:text-6xl text-black font-semibold text-center"
      >
        {title}
      </motion.h2>
      <motion.p
        initial={{ transform: "translateY(20%)", opacity: 0 }}
        whileInView={{ transform: "translateY(0%)", opacity: 1 }}
        transition={{
          type: "spring",
          bounce: 0.2,
          duration: 0.8,
          delay: 0.2,
        }}
        className="text-tertiary text-base lg:text-2xl text-center font-medium my-2"
      >
        {description}
      </motion.p>
    </div>
  );
};

export default SectionHeader;
