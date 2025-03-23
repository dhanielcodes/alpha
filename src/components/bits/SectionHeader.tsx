import React from "react";

interface SectionHeaderProps {
  title: string | React.ReactNode;
  description: string | React.ReactNode;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  description,
}) => {
  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      <h2 className="text-5xl font-semibold text-center">{title}</h2>
      <p className="text-tertiary text-2xl text-center font-medium my-2">
        {description}
      </p>
    </div>
  );
};

export default SectionHeader;
