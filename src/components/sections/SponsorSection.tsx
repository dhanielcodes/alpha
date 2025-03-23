import React from "react";
import Image from "next/image";

const SponsorSection: React.FC = () => {
  return (
    <div className=" max-w-main mx-auto justify-between my-10 lg:space-x-24 lg:space-y-0 space-y-10">
      <p className="text-tertiary text-lg text-center font-medium my-2">
        Join 4,000+ companies already growing
      </p>
      <div className="w-full flex justify-between items-center">
        <Image
          alt="sponsor"
          width={150}
          height={150}
          src="/sponsors/layers.png"
        />
        <Image
          alt="sponsor"
          width={150}
          height={150}
          src="/sponsors/sisyphus.png"
        />{" "}
        <Image
          alt="sponsor"
          width={150}
          height={150}
          src="/sponsors/circooles.png"
        />
        <Image
          alt="sponsor"
          width={150}
          height={150}
          src="/sponsors/catalog.png"
        />
        <Image
          alt="sponsor"
          width={150}
          height={150}
          src="/sponsors/quotie.png"
        />
      </div>
    </div>
  );
};

export default SponsorSection;
